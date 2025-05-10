import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-defaut-login-layout',
  imports: [],
  templateUrl: './defaut-login-layout.component.html',
  styleUrl: './defaut-login-layout.component.scss'
})
export class DefautLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText:string = "";
}
