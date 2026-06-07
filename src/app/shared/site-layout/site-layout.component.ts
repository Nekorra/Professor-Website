import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
})
export class SiteLayoutComponent implements OnInit, OnDestroy {
  menuOpen = false;
  scrolled = false;
  isHome = false;
  homeIntroComplete = true;
  homeHeaderRevealed = false;
  readonly year = new Date().getFullYear();

  private routerSub?: Subscription;
  private homeIntroTimer?: ReturnType<typeof setTimeout>;
  /** Matches hero masthead + wordmark finish — navbar enters after both. */
  private readonly homeIntroMs = 2150;

  readonly navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Awards', path: '/awards' },
    { label: 'Publications', path: '/publications' },
    { label: 'Research', path: '/research' },
    { label: 'Students', path: '/students' },
    { label: 'CV', path: '/cv' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.evaluateRoute(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.evaluateRoute(e.urlAfterRedirects);
        this.menuOpen = false;
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.clearHomeIntro();
    document.body.style.overflow = '';
  }

  /** Hide navbar during the cinematic home hero intro. */
  get homeIntroActive(): boolean {
    return this.isHome && !this.homeIntroComplete && !this.scrolled && !this.menuOpen;
  }

  /** Header is transparent only over the home hero, before scrolling. */
  get transparent(): boolean {
    return this.isHome && !this.scrolled && !this.menuOpen;
  }

  private evaluateRoute(url: string): void {
    const path = (url.split('?')[0] || '').replace(/\/+$/, '');
    this.isHome = path === '' || path === '/home';

    if (this.isHome) {
      this.startHomeIntro();
      return;
    }

    this.clearHomeIntro();
    this.homeIntroComplete = true;
    this.homeHeaderRevealed = false;
  }

  private startHomeIntro(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.homeIntroComplete = true;
      this.homeHeaderRevealed = false;
      return;
    }

    this.homeIntroComplete = false;
    this.homeHeaderRevealed = false;
    this.clearHomeIntro();
    this.homeIntroTimer = setTimeout(() => {
      this.homeIntroComplete = true;
      this.homeHeaderRevealed = true;
    }, this.homeIntroMs);
  }

  private clearHomeIntro(): void {
    if (this.homeIntroTimer) {
      clearTimeout(this.homeIntroTimer);
      this.homeIntroTimer = undefined;
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const wasScrolled = this.scrolled;
    this.scrolled = window.scrollY > 16;

    if (this.scrolled && !wasScrolled && this.isHome && !this.homeIntroComplete) {
      this.homeIntroComplete = true;
      this.homeHeaderRevealed = true;
      this.clearHomeIntro();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    if (this.homeIntroActive) {
      this.homeIntroComplete = true;
      this.homeHeaderRevealed = true;
      this.clearHomeIntro();
    }

    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}
