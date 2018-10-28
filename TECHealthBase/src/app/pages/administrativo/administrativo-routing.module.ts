import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativoComponent } from './administrativo.component';
import { CentroAtencionComponent } from './centro-atencion/centro-atencion.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DiagnosticosEnfermedadesComponent } from './diagnosticos-enfermedades/diagnosticos-enfermedades.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

const routes: Routes = [{
  path: '',
  component: AdministrativoComponent,
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
export class AdministrativoRoutingModule { }

export const routedComponents = [
  AdministrativoComponent,
  CentroAtencionComponent,
  FuncionarioComponent,
  DiagnosticosEnfermedadesComponent,
  TratamientosComponent,
];
