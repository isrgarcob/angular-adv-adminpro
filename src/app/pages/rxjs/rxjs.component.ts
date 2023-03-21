import { Component } from '@angular/core';
import { Observable, retry, interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {
  
  constructor() {

   /*
    this.retornaObservable().pipe(
      retry(1)
    ).subscribe( valor => console.log('Subs:', valor), 
                    error => console.warn('Error:', error),
                    () => console.info('Obs terminado') );
    */

    this.retornaIntervalo()
      .subscribe(console.log)

  };

  retornaIntervalo(): Observable<number> {
    const intervalo$ = interval(500)
                        .pipe(
                          map( valor => {
                            return valor +1
                          } ),
                          filter(valor=> (valor % 2 === 0)? true: false ),
                          take(10),

                        );

    return intervalo$;

  }

  retornaObservable(): Observable<number> {
    let i=-1;


    const obs$ = new Observable<number>( observer => {


      const intervalo = setInterval( () => {

        i++;
        observer.next(i);
        

        if (i==4) {

          clearInterval( intervalo );
          observer.complete();
          
        }

        if (i==2) {
          observer.error('i llegó al valor de 2')
        }

      }, 1000 )

    } );

    return obs$;

  }

}
