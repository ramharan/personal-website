"use client";
import { useEffect, useRef, useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setCompact(window.scrollY > 60);
    scroll(); window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return <header className={`header${compact ? " compact" : ""}${open ? " menu-open" : ""}`}>
    <a className="wordmark" href="#" aria-label="Hariharan Ramachandran home">HR<span>.</span><small>HARIHARAN<br />RAMACHANDRAN</small></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
    <noscript><style>{`.menu-toggle{display:none!important}@media(max-width:700px){.header{position:relative;height:auto!important;min-height:68px;flex-wrap:wrap;margin-bottom:0}.header nav{position:static;visibility:visible;opacity:1;transform:none;width:100%;border:0}.hero{padding-top:40px}}`}</style></noscript>
    <nav id="main-nav" aria-label="Main navigation" onKeyDown={e => { if(e.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}>
      {[['about','About'],['expertise','Expertise'],['experience','Experience'],['contact','Let’s connect ↗']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>;
}
