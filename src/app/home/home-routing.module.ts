import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'ligacao',
        loadChildren: () =>
          import('./components/tabs/tab-ligacao/tab-ligacao.module').then(
            (m) => m.TabLigacaoModule
          ),
      },
      {
        path: 'imovel',
        loadChildren: () =>
          import('./components/tabs/tab-imovel/tab-imovel.module').then(
            (m) => m.TabImovelModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
