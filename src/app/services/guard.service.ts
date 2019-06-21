import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const access = this._dataservice.getToken() && this._dataservice.getToken().length > 0;
    if(!access){
      this._router.navigate(['login']);
    }
    return access;
  }

  constructor(private _dataservice: DataserviceService, private _router: Router) { }
}
