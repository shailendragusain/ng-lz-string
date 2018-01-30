import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LZString } from './lz-string';

@NgModule({
  declarations: [
    LZString
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LZString]
})
export class LZStringModule { }
