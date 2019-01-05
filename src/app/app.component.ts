import { Component } from '@angular/core';

import { ToastyConfig } from 'ng2-toasty';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router) {
    this.toastyConfig.theme = 'bootstrap';
  }

  exibirNavbar() {
    return this.router.url != '/login';
  }

}
