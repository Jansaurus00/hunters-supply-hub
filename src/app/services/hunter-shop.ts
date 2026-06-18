import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HunterShop {

  weapons = signal([
    { name: 'Great Sword', price: 5000, type: 'Heavy Weapon',image: 'images/weapons/greatsword.webp' ,description: 'A massive blade capable of delivering extremely powerful charged attacks.'},
    { name: 'Sword and Shield', price: 4100, type: 'Light Weapon',image: 'images/weapons/swordandshield.webp' ,description: 'An versatile weapon that allows quick attacks and defensive blocking.'},
    { name: 'Long Sword', price: 4500, type: 'Light Weapon',image: 'images/weapons/longsword.webp' ,description: 'A balanced weapon with fast, flowing combos and elegant reach.'},
    { name: 'Dual Blades', price: 4200, type: 'Light Weapon',image: 'images/weapons/dualblades.webp' ,description: 'Rapid, continuous attacks with high mobility and fast combos.'},
    { name: 'Hammer', price: 4800, type: 'Heavy Weapon',image: 'images/weapons/hammer.webp' ,description: 'A heavy blunt weapon focused on stunning monsters with raw impact.'},
    { name: 'Hunting Horn', price: 4300, type: 'Technical Weapon',image: 'images/weapons/huntinghorn.webp' ,description: 'A support weapon that buffs allies while dealing blunt damage.'},
    { name: 'Lance', price: 4700, type: 'Heavy Weapon',image: 'images/weapons/lance.webp' ,description: 'A highly defensive weapon with strong guarding and precise thrusts.'},
    { name: 'Gunlance', price: 4800, type: 'Technical Weapon',image: 'images/weapons/gunlance.webp' ,description: 'A lance variant that combines defense with explosive shell attacks.'},
    { name: 'Switch Axe', price: 5400, type: 'Technical Weapon',image: 'images/weapons/switchaxe.webp' ,description: 'A transforming weapon that switches between axe and sword mode.'},
    { name: 'Charge Blade', price: 5500, type: 'Technical Weapon',image: 'images/weapons/chargeblade.webp' ,description: 'a complex weapon that builds energy in sword mode and unleashes it in axe form.'},
    { name: 'Insect Glaive', price: 4600, type: 'Technical Weapon',image: 'images/weapons/insectglaive.webp' ,description: 'Aerial-focused weapon that allows hunters to vault and control kinsects.'},
    { name: 'Light Bowgun', price: 4600, type: 'Light Weapon',image: 'images/weapons/lightbowgun.webp' ,description: 'A mobile ranged weapon that focuses on rapid-fire attacks.'},
    { name: 'Heavy Bowgun', price: 4600, type: 'Heavy Weapon',image: 'images/weapons/heavybowgun.webp' ,description: 'A powerful ranged weapon that trades mobility for extreme firepower.'},
    { name: 'Bow', price: 4600, type: 'Technical Weapon',image: 'images/weapons/bow.webp' ,description: 'A ranged weapon that uses coatings to enhance elemental and status damage.'}
  ]);

  armor = signal([
    { name: 'Rathalos Armor', price: 7000, type: 'Fire Wyvern Armor', image: 'images/armor/rathalos.webp',description: 'Armor forged from the King of the Skies, Rathalos.'},
    { name: 'Rathian Armor', price: 6000, type: 'Poison Wyvern Armor', image: 'images/armor/rathian.png',description: 'Crafted from the Queen of the land, Rathian.'},
    { name: 'Diablos Armor', price: 8000, type: 'Desert Tyrant Armor', image: 'images/armor/diablos.png',description: 'Built from the horns of the Desert Tyrant, Diablos.'},
    { name: 'Zinogre Armor', price: 8500, type: 'Thunder Wolf Armor', image: 'images/armor/zinogre.png',description: 'Harnesses the lighting power of the Lord of Lighting, Zinogre.'},
    { name: 'Nargacuga Armor', price: 7800, type: 'Shadow Beast Armor', image: 'images/armor/nargacuga.webp',description: 'Stealth-focused armor inspired by the Pouncing Shadow, Nargacuga.'},
    { name: 'Magnamolo Armor', price: 9000, type: 'Hellfire Wyvern Armor', image: 'images/armor/magnamolo.png',description: 'A fearsome set inspired by the Hellfire Wyvern, Magnamolo.'},
    { name: 'Tigrex Armor', price: 8200, type: 'Brute Wyvern Armor', image: 'images/armor/tigrex.webp',description: 'Aggressive armor crafted from the mighty Tigrex.'},
    { name: 'Mizutsune Armor', price: 8400, type: 'Bubble Fox Armor', image: 'images/armor/mizutsune.webp',description: 'Elegant armor inspired by the graceful Mizutsune.'},
    { name: 'Rajang Armor', price: 9800, type: 'Golden Beast Armor', image: 'images/armor/rajang.png',description: 'Powerful armor forged from the fearsome Rajang.'},
    { name: 'Barioth Armor', price: 7600, type: 'Ice Fang Armor', image: 'images/armor/barioth.png',description: 'Ice-resistant armor from the swift Barioth.'},
    { name: 'Sergeios Armor', price: 8100, type: 'Thousand Blade Wyvern Armor', image: 'images/armor/seregios.webp',description: 'Sharp, agile armor inspired by Seregios scales'},
    { name: 'Goss Harag Armor', price: 7600, type: 'Snow Oni Beast Armor', image: 'images/armor/gossharag.webp',description: 'Heavy Armor built from the brutal Goss Harag.'},
    { name: 'Bazelgeuese Armor', price: 8000, type: 'Bomber Wyvern Armor', image: 'images/armor/bazel.webp',description: 'Explosive Armor from the volatile Bazelgeuse.'},
    { name: 'Astalos Armor', price: 8400, type: 'Electric Wyvern Armor', image: 'images/armor/astalos.webp',description: 'Lightning-infused armor crafted from Astalos.'},
    { name: 'Glavenus', price: 8300, type: 'Slashing Wyvern Armor', image: 'images/armor/glavenus.webp',description: 'A scorching armor forged from the Slashing Wyvern Glavenus'},
    { name: 'Lunagaron Armor', price: 9100, type: 'Frost Wolf Armor', image: 'images/armor/lunagaron.webp',description: 'Armor that channels the icy ferocity of Lunagaron.'},
    { name: 'Kushala Daora Armor', price: 9800, type: 'Steel Dragon Armor', image: 'images/armor/kushala.webp',description: 'Wind-powered armor from the Steel Dragon Kushala Daora'},
    { name: 'Teostra Armor', price: 10000, type: 'Flame Emperor Armor', image: 'images/armor/teostra.webp',description: 'Fire-based armor forged from the Flame Emperor Teostra.'},
    { name: 'Gore Magala Armor', price: 10500, type: 'Frenzy Dragon Armor', image: 'images/armor/goremagala.png',description: 'Dark armor forged from the mysterious Gore Magala, granting a sinister appearance and formidible power.'},
    { name: 'Nergigante Armor', price: 11000, type: 'Elder Devourer Armor', image: 'images/armor/nergigante.png',description: 'A violent legendary armor that fights for order inspired by the Extinction Dragon, Nergigante.'},
    { name: 'Malzeno Armor', price: 12000, type: 'Vampire Armor', image: 'images/armor/malzeno.webp',description: 'An armor made for a knight who once fought for their home inspired by the Royal Silver Dragon, Malzeno.'}
  ]);

  consumables = signal([
    { name: 'Potion', price: 50, image: 'images/consumables/potion.png', type: 'Restoration'},
    { name: 'Mega Potion', price: 100, image: 'images/consumables/megapotion.png', type: 'Restoration'},
    { name: 'Max Potion', price: 250, image: 'images/consumables/maxpotion.png', type: 'Restoration'},
    { name: 'Antidote', price: 30, image: 'images/consumables/antidote.png', type: 'Restoration'},
    { name: 'Lifepoweder', price: 50, image: 'images/consumables/lifepowder.png', type: 'Restoration'},
    { name: 'Energy Drink', price: 80, image: 'images/consumables/energydrink.png', type: 'Restoration'},
    { name: 'Well-Done Steak', price: 120, image: 'images/consumables/welldonesteak.png', type: 'Meats'},
    { name: 'Might Pill', price: 120, image: 'images/consumables/mightpill.png', type: 'Enhancement'},
    { name: 'Adamant Pill', price: 120, image: 'images/consumables/adamantpill.png', type: 'Enhancement'},
    { name: 'Flash Pod', price: 60, image: 'images/consumables/flashpod.png', type: 'Tools'},
    { name: 'Farcaster', price: 50, image: 'images/consumables/farcaster.png', type: 'Tools'},
    { name: 'Whetstone', price: 40, image: 'images/consumables/whetstone.png', type: 'Tools'},
    { name: 'Shock Trap', price: 100, image: 'images/consumables/shocktrap.png', type: 'Traps'},
    { name: 'Large Barrel Bomb', price: 120, image: 'images/consumables/largebarrelbomb.png', type: 'Bombs'},
    { name: 'Binoculars', price: 100, image: 'images/consumables/binoculars.png', type: 'Tools'},
    { name: 'Cool Drink', price: 60, image: 'images/consumables/cooldrink.png', type: 'Enhancement'},
    { name: 'Hot Drink', price: 60, image: 'images/consumables/hotdrink.png', type: 'Enhancement'},
    { name: 'BBQ Spit', price: 50, image: 'images/consumables/bbqspit.png', type: 'Tools'},
    { name: 'Tranq Bomb', price: 40, image: 'images/consumables/tranqbomb.png', type: 'Traps'},
    { name: 'Nulberry', price: 30, image: 'images/consumables/nulberry.png', type: 'Restoration'},
    { name: 'Boomerang', price: 50, image: 'images/consumables/boomerang.png', type: 'Tools'},
  ]);

  cart = signal<any[]>([]);

  addToCart(item: any) {
    this.cart.update(c => [...c, item]);
  }

  removeFromCart(index: number) {
    this.cart.update(c => c.filter((_, i) => i !== index));
  }

  clearCart() {
    this.cart.set([]);
  }

  totalCost = computed(() => this.cart().reduce((sum, item) => sum + item.price, 0));
}
