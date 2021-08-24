import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabImovelComponent } from './tab-imovel.component';

const routes: Routes = [{ path: '', component: TabImovelComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabImovelRoutingModule {}
