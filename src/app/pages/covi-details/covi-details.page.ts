import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { NovelCovid } from 'novelcovid';

@Component({
  selector: 'app-covi-details',
  templateUrl: './covi-details.page.html',
  styleUrls: ['./covi-details.page.scss'],
})
export class CoviDetailsPage implements OnInit {
  @ViewChild('barChart',{static: false}) barChart;

  bars:any;
  country_history;
  country_details;
  deaths_date: any[] = new Array();
  deaths_data: any[] = new Array();

  cases_date: any[] = new Array();
  cases_data: any[] = new Array();
  bar_type ="bar";
  track;

  
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.track = new NovelCovid();
  }

  ngOnInit(){

  }
  ionViewDidEnter() {
    let name = this.activatedRoute.snapshot.paramMap.get('id');

    this.track.historical(null, name).then(country_history => {
      this.country_history = country_history
      let deaths = country_history['timeline']['deaths'];
      let cases = country_history['timeline']['cases'];

      for ( const [key,value] of Object.entries( cases ) ) {
        this.cases_date.push(key);
        this.cases_data.push(value);
      }

      for ( const [key,value] of Object.entries( deaths ) ) {
        this.deaths_date.push(key);
        this.deaths_data.push(value);
      }

    });
    this.track.countries(name).then(country_details =>{
              this.country_details = country_details;
              this.createBarChart();
      })
  }
  

  createBarChart() {
    let ctx = this.barChart.nativeElement;
    this.bars = new Chart(ctx, {
      type: this.bar_type,
      data: {
        labels: this.cases_date,
        datasets: [{
          label: 'Cases',
          data: this.cases_data,
          backgroundColor: '#ddee44', // array should have same number of elements as number of dataset
          borderColor: '#ddee44',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Deaths',
          data: this.deaths_data,
          backgroundColor: '#dd1144', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      ptions: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: true,
          text: ''
        },
        scales: {
          yAxes: [{
            type: 'bar', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
          }, {
            type: 'bar', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'right',
            id: 'y-axis-2',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          }],
        }
      },
    });
  }

  setBarType(event){
    this.bar_type = event.srcElement.value;
    this.createBarChart();

  }
}