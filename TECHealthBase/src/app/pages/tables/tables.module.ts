import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { CentroAtencionComponent } from './centro-atencion/centro-atencion.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DiagnosticosEnfermedadesComponent } from './diagnosticos-enfermedades/diagnosticos-enfermedades.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    CentroAtencionComponent,
    FuncionarioComponent,
    DiagnosticosEnfermedadesComponent,
    TratamientosComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
