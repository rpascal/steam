import { Component, Input } from '@angular/core';

import { NavigationNode } from '../../navigation.model';

@Component({
    selector: 'fe-nav-link',
    templateUrl: './nav-link.component.html',
    styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
    @Input() node: NavigationNode;
    constructor() { }
}
