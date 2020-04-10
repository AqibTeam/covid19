import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NovelCovid } from 'novelcovid';
@Component({
  selector: 'app-covi-card',
  templateUrl: './covi-card.page.html',
  styleUrls: ['./covi-card.page.scss'],
})
export class CoviCardPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;


  countries;
  searchCountry: any;

items = [];
count: number = 0;
track;

  constructor(
    public toastController: ToastController
  ) {
    this.track = new NovelCovid();
  }


  ionViewWillEnter(){
    this.items = [];
    this.track.countries().then(countries =>{
      this.countries = countries
      for (let i = 0; i < 10; i++) {  // here you can limit the items according to your needs.
        this.items.push(this.countries[this.count]);   // your JSON data which you want to display
        this.count++ //i am using a count variable to keep track of inserted records to avoid inserting duplicate records on infinite scroll
      }
    })
  }


  ngOnInit() {

  }

  search(value) {
    let search = value['target']['value'];
    if(search === "" || search === null){
      this.ionViewWillEnter();
    }else{
      this.track.countries(search).then(countries => {
        this.items =[];
        this.items.push(countries);
      },error => {
        this.items =[];
        this.presentToast();
    });
    }
  }

  doInfinite(event) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {   
        this.items.push(this.countries[this.count]); // this will start pushing next 5 items
        this.count++
      }
  
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.countries.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Country not found.',
      duration: 2000
    });
    toast.present();
  }

}
