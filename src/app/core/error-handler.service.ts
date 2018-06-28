import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(error: any) {
    let message : string;

    if(typeof error === 'string') {
      message = error;
    } else {
      message = 'Erro ao processar a requisição!';
      console.log('Error', error);
    }

    this.toasty.error(message);
  }

}
