import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser'; // Import the Capacitor Browser plugin

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.openWebpage();
  }

  // Method to open the URL
  async openWebpage() {
    await Browser.open({ url: 'https://edublooms.com/app-setup' });
  }
}
