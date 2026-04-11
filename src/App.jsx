import React, { useEffect, useMemo, useRef, useState } from "react";

export default function GeesyTechWebsite() {
  const [page, setPage] = useState("home");
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = (menuKey) => {
    clearCloseTimer();
    setOpenMenu(menuKey);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 180);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const goToPage = (target) => {
    clearCloseTimer();
    setOpenMenu(null);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicePages = {
    emcTroubleshooting: {
      heroTag: "Service / EMC Troubleshooting",
      title: "EMC Troubleshooting",
      subtitle:
        "Engineering-focused support to identify EMC problems, analyze root causes, and provide practical rectification suggestions for faster compliance.",
      intro:
        "This service is designed for customers who need more than a test report. We help analyze EMI sources, evaluate rectification direction, and support improvement verification with laboratory resources and experienced engineers.",
      highlights: [
        "EMI source identification",
        "PCB layout review and optimization suggestions",
        "Filter, shielding, and grounding recommendations",
        "Cable and structural interference improvement",
        "System-level EMC debugging support",
        "Fast verification after rectification",
      ],
      scope: [
        "Pre-test problem diagnosis",
        "Rectification direction assessment",
        "Repeated-failure troubleshooting support",
        "Engineering communication during improvement cycles",
      ],
      gallery: [
        {
          title: "Analysis Methods",
          desc: "Replace with X-ray inspection, microsection analysis, and electrical verification photos.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Engineering Bench",
          desc: "Use your real EMI debugging bench or failure analysis lab photos.",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Verification Support",
          desc: "Display images that show how rectification suggestions are verified efficiently.",
          image: "https://images.unsplash.com/photo-1581092921461-eab10380bdc0?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    emcTesting: {
      heroTag: "Service / EMC Testing",
      title: "EMC Testing",
      subtitle:
        "EMC testing support for debugging, validation, and pre-compliance work, backed by laboratory resources and fast execution.",
      intro:
        "Our EMC testing support helps customers evaluate product performance before formal certification and validate whether improvement actions are effective. This is especially useful for projects under schedule pressure.",
      highlights: [
        "Radiated Emission (RE)",
        "Conducted Emission (CE)",
        "ESD / EFT / Surge",
        "Radiated Immunity (RS)",
        "Harmonics and Flicker",
        "Disturbance power and related pre-compliance verification",
      ],
      scope: [
        "Debug-stage testing support",
        "Pre-compliance verification",
        "Improvement validation after rectification",
        "Engineering-oriented reporting and communication",
      ],
      gallery: [
        {
          title: "EMC Chamber",
          desc: "Replace with your semi-anechoic room, shielded room, or EMC chamber photos.",
          image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Test Setup",
          desc: "Use test bench, receiver, LISN, or chamber setup photos to enhance trust.",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Verification Equipment",
          desc: "Show the equipment that supports fast validation during EMC projects.",
          image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    complianceSupport: {
      heroTag: "Service / Compliance Support",
      title: "Compliance Support",
      subtitle:
        "Technical support for product improvement, validation, and preparation for compliance requirements in target markets.",
      intro:
        "Compliance support is not just about listing standards. We help customers connect engineering improvement with testing direction so that compliance work becomes faster, clearer, and more practical.",
      highlights: [
        "Support for test planning and preparation",
        "Improvement direction before certification",
        "Engineering coordination for compliance readiness",
        "Validation support after product modification",
        "Practical support for export-oriented projects",
        "Fast response for schedule-sensitive programs",
      ],
      scope: [
        "FCC / CE / IEC related support",
        "Preparation for formal testing stages",
        "Technical discussion on compliance risks",
        "Engineering-backed communication support",
      ],
      gallery: [
        {
          title: "Safety & Compliance Resources",
          desc: "Use your safety laboratory photos and equipment images here.",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Reliability Verification",
          desc: "Display reliability chambers and supporting lab resources for product validation.",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Integrated Support",
          desc: "Show photos that demonstrate testing, troubleshooting, and compliance support working together.",
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  };

  const industryPages = {
    homeAppliances: {
      heroTag: "Industry / Home Appliances",
      title: "Home Appliances",
      intro:
        "We have solid EMC experience in household electrical products and smart home related applications, including products with control boards, switching circuits, and motor-driven structures.",
      points: [
        "Appliance control systems",
        "Kitchen electrical products",
        "Smart home devices",
        "Noise and interference troubleshooting for household products",
      ],
    },
    powerTools: {
      heroTag: "Industry / Power Tools",
      title: "Power Tools",
      intro:
        "We support EMC troubleshooting and testing for motor-driven power tools, where switching noise, structural interference, and system-level EMC risks are often more prominent.",
      points: [
        "Motor-driven products",
        "Switching noise control",
        "System-level EMC optimization",
        "Rectification support for repeated failures",
      ],
    },
    powerSupplySystems: {
      heroTag: "Industry / Power Supply Systems",
      title: "Power Supply Systems",
      intro:
        "Power supply systems are one of our strongest areas, especially industrial power applications with higher EMC complexity, stronger conducted and radiated emissions, and tighter project schedules.",
      points: [
        "Industrial power supplies",
        "Switching power designs",
        "High-power conducted emission troubleshooting",
        "Radiated emission optimization for industrial applications",
      ],
    },
    automotive: {
      heroTag: "Industry / Automotive",
      title: "Automotive",
      intro:
        "We can also support EMC-related engineering work for automotive electronics and vehicle-adjacent systems, especially where reliability, noise control, and compliance expectations are stricter.",
      points: [
        "Automotive electronic modules",
        "On-board power and control systems",
        "Noise suppression for vehicle-related applications",
        "Engineering support for higher-reliability EMC projects",
      ],
    },
  };

  const aboutPage = {
    heroTag: "About Geesy Tech",
    title: "Engineering-Driven EMC Support",
    intro:
      "Geesy Tech focuses on EMC troubleshooting, testing support, and compliance-oriented engineering assistance. We help customers solve real EMC problems efficiently through experienced engineers, laboratory-backed verification, and fast execution.",
    sections: [
      {
        title: "Experienced EMC Engineers",
        desc: "Our engineers focus on practical rectification support, not just pass/fail reporting. We help identify EMI sources, discuss improvement direction, and shorten repeated debugging cycles.",
      },
      {
        title: "Laboratory Resource Support",
        desc: "Laboratory resources are part of the service model. They help confirm whether improvement actions are effective and reduce repeated trial-and-error during EMC projects.",
      },
      {
        title: "Fast Turnaround",
        desc: "We emphasize response efficiency, practical coordination, and rapid verification so customers can shorten delays and push projects forward faster.",
      },
      {
        title: "Industry Experience",
        desc: "We have stronger practical experience in home appliances, power tools, power supply systems, and selected automotive-related applications.",
      },
    ],
  };

  const serviceMenuItems = [
    { key: "emcTroubleshooting", title: "EMC Troubleshooting", desc: "Engineering-focused rectification support." },
    { key: "emcTesting", title: "EMC Testing", desc: "Pre-compliance and validation testing." },
    { key: "complianceSupport", title: "Compliance Support", desc: "Technical support for compliance readiness." },
  ];

  const industryMenuItems = [
    { key: "homeAppliances", title: "Home Appliances", desc: "EMC experience in appliance-related products." },
    { key: "powerTools", title: "Power Tools", desc: "Support for motor-driven tool products." },
    { key: "powerSupplySystems", title: "Power Supply Systems", desc: "Particular strength in industrial power applications." },
    { key: "automotive", title: "Automotive", desc: "Support for automotive and vehicle-related electronics." },
  ];

  const strengths = [
    {
      key: "about",
      title: "Experienced EMC Engineers",
      desc: "We focus on practical rectification support, not just pass/fail reporting.",
    },
    {
      key: "about",
      title: "Laboratory Resource Support",
      desc: "Testing and verification resources help confirm improvement effectiveness quickly.",
    },
    {
      key: "about",
      title: "Fast Turnaround",
      desc: "Efficient execution helps customers shorten delays and accelerate product launch timing.",
    },
  ];

  const faqs = [
    {
      q: "Do you only provide testing?",
      a: "No. Our key value lies in combining EMC troubleshooting with test verification, so customers can solve failures more efficiently.",
    },
    {
      q: "Can you support industrial power supply projects?",
      a: "Yes. Industrial power applications are one of our strongest focus areas, especially when EMC issues are complex and time-sensitive.",
    },
    {
      q: "Why do you show laboratory images inside service pages?",
      a: "Because customers want to see the real resources that support each service. This is more convincing than putting laboratory information in a separate generic page.",
    },
  ];

  const currentService = useMemo(() => servicePages[page], [page]);
  const currentIndustry = useMemo(() => industryPages[page], [page]);
  const showAbout = page === "about";
  const showContact = page === "contact";

  const SectionTitle = ({ eyebrow, title, desc }) => (
    <div className="max-w-3xl">
      <div className="mb-3 h-1 w-16 rounded-full bg-blue-900" />
      {eyebrow ? <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</div> : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-6 text-lg leading-8 text-slate-600">{desc}</p> : null}
    </div>
  );

  const DropdownMenu = ({ label, menuKey, items }) => (
    <div
      className="relative"
      onMouseEnter={() => openDropdown(menuKey)}
      onMouseLeave={scheduleCloseDropdown}
    >
      <button
        type="button"
        onClick={() => setOpenMenu((prev) => (prev === menuKey ? null : menuKey))}
        className="flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
      >
        {label}
        <span className="text-[10px]">▼</span>
      </button>
      {openMenu === menuKey && (
        <div
          className="absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
          onMouseEnter={() => openDropdown(menuKey)}
          onMouseLeave={scheduleCloseDropdown}
        >
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => goToPage(item.key)}
              className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-slate-50"
            >
              <div className="text-sm font-semibold text-slate-900">{item.title}</div>
              <div className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const ContactSection = ({ standalone = false }) => (
    <section id="contact" className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-3 h-1 w-16 rounded-full bg-amber-400" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{standalone ? "Contact Us" : "Contact Geesy Tech"}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            If you are facing EMC issues, repeated failures, or project schedule pressure, contact us to discuss your project with our engineers.
          </p>
          <div className="mt-8 space-y-4 text-sm text-blue-100">
            <div><span className="font-semibold text-white">Company:</span> Geesy Tech</div>
            <div><span className="font-semibold text-white">Email:</span> your@email.com</div>
            <div><span className="font-semibold text-white">WhatsApp:</span> +00 0000 000000</div>
            <div><span className="font-semibold text-white">WeChat:</span> your_wechat</div>
            <div><span className="font-semibold text-white">Address:</span> Your company address here</div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/"
            className="space-y-5"
          >
            {/* 🔥 必须：Netlify识别 */}
            <input type="hidden" name="form-name" value="contact" />

            {/* 🔥 防垃圾 */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={60}
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Company</label>
                <input
                  name="company"
                  type="text"
                  maxLength={100}
                  autoComplete="organization"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Business Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Service Needed *</label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none"
                >
                  <option value="" disabled className="text-slate-900">
                    Select a service
                  </option>
                  <option value="EMC Troubleshooting" className="text-slate-900">
                    EMC Troubleshooting
                  </option>
                  <option value="EMC Testing" className="text-slate-900">
                    EMC Testing
                  </option>
                  <option value="Compliance Support" className="text-slate-900">
                    Compliance Support
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white">Project Details *</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  minLength={20}
                  maxLength={2000}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                  placeholder="Tell us your product type, current EMC issue, current test stage, and the support you need."
                />
              </div>
            </div>

            {/* 🔥 关键：checkbox 也必须在隐藏表单中存在 */}
            <label className="flex items-start gap-3 text-sm leading-6 text-blue-100">
              <input
                name="consent"
                type="checkbox"
                value="yes"
                required
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10"
              />
              <span>
                I confirm this is a real business inquiry and agree that Geesy Tech may contact me regarding this project. *
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-sm transition hover:-translate-y-0.5"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  const renderHome = () => (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(199,154,43,0.10),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
              Engineering-Driven EMC Support
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              EMC Troubleshooting & Testing Solutions for Fast Compliance
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Geesy Tech helps customers solve EMC problems faster through experienced engineering support, laboratory-backed verification, and efficient execution. Our focus is practical rectification, not empty sales language.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => goToPage("emcTroubleshooting")}
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Explore EMC Troubleshooting
              </button>
              <button
                type="button"
                onClick={() => goToPage("powerSupplySystems")}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                View Industry Focus
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg sm:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab10380bdc0?auto=format&fit=crop&w=1400&q=80"
                alt="Laboratory overview"
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-lg font-semibold text-slate-900">Engineering Support Backed by Laboratory Resources</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Replace these demo images with your real EMC, safety, reliability, and analysis laboratory photos.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80"
                alt="EMC equipment"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="font-semibold text-slate-900">EMC Resources</div>
                <div className="mt-1 text-sm text-slate-600">Use real chamber, receiver, and test setup images here.</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80"
                alt="Reliability and safety"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="font-semibold text-slate-900">Verification Support</div>
                <div className="mt-1 text-sm text-slate-600">Show how engineering and lab resources work together.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="About Geesy Tech"
            desc="Geesy Tech focuses on EMC troubleshooting, testing support, and compliance-oriented engineering assistance. Our strength lies in helping customers solve real EMC problems efficiently, especially in home appliances, power tools, and power supply systems, with a strong focus on industrial power applications."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {strengths.map((item) => (
              <button
                key={`${item.title}-${item.desc}`}
                type="button"
                onClick={() => goToPage(item.key)}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-500" />
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-6 text-sm font-semibold text-blue-900">Open page →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Services"
            desc="Open each service page to see the detailed capability description together with supporting laboratory images. Laboratory content is integrated into service pages, not separated into an isolated tab."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceMenuItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => goToPage(item.key)}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-6 text-sm font-semibold text-blue-900">Open page →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Industries"
            desc="We have stronger practical experience in home appliances, power tools, and power supply systems, especially industrial power applications where EMC issues tend to be more complex."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industryMenuItems.map((item, index) => (
              <button
                key={item.key}
                type="button"
                onClick={() => goToPage(item.key)}
                className={`rounded-3xl border p-8 text-left shadow-sm transition hover:-translate-y-1 ${index === 2 ? "border-blue-900 bg-blue-900 text-white" : "border-slate-200 bg-slate-50"
                  }`}
              >
                <h3 className={`text-xl font-semibold ${index === 2 ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                <p className={`mt-4 text-base leading-7 ${index === 2 ? "text-blue-100" : "text-slate-600"}`}>{item.desc}</p>
                <div className={`mt-6 text-sm font-semibold ${index === 2 ? "text-white" : "text-blue-900"}`}>Open page →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="FAQ"
            desc="The website message stays practical and engineering-focused, so customers can quickly understand where your real strength is."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">{item.q}</summary>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );

  const renderServicePage = (data) => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <button type="button" onClick={() => goToPage("home")} className="mb-8 text-sm font-semibold text-blue-900 transition hover:opacity-80">← Back to Home</button>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{data.heroTag}</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{data.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{data.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div><SectionTitle title="Service Overview" desc={data.intro} /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Laboratory Support Within This Service"
            desc="Instead of separating laboratory information into an independent generic tab, this page shows the images and resources that directly support the service itself. Replace the demo images with your real laboratory photos."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {data.gallery.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-60 w-full object-cover transition duration-500 hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Support Scope"
            desc="This service is positioned as practical engineering support combined with verification capability, so the site should present clear working scope rather than empty marketing claims."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.scope.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="text-base font-semibold text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );

  const renderIndustryPage = (data) => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <button type="button" onClick={() => goToPage("home")} className="mb-8 text-sm font-semibold text-blue-900 transition hover:opacity-80">← Back to Home</button>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{data.heroTag}</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{data.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{data.intro}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Typical Experience Areas"
            desc="This industry page should help visitors understand where your practical EMC experience is concentrated, especially when they are looking for a team familiar with their product category."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.points.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="text-base font-semibold text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );

  const renderAboutPage = () => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <button type="button" onClick={() => goToPage("home")} className="mb-8 text-sm font-semibold text-blue-900 transition hover:opacity-80">← Back to Home</button>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{aboutPage.heroTag}</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{aboutPage.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{aboutPage.intro}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Core Strengths"
            desc="About is now a single complete page so visitors can understand your support model more clearly in one place."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aboutPage.sections.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );

  const renderContactPage = () => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <button type="button" onClick={() => goToPage("home")} className="mb-8 text-sm font-semibold text-blue-900 transition hover:opacity-80">← Back to Home</button>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">Contact</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Let’s Discuss Your EMC Project</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contact Geesy Tech if you need EMC troubleshooting, testing support, or compliance-oriented engineering assistance for your project.
            </p>
          </div>
        </div>
      </section>
      <ContactSection standalone />
    </>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => goToPage("home")} className="text-left">
            <div className="text-2xl font-bold tracking-tight text-slate-900">Geesy Tech</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">EMC Troubleshooting & Testing</div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <button type="button" onClick={() => goToPage("home")} className="text-slate-600 transition hover:text-slate-900">Home</button>
            <button type="button" onClick={() => goToPage("about")} className="text-slate-600 transition hover:text-slate-900">About</button>
            <DropdownMenu label="Services" menuKey="services" items={serviceMenuItems} />
            <DropdownMenu label="Industries" menuKey="industries" items={industryMenuItems} />
            <button type="button" onClick={() => goToPage("contact")} className="text-slate-600 transition hover:text-slate-900">Contact</button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="space-y-2 text-sm font-medium text-slate-700">
                <button type="button" onClick={() => goToPage("home")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Home</button>
                <button type="button" onClick={() => goToPage("about")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">About</button>

                <div className="rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left"
                  >
                    <span>Services</span>
                    <span>{mobileServicesOpen ? "−" : "+"}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      {serviceMenuItems.map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => goToPage(item.key)}
                          className="block w-full rounded-lg px-3 py-3 text-left text-slate-600 hover:bg-slate-50"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left"
                  >
                    <span>Industries</span>
                    <span>{mobileIndustriesOpen ? "−" : "+"}</span>
                  </button>
                  {mobileIndustriesOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      {industryMenuItems.map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => goToPage(item.key)}
                          className="block w-full rounded-lg px-3 py-3 text-left text-slate-600 hover:bg-slate-50"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button type="button" onClick={() => goToPage("contact")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Contact</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {page === "home" && renderHome()}
        {currentService && renderServicePage(currentService)}
        {currentIndustry && renderIndustryPage(currentIndustry)}
        {showAbout && renderAboutPage()}
        {showContact && renderContactPage()}
      </main>
    </div>
  );
}
