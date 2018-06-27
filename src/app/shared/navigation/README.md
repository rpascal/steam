# FE Navigation

Collapsible navigation component.  

## Setup
  - Import `FENavigationMenuModule`
  - Import `fe-navigation.scss` file in global styles.scss

```scss
@import "app/shared/navigation/fe-navigation.scss";
```
  - Create array of type `NavigationNode` to be passed into component

## Usage

```html
<fe-nav-menu [menu]="sideNavigation"></fe-nav-menu>
````

## Properties

### Sass variables

```scss
$fe-navigation-header-color : #24305e !default;
$fe-navigation-link-color : #52b9e9 !default;
$fe-navigation-link-hover-color: lightgray !default;
```

`$fe-navigation-header-color` - set the color of the expansion panel headers
`$fe-navigation-link-color` - set the color of the selected link color
`$fe-navigation-link-hover-color` - set the color of the link hover color

##### Example

```scss
$fe-navigation-header-color : custom-color;
$fe-navigation-link-color : custom-color;
$fe-navigation-link-hover-color: custom-color;
@import "app/shared/navigation/fe-navigation.scss";
```


### NavigationNode

`title` - Optional, Type:  `string` - Text that will be displayed
`children` - Optional, Type: `NavigationNode[]` - children of expansion panel. If children of declared then this item cannot be a link
`routerPath` - Optional, Type: `string` - route that will be navigated on click
`icon` - Optional, Type: `string` - font awesome icon that will be used. SVG icons used. Example `icon: "building"`
`matIcon` - Optional, Type: `string` - if  you do not want to use font awesome icon you can specify a material icon
`hidden` - Optional, Type: `boolean` - set if item will be hidden

