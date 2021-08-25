import { TabLigacaoRoutesModule } from './tab-ligacao.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLigacaoComponent } from './tab-ligacao.component';
import { TabLigacaoHttpService } from './services/tab-ligacao-http.service';

@NgModule({
  declarations: [TabLigacaoComponent],
  imports: [CommonModule, TabLigacaoRoutesModule],
  exports: [],
  providers: [TabLigacaoHttpService],
})
export class TabLigacaoModule {}
