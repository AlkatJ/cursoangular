import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin:FormGroup;

  constructor(private _snackbar: MatSnackBar,
              private _apiservice: ApiService,
              private _formbuilder: FormBuilder) {
    this.formlogin =this._formbuilder.group({
      username:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });
               }

  ngOnInit() {
  }

  login(){
    // console.log(this.username);
    // console.log(this.password);
    // if(this.password.length>0 && this.username.length>0){
    //   this._apiservice.login(this.username,this.password).subscribe( res=>{
    //     console.log("Recibí respuesta");
    //     this._snackbar.open(res.token,'Ok',{
    //       duration:2000,
    //     });
    //   }, err =>{
    //     this._snackbar.open(err.error.error,'Ok',{
    //       duration:2000,
    //     });
    //   }, ()=>{
    //     console.log("Ya terminé");
    //   });
    // }else{
    //   this._snackbar.open('favor de ingresar usuario y contraseña','',{
    //     duration:2000,
    //   });
    // }
  }
}
