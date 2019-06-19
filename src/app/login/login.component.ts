import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin:FormGroup;

  constructor(private _snackbar: MatSnackBar,
              private _apiservice: ApiService,
              private _formbuilder: FormBuilder,
              private _dataservice: DataserviceService) {
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
      this._snackbar.open(res.token,'Ok',{
        duration:2000,
      });
    }, err =>{
      this._dataservice.setIsLoading(false);
      this._snackbar.open(err.error.error,'Ok',{
        duration:2000,
      });
    }, ()=>{
      console.log("Ya terminé");
      this._dataservice.setIsLoading(false);
    });
  }
}
