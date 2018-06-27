import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FENavigationMenuModule } from './navigation';
import { FontAwesomeLibraryModule } from './font-awesome-library.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    FENavigationMenuModule,
    FontAwesomeLibraryModule,
  ],
  declarations: [],
  exports: [
    MaterialModule,
    BootstrapModule,
    FENavigationMenuModule,
    FontAwesomeLibraryModule,
  ]
})
export class SharedModule { }
