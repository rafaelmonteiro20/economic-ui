import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {

    nome:String = '';

    adicionar(nome:any) {
        console.log(nome)
    }

    alterarNome(evento:any) {
        this.nome = evento.target.value;
    }

}