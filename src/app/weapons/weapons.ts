import { Component, inject } from '@angular/core';
import { HunterShop } from '../services/hunter-shop';
import { ItemCard } from '../item-card/item-card';


@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './weapons.html',
  styleUrl: './weapons.css',
})

export class Weapons {
  shopService = inject(HunterShop);
}
