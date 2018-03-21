import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleLiveDirective } from './live/live-compile.directive';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { CompilerConfig, JitCompiler } from '@angular/compiler';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import '@angular/compiler/src/jit/compile';
import '@angular/compiler/src/config';

export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  declarations: [
      AppComponent,
      ArticleLiveDirective
  ],
  providers: [
      { provide: COMPILER_OPTIONS, useValue: {}, multi: true},
      { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
      { provide: JitCompiler, useFactory: createCompiler, deps: [CompilerFactory]},
      { provide: CompilerConfig, useValue: new CompilerConfig() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
