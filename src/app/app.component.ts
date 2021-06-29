import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { Appreciation } from "./models/appreciation.enum";
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'AngularExam';

   public StatTeslaS = new Statistique("698aecbd-be3b-11eb-6978-1698763afecb", "Tesla Model S", "89990 €", Appreciation.WARNING);
   public StatTesla3 = new Statistique("65acfe25-ab58-1258-91ec-7f5875ecfb46", "Tesla Model 3", "43800 €", Appreciation.SUCCESS);

   public tableaustatistique : Statistique [] = [
      this.StatTeslaS,
      this.StatTesla3,
      {id :"4589645-ab58-1258-91ec-789632145687", title:"Tesla Model Y", value:"63000 €", appreciation:Appreciation.SUCCESS}  //Ajout d'une statistique pour ex4
   ]
}
