import {
  ArrowRight,
  Bell,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wifi,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Alarm Systems",
    description:
      "Installation, upgrades, servicing, and fault finding for HKC, Texecom, and Pyronix alarm systems in homes and businesses.",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Professional CCTV systems using Hikvision, Dahua, and EZIP with remote viewing, clear recording, and dependable coverage.",
  },
  {
    icon: Building2,
    title: "Door Access & Intercom",
    description:
      "Secure access control and intercom solutions for residential blocks, offices, commercial sites, and shared properties.",
  },
  {
    icon: Wifi,
    title: "Networking",
    description:
      "Reliable network setup for CCTV, alarms, smart security, internet-connected devices, and structured cable connections.",
  },
  {
    icon: Bell,
    title: "Nurse Call Systems",
    description:
      "C-TEC nurse call system installation, maintenance, repairs, and support for care environments and assisted facilities.",
  },
  {
    icon: Wrench,
    title: "Electrical & Maintenance",
    description:
      "Practical electrical work, system servicing, repairs, upgrades, and responsive callouts to keep your property protected.",
  },
];

const highlights = [
  "Professional installation with clean, tidy workmanship",
  "Honest advice and straightforward quotations",
  "Residential and commercial security solutions",
  "Support for alarms, CCTV, access control, and networking",
  "Reliable aftercare, servicing, and fault finding",
  "West Midlands coverage with responsive communication",
];

const coverage = ["Birmingham", "Wolverhampton", "Walsall", "West Midlands"];

const testimonials = [
  {
    name: "Home Security Client",
    text: "Excellent service from start to finish. The CCTV was installed neatly, everything was explained clearly, and the app setup was straightforward.",
  },
  {
    name: "Landlord Client",
    text: "Reliable, professional, and easy to deal with. Great communication and very tidy work across multiple properties.",
  },
  {
    name: "Business Client",
    text: "Fast response and solid workmanship. Our alarm and access control setup was completed professionally and on time.",
  },
];

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div style={{ maxWidth: 760 }}>
      <div className="section-kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      <p className="lead">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">Singhs Smart Shield</div>
            <div className="brand-sub">Electrical, CCTV, Alarms & Access Control</div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#coverage">Coverage</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary hide-mobile" href="#contact">Get a Free Quote</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              <ShieldCheck className="icon-inline" />
              Trusted security, electrical, and access solutions
            </div>
            <h1 className="h1">Smart security and electrical solutions installed properly.</h1>
            <p className="lead">
              Singhs Smart Shield provides professional electrical, CCTV, alarm, access control, nurse call,
              networking, and intercom services across the West Midlands for residential and commercial properties.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#contact">
                Request a Quote <ArrowRight className="icon-inline" />
              </a>
              <a className="btn btn-secondary" href="tel:07999900417">
                <Phone className="icon-inline" /> Call 07999900417
              </a>
            </div>

            <div className="mini-grid">
              <div className="card card-pad">
                <div className="mini-stat">Trusted</div>
                <div className="muted-small">Professional service and honest advice</div>
              </div>
              <div className="card card-pad">
                <div className="mini-stat">Tidy</div>
                <div className="muted-small">Clean installations with attention to detail</div>
              </div>
              <div className="card card-pad">
                <div className="mini-stat">Responsive</div>
                <div className="muted-small">Quick communication and dependable support</div>
              </div>
            </div>
          </div>

          <div className="card card-strong card-pad">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>Why choose Singhs Smart Shield</div>
                <div className="muted-small">Focused on reliability, quality, and practical service</div>
              </div>
              <ShieldCheck style={{ width: 40, height: 40 }} />
            </div>

            <div className="features-grid" style={{ marginTop: 22 }}>
              {highlights.map((item) => (
                <div className="feature" key={item}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <CheckCircle2 style={{ width: 18, height: 18, marginTop: 3, flexShrink: 0 }} />
                    <p style={{ margin: 0 }}>{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="subcards">
              <div className="feature">
                <Clock3 className="small-icon" />
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Fast response</div>
                <div className="muted-small">Prompt communication for quotes, repairs, and bookings</div>
              </div>
              <div className="feature">
                <Home className="small-icon" />
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Residential services</div>
                <div className="muted-small">Smart security and electrical solutions for homes and families</div>
              </div>
              <div className="feature">
                <Building2 className="small-icon" />
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Commercial services</div>
                <div className="muted-small">Practical systems for businesses, landlords, and managed sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <SectionHeading
            kicker="Services"
            title="Professional services for homes, businesses, and managed sites"
            text="From electrical works and alarm installations to CCTV, nurse call, networking, and access control, every service is delivered with practical advice and dependable workmanship."
          />
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-card" key={service.title}>
                  <div className="service-icon"><Icon /></div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-text">{service.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div>
            <SectionHeading
              kicker="About"
              title="Professional, dependable service across the West Midlands"
              text="We focus on delivering dependable systems that are installed properly, explained clearly, and supported after the job is complete. Whether you need CCTV at home, an alarm upgrade, structured networking, door access, or nurse call solutions, the aim is the same: reliable workmanship and honest service."
            />
            <p className="lead" style={{ marginTop: 10 }}>
              Singhs Smart Shield delivers reliable electrical and security solutions across the West Midlands.
              With practical experience in CCTV, alarms, access control, networking, intercom, and nurse call systems,
              we focus on clean installations, clear communication, and long-term customer support.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <div className="card card-strong card-pad">
              <div style={{ fontSize: 22, fontWeight: 700 }}>Ideal for</div>
              <div className="list-stack">
                <div className="feature">Homeowners wanting reliable CCTV, alarms, intercoms, and electrical work</div>
                <div className="feature">Landlords and letting businesses needing trusted property security solutions</div>
                <div className="feature">Commercial sites, offices, care settings, and managed buildings requiring practical system support</div>
              </div>
            </div>
            <div className="card card-strong card-pad">
              <div style={{ fontSize: 22, fontWeight: 700 }}>Trusted brands and systems</div>
              <p className="service-text">
                We work with trusted systems including Hikvision, Dahua, EZIP, HKC, Texecom, Pyronix, and C-TEC solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="section">
        <div className="container">
          <SectionHeading
            kicker="Coverage"
            title="Areas we cover"
            text="We provide services across the West Midlands. Update this section later if you want to add more specific towns or wider coverage areas."
          />
          <div className="coverage-grid">
            {coverage.map((area) => (
              <div className="coverage-item" key={area}>
                <div className="contact-line">
                  <MapPin className="icon-inline" />
                  <strong>{area}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            kicker="Testimonials"
            title="Built to earn trust"
            text="These are starter examples. Replace them with real Google reviews and customer feedback once you begin collecting them."
          />
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div className="card card-strong card-pad" key={item.name}>
                <p className="service-text" style={{ marginTop: 0 }}>&ldquo;{item.text}&rdquo;</p>
                <div style={{ marginTop: 20, fontWeight: 700 }}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              kicker="Contact"
              title="Get a free quote"
              text="Ready to discuss a new installation, repair, upgrade, or service visit? Call, email, or use this enquiry form to get started."
            />
            <div className="list-stack" style={{ marginTop: 28 }}>
              <div className="contact-item">
                <div className="contact-line"><Phone className="icon-inline" /><div><div className="muted-small">Phone</div><strong>07999900417 / 07832455405</strong></div></div>
              </div>
              <div className="contact-item">
                <div className="contact-line"><Mail className="icon-inline" /><div><div className="muted-small">Email</div><strong>info@singhssmartshield.co.uk</strong></div></div>
              </div>
              <div className="contact-item">
                <div className="contact-line"><MapPin className="icon-inline" /><div><div className="muted-small">Service Area</div><strong>West Midlands</strong></div></div>
              </div>
            </div>
          </div>

          <div className="card card-strong card-pad">
            <form className="contact-form">
              <div className="form-row">
                <input placeholder="Your name" />
                <input placeholder="Phone number" />
              </div>
              <input placeholder="Email address" />
              <input placeholder="Service needed" />
              <textarea placeholder="Tell us about the job, location, and the type of work needed" />
              <button className="btn btn-primary" type="button">Send Enquiry</button>
              <div className="muted-small">
                This is a visual contact form for launch. Before going live properly, connect it to email,
                WhatsApp, or a form service such as Formspree.
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card cta-box">
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1 }}>Need security or electrical work?</div>
              <p className="lead" style={{ margin: "10px 0 0", maxWidth: 760 }}>
                Speak to Singhs Smart Shield for a professional quote, honest advice, and dependable service across the West Midlands.
              </p>
            </div>
            <div className="actions" style={{ marginTop: 0 }}>
              <a className="btn btn-primary" href="tel:07999900417">Call us today</a>
              <a className="btn btn-secondary" href="mailto:info@singhssmartshield.co.uk">Email Singhs Smart Shield</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Singhs Smart Shield. All rights reserved.</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
