import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HelloWorldAngularComponent } from './hello-world.component';
import { HelloWorldComponent } from '@ntf/native';

@NgModule({
  declarations: [HelloWorldAngularComponent],
  exports: [HelloWorldAngularComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloWorldAngularModule {
  constructor() {
    HelloWorldComponent.register();
  }
}
