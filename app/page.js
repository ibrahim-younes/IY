const projects = [
  {
    number: "01",
    type: "DATA · DASHBOARD",
    title: "Nike Sales Explorer",
    description:
      "An interactive dashboard for exploring and cleaning sales data, with clear visual summaries and practical filters.",
    stack: ["Python", "Pandas", "Dash", "Plotly"],
    accent: "mint",
    href: "https://github.com/ibrahim-younes",
  },
  {
    number: "02",
    type: "MACHINE LEARNING",
    title: "Fashion Image Classifier",
    description:
      "A computer-vision project classifying fashion images with a CNN and comparing it with hybrid machine-learning approaches.",
    stack: ["Python", "TensorFlow", "CNN", "Scikit-learn"],
    accent: "lavender",
    href: "https://github.com/ibrahim-younes",
  },
  {
    number: "03",
    type: "VR · INTERACTIVE LEARNING",
    title: "NoteScape Academy",
    description:
      "A virtual-reality music learning experience built around interactive piano and drum activities.",
    stack: ["Unity", "C#", "OpenXR", "VR"],
    accent: "peach",
    href: "https://itch.io/profile/hima-19",
  },
];

const skills = [
  ["Software", "Python", "Java", "C#", "C++"],
  ["Data & AI", "Pandas", "NumPy", "Plotly", "Machine Learning"],
  ["Interactive", "Unity", "Unreal Engine", "OpenXR", "VR"],
  ["Tools", "Git", "SQL", "Excel", "SAP"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Younes Labs home">
          <span className="brand-mark">Y</span>
          <span>younes<span className="brand-light">labs</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
          <h1>Building useful things<br />with <span className="gradient-text">code & curiosity.</span></h1>
          <p className="hero-sub">
            I&apos;m Ibrahim Younes — a computer science graduate exploring software,
            data, and interactive experiences. I turn ideas into practical, thoughtful projects.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button button-ghost" href="#contact">Get in touch <span>↗</span></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-icon">⌘</span> Software · Data · Interactive</span>
            <span><span className="meta-icon">◎</span> Cairo, Egypt</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract technology illustration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>
          <div className="art-glow"></div>
          <div className="core-card">
            <div className="core-top"><span className="tiny-dot"></span><span className="tiny-dot"></span><span className="tiny-dot"></span><span className="core-label">Y / LAB</span></div>
            <div className="code-lines">
              <div><span className="code-purple">const</span> <span className="code-green">ideas</span> = [</div>
              <div className="indent"><span className="code-orange">&quot;build&quot;</span>,</div>
              <div className="indent"><span className="code-orange">&quot;learn&quot;</span>,</div>
              <div className="indent"><span className="code-orange">&quot;iterate&quot;</span></div>
              <div>];</div>
              <div className="code-spacer"></div>
              <div><span className="code-purple">while</span> (curious) {'{'}</div>
              <div className="indent code-green">makeSomething();</div>
              <div>{'}'}</div>
            </div>
            <div className="core-footer"><span className="pulse"></span> BUILDING WHAT&apos;S NEXT</div>
          </div>
          <div className="floating-tag tag-top"><span className="tag-symbol">✳</span> Creative problem solving</div>
          <div className="floating-tag tag-bottom"><span className="tag-symbol tag-purple">⌘</span> Always learning</div>
          <span className="spark spark-a">✳</span><span className="spark spark-b">✦</span><span className="spark spark-c">·</span>
        </div>
        <a className="scroll-cue" href="#work"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="work-section section shell" id="work">
        <div className="section-heading">
          <div><div className="eyebrow">SELECTED PROJECTS</div><h2>Curiosity, made <span className="gradient-text">concrete.</span></h2></div>
          <p>A few things I&apos;ve explored across data, machine learning, and immersive software.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <div className="project-visual">
                {project.number === "01" ? (
                  <div className="visual-dashboard">
                    <div className="visual-window"><span></span><span></span><span></span></div>
                    <div className="chart-label">SALES OVERVIEW <b>↗</b></div>
                    <div className="chart-bars">{[36, 52, 43, 70, 56, 84, 64, 96, 73, 61, 82, 100].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
                    <div className="chart-base"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>DEC</span></div>
                  </div>
                ) : project.number === "02" ? (
                  <div className="visual-neural"><div className="neural-ring ring-a"></div><div className="neural-ring ring-b"></div><div className="neural-ring ring-c"></div><div className="neural-core">AI</div><span className="neural-node node-a"></span><span className="neural-node node-b"></span><span className="neural-node node-c"></span><span className="neural-node node-d"></span></div>
                ) : (
                  <div className="visual-vr"><div className="vr-halo"></div><div className="vr-headset"><span></span><span></span><i></i></div><div className="vr-star star-a">✦</div><div className="vr-star star-b">✧</div><div className="vr-platform"></div></div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View projects <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="project-note">Project links currently point to my profile pages. Replace them with direct repository or project URLs as you publish each project.</p>
      </section>

      <section className="about-section section" id="about">
        <div className="shell about-grid">
          <div className="about-heading"><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Technical mindset.<br /><span className="gradient-text">Human curiosity.</span></h2></div>
          <div className="about-copy">
            <p className="about-lead">I like understanding how things work — then making them work better.</p>
            <p>My computer science background has taken me from building VR experiences in Unity to exploring data dashboards and machine-learning models in Python. I enjoy learning new tools, working through tricky problems, and creating things that people can actually use.</p>
            <div className="about-stats">
              <div><strong>CS</strong><span>Background</span></div>
              <div><strong>94%</strong><span>Classifier accuracy*</span></div>
              <div><strong>∞</strong><span>Things to learn</span></div>
            </div>
            <p className="fine-print">*Reported result from a Fashion-MNIST project; update this figure if your final evaluation differs.</p>
          </div>
        </div>
      </section>

      <section className="skills-section section shell" id="skills">
        <div className="section-heading">
          <div><div className="eyebrow">MY TOOLKIT</div><h2>Tools I like to <span className="gradient-text">build with.</span></h2></div>
          <p>A flexible toolkit for software, data, and interactive applications.</p>
        </div>
        <div className="skills-grid">
          {skills.map(([category, ...items], index) => (
            <div className="skill-card" key={category}><div className="skill-index">0{index + 1}</div><h3>{category}</h3><div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div></div>
          ))}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-card">
          <div className="contact-orb orb-one"></div><div className="contact-orb orb-two"></div>
          <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
          <h2>Let&apos;s make something<br /><span className="gradient-text">meaningful.</span></h2>
          <p>I&apos;m open to entry-level opportunities, collaborations, and interesting problems to solve.</p>
          <a className="button button-primary" href="mailto:hello@youneslabs.dev">Say hello <span>↗</span></a>
          <span className="contact-note">Replace this placeholder email with your preferred contact address.</span>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#home"><span className="brand-mark">Y</span><span>younes<span className="brand-light">labs</span></span></a>
        <span>Designed with curiosity. Built with code.</span>
        <div className="footer-links"><a href="https://github.com/ibrahim-younes" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://itch.io/profile/hima-19" target="_blank" rel="noreferrer">itch.io ↗</a></div>
        <span className="copyright">© {new Date().getFullYear()} Younes Labs</span>
      </footer>
    </main>
  );
}
