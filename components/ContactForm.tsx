
"use client";

import { FormEvent, useState } from "react";

type Enquiry = {
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
};

const initialEnquiry: Enquiry = {
  projectType: "",
  description: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
};

const projectTypes = [
  "Business website",
  "E-commerce website",
  "Web application",
  "Mobile application",
  "UI / UX design",
  "Custom software",
  "Something else",
];

const budgets = [
  "Under $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000+",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "Within 2–3 months",
  "More than 3 months",
  "I'm flexible",
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [enquiry, setEnquiry] = useState<Enquiry>(initialEnquiry);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof Enquiry, value: string) {
    setEnquiry((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function nextStep() {
    if (step === 0) {
      if (!enquiry.projectType) {
        setError("Please choose the type of project you have in mind.");
        return;
      }

      if (enquiry.description.trim().length < 15) {
        setError("Please tell us a little more about your project (at least 15 characters).");
        return;
      }
    }

    if (step === 1) {
      if (!enquiry.budget) {
        setError("Please select a budget range, or choose Not sure yet.");
        return;
      }

      if (!enquiry.timeline) {
        setError("Please select a preferred timeline.");
        return;
      }
    }

    setError("");
    setStep((current) => Math.min(current + 1, 2));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!enquiry.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't submit your enquiry. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✓</div>
        <span className="eyebrow">ENQUIRY RECEIVED</span>
        <h3>Thank you, {enquiry.name.split(" ")[0]}.</h3>
        <p>
          Your project enquiry has been submitted. We now have the
          information you shared and can use it to understand your idea.
        </p>
        <button
          type="button"
          className="button-outline"
          onClick={() => {
            setEnquiry(initialEnquiry);
            setStep(0);
            setSubmitted(false);
            setError("");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-progress">
        {[0, 1, 2].map((item) => (
          <div
            className={`form-progress-step ${step >= item ? "active" : ""}`}
            key={item}
          >
            <span>0{item + 1}</span>
            <div />
          </div>
        ))}
      </div>

      <div className="form-step-label">
        <span>STEP 0{step + 1} OF 03</span>
        <span>
          {step === 0
            ? "THE PROJECT"
            : step === 1
              ? "THE PLAN"
              : "YOUR DETAILS"}
        </span>
      </div>

      {step === 0 && (
        <div className="form-step">
          <h3>What are we creating?</h3>
          <p className="form-step-description">
            Choose the type of project that best describes your idea.
          </p>

          <div className="project-type-grid">
            {projectTypes.map((type) => (
              <button
                type="button"
                key={type}
                className={`project-type-option ${
                  enquiry.projectType === type ? "selected" : ""
                }`}
                onClick={() => updateField("projectType", type)}
              >
                <span>{type}</span>
                <span className="option-indicator">
                  {enquiry.projectType === type ? "✓" : "+"}
                </span>
              </button>
            ))}
          </div>

          <label className="form-field">
            <span>Tell us about your idea</span>
            <textarea
              value={enquiry.description}
              onChange={(event) =>
                updateField("description", event.target.value)
              }
              placeholder="What would you like to build? What should it do? Who is it for?"
              rows={5}
              maxLength={3000}
              required
            />
            <span className="form-character-count">
              {enquiry.description.length} / 3000
            </span>
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="form-step">
          <h3>Let's talk about the plan.</h3>
          <p className="form-step-description">
            These details help us understand the scale and timing of
            your project. They're not a commitment.
          </p>

          <label className="form-field">
            <span>What's your estimated budget?</span>
            <select
              value={enquiry.budget}
              onChange={(event) =>
                updateField("budget", event.target.value)
              }
              required
            >
              <option value="">Choose a budget range</option>
              {budgets.map((budget) => (
                <option value={budget} key={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>When would you like to start?</span>
            <select
              value={enquiry.timeline}
              onChange={(event) =>
                updateField("timeline", event.target.value)
              }
              required
            >
              <option value="">Choose a preferred timeline</option>
              {timelines.map((timeline) => (
                <option value={timeline} key={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h3>How can we reach you?</h3>
          <p className="form-step-description">
            Leave your details so we know where to respond.
          </p>

          <label className="form-field">
            <span>Your name</span>
            <input
              type="text"
              value={enquiry.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your full name"
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>

          <label className="form-field">
            <span>Email address</span>
            <input
              type="email"
              value={enquiry.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>

          <label className="form-field">
            <span>Business or organisation <em>OPTIONAL</em></span>
            <input
              type="text"
              value={enquiry.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder="Your business name"
              autoComplete="organization"
              maxLength={150}
            />
          </label>

          <p className="form-privacy-note">
            Your details will only be used to respond to this project
            enquiry.
          </p>
        </div>
      )}

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-navigation">
        {step > 0 ? (
          <button
            type="button"
            className="form-back-button"
            onClick={previousStep}
            disabled={sending}
          >
             Back
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            className="button-primary"
            onClick={nextStep}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="button-primary"
            disabled={sending}
          >
            {sending ? "Submitting..." : "Submit enquiry"}
            
          </button>
        )}
      </div>
    </form>
  );
}
