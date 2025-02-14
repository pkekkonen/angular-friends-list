import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('person') person: string = "Default name"
  @Output('addFavorite') addFavorite = new EventEmitter<string>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<string>();

}
