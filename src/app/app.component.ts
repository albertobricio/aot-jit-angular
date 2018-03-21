import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  html: string;
  isActive: boolean = false;

  constructor() {
    this.title = 'AOT and JIT - same project';

    this.html = `<div>
<h2>Foo bar</h2>
<mat-tab-group>
  <mat-tab label="Tab 1">Content 1</mat-tab>
  <mat-tab label="Tab 2">Content 2</mat-tab>
</mat-tab-group>
<p>Other content</p>
</div>`;
  }

  toggleHandler(){
    this.isActive = !this.isActive;
  }

}
