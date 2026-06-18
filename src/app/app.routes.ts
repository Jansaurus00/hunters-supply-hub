import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Weapons } from './weapons/weapons';
import { Armor } from './armor/armor';
import { Consumables } from './consumables/consumables';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'weapons',
        component: Weapons
    },
    {
        path: 'armor',
        component: Armor
    },
    {
        path: 'consumables',
        component: Consumables
    },
    {
        path: 'cart',
        component: Cart
    },
];
