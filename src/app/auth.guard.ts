// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const cardId = route.params['id'];

    // ✅ Allow access without auth if id is 264 and route is preview-card
    if (state.url.startsWith('/cards/preview-card/') && cardId === '264') {
      return true;
    }

    const isAuthenticated = localStorage.getItem('user_id') !== null;

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
