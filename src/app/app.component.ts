import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private _dataService: DataserviceService,
              private _snackbar: MatSnackBar,
              private _dataservice: DataserviceService,
              private _router: Router){
    this._dataService.getIsLoading().subscribe(val => {
      console.log('Isloading', val);
      this.loading = val;
    });
    this._dataService.getNessage().subscribe(msg =>{
      this._snackbar.open(msg,'Ok',{
        duration:2000,
      });
    });
  }

  async logout(){
    this._dataService.setIsLoading(true);
    await this.delay(2000);
    sessionStorage.removeItem('token');
    this._router.navigate(['login']);
    this._dataService.setIsLoading(false);
  }
  userLogged(){
    return this._dataservice.getToken() && this._dataservice.getToken().length > 0;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
