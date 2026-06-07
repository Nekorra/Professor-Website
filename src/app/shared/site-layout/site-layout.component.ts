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
  readonly year = new Date().getFullYear();

  private routerSub?: Subscription;

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
    document.body.style.overflow = '';
  }

  /** Header is transparent only over the home hero, before scrolling. */
  get transparent(): boolean {
    return this.isHome && !this.scrolled && !this.menuOpen;
  }

  private evaluateRoute(url: string): void {
    const path = (url.split('?')[0] || '').replace(/\/+$/, '');
    this.isHome = path === '' || path === '/home';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 16;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}
