import { TabLigacaoRoutesModule } from './tab-ligacao.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLigacaoComponent } from './tab-ligacao.component';

@NgModule({
  declarations: [TabLigacaoComponent],
  imports: [CommonModule, TabLigacaoRoutesModule],
  exports: [],
  providers: [],
})
export class TabLigacaoModule {}
