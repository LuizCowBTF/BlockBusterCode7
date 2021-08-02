import { Component, OnInit } from '@angular/core';

import { Filme } from '../filme';
import { FILMES } from '../mock-filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes = FILMES;
  selectedFilme?: Filme;

  constructor() { }

  ngOnInit() {
  }

  onSelect(filme: Filme): void {
    this.selectedFilme = filme;
  }

}
