import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { CategoriasComponent } from "./categorias.component";
import { SharedModule } from "../shared/shared.module";
import { CategoriasRoutingModule } from './categorias-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        SharedModule,
        CategoriasRoutingModule
    ],
    declarations: [
        CategoriasComponent
    ],
    exports: []
})
export class CategoriasModule {

}
