import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { employee } from '../emp';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
})
export class TrackingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: any[] = ['name', 'position', 'mobile', 'action'];

  GlobalData: any;
  country;

  mh;

  dhule;
  dhuledeath;
  dhuleconfirm;
  dhulerecover;

  indiadata = [];

  loading = false;
  dloading = false;

  indiaconfirm;
  indiarecoverd;
  indiadeath;

  constructor(private track: TrackService) {}

  ngOnInit() {
    this.loading = true;
    this.dloading = true;

    this.track.getdata().subscribe((res) => {
      this.GlobalData = res;

      this.indiadata = this.GlobalData.data.summary;
      this.indiaconfirm = this.GlobalData.data.summary.confirmedCasesIndian;
      this.loading = false;
      this.indiarecoverd = this.GlobalData.data.summary.discharged;
      this.indiadeath = this.GlobalData.data.summary.deaths;
    });

    this.track.getdhuledata().subscribe((res) => {
      this.mh = res;
      this.dhule = this.mh.Maharashtra.districtData.Dhule;
      this.dhuleconfirm = this.mh.Maharashtra.districtData.Dhule.confirmed;
      this.dhulerecover = this.mh.Maharashtra.districtData.Dhule.recovered;
      this.dhuledeath = this.mh.Maharashtra.districtData.Dhule.deceased;
      this.dloading = false;
    });
  }
}
