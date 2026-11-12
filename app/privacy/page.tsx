
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Code Crew",
  description:
    "Learn how Code Crew collects, uses, protects and manages personal information.",
};

const sections = [
  {
    title: "1. Who is responsible for your information?",
    paragraphs: [
      "Code Crew is operated by an individual trading under the Code Crew name in Kenya. The operator is the person responsible for deciding why and how personal information collected through this website is processed.",
      "Legal name of operator: Dylan Israel.",
      "Privacy contact: danielfileds123@gmail.com. Telephone: +254 732 443 407.",
    ],
  },
  {
    title: "2. Information we collect",
    paragraphs: [
      "Project enquiries may contain your name, email address, telephone number, business or organisation details, project requirements, requested services, budget or timeline information where supplied, and the contents of your message and subsequent correspondence.",
      "Careers applications collect your full name, email address, telephone number, location, selected opportunity, education or qualifications, skills, motivation statement, and any previous experience or portfolio, GitHub or LinkedIn link you choose to provide.",
      "The careers form does not currently request CV uploads or certificate uploads.",
      "Our website infrastructure and service providers may process technical information such as IP addresses, browser and device details, request timestamps, diagnostic information and security logs. The exact logs and retention settings depend on the providers and configuration in use.",
      "We do not intentionally use analytics platforms, advertising pixels or behavioural tracking tools at the time this policy is published. If this changes, we will update this policy and provide any required notices or choices.",
    ],
  },
  {
    title: "3. Why we use information",
    paragraphs: [
      "We use information to respond to enquiries, understand project requirements, prepare proposals and quotations, communicate with prospective and existing clients, provide agreed services, review applications, contact applicants, maintain security, troubleshoot technical issues, manage business records and comply with legal obligations.",
      "We will not use personal information for a new, unrelated purpose unless we have an appropriate legal basis and provide any notice required by law.",
    ],
  },
  {
    title: "4. Legal grounds for processing",
    paragraphs: [
      "Depending on the circumstances, we process personal information because it is necessary to take steps requested before entering a contract, perform a contract, comply with a legal obligation, pursue a legitimate interest that does not override your rights, or because you have given consent where consent is the appropriate legal basis.",
      "Where processing is based on consent, you may withdraw that consent. Withdrawal does not affect processing that was lawful before withdrawal.",
    ],
  },
  {
    title: "5. Who may receive information?",
    paragraphs: [
      "We do not sell personal information. Information may be shared with service providers where necessary to operate the website, deliver email, host systems, protect services or provide an agreed project.",
      "The current application and enquiry workflow uses Resend for email delivery. The website is intended to be hosted through Vercel. The email provider used for the receiving inbox may also store messages and attachments sent to that inbox.",
      "Information may also be disclosed to professional advisers, regulators, courts or public authorities where legally required or reasonably necessary to establish, exercise or defend legal rights.",
    ],
  },
  {
    title: "6. International processing",
    paragraphs: [
      "Some service providers may process or store information outside Kenya. Before making or continuing an international transfer, we will take steps required by Kenyan data-protection law, including ensuring that an applicable transfer condition and appropriate safeguards are in place.",
    ],
  },
  {
    title: "7. Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, taking account of legal, accounting, contractual, security and dispute-resolution requirements.",
      "We are reviewing and documenting specific retention periods for project enquiries, client records, unsuccessful applications, technical logs and other business records. Until that review is completed, we will assess retention according to the purpose and applicable legal requirements and securely delete or anonymise information when it is no longer needed.",
      "You may contact us to ask about the retention of your information. A deletion request may be subject to lawful record-keeping or other legal requirements.",
    ],
  },
  {
    title: "8. Security",
    paragraphs: [
      "We take reasonable technical and organisational measures appropriate to the nature of the information and the risks involved. These may include access restrictions, secure credentials, software updates and limiting access to people who need information for legitimate business purposes.",
      "No website, email system or electronic transmission method can be guaranteed to be completely secure. If a personal-data breach occurs, we will take the actions required by applicable law.",
    ],
  },
  {
    title: "9. Your rights",
    paragraphs: [
      "Subject to applicable law, you may have rights to be informed about the use of your information, request access, request correction of inaccurate information, request deletion where legally applicable, object to certain processing, request restriction where applicable, withdraw consent where consent is the legal basis, and lodge a complaint with the Office of the Data Protection Commissioner in Kenya.",
      "To make a request, email danielfileds123@gmail.com. We may need to verify your identity before responding. Some information may need to be retained where the law permits or requires it.",
    ],
  },
  {
    title: "10. Information about children",
    paragraphs: [
      "Our website and services are not intentionally directed at children. Please do not submit a child's personal information unless you are authorised to do so and all applicable legal requirements have been met. If we become aware that we have collected children's information unlawfully, we will take appropriate steps.",
    ],
  },
  {
    title: "11. Third-party websites",
    paragraphs: [
      "Our website may contain links to third-party websites or services. Those services operate under their own privacy policies. We are not responsible for the privacy or security practices of websites we do not operate.",
    ],
  },
  {
    title: "12. Changes to this policy",
    paragraphs: [
      "We may update this policy when our services, systems, data practices or legal obligations change. The latest version will be published on this page with an updated effective date.",
    ],
  },
  {
    title: "13. Contact",
    paragraphs: [
      "For privacy questions or requests, contact Code Crew at danielfileds123@gmail.com or +254 732 443 407.",
      "You may also contact the Office of the Data Protection Commissioner in Kenya if you wish to raise a data-protection complaint.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="page-hero legal-hero">
        <div className="container">
          <span className="eyebrow">CODE CREW / LEGAL</span>
          <h1>
            Privacy <span className="accent-text">Policy.</span>
          </h1>
          <p>
            How we collect, use, protect and manage personal
            information when you interact with Code Crew.
          </p>
          <span className="legal-updated">
            Effective date: 7TH NOVEMBER 2026
          </span>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-intro">
            This policy applies to information collected through
            the Code Crew website, enquiries, careers applications
            and related communications. It should be read together
            with any project-specific privacy or data-processing
            agreement that applies to a client engagement.
          </div>

          {sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="legal-contact">
            <span className="eyebrow">PRIVACY QUESTIONS</span>
            <a href="mailto:danielfileds123@gmail.com">
              danielfileds123@gmail.com
            </a>
            <a href="tel:+254732443407">
              +254 732 443 407
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
