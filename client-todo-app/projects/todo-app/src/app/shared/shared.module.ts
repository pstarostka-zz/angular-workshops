import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const matModules = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules]
})
export class SharedModule {}
