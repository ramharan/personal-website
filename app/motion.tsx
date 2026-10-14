"use client";
import { useEffect } from "react";
export function Motion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(min-width: 701px) and (hover:hover) and (pointer:fine)");
    const scene = document.querySelector<HTMLElement>(".sculpture");
    const art = document.querySelector<HTMLElement>(".hero-art");
    const button = document.querySelector<HTMLButtonElement>(".scene-reset");
    const animations = new Set<Animation>(); let frame = 0; let angle = 0;
    const reset = () => { cancelAnimationFrame(frame); if(scene) scene.style.transform = ""; document.querySelectorAll<HTMLElement>(".expertise-card").forEach(el => el.style.transform = ""); animations.forEach(a => a.cancel()); animations.clear(); };
    const move = (event: PointerEvent) => {
      if(reduced.matches || !fine.matches || event.pointerType !== "mouse" || !scene || !art) return;
      const r = art.getBoundingClientRect(); cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => { scene.style.transform = `rotateX(${(event.clientY-r.top)/r.height*12-6}deg) rotateY(${(event.clientX-r.left)/r.width*24-12}deg)`; });
    };
    const rotate = () => { if(reduced.matches || !fine.matches || !scene) return; angle = angle === 0 ? 20 : 0; scene.style.transform = `rotateY(${angle}deg)`; };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(!entry.isIntersecting) return; observer.unobserve(entry.target);
      if(reduced.matches) return;
      const a = entry.target.animate([{opacity:.6,transform:"translateY(24px)"},{opacity:1,transform:"translateY(0)"}],{duration:650,easing:"cubic-bezier(.2,.7,.2,1)"}); animations.add(a); a.onfinish=()=>animations.delete(a);
    }),{threshold:.12});
    document.querySelectorAll(".about-copy,.expertise-card,.timeline article,.advisory,.contact h2").forEach(el=>observer.observe(el));
    art?.addEventListener("pointermove",move,{passive:true}); art?.addEventListener("pointerleave",reset); button?.addEventListener("click",rotate); reduced.addEventListener("change",reset); fine.addEventListener("change",reset);
    return () => {observer.disconnect();reset();art?.removeEventListener("pointermove",move);art?.removeEventListener("pointerleave",reset);button?.removeEventListener("click",rotate);reduced.removeEventListener("change",reset);fine.removeEventListener("change",reset);};
  },[]);
  return null;
}
