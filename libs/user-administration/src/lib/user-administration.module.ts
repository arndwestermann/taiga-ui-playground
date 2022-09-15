import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdministrationComponent } from './user-administration.component';
import { SharedModule } from '@taiga-ui-playground/shared';
import { UserAdministrationRoutingModule } from './user-administration-routing.module';

import { TuiTableModule } from '@taiga-ui/addon-table';

import { NgxObserveModule } from 'ngx-observe';

const taigaUIModules = [TuiTableModule];

@NgModule({
	declarations: [UserAdministrationComponent],
	imports: [CommonModule, SharedModule, UserAdministrationRoutingModule, NgxObserveModule, ...taigaUIModules],
	exports: [UserAdministrationComponent],
})
export class UserAdministrationModule {}
