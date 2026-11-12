
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  "Website development",
  "Web applications",
  "Mobile applications",
  "UI / UX design",
  "Custom software",
  "Something else",
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
  });

  const updateForm = (field: string, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  };

  const nextStep = () => {
    if (step === 1) {
      if (!form.name.trim()) {
        setError("Please enter your name.");
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    if (step === 2 && !form.service) {
      setError("Please select a service.");
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.message.trim()) {
      setError("Please tell us a little about your project.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't send your enquiry. Please try again."
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
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="page-hero contact-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">CONTACT / START A PROJECT</span>

            <h1>
              Have something
              <br />
              in <span className="accent-text">mind?</span>
            </h1>

            <p>
              Every great project starts with a conversation.
              Tell us what you're thinking and let's explore
              what we can build together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-layout">
          <Reveal>
            <div className="contact-details">
              <span className="eyebrow">LET'S CONNECT</span>

              <h2>
                Good ideas
                <br />
                start here.
              </h2>

              <p>
                Whether you have a detailed brief or just the
                beginning of an idea, we'd like to hear about it.
              </p>

              <div className="contact-detail-item">
                <span>EMAIL</span>
                <p>officialcodecrewdev@gmail.com</p>
              </div>

              <div className="contact-detail-item">
                <span>LOCATION</span>
                <p>Working with ideas everywhere.</p>
              </div>

              <div className="contact-detail-item">
                <span>WHAT WE DO</span>
                <p>Design · Development · Digital Engineering</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="contact-form-wrapper">
              {!submitted ? (
                <>
                  <div className="contact-form-heading">
                    <div>
                      <span className="eyebrow">PROJECT ENQUIRY</span>
                      <h2>Tell us about it.</h2>
                    </div>

                    <span className="form-step-number">
                      0{step} / 03
                    </span>
                  </div>

                  <div className="form-progress">
                    <span
                      style={{
                        width: `${(step / 3) * 100}%`,
                      }}
                    />
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {step === 1 && (
                      <div className="form-step">
                        <h3>First, who are we speaking with?</h3>
                        <p>Let's get to know you.</p>

                        <label className="form-field">
                          <span>Your name *</span>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(event) =>
                              updateForm("name", event.target.value)
                            }
                            placeholder="Your full name"
                            autoComplete="name"
                          />
                        </label>

                        <label className="form-field">
                          <span>Email address *</span>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(event) =>
                              updateForm("email", event.target.value)
                            }
                            placeholder="you@example.com"
                            autoComplete="email"
                          />
                        </label>

                        <label className="form-field">
                          <span>Company / organisation</span>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(event) =>
                              updateForm("company", event.target.value)
                            }
                            placeholder="Your company name (optional)"
                            autoComplete="organization"
                          />
                        </label>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="form-step">
                        <h3>What are you looking to build?</h3>
                        <p>
                          Choose the service that best describes
                          your idea.
                        </p>

                        <div className="service-options">
                          {services.map((service) => (
                            <button
                              type="button"
                              key={service}
                              className={`service-option ${
                                form.service === service ? "selected" : ""
                              }`}
                              aria-pressed={form.service === service}
                              onClick={() =>
                                updateForm("service", service)
                              }
                            >
                              <span>{service}</span>
                              <span>
                                {form.service === service ? "●" : "○"}
                              </span>
                            </button>
                          ))}
                        </div>

                        <label className="form-field">
                          <span>
                            When would you like to start? (Optional)
                          </span>

                          <select
                            value={form.timeline}
                            onChange={(event) =>
                              updateForm("timeline", event.target.value)
                            }
                          >
                            <option value="">Select a timeline</option>
                            <option value="As soon as possible">
                              As soon as possible
                            </option>
                            <option value="Within a month">
                              Within a month
                            </option>
                            <option value="Within 3 months">
                              Within 3 months
                            </option>
                            <option value="Just exploring">
                              Just exploring
                            </option>
                          </select>
                        </label>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="form-step">
                        <h3>Tell us about your idea.</h3>
                        <p>
                          A little detail helps us understand
                          what you have in mind.
                        </p>

                        <label className="form-field">
                          <span>Project description *</span>

                          <textarea
                            value={form.message}
                            onChange={(event) =>
                              updateForm("message", event.target.value)
                            }
                            placeholder="What would you like us to build? What should it do? Who is it for?"
                            rows={7}
                          />
                        </label>

                        <div className="form-review">
                          <span>YOUR ENQUIRY</span>

                          <p>
                            {form.name} · {form.email}
                          </p>

                          {form.company && <p>{form.company}</p>}

                          <p>{form.service}</p>

                          <p>
                            {form.timeline || "Timeline not specified"}
                          </p>
                        </div>
                      </div>
                    )}

                    {error && (
                      <p className="form-error" role="alert">
                        {error}
                      </p>
                    )}

                    <div className="form-navigation">
                      {step > 1 ? (
                        <button
                          type="button"
                          className="form-back"
                          onClick={previousStep}
                          disabled={submitting}
                        >
                           Back
                        </button>
                      ) : (
                        <span />
                      )}

                      {step < 3 ? (
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
                          disabled={submitting}
                        >
                          {submitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Submit enquiry
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <p className="form-privacy">
                      Your information will only be used to
                      respond to your project enquiry.
                    </p>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <span className="success-symbol">✓</span>

                  <span className="eyebrow">ENQUIRY SENT</span>

                  <h2>Thank you, {form.name}.</h2>

                  <p>
                    Your enquiry has been submitted successfully.
                    We'll review your project details and get back
                    to you at {form.email}.
                  </p>

                  <Link href="/" className="button-outline">
                    Return home
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container">
          <Reveal>
            <span className="eyebrow">NOT READY YET?</span>

            <h2>
              Take your time.
              <br />
              <span className="accent-text">
                Explore what we do.
              </span>
            </h2>

            <Link href="/services" className="button-outline">
              Explore services
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
