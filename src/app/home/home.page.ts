import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  titule: string;
  myHero: String;

  constructor() {
    this.titule = 'tour of heroes';
    this.myHero = 'windstorm';
  }
}

