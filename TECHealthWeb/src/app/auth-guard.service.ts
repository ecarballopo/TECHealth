import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    //return true;
    return this.authService.isAuthenticated().pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }else{
            console.log("Logueado");
            //this.router.navigate(['pages/administrativo']);
          }
        }),
      ); // canActive can return Observable<boolean>, which is exactly what isAuhenticated returns
  }
}