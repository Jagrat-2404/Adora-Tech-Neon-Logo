import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const {
      name = "",
      email = "",
      company = "",
      projectType = "Website",
      message = "",
      honeypot = "",
    } = body;

    // 1. Honeypot check to block automated bot submissions
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    const allowedTypes = ["Website", "Mobile App", "Custom Software", "Other"];
    if (!allowedTypes.includes(projectType)) {
      errors.projectType = "Please select a valid project type.";
    }

    if (!message.trim() || message.trim().length < 10) {
      errors.message = "Please include some details about your project (at least 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 422 }
      );
    }

    // 3. Honest delivery provider check
    // Check if real dispatch credentials (e.g. Resend, Sendgrid, or SMTP) are configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactTargetEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

    if (!resendApiKey || !contactTargetEmail) {
      // In accordance with honesty guidelines:
      // Never report simulated success as confirmed live dispatch.
      return NextResponse.json(
        {
          success: false,
          deliveryConfigured: false,
          message:
            "Live email delivery service is currently not configured in this environment (RESEND_API_KEY and CONTACT_NOTIFICATION_EMAIL required in .env.local). All form fields passed validation.",
          validatedData: {
            name: name.trim(),
            email: email.trim(),
            company: company.trim() || undefined,
            projectType,
            messageLength: message.trim().length,
          },
        },
        { status: 200 }
      );
    }

    // 4. If credentials ARE present, perform live dispatch via Resend API
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ADORA TECH Enquiries <onboarding@resend.dev>",
          to: [contactTargetEmail],
          reply_to: email.trim(),
          subject: `New Project Enquiry: ${projectType} from ${name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company.trim() || "N/A"}\nProject Type: ${projectType}\n\nProject Details:\n${message.trim()}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return NextResponse.json(
          {
            success: false,
            deliveryConfigured: true,
            error: "Email provider rejected delivery.",
            details: errorData,
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          deliveryConfigured: true,
          message: "Thank you. Your enquiry has been delivered successfully.",
        },
        { status: 200 }
      );
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown dispatch failure";
      return NextResponse.json(
        {
          success: false,
          deliveryConfigured: true,
          error: "Failed to dispatch email to delivery service.",
          details: errorMessage,
        },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error parsing request." },
      { status: 500 }
    );
  }
}
