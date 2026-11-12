"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateVideo = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (mediaQuery.matches || !Number.isFinite(video.duration) || video.duration <= 0) return;

        const rect = section.getBoundingClientRect();
        const scrollableDistance = section.offsetHeight - window.innerHeight;
        if (scrollableDistance <= 0) return;

        const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
        const targetTime = progress * video.duration;

        if (Math.abs(video.currentTime - targetTime) > 0.035) {
          video.currentTime = targetTime;
        }
      });
    };

    video.addEventListener("loadedmetadata", updateVideo);
    window.addEventListener("scroll", updateVideo, { passive: true });
    window.addEventListener("resize", updateVideo);
    updateVideo();

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", updateVideo);
      window.removeEventListener("scroll", updateVideo);
      window.removeEventListener("resize", updateVideo);
    };
  }, []);

  return (
    <section className="film-section" ref={sectionRef} aria-label="Code Crew introduction">
      <div className="film-sticky">
        <div className={`film-visual ${hasVideo ? "has-video" : ""}`}>
          <video
            ref={videoRef}
            className="film-video"
            src="/media/code-crew-hero.mp4"
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onLoadedMetadata={() => setHasVideo(true)}
            onError={() => setHasVideo(false)}
          />
          <div className="film-fallback" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="core-shape"><span>CC</span></div>
            <div className="fallback-caption">IDEAS INTO SYSTEMS</div>
          </div>
          <div className="film-shade" />
          <div className="film-content">
            <p className="eyebrow film-eyebrow">Independent digital studio · Est. 2026</p>
            <h1>Dream it.<br /><em>We build it.</em></h1>
            <p className="hero-description">Websites, applications and software made to move your business forward.</p>
            <a className="hero-link" href="#services">Explore what we do</a>
          </div>
          <div className="film-bottom">
            <span>DESIGN / ENGINEERING / DIGITAL</span>
            <span className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</span>
            <span>NAIROBI · WORKING EVERYWHERE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
