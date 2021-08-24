import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabImovelComponent } from './tab-imovel.component';
import { TabImovelRoutingModule } from './tab-imovel.routing.module';

@NgModule({
  declarations: [TabImovelComponent],
  imports: [CommonModule, TabImovelRoutingModule],
  exports: [],
  providers: [],
})
export class TabImovelModule {}
