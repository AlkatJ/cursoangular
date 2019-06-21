import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Color } from '../model/colors.response';
import { ApiService } from '../services/api.service';
import { DataSource } from '@angular/cdk/table';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-table-colors',
  templateUrl: './table-colors.component.html',
  styleUrls: ['./table-colors.component.css']
})
export class TableColorsComponent implements OnInit {
  displayedColumns = ['id','name','year','color','pantone'];
  dataColors = new MatTableDataSource<Color>();
  constructor(private _apiservice: ApiService,
              private _dataservice: DataserviceService) {
    this._dataservice.setIsLoading(true);
    this._apiservice.getColors().subscribe(res=>{
      this.dataColors.data=res.data;
      this._dataservice.setIsLoading(false);
    },error=>{
      this._dataservice.setIsLoading(false);
      this._dataservice.setMessage(error);
    });
  }

  ngOnInit() {

  }

}
