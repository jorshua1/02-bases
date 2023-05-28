import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroes: string[] = ["Spiderman", "Hulk", "Ironman", "Thor"];
  public removed?: string = "";

  removeLastHero(): void {
    this.removed = this.heroes.pop();
  }
}
