import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExam';
  
  public StatTeslaS = new Statistique("Tesla Model S", "89990 €");
  public StatTesla3 = new Statistique("Tesla Model 3", "43800 €");
}
