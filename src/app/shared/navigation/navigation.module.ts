import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { NavItemComponent } from './nav-item/nav-item.component';
import { NavLinkComponent } from './nav-item/nav-link/nav-link.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  declarations: [NavMenuComponent, NavItemComponent, NavLinkComponent],
  exports: [NavMenuComponent]
})
export class FENavigationMenuModule {}
