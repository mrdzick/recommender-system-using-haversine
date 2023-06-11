import { Component, inject } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { WasteBankContainerComponent } from './components/waste-bank-container/waste-bank-container.component'
import { WasteBank } from './interfaces/WasteBank.interface';
import { WasteBankService } from './services/waste-bank.service';
import { Buyer } from './interfaces/Buyer.interface';
import { BuyerService } from './services/buyer.service';

@Component({
  standalone: true,
  imports: [
    MapComponent,
    WasteBankContainerComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wasteBankList: WasteBank[];
  wasteBankService: WasteBankService = inject(WasteBankService);

  buyerList: Buyer[];
  buyerService: BuyerService = inject(BuyerService);

  constructor () {
    this.wasteBankList = this.wasteBankService.getAllWasteBanks();
    this.buyerList = this.buyerService.getAllBuyers();
  }
}
