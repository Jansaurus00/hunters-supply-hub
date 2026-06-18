import { Component, inject } from '@angular/core';
import { HunterShop } from '../services/hunter-shop';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-armor',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './armor.html',
  styleUrl: './armor.css',
})
export class Armor {
  shopService = inject(HunterShop);
}
