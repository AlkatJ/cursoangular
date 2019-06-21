import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin:FormGroup;
  loading =false;

  constructor(private _snackbar: MatSnackBar,
              private _apiservice: ApiService,
              private _formbuilder: FormBuilder,
              private _dataservice: DataserviceService,
              private _roter : Router) {
    this._dataservice.getIsLoading().subscribe(val => {
      console.log('Isloading', val);
      this.loading = val;
    });
    this.formlogin =this._formbuilder.group({
      username:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });
    this.formlogin.get('password').valueChanges.subscribe( val=> {
      console.log(this.formlogin.get('password').value  );
      if(val.length>=8){
        alert('ya te pasaste');
      }
    });
               }

  ngOnInit() {
  }

  login(){
    console.log(this.formlogin.get('username').value);
    console.log(this.formlogin.get('password').value);
    this._dataservice.setIsLoading(true);

    this._apiservice.login(this.formlogin.get('username').value,this.formlogin.get('password').value).subscribe( res=>{
      console.log("Recibí respuesta");
      this._dataservice.setMessage(res.token);
      this._dataservice.setToken(res.token);
      this._roter.navigate(['colors']);
    }, err =>{
      this._dataservice.setIsLoading(false);
      this._dataservice.setMessage(err.error.error);
    }, ()=>{
      console.log("Ya terminé");
      this._dataservice.setIsLoading(false);
    });
  }
}
