import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedienteComponent } from './expediente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CitasComponent } from './citas/citas.component';


const routes: Routes = [{
  path: '',
  component: ExpedienteComponent,
  children: [{
    path: 'pacientes',
    component: PacientesComponent, 
  },
  {
    path: 'citas',
    component: CitasComponent, 
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpedienteRoutingModule { }

export const routedComponents = [
  ExpedienteComponent,
  PacientesComponent,
  CitasComponent,
];
