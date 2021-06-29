import { Component, Input, OnInit} from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

   @Input()
   public statistique : Statistique;
 
   constructor() {
   }
 
   ngOnInit(): void {
   }


  public StatTeslaS = new Statistique("Tesla Model S", "89990 €");
  public StatTesla3 = new Statistique("Tesla Model 3", "43800 €");

}

