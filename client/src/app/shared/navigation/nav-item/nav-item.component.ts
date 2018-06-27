import { Component, Input } from '@angular/core';

import { NavigationNode } from '../navigation.model';

@Component({
    selector: 'fe-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
    @Input() node: NavigationNode;
    @Input() level: number;

    constructor() { }
}
