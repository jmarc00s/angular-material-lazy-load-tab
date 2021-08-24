import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabLigacaoComponent } from './tab-ligacao.component';

const ROUTES: Routes = [{ path: '', component: TabLigacaoComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [],
  providers: [],
})
export class TabLigacaoRoutesModule {}
