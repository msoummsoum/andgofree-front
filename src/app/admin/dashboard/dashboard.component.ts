import { Component, Renderer2, ViewChild } from '@angular/core';
import { routes } from '../../shared/routes';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  dropShadow: ApexDropShadow;
}
@Component({
  selector: 'app-dashboard',
  imports: [GoogleMapsModule,RouterModule,NgApexchartsModule,BsDatepickerModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 routes=routes;
  private infowindow!: google.maps.InfoWindow;
  private slider!: number;
  private bounds = new google.maps.LatLngBounds();
  private current = 0;
  @ViewChild('chart') chart!: ChartComponent;
  public salesStatistics: Partial<ChartOptions> | any;
  public statistics_chart: Partial<ChartOptions> | any;
  public planOverview: Partial<ChartOptions> | any;
  public Areachart: Partial<ChartOptions> | any;
  public Areachart2: Partial<ChartOptions> | any;
  public Areachart3: Partial<ChartOptions> | any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(private renderer:Renderer2) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  map: any;
  locations = [
    {
    "id":1,
	"car_name":"Ford Endeavour",
	"speciality":"Speed : 20/Kms",
	"lat":53.470692,
	"lng":-2.220328,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-01.jpg'
	}, {		
	"id":2,
	"car_name":"Ferrari 458 MM",
	"speciality":"Speed : 25/Kms",
	"address":"Newyork, USA",
	"lat":53.469189,
	"lng":-2.199262,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-02.jpg'
	}, {
	"id":3,
	"car_name":"Ford Mustang ",
	"speciality":"Speed : 19/Kms",
	"lat":53.468665,
	"lng":-2.189269,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-03.jpg'
	}, {
	"id":4,
	"car_name":"Toyota Tacoma 4",
	"speciality":"Speed : 20/Kms",
	"lat":53.463894,
	"lng":-2.177880,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-04.jpg'
	}, {
	"id":5,
	"car_name":"Chevrolet Pick Truck",
	"speciality":"Speed : 20/Kms",
	"lat":53.466359,
	"lng":-2.213314,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-05.jpg'
	}, {
	"id":6,
	"car_name":"Etios Carmen",
	"speciality":"Speed : 20/Kms",
	"lat":53.463906,
	"lng":-2.213271,
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-06.jpg'
	}, {
	"id":7,
	"car_name":"Kia Soul 2016",
	"speciality":"Speed : 20/Kms",
	"lat":53.461974,
	"lng":-2.210661,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-07.jpg'
	}, {
	"id":8,
	"car_name":"Chevrolet Camaro",
	"speciality":"Speed : 20/Kms",
	"lat":53.458785,
	"lng":-2.188532,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-08.jpg'
	}, {
	"id":9,
	"car_name":"Toyota Camry SE 350",
	"speciality":"Speed : 20/Kms",
	"lat":53.4558571,
	"lng":-2.1950372,
	
	"profile_link":routes.carDetails,
	"image":'assets/admin/img/car/car-09.jpg'
	}
  ];
  ngOnInit(): void {
    this.renderer.addClass(document.body,'date-picker')
    this.initializeMap();
    this.Areachart = {
      series: [{
        name: "Net Profit",
        data: [9,4,7,7,4,9,8]
      }],

      chart: {
        type: 'bar',
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#f7a1a1"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#f7a1a1",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#D0E3E6"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },

        marker: {
          show: true
        }
      }
    };

    this.Areachart3 = {
      series: [{
        name: "Net Profit",
        data: [9,4,7,7,4,9,8]
      }],

      chart: {
        type: 'bar',
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#F0ECFF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },

        marker: {
          show: true
        }
      }
    };
    this.Areachart2 = {
      series: [{
        name: "Net Profit",
        data: [9,4,7,7,4,9,8]
      }],

      chart: {
        type: 'bar',
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#FFF3EB"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },

        marker: {
          show: true
        }
      }
    };
    this.salesStatistics={
      series: [{
        name: 'Revenue',
        data: [22, 22, 28, 25, 15, 22, 20],
        }, {
        name: 'Expenses',
        data: [-9, -25, -5, -10, -10, -25, -5]
        }],
        grid: {
          padding: {
            top: 5, // Adds space on the left
            right: 5, // Adds space on the right
          },
        },
        colors: ['#FFA633', '#FFDBAD'],
        chart: {
          type: 'bar',
          height: 290,
          stacked: true,        
          zoom: {
            enabled: true
          }
        },
        responsive: [{
        breakpoint: 280,
        options: {
          legend: {
          position: 'bottom',
          offsetY: 0
          }
        }
        }],
        plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
        },
        },
          dataLabels: {
          enabled: false
        },
          yaxis: {
            labels: {
              offsetX: -15,
              formatter: (val:any) => {
                return val / 1 + 'K'
              },
            },
              min: -30,
              max: 30,
              tickAmount: 6,
            },
        xaxis: {
        categories: [' 25 Jan ', '26 Jan', '27 Jan', '28 Jan',
          '29 Jan', '30 Jan' , '31 Jan'
        ],
        },
        legend: {show: false},
        fill: {
        opacity: 1
        }
    }
    this.statistics_chart={
      chart: {
        type: 'heatmap',
        height: 360,
    },
    plotOptions: {
      heatmap: {
        radius: 100,
        enableShades: false,
        colorScale: {
          ranges: [{
              from: 0,
              to: 0,
              color: '#E7F1F3'
            },
            {
              from: 1,
              to: 20,
              color: '#127384'
            },
          ],
        },
    
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
   stroke: {
      width: 5, 
      colors: ['#fff']
    },
    grid: {
      show: false,
      borderColor: '#333',
      strokeDashArray: 7,
     xaxis: {
        lines: {
          show: false,
        }
      },
      padding: {
        top: -30,
        bottom: 0,
        left: 0,
        right: -20, // Minimize padding around the heatmap
      },
    },
    xaxis: {
      axisBorder: { show: false }, 
      axisTicks: { show: false } // ❌ Removes axis ticks
  },
    yaxis: {
      labels: {
        offsetX: -15, // Adjust horizontal alignment
      },
    },
      series: [
        {
          name: "08 AM",
          data: [{
            x: '25 Jan',
            y: 0
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 2
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 0
          },
          {
            x: '30 Jan',
            y: 3
          },
        ]
        },
        {
          name: "10 Am",
          data: [{
            x: '25 Jan',
            y: 2
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 4
          }, 
          {
            x: '28 Jan',
            y: 3
          },
          {
            x: '29 Jan',
            y: 0
          },
          {
            x: '30 Jan',
            y: 0
          },
        ]
        },
        {
          name: "12 PM",
          data: [{
            x: '25 Jan',
            y: 0
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 3
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 0
          },
          {
            x: '30 Jan',
            y: 2
          },
        ]
        },
        {
          name: "02 PM",
          data: [{
            x: '25 Jan',
            y: 0
          },
          {
            x: '26 Jan',
            y: 1
          }, 
          {
            x: '27 Jan',
            y: 0
          }, 
          {
            x: '28 Jan',
            y: 5
          },
          {
            x: '29 Jan',
            y: 0
          },
          {
            x: '30 Jan',
            y: 0
          },
        ]
        },
        {
          name: "04 PM",        
          data: [{
            x: '25 Jan',
            y: 2
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 0
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 3
          },
          {
            x: '30 Jan',
            y: 0
          },
        ]
        },
        {
          name: "06 PM",      
          data: [{
            x: '25 Jan',
            y: 2
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 0
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 3
          },
          {
            x: '30 Jan',
            y: 0
          },
        ]
        },
        {
          name: "08 PM",    
          data: [{
            x: '25 Jan',
            y: 0
          },
          {
            x: '26 Jan',
            y: 4
          }, 
          {
            x: '27 Jan',
            y: 0
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 0
          },
          {
            x: '30 Jan',
            y: 1
          },
        ]
        },
        {
          name: "10 PM",    
          data: [{
            x: '25 Jan',
            y: 0
          },
          {
            x: '26 Jan',
            y: 0
          }, 
          {
            x: '27 Jan',
            y: 0
          }, 
          {
            x: '28 Jan',
            y: 0
          },
          {
            x: '29 Jan',
            y: 3
          },
          {
            x: '30 Jan',
            y: 3
          },
        ]
        }
  ]
}
  }
  ngOnDestroy() {
    window.clearTimeout(this.slider);
    this.renderer.removeClass(document.body,'date-picker')
  }
  initializeMap(): void {
    const mapOptions: google.maps.MapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(53.470692, -2.220328),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
    this.map['slide'] = true;

    this.infowindow = new google.maps.InfoWindow({ content: 'loading...' });
    google.maps.event.addListener(this.infowindow, 'closeclick', () => {
      this.infowindow.close();
    });

    this.setMarkers();
    this.slider = window.setTimeout(() => this.showRandomLocation(), 3000);
  }
  setMarkers(): void {
    this.locations.forEach((location) => {
      const latlng = new google.maps.LatLng(location.lat, location.lng);
      const marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: 'assets/admin/car-map.png',
      });

      this.bounds.extend(marker.getPosition() as google.maps.LatLng);
      google.maps.event.addListener(marker, 'click', () => {
        this.setInfoContent(location);
        this.infowindow.open(this.map, marker);
        window.clearTimeout(this.slider);
      });
    });

    this.map.fitBounds(this.bounds);

    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      if (this.map.getZoom() > 16) this.map['slide'] = false;
    });
  }

  showRandomLocation(): void {
    if (!this.map['slide'] || this.locations.length === 0) return;

    let next: number;
    do {
      next = Math.floor(Math.random() * this.locations.length);
    } while (next === this.current);

    this.current = next;
    const marker = this.locations[next];
    this.setInfoContent(marker);
    this.infowindow.open(this.map, null); // Use a suitable reference for marker if needed
  }

  setInfoContent(marker: any): void {
    const content = `
      <div class="card border-0 mb-0" style="width: 100%; display: inline-block;">
	<div class="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">
		<div class="d-flex align-items-center">
			<a href=  ${marker.profile_link} class="avatar flex-shrink-0 me-2avatar-rounded" tabindex="0" target="_blank">
				<img class="img-fluid" alt=" ${ marker.car_name} " src=" ${marker.image}">'
			</a>
			<div class="ms-2">
				<h6 class="fs-14 fw-semibold mb-1">
					<a href=" ${marker.profile_link} " tabindex="0"> ${marker.car_name}</a>
				</h6>
				<p class="fs-13">  ${marker.speciality} </p>
			</div>
		</div>
		<div>
			<a  href="  ${marker.profile_link} " tabindex="0" class="text-decoration-underline fw-medium link-violet">View</a>
		</div>
	</div>
</div>`;
    this.infowindow.setContent(content);
  }
}
