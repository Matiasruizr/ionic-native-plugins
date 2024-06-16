import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef | undefined;

  map: any;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  async initMap() {
    try { 
      const coordinates = await Geolocation['getCurrentPosition']();
      console.log('Current position:', coordinates); // Working with new way to call Geolocation

      const mapOptions = {
        center: new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude),
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer?.nativeElement, mapOptions);

      const marker = new google.maps.Marker({
        title: 'Your current location',
        position: mapOptions.center,
        map: this.map
      });

    } catch (error) {
      console.error('Error al cargar el mapa', error);
    }
  }
}
