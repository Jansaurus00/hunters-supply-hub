import { Component, inject } from '@angular/core';
import { HunterShop } from '../services/hunter-shop';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-consumables',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './consumables.html',
  styleUrl: './consumables.css',
})
export class Consumables {
  shopService = inject(HunterShop);
}
