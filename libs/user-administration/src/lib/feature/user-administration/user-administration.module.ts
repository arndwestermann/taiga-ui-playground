import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdministrationRoutingModule } from './user-administration-routing.module';
import { UserAdministrationComponent } from './user-administration.component';

import { TuiTableModule } from '@taiga-ui/addon-table';

import { NgxObserveModule } from 'ngx-observe';

const taigaUIModules = [TuiTableModule];

@NgModule({
	declarations: [UserAdministrationComponent],
	imports: [CommonModule, UserAdministrationRoutingModule, NgxObserveModule, ...taigaUIModules],
})
export class UserAdministrationModule {}
