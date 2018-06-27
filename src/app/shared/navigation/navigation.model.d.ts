export interface NavigationNode {
    title?: string;
    children?: NavigationNode[];
    routerPath?: string;
    faIcon?: string;
    matIcon?: string;
    hidden?: boolean;
}
