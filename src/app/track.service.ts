import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { employee } from './emp';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  // url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-10-2020.csv`;

  url = `https://api.covid19api.com/summary`;

  disturl = `https://api.covid19india.org/state_district_wise.json`;

  newurl = `https://api.rootnet.in/covid19-in/stats/latest`;

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.newurl);
  }

  getdhuledata() {
    return this.http.get(this.disturl);
  }
}
