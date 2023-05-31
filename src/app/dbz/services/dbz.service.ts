import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  // sin esto se deberia definir en la parte de los providers
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "goku",
    power: 10000
  },
  {
    id: uuid(),
    name: "vegeta",
    power: 8000
  }];


  addCharacter(character: Character): void {
    console.log("main page component");
    console.log(character);
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // };
    //! Esto es lo mismo que lo de arriba, uso el operador spread y sobreescribo el id si viene
    const newCharacter: Character ={...character, id: uuid()};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
