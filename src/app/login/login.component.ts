import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private _snackbar: MatSnackBar,
              private _apiservice: ApiService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    if(this.password.length>0 && this.username.length>0){
      this._apiservice.login(this.username,this.password).subscribe( res=>{
        this._snackbar.open(res.token,'Ok',{
          duration:2000,
        });
      });

    }else{
      this._snackbar.open('favor de ingresar usuario y contraseña','',{
        duration:2000,
      });
    }
  }
}
