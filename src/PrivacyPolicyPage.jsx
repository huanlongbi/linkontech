import { Helmet } from "react-helmet";


const sections = [
  {
    title: "Information We Collect",
    text: "When you contact us by WhatsApp or email, we receive the information you choose to share, such as your name, WhatsApp phone number or email address, company, message contents, attachments, and product requirements. These requirements may include the voltage, current, quantity, and intended use of a variable DC power supply. The website hosting this policy may also process technical information about your browser, device, visits, and connection logs.",
  },
  {
    title: "How We Use Information",
    text: "We use your information to respond to your inquiry, recommend suitable variable DC power supplies, prepare quotations, discuss orders, and provide requested product or after-sales support. We also use relevant records to maintain business communications, prevent misuse, and meet applicable legal obligations. Depending on the circumstances and applicable law, processing may be based on your request before a contract, performance of a contract, legitimate business interests, legal obligations, or consent. You can ask us to stop follow-up communications at any time.",
  },
  {
    title: "Data Sharing",
    text: "Your information may be processed by providers that support our email and WhatsApp communications and the delivery of requested services. WhatsApp processes information under its own privacy policy. The website hosting this page uses Netlify hosting and Google Analytics. Information may also be disclosed when required by applicable law or necessary to protect legal rights. Service providers may process information in countries other than your own, subject to applicable data protection requirements.",
  },
  {
    title: "Data Retention",
    text: "We retain personal information for as long as needed for the purposes described in this policy, including handling inquiries, providing services, maintaining necessary business records, and meeting legal obligations. Retention depends on the nature of the information, the business relationship, and applicable requirements. You may contact us to request deletion; some records may need to be retained where permitted or required by law.",
  },
  {
    title: "Your Rights",
    text: "Depending on your location and applicable law, you may have rights to access, correct, or delete your information, restrict or object to processing, request a portable copy, or withdraw consent where processing relies on consent. To exercise these rights, email the address below. For deletion requests, use the subject \"Linyuan Power - Data Deletion Request\" and identify the email address or WhatsApp number you used to contact us. We may need to verify your identity and will respond within applicable legal time limits. Some records may need to be retained where required or permitted by law. You may also have the right to complain to your local data protection authority.",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this policy to reflect changes to our practices or applicable requirements. The latest version will appear on this page with an updated date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Privacy Policy | Linyuan Power</title>
        <meta name="description" content="Learn how Linyuan Power collects, uses, shares, and retains personal information, and how to contact us about your privacy rights." />
        <link rel="canonical" href="https://www.linkontech.net/linyuan-power-privacy-policy" />
      </Helmet>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-3 h-1 w-16 rounded-full bg-blue-900" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Linyuan Power</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-sm text-slate-500">Last Updated: <time dateTime="2026-10-07">October 7, 2026</time></p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Linyuan Power ("we", "us", or "our") supplies variable DC power supplies. This Privacy Policy explains how we handle personal information when potential customers contact us through WhatsApp or email about our products, quotations, or support. It also describes cookies and analytics on the website hosting this policy.
          </p>
        </div>
      </section>
      <article aria-label="Privacy policy details" className="mx-auto max-w-4xl space-y-10 px-6 py-14 text-base leading-8 text-slate-600 lg:px-8 lg:py-16">
        {sections.slice(0, 2).map(({ title, text }) => (
          <section key={title}>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <section>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">Cookies and Analytics</h2>
          <p>
            The website hosting this policy uses Google Analytics 4 to understand visits and interactions with its content. Google Analytics uses cookies and processes information about your device, browser, and website activity. You can manage or delete cookies through your browser settings and use the{" "}
            <a className="text-blue-900 underline underline-offset-4" href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>. Blocking cookies may affect some website functions.
          </p>
          <p className="mt-4">
            For details, see{" "}
            <a className="text-blue-900 underline underline-offset-4" href="https://support.google.com/analytics/answer/6004245">Google Analytics privacy information</a> and the{" "}
            <a className="text-blue-900 underline underline-offset-4" href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</a> for communications through WhatsApp.
          </p>
        </section>
        {sections.slice(2).map(({ title, text }) => (
          <section key={title}>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">Contact Us</h2>
          <p>For questions about this policy or requests concerning your personal information, please contact:</p>
          <address className="mt-4 not-italic">
            <p className="font-semibold text-slate-900">Linyuan Power</p>
            <p>Email: <a className="break-words text-blue-900 underline underline-offset-4" href="mailto:Robin_Linyuanpower@outlook.com">Robin_Linyuanpower@outlook.com</a></p>
          </address>
        </section>
      </article>
    </>
  );
}
