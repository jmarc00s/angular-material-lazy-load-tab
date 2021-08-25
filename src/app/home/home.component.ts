import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabModel } from './models/tab.model';
import { HomeService } from './services/home.service';

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

  constructor(private _router: Router, private _homeService: HomeService) {}

  ngOnInit(): void {
    this._iniciarAbas();
  }

  private _iniciarAbas(): void {
    this._homeService.id = 1000;
    this._router.navigate(['home', 'ligacao']);
  }
}
