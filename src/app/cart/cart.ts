import { Component, inject } from '@angular/core';
import { HunterShop } from '../services/hunter-shop';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class Cart {
  shopService = inject(HunterShop)
}
