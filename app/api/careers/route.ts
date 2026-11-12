
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOpportunities = [
  { id: "frontend-developer", title: "Frontend Developer", type: "Paid position" },
  { id: "backend-developer", title: "Backend Developer", type: "Paid position" },
  { id: "full-stack-developer", title: "Full-Stack Developer", type: "Paid position" },
  { id: "ui-ux-designer", title: "UI/UX Designer", type: "Paid position" },
  { id: "ai-engineer", title: "AI Engineer", type: "Paid position" },
  { id: "cybersecurity-analyst", title: "Cybersecurity Analyst", type: "Paid position" },
  { id: "computer-engineer", title: "Computer Engineer", type: "Paid position" },
  { id: "web-development-intern", title: "Web Development Intern", type: "Internship" },
  { id: "software-engineering-intern", title: "Software Engineering Intern", type: "Internship" },
  { id: "design-intern", title: "UI/UX Design Intern", type: "Internship" },
  { id: "cybersecurity-intern", title: "Cybersecurity Intern", type: "Internship" },
  { id: "ai-automation-intern", title: "AI & Automation Intern", type: "Internship" },
  { id: "computer-engineering-intern", title: "Computer Engineering Intern", type: "Internship" },
];

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "The application email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const fullName = clean(body.fullName, 120);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 30);
    const location = clean(body.location, 120);
    const applicationType = clean(body.applicationType, 40);
    const opportunityId = clean(body.opportunityId, 100);
    const education = clean(body.education, 250);
    const skills = clean(body.skills, 3000);
    const experience = clean(body.experience, 4000);
    const portfolio = clean(body.portfolio, 500);
    const motivation = clean(body.motivation, 5000);

    if (
      !fullName ||
      !email ||
      !phone ||
      !location ||
      !applicationType ||
      !opportunityId ||
      !skills ||
      !experience ||
      !motivation
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const opportunity = allowedOpportunities.find(
      (item) =>
        item.id === opportunityId &&
        item.type === applicationType
    );

    if (!opportunity) {
      return NextResponse.json(
        { error: "Please select a valid opportunity." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (portfolio) {
      try {
        const url = new URL(portfolio);

        if (!["http:", "https:"].includes(url.protocol)) {
          throw new Error("Invalid URL");
        }
      } catch {
        return NextResponse.json(
          { error: "Please provide a valid portfolio URL." },
          { status: 400 }
        );
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Code Crew Careers <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `${applicationType} application: ${opportunity.title}`,
      text: `
NEW CODE CREW APPLICATION

APPLICATION CATEGORY
${applicationType}

OPPORTUNITY
${opportunity.title}

WORK ARRANGEMENT
100% Fully Remote

APPLICANT DETAILS

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Location: ${location}

QUALIFICATIONS AND EXPERIENCE

Education / qualifications:
${education || "Not provided"}

Skills and technologies:
${skills}

Relevant experience:
${experience}

Portfolio / GitHub / LinkedIn:
${portfolio || "Not provided"}

WHY THEY WANT TO JOIN CODE CREW

${motivation}

--------------------------------
Submitted through the Code Crew Careers portal.
      `,
    });

    if (error) {
      console.error("Careers email error:", error);

      return NextResponse.json(
        { error: "Unable to submit your application right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Careers API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
