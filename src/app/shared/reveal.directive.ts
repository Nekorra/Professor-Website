import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

/**
 * Adds `is-visible` to any element with the `reveal` class once it scrolls
 * into view, driving a one-shot entrance animation. Degrades gracefully:
 * without IntersectionObserver support, content is shown immediately.
 */
@Directive({ selector: '.reveal' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Arm the hidden initial state before first paint. Skipped when the user
    // prefers reduced motion or IntersectionObserver is unavailable, leaving
    // content visible.
    if (
      !prefersReducedMotion &&
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window
    ) {
      this.host.nativeElement.classList.add('reveal--armed');
    }
  }

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;

    if (!el.classList.contains('reveal--armed')) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );
    this.observer.observe(el);

    // Large async sections may already be in view when mounted — show immediately.
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
        this.observer?.unobserve(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
