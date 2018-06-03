import { NgModule } from "@angular/core";
import { CategoriasComponent } from "./categorias.component";

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
    imports: [
        DataTableModule,
        DialogModule,
        ButtonModule,
        InputTextModule
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