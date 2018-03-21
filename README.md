# AOT and JIT Compile - Angular 5

Work in progress. Goal is to have our main application compile in AOT, and some other part compile in JIT, only to take adventage of backend side information.

Original stackoverflow post : https://stackoverflow.com/questions/49249919/angular-aot-and-jit-on-same-project



Basic configuration can be find in :
 - Webpack who activate AOT compilation by adding :
    - AngularCompilerPlugin.
    - @ngtools/webpack rules.
  - src/app/AppModule.ts who force to load JITCompiler.
 - src/app/live/live-compile.directive.ts who create ComponentFactory.
 
 Possible way of fixing :
  - https://github.com/angular/angular/issues/15510
  - https://github.com/angular/angular/issues/20639
  
  
  
