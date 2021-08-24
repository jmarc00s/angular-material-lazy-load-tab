import { Component, OnInit } from '@angular/core';
import { TabModel } from './models/tab.model';

@Component({
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: TabModel[] = [
    { idx: 0, label: 'Ligação', link: ['ligacao'] },
    { idx: 1, label: 'Imóvel', link: ['imovel'] },
  ];

  abaSelecionada = this.tabs[0];

  constructor() {}

  ngOnInit(): void {}
}
