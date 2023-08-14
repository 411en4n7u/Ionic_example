import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  titule = 'tour of heroes';
  heroes = ['windstorm', 'bombasto', 'magneta', 'tornado'];
  myHero = this.heroes[0];
  constructor() {}
}
