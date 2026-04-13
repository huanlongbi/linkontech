import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function LinkonTechWebsiteInner() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenMenu(null);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const goTo = (path) => navigate(path);

  const servicePages = {
    emcTroubleshooting: {
      path: "/services/emc-troubleshooting",
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
          desc: "X-ray test system.",
          image:
            "/images/services/X-ray test system.jpg",
        },
        {
          title: "Engineering Bench",
          desc: "Curve tracer tester.",
          image:
            "/images/services/Curve tracer tester.jpg",
        },
        {
          title: "Verification Support",
          desc: "Three coordinate measuring instrument.",
          image:
            "/images/services/Three coordinate measuring instrument.jpg",
        },
      ],
    },
    emcTesting: {
      path: "/services/emc-testing",
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
          desc: "3m Semi-anechoic Room(Radiated emission).",
          image:
            "/images/services/3m Semi-anechoic Room(Radiated emission).jpg",
        },
        {
          title: "ELECTROMAGNETIC COMPATIBILITY",
          desc: "Conducted emission Disturbancepower.",
          image:
            "/images/services/Conducted emission Disturbancepower.jpg",
        },
        {
          title: "ELECTROMAGNETIC COMPATIBILITY",
          desc: "EFT&Surge&DIPS&Ringwave.",
          image:
            "/images/services/EFT&Surge&DIPS&Ringwave.jpg",
        },
      ],
    },
    complianceSupport: {
      path: "/services/compliance-support",
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
          desc: "Humidity and temperature test chamber.",
          image:
            "/images/services/Humidity and temperature test chamber.jpg",
        },
        {
          title: "Reliability Verification",
          desc: "Ingress Protection test-waterproof test.",
          image:
            "/images/services/Ingress Protection test-waterproof test.jpg",
        },
        {
          title: "Safety Test",
          desc: "Safety and electrical performance test laboratory.",
          image:
            "/images/services/Safety and electrical performance test laboratory.jpg",
        },
      ],
    },
  };

  const industryPages = {
    homeAppliances: {
      path: "/industries/home-appliances",
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
      path: "/industries/power-tools",
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
      path: "/industries/power-supply-systems",
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
      path: "/industries/automotive",
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
    heroTag: "About Linkon Tech",
    title: "Engineering-Driven EMC Support",
    intro:
      "Linkon Tech focuses on EMC troubleshooting, testing support, and compliance-oriented engineering assistance. We help customers solve real EMC problems efficiently through experienced engineers, laboratory-backed verification, and fast execution.",
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
    { key: "emcTroubleshooting", title: "EMC Troubleshooting", path: servicePages.emcTroubleshooting.path },
    { key: "emcTesting", title: "EMC Testing", path: servicePages.emcTesting.path },
    { key: "complianceSupport", title: "Compliance Support", path: servicePages.complianceSupport.path },
  ];

  const industryMenuItems = [
    { key: "homeAppliances", title: "Home Appliances", path: industryPages.homeAppliances.path },
    { key: "powerTools", title: "Power Tools", path: industryPages.powerTools.path },
    { key: "powerSupplySystems", title: "Power Supply Systems", path: industryPages.powerSupplySystems.path },
    { key: "automotive", title: "Automotive", path: industryPages.automotive.path },
  ];

  const strengths = [
    { path: "/about", title: "Experienced EMC Engineers", desc: "We focus on practical rectification support, not just pass/fail reporting." },
    { path: "/about", title: "Laboratory Resource Support", desc: "Testing and verification resources help confirm improvement effectiveness quickly." },
    { path: "/about", title: "Fast Turnaround", desc: "Efficient execution helps customers shorten delays and accelerate product launch timing." },
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

  const SectionTitle = ({ eyebrow, title, desc }) => (
    <div className="max-w-3xl">
      <div className="mb-3 h-1 w-16 rounded-full bg-blue-900" />
      {eyebrow ? <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</div> : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-6 text-lg leading-8 text-slate-600">{desc}</p> : null}
    </div>
  );

  const DropdownMenu = ({ label, menuKey, items }) => (
    <div className="relative" onMouseEnter={() => openDropdown(menuKey)} onMouseLeave={scheduleCloseDropdown}>
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
              onClick={() => goTo(item.path)}
              className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-slate-50"
            >
              <div className="text-sm font-semibold text-slate-900">{item.title}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const ContactSection = ({ standalone = false }) => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        form.reset();
        navigate("/thank-you"); // 👉 成功后跳转
      } catch (error) {
        console.error("Form submission failed:", error);
        alert("Submission failed. Please try again.");
      }
    };

    return (
      <section id="contact" className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">

          {/* 左侧信息 */}
          <div>
            <div className="mb-3 h-1 w-16 rounded-full bg-amber-400" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {standalone ? "Contact Us" : "Contact Linkon Tech"}
            </h2>

            <div className="mt-8 space-y-4 text-sm text-blue-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wide">
                  Linkon Technology Co., Ltd.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span>{" "}
                Robin@linkontech.net
              </div>
              <div>
                <span className="font-semibold text-white">Address:</span>{" "}
                Tangtou Avenue, Shiyan Town, Bao’an District, Shenzhen, Guangdong, China
              </div>
            </div>
          </div>

          {/* 表单 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* 防垃圾 */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={60}
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Business Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Service Needed *
                  </label>
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
                  <label className="mb-2 block text-sm font-medium text-white">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    minLength={20}
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 outline-none"
                    placeholder="Describe your EMC issue..."
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-blue-100">
                <input
                  name="consent"
                  type="checkbox"
                  value="yes"
                  required
                  className="mt-1 h-4 w-4"
                />
                <span>
                  I confirm this is a real business inquiry and agree that Linkon Tech may contact me.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:opacity-90"
              >
                Send Inquiry
              </button>

            </form>
          </div>
        </div>
      </section>
    );
  };

  const SideNav = ({ title, items }) => (
    <aside className="lg:w-64 shrink-0">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">{title}</div>
        <div className="space-y-2">
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${active ? "bg-blue-900 text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );

  const HomePage = () => (
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
              Linkon Tech helps customers solve EMC problems faster through experienced engineering support, laboratory-backed verification, and efficient execution. Our focus is practical rectification, not empty sales language.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => goTo("/services/emc-troubleshooting")} className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
                Explore EMC Troubleshooting
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg sm:col-span-2">
              <img src="/images/homepage/hero.jpg" alt="Laboratory overview" className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="text-lg font-semibold text-slate-900">Engineering Support Backed by Laboratory Resources</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src="/images/homepage/3m anechoic Room(Radiated immunity).jpg" alt="EMC equipment" className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="font-semibold text-slate-900">3m Anechoic Room (Radiated Immunity)</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src="/images/homepage/Harmonic current and Voltage flicker test ROOM.jpg" alt="Harmonic current and Voltage flicker test room" className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="font-semibold text-slate-900">Harmonic Current & Voltage Flicker Test Room</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle title="About Linkon Tech" desc="Linkon Tech focuses on EMC troubleshooting, testing support, and compliance-oriented engineering assistance. Our strength lies in helping customers solve real EMC problems efficiently, especially in home appliances, power tools, and power supply systems, with a strong focus on industrial power applications." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {strengths.map((item) => (
              <button key={`${item.title}-${item.desc}`} type="button" onClick={() => goTo(item.path)} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
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
          <SectionTitle title="Services" desc="Open each service page to see the detailed capability description together with supporting laboratory images. Laboratory content is integrated into service pages, not separated into an isolated tab." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceMenuItems.map((item) => (
              <button key={item.key} type="button" onClick={() => goTo(item.path)} className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <div className="mt-6 text-sm font-semibold text-blue-900">Open page →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle title="Industries" desc="We have stronger practical experience in home appliances, power tools, and power supply systems, especially industrial power applications where EMC issues tend to be more complex." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industryMenuItems.map((item, index) => (
              <button key={item.key} type="button" onClick={() => goTo(item.path)} className={`rounded-3xl border p-8 text-left shadow-sm transition hover:-translate-y-1 ${index === 2 ? "border-blue-900 bg-blue-900 text-white" : "border-slate-200 bg-slate-50"}`}>
                <h3 className={`text-xl font-semibold ${index === 2 ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                <div className={`mt-6 text-sm font-semibold ${index === 2 ? "text-white" : "text-blue-900"}`}>Open page →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle title="FAQ" desc="The website message stays practical and engineering-focused, so customers can quickly understand where your real strength is." />
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

  const ServicePage = ({ data }) => (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:gap-12 lg:px-8">
      <SideNav title="Services" items={serviceMenuItems} />
      <div className="min-w-0 flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
          <div className="px-0 py-10">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{data.heroTag}</div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{data.title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{data.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div><SectionTitle title="Service Overview" desc={data.intro} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-700 shadow-sm">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="py-20">
            <SectionTitle title="Laboratory Support Within This Service" desc="" />
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
          <div className="py-20">
            <SectionTitle title="Support Scope" desc="This service is positioned as practical engineering support combined with verification capability, so the site should present clear working scope rather than empty marketing claims." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {data.scope.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="text-base font-semibold text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );

  const IndustryPage = ({ data }) => (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:gap-12 lg:px-8">
      <SideNav title="Industries" items={industryMenuItems} />
      <div className="min-w-0 flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
          <div className="px-0 py-10">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{data.heroTag}</div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{data.title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{data.intro}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="py-20">
            <SectionTitle title="Typical Experience Areas" desc="This industry page should help visitors understand where your practical EMC experience is concentrated, especially when they are looking for a team familiar with their product category." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {data.points.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="text-base font-semibold text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );

  const AboutPage = () => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">{aboutPage.heroTag}</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{aboutPage.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{aboutPage.intro}</p>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            title="Our Laboratory"
            desc="Our EMC testing and engineering work is supported by real laboratory resources and experienced technical teams."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <img
              src="/images/about/company.jpg"
              alt="Topband Central Lab Entrance"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle title="Core Strengths" desc="About is now a single complete page so visitors can understand your support model more clearly in one place." />
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

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Development & Laboratory Milestones"
            desc="Our laboratory capabilities and qualifications have been continuously developed over the years."
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <img
              src="/images/about/development.jpg"
              alt="Laboratory development timeline"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            title="Standards & Technical Capability"
            desc="We support engineering validation and testing based on a wide range of international and industry standards."
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/about/reference-standard.jpg"
              alt="Reference Standards"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );

  const ContactPage = () => (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">Contact</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Let’s Discuss Your EMC Project</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contact Linkon Tech if you need EMC troubleshooting, testing support, or compliance-oriented engineering assistance for your project.
            </p>
          </div>
        </div>
      </section>
      <ContactSection standalone />
    </>
  );

  const ThankYouPage = () => {
    const navigate = useNavigate()

    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

          <h1 className="text-2xl font-semibold text-slate-900">
            Thank You
          </h1>

          <p className="mt-4 text-slate-600">
            Your inquiry has been submitted successfully.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Our engineer will review your request and contact you within 24 hours.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <button
              onClick={() => navigate("/contact")}
              className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Back to Contact
            </button>

            <button
              onClick={() => navigate("/services/emc-troubleshooting")}
              className="rounded-md bg-blue-900 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Explore Services
            </button>

          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => goTo("/")}
            className="flex items-center gap-3 text-left"
          >
            <img
              src="/images/logo100.png"
              alt="Linkon Tech Logo"
              className="h-10 w-10 object-contain"
            />

            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900">
                Linkon Tech
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                EMC Troubleshooting & Testing
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <button type="button" onClick={() => goTo("/")} className="text-slate-600 transition hover:text-slate-900">Home</button>
            <button type="button" onClick={() => goTo("/about")} className="text-slate-600 transition hover:text-slate-900">About</button>
            <DropdownMenu label="Services" menuKey="services" items={serviceMenuItems} />
            <DropdownMenu label="Industries" menuKey="industries" items={industryMenuItems} />
            <button type="button" onClick={() => goTo("/contact")} className="text-slate-600 transition hover:text-slate-900">Contact us</button>
          </nav>

          <button type="button" onClick={() => setMobileMenuOpen((prev) => !prev)} className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden" aria-label="Toggle navigation">
            <span className="text-lg">☰</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="space-y-2 text-sm font-medium text-slate-700">
                <button type="button" onClick={() => goTo("/")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Home</button>
                <button type="button" onClick={() => goTo("/about")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">About</button>

                <div className="rounded-lg border border-slate-200">
                  <button type="button" onClick={() => setMobileServicesOpen((prev) => !prev)} className="flex w-full items-center justify-between px-3 py-3 text-left">
                    <span>Services</span>
                    <span>{mobileServicesOpen ? "−" : "+"}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      {serviceMenuItems.map((item) => (
                        <button key={item.key} type="button" onClick={() => goTo(item.path)} className="block w-full rounded-lg px-3 py-3 text-left text-slate-600 hover:bg-slate-50">
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-lg border border-slate-200">
                  <button type="button" onClick={() => setMobileIndustriesOpen((prev) => !prev)} className="flex w-full items-center justify-between px-3 py-3 text-left">
                    <span>Industries</span>
                    <span>{mobileIndustriesOpen ? "−" : "+"}</span>
                  </button>
                  {mobileIndustriesOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      {industryMenuItems.map((item) => (
                        <button key={item.key} type="button" onClick={() => goTo(item.path)} className="block w-full rounded-lg px-3 py-3 text-left text-slate-600 hover:bg-slate-50">
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button type="button" onClick={() => goTo("/contact")} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Contact us</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path={servicePages.emcTroubleshooting.path} element={<ServicePage data={servicePages.emcTroubleshooting} />} />
          <Route path={servicePages.emcTesting.path} element={<ServicePage data={servicePages.emcTesting} />} />
          <Route path={servicePages.complianceSupport.path} element={<ServicePage data={servicePages.complianceSupport} />} />
          <Route path={industryPages.homeAppliances.path} element={<IndustryPage data={industryPages.homeAppliances} />} />
          <Route path={industryPages.powerTools.path} element={<IndustryPage data={industryPages.powerTools} />} />
          <Route path={industryPages.powerSupplySystems.path} element={<IndustryPage data={industryPages.powerSupplySystems} />} />
          <Route path={industryPages.automotive.path} element={<IndustryPage data={industryPages.automotive} />} />
        </Routes>
      </main>
    </div>
  );
}

export default function LinkonTechWebsite() {
  return (
    <BrowserRouter>
      <LinkonTechWebsiteInner />
    </BrowserRouter>
  );
}
