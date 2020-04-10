import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public isMD = this.platform.is('android');
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Countries Card',
      url: 'covi-card',
      icon: 'list'
    },
    {
      title: 'Countries Table',
      url: 'covi-table',
      icon: 'apps'
    }
  ];
  public labels = ['My CV', 'Live Cricket', 'La Brasa Kebab', 'BookSwap'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  downloadApp(){
    window.open('https://covid19.aqibteam.com/assets/app.apk', '_blank', 'location=yes');
   }

  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.notificationEveyDay();
  }

  notificationEveyDay() {
    this.localNotifications.schedule({
      text: "Coronavirus data updated",
      title: 'COVID-19 ',
      trigger: { at: new Date(new Date().getTime() + 600) },
    });
}
}
