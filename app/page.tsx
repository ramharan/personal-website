import Image from "next/image";
import { Header } from "./header";
import { Motion } from "./motion";
const expertise = [
  [
    "01",
    "Portfolio construction",
    "Structuring investment funds and portfolios with disciplined capital deployment and a clear understanding of risk.",
  ],
  [
    "02",
    "Investment research",
    "Connecting financial analysis, capital markets research and macro-financial frameworks to investment decisions.",
  ],
  [
    "03",
    "Risk & governance",
    "Institutional perspective on risk assessment, regulatory alignment and international compliance frameworks.",
  ],
  [
    "04",
    "Strategic advisory",
    "Governance-level insights that inform strategic planning, market positioning and long-term capital allocation.",
  ],
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-topline"><p className="eyebrow">INDEPENDENT THINKING. INTERNATIONAL PERSPECTIVE.</p><span>FINANCE / INVESTMENTS / ADVISORY</span></div>
          <h1 id="hero-title">A world of experience.<br /><em>A clear perspective.</em></h1>
          <div className="hero-layout">
            <div className="hero-intro"><p className="hero-name">Hariharan<br />Ramachandran</p><p className="hero-description">Three decades connecting capital, markets and opportunity. A considered approach to investment management and strategic advisory.</p><div className="hero-actions"><a className="button" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a><a className="text-link" href="#experience">Explore my experience ↓</a></div><p className="location-note">SINGAPORE · MIDDLE EAST · INDIA</p></div>
            <div className="hero-art" aria-label="Abstract layered capital sculpture"><div className="sculpture" aria-hidden="true"><div className="scene-ring" /><div className="plane plane-one"><span>01 / CAPITAL</span></div><div className="plane plane-two"><span>02 / CONVICTION</span></div><div className="plane plane-three"><span>03 / PERSPECTIVE</span></div><div className="scene-axis" /></div><p className="scene-caption">A wider view. A stronger foundation.</p><button className="scene-reset" type="button">Rotate perspective ↗</button></div>
            <figure className="portrait-card"><Image src="/images/hariharan-portrait.jpg" alt="Hariharan Ramachandran wearing a blue suit" width={632} height={512} sizes="(max-width: 700px) 88vw, 25vw" priority className="hero-portrait" /><figcaption><span>DISCIPLINE. PERSPECTIVE. PURPOSE.</span><span className="signature">Hariharan R.</span></figcaption></figure>
          </div>
          <a className="scroll-cue" href="#about">THE PERSPECTIVE <span aria-hidden="true">↓</span></a>
        </section>
        <div className="stats">
          <div>
            <strong>
              30<span>+</span>
            </strong>
            <p>Years of international experience</p>
          </div>
          <div>
            <strong>
              $1B<span>+</span>
            </strong>
            <p>Portfolios managed in senior roles</p>
          </div>
          <div>
            <strong>5</strong>
            <p>Sectors. One considered perspective.</p>
          </div>
          <div>
            <strong>Global</strong>
            <p>Capital markets & institutional insight</p>
          </div>
        </div>
        <section id="about" className="section about">
          <div>
            <p className="eyebrow">01 / THE PERSPECTIVE</p>
            <h2>
              A considered approach.
              <br />
              <em>A wider view.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Capital moves across borders. Sound judgment connects the dots.
            </p>
            <p>
              My career spans fund management, portfolio construction, capital
              markets and financial analysis. Over three decades, I have worked
              across international investment firms and corporate institutions,
              building a comprehensive perspective on global capital allocation.
            </p>
            <p>
              From technology and financial services to healthcare, oil & gas
              and real estate, multi-sector experience informs how I assess
              opportunities, understand risk and contribute to institutional
              decision-making.
            </p>
            <div className="sector-tags">
              {[
                "Technology",
                "Financial services",
                "Healthcare",
                "Oil & gas",
                "Real estate",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </section>
        <section id="expertise" className="section expertise">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / AREAS OF EXPERTISE</p>
              <h2>
                Depth of knowledge.
                <br />
                <em>Clarity of direction.</em>
              </h2>
            </div>
            <p>
              Research-led thinking.
              <br />
              Disciplined execution.
              <br />
              An institutional point of view.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map(([n, title, desc]) => (
              <article className="expertise-card" key={n}>
                <span className="card-number">{n}</span>
                <span className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" focusable="false">
                    {n === "01" ? <><rect x="5" y="5" width="30" height="30" /><path d="M5 17h30M17 17v18" /></> :
                      n === "02" ? <><circle cx="17" cy="17" r="11" /><path d="m25 25 10 10M10 20l5-6 4 3 5-6" /></> :
                      n === "03" ? <><path d="M20 3 34 9v12c0 8-14 16-14 16S6 29 6 21V9Z" /><path d="m13 20 5 5 10-11" /></> :
                      <><path d="M5 34 34 5M14 5h20v20" /><path d="M5 14v20h20" /></>}
                  </svg>
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section experience">
          <div>
            <p className="eyebrow">03 / PROFESSIONAL JOURNEY</p>
            <h2>
              Built on experience.
              <br />
              <em>Guided by conviction.</em>
            </h2>
            <p className="section-note">
              Leadership across international investment management and
              corporate advisory.
            </p>
          </div>
          <div className="timeline">
            <article>
              <span className="timeline-dot" />
              <p className="eyebrow">MIDDLE EAST / FAMILY OFFICES</p>
              <h3>Principal Fund Manager</h3>
              <h4>Eurostar Group & Family Offices</h4>
              <p>
                Senior investment leadership with responsibility for portfolios
                in excess of USD 1 billion. Experience spanning portfolio
                structuring, investment research, risk assessment and capital
                deployment.
              </p>
            </article>
            <article>
              <span className="timeline-dot" />
              <p className="eyebrow">SINGAPORE / FUND MANAGEMENT</p>
              <h3>Principal Fund Manager</h3>
              <h4>Avici Investments Pte Ltd</h4>
              <p>
                Fund management and corporate advisory at the Singapore-based
                firm promoted by GR Visions Pte Ltd and TANO Capital LLC, an
                affiliate of Franklin Templeton.
              </p>
            </article>
            <article>
              <span className="timeline-dot" />
              <p className="eyebrow">INTERNATIONAL / GOVERNANCE</p>
              <h3>Institutional & regulatory experience</h3>
              <p>
                Engagements involving DFSA-regulated entities in the Middle East
                and companies in Singapore and Malaysia, supporting familiarity
                with international compliance and institutional governance.
              </p>
            </article>
          </div>
        </section>
        <section className="advisory">
          <div className="advisory-symbol" aria-hidden="true">
            ◇
          </div>
          <div>
            <p className="eyebrow">04 / ADVISORY & GOVERNANCE</p>
            <h2>
              Perspective at
              <br />
              <em>the board table.</em>
            </h2>
          </div>
          <div>
            <p className="lead">Advisory Board member</p>
            <p>
              Contributing to the advisory boards of SEBI-registered Alternative
              Investment Funds, including the{" "}
              <strong>Bharat Heritage Asset Fund</strong>, with insights into
              investment strategy, governance and market positioning.
            </p>
          </div>
        </section>
        <section id="contact" className="section contact">
          <p className="eyebrow">05 / LET’S CONNECT</p>
          <h2>
            A meaningful conversation
            <br />
            is a good <em>place to begin.</em>
          </h2>
          <p>
            For professional connections and investment advisory conversations.
          </p>
          <a className="email-link" href="mailto:hari@hariharan.biz">
            hari@hariharan.biz <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/hariharan-ramachandran-4285b23b"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="tel:+917358065999">+91 73580 65999 ↗</a>
          </div>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#">
          HR<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Hariharan Ramachandran</p>
        <a href="#">Back to top ↑</a>
        <small>
          Professional profile. Content does not constitute investment advice.
        </small>
      </footer>
    </>
  );
}
