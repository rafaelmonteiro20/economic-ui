import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let message : string;

    if(typeof errorResponse === 'string') {
      message = errorResponse;
    } else if(errorResponse instanceof Response) {
      if(errorResponse.status >= 400 && errorResponse.status < 500) {
        if (errorResponse.status === 403) {
          message = 'Você não tem permissão para executar esta ação';
        } else {   
          try {
            let errors = errorResponse.json();
            message = errors[0].mensagem;
          } catch(e) { }
        }
      }
    } 
    
    if(message == null) {
      message = 'Erro ao processar a requisição!';
    }

    this.toasty.error(message);
  }

}
