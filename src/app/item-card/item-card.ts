import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {

  item = input.required<any>();
  itemAdded = output<any>();
  
  addToCart() {
    this.itemAdded.emit(this.item());
  }
}
