import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  template: `<h1>Aba imovel works!!!</h1>`,
  styles: [``],
})
export class TabImovelComponent implements OnInit {
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    console.log(this._homeService.id);
  }
}
