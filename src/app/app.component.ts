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

   public tableaustatistique: Statistique[] = [
      new Statistique("698aecbd-be3b-11eb-6978-1698763afecb", "Tesla Model S", "89990 €", Appreciation.WARNING),
      new Statistique("65acfe25-ab58-1258-91ec-7f5875ecfb46", "Tesla Model 3", "43800 €", Appreciation.SUCCESS)
   ]

   ngOnInit() {
      setTimeout(() => {
         this.tableaustatistique.push(new Statistique("4589645-ab58-1258-91ec-789632145687", "Tesla Model Y", "63000 €", Appreciation.SUCCESS));
      }, 2000);
   }

}
