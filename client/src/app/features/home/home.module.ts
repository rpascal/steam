
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
