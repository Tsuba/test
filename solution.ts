import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
    <div >
      <div>
        {{firstOne}}
        <button (click)="change(firstOne)">Change</button>
      </div>
      <div>
        {{secondOne}}
        <button (click)="change(secondOne)">Change</button>
      </div>
      <div>
        <h2 >{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div >
          <label>name: </label>
          <div>{{hero.name}}</div>
          <button (click)="save(hero.name)">Save</button>
        </div>
      </div>
    </div>
    </div>

  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
  firstOne : string ;
  secondOne : string;
  
  change(data : string){
    if(data === this.firstOne){
      this.firstOne = null
    }
    else {
      this.secondOne = null
    }
  }
  
  save(data : Hero){
    console.log(this.firstOne)
    if(this.firstOne==null){
      this.firstOne = data
    }
    else if(this.secondOne==null){
      this.secondOne = data
    }
    this.saved = true;
  }
}
