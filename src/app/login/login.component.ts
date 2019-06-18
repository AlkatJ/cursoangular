import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    if(this.password.length>0 && this.username.length>0){

    }else{
      this._snackbar.open('favor de ingresar usuario y contraseña','',{
        duration:2000,
      });
    }
  }
}
