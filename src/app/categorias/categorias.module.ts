import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { CategoriasComponent } from "./categorias.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        DialogModule,
        ButtonModule,
        InputTextModule,

        SharedModule
    ],
    declarations: [
        CategoriasComponent
    ],
    exports: [
        CategoriasComponent
    ]
})
export class CategoriasModule {

}