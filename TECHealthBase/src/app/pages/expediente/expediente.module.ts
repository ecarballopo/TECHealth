import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ExpedienteRoutingModule, routedComponents } from './expediente-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CitasComponent } from './citas/citas.component';


@NgModule({
  imports: [
    ThemeModule,
    ExpedienteRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    PacientesComponent,
    CitasComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ExpedienteModule { }
