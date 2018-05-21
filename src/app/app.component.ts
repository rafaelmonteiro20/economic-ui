import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categorias: any = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() : Promise<any> {
    return this.http.get(`http://localhost:8081/categorias`)
               .toPromise()
               .then(response => {
                  this.categorias = response.json()
               })
  }

}
