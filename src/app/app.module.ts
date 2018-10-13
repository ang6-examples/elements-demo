import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { ButtonComponent } from './button/button.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, {injector});
    customElements.define('custom-button', customButton);
  }
  ngDoBootstrap() {}
}
