import { Injectable } from '@angular/core';
import { NavigationNode } from '../../shared/navigation';
import { CoreModule } from '../core.module';



@Injectable({
  providedIn: CoreModule
})
export class NavigationService {
  public getNavigationInfo(): NavigationNode[] {
    const navigation: NavigationNode[] = [
      {
        title: 'Views',
        children: [
          {
            title: 'Home',
            faIcon: 'tree',
            routerPath: 'home',

          }
        ]
      }

    ];
    return navigation;
  }

}
