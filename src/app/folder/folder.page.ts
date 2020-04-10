import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { NovelCovid } from 'novelcovid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  data;
  news;
  updated_at;
  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient
    ) { }

  ngOnInit(
  ) {
  }

  
  ionViewWillEnter(){
    const track = new NovelCovid();
      track.all().then(data => {
        this.data = data;
      });
  }

  getDateFormat(timestamp){
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }




}
