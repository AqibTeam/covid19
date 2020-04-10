import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform } from '@ionic/angular';
import { Data } from '@angular/router';
@Component({
  selector: 'app-covi-table',
  templateUrl: './covi-table.page.html',
  styleUrls: ['./covi-table.page.scss'],
})
export class CoviTablePage implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;


  constructor(
    private http: HttpClient,
    private loadingController:LoadingController,
  ) {
    this.columns = [
      { name: 'Country'},
      { name: 'Cases'},
      { name: 'Today Cases'},
      { name: 'Deaths'},
      { name: 'Today Deaths'},
      { name: 'Recovered'},
      { name: 'Critical'}
    ];
  }
  
  ngOnInit() {

  }

  ionViewWillEnter(){
    this.http.get<Data>('https://coronavirus-19-api.herokuapp.com/countries').subscribe((res) => {
      this.rows = res;
    });
  }

  async showUpdating() {
    this.ionViewWillEnter();
    const loading = await this.loadingController.create({
      message: 'Updateing...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
