import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { CentroAtencionComponent } from './centro-atencion/centro-atencion.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DiagnosticosEnfermedadesComponent } from './diagnosticos-enfermedades/diagnosticos-enfermedades.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'centro-atencion',
    component: CentroAtencionComponent, 
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent, 
  },
  {
    path: 'diagnosticos-enfermedades',
    component: DiagnosticosEnfermedadesComponent, 
  },
  {
    path: 'tratamientos',
    component: TratamientosComponent, 
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  CentroAtencionComponent,
  FuncionarioComponent,
  DiagnosticosEnfermedadesComponent,
  TratamientosComponent,
];
