import { Component, Input } from '@angular/core';
import { NgSwitch} from 'angular2/common';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
    <div >
      
      <div [ngSwitch]="firstSelected">
        <div *ngSwitchCase="true">
          <h2 >{{firstOne.name}} details 1!</h2>
          <div><label>id: </label>{{firstOne.id}}</div>
          <div >
            <label>name: </label>
            <div>{{firstOne.name}}</div>
            <button (click)="change(firstOne)">Change</button>
          </div>
        </div>
        <div *ngSwitchCase="false">
          <h2 >{{hero.name}} details 1!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div >
            <label>name: </label>
            <div>{{hero.name}}</div>
            <button (click)="save(hero)">Save</button>
          </div>
        </div>
      </div>
      <div *ngIf="firstSelected">
      <div [ngSwitch]="secondSelected">
        <div *ngSwitchCase="true">
          <h2 >{{secondOne.name}} details 2!</h2>
          <div><label>id: </label>{{secondOne.id}}</div>
          <div >
            <label>name: </label>
            <div>{{secondOne.name}}</div>
            <button (click)="change(secondOne)">Change</button>
          </div>
        </div>
        <div *ngSwitchCase="false">
          <h2 >{{hero.name}} details 2!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div >
            <label>name: </label>
            <div>{{hero.name}}</div>
            <button (click)="save(hero)">Save</button>
          </div>
        </div>
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
  firstSelected : boolean = false;
  secondSelected : boolean = false;
  
  
  change(data : string){

    if(data === this.firstOne){
      this.firstOne = null
      this.firstSelected = false
    }
    else {
      this.secondOne = null
      this.secondSelected = false
    }
  }
  
  save(data : Hero){
    if(this.firstOne==null){
      this.firstOne = data
      this.firstSelected = true
    }
    else if(this.secondOne==null){
      this.secondOne = data
      this.secondSelected = true
    }
  }
}
