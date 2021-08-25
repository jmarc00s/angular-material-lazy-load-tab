import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TabLigacaoHttpService {
  retornarLigacaoPorId(id: number): Observable<any> {
    return of(`dadosLigacao ${id}`).pipe(delay(1000));
  }
}
