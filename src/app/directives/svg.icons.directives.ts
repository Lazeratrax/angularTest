import {Directive} from '@angular/core'

// кв скобочки обязательны! привращают selector в директиву, кот можно исп как html атрибут
@Directive({
selector: '[appSvgICons]'
})
export class SvgIconsDirective {

}