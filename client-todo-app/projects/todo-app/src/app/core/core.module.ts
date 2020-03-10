import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [SharedModule, BrowserModule, BrowserAnimationsModule],
  exports: [BrowserModule, BrowserAnimationsModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
