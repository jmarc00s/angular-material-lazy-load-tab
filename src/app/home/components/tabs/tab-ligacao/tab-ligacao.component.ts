import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { TabLigacaoHttpService } from './services/tab-ligacao-http.service';

@Component({
  template: `<h1>{{ titulo }}</h1>`,
})
export class TabLigacaoComponent implements OnInit {
  titulo = 'Aba ligação works!!';

  constructor(
    private _homeService: HomeService,
    private _tabLigacaoHttpService: TabLigacaoHttpService
  ) {}

  ngOnInit(): void {
    this._realizarBuscaLigacao();
  }

  private _realizarBuscaLigacao(): void {
    const id = this._homeService.id;

    this._tabLigacaoHttpService
      .retornarLigacaoPorId(id)
      .subscribe((value) => this.titulo = value);
  }
}
