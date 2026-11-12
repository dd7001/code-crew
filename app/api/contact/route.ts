
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { name, email, company, service, timeline, message } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !service?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Code Crew <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: `
New Code Crew project enquiry

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}
Timeline: ${timeline || "Not specified"}

Project description:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry right now." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
