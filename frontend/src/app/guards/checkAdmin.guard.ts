import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckAdmin implements CanActivate {

  public userData;

  constructor(private router: Router) {
    this.userData = JSON.parse(localStorage.getItem('UserData'));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.userData.usertype === 'admin') {
      return true;
    }
    return this.router.parseUrl('');
  }
}
