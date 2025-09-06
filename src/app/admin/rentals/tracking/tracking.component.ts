import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';

@Component({
  selector: 'app-tracking',
  imports: [],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss'
})
export class TrackingComponent {
 public routes=routes;
  private infowindow!: google.maps.InfoWindow;
  private slider!: number;
  private bounds = new google.maps.LatLngBounds();
  private current = 0;
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
    this.initializeMap();
  }
  ngOnDestroy() {
    window.clearTimeout(this.slider);
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
