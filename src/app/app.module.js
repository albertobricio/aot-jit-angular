"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var live_compile_directive_1 = require("./live/live-compile.directive");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpClientModule,
                        forms_1.FormsModule,
                        animations_1.BrowserAnimationsModule,
                        material_1.MatTabsModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        live_compile_directive_1.ArticleLiveDirective
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map