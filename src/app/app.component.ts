import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private _dataService: DataserviceService){
    this._dataService.getIsLoading().subscribe(val => {
      console.log('Isloading', val);
      this.loading = val;
    });
  }
}
