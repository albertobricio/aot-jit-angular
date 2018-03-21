"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isActive = false;
        this.title = 'AOT and JIT - same project';
        this.html = "<div>\n<h2>Foo bar</h2>\n<mat-tab-group>\n  <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n  <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n</mat-tab-group>\n<p>Other content</p>\n</div>";
    }
    AppComponent.prototype.toggleHandler = function () {
        this.isActive = !this.isActive;
    };
    AppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'my-app',
                    // <my-app></my-app>
                    templateUrl: './app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return []; };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map