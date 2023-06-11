import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { WasteBank } from 'src/app/interfaces/WasteBank.interface';
import { Buyer } from 'src/app/interfaces/Buyer.interface';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() wasteBankList!: WasteBank[];
  @Input() buyerList!: Buyer[];

  private map: any;

  ngAfterViewInit() {
    this.map = L.map('map').setView({
      lat: -6.2075480375766325,
      lng: 106.84144067081318
    },
    8);
    this.initMap();
    this.createWasteBankMarker(this.wasteBankList);
    this.createBuyerMarker(this.buyerList);
  }

  private initMap(): void {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private createWasteBankMarker(wasteBankList: WasteBank[]): void {
    wasteBankList.forEach((wasteBank) => {
      L.marker({
        lat: wasteBank.latitude,
        lng: wasteBank.longitude
      }, {
        title: wasteBank.companyName,
        icon: L.icon({
          iconUrl: '../../../assets/red_marker.png',
          iconSize: [25, 41],
          tooltipAnchor: [0, -41]
        })
      }).addTo(this.map);
    })
  }

  private createBuyerMarker(buyerList: Buyer[]): void {
    buyerList.forEach((buyer) => {
      L.marker({
        lat: buyer.latitude,
        lng: buyer.longitude
      }, {
        title: buyer.companyName,
        icon: L.icon({
          iconUrl: '../../../assets/black_marker.png',
          iconSize: [25, 41],
          tooltipAnchor: [0, -41]
        })
      }).addTo(this.map);
    })
  }
}
