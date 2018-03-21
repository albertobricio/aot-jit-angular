"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var ArticleLiveDirective = /** @class */ (function () {
    function ArticleLiveDirective(container, compiler, renderer) {
        this.container = container;
        this.compiler = compiler;
        this.renderer = renderer;
    }
    ArticleLiveDirective.prototype.ngOnInit = function () {
        // Create PdfHtmlComponent on the fly and inject it.
        this.addHtmlComponent(this.html);
    };
    /**
     * Heavy stuff, can't be reduced and externalize in other file.
     * @param template
     * @param properties
     */
    /**
         * Heavy stuff, can't be reduced and externalize in other file.
         * @param template
         * @param properties
         */
    ArticleLiveDirective.prototype.addHtmlComponent = /**
         * Heavy stuff, can't be reduced and externalize in other file.
         * @param template
         * @param properties
         */
    function (template, properties) {
        if (properties === void 0) { properties = {}; }
        this.container.clear();
        //Force always rootDomElement.
        var divTag = this.preRenderHtml(template);
        this.renderer.setAttribute(divTag, 'id', this.currentId);
        template = divTag.outerHTML;
        // We create dynamic component with injected template
        var ArticleLIveComponent = /** @class */ (function () {
            function ArticleLIveComponent() {
            }
            ArticleLIveComponent.decorators = [
                { type: core_1.Component, args: [{ template: template },] },
            ];
            /** @nocollapse */
            ArticleLIveComponent.ctorParameters = function () { return []; };
            return ArticleLIveComponent;
        }());
        // we declare module with all dependencies
        var ArticleLiveModule = /** @class */ (function () {
            function ArticleLiveModule() {
            }
            ArticleLiveModule.decorators = [
                { type: core_1.NgModule, args: [{
                            declarations: [
                                ArticleLIveComponent
                            ],
                            imports: [
                                platform_browser_1.BrowserModule,
                                material_1.MatTabsModule
                            ],
                            providers: []
                        },] },
            ];
            /** @nocollapse */
            ArticleLiveModule.ctorParameters = function () { return []; };
            return ArticleLiveModule;
        }());
        // we compile it
        var mod = this.compiler.compileModuleAndAllComponentsSync(ArticleLiveModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === ArticleLIveComponent;
        });
        // fetch instance of fresh crafted component
        var component = this.container.createComponent(factory);
        // we inject parameter.
        Object.assign(component.instance, properties);
        // If properties are changed at a later stage, the change detection
        // may need to be triggered manually:
        // component.changeDetectorRef.detectChanges();
    };
    /**
     * Returns an HTML element from an html string
     * @param {string} htmlString
     * @returns {HTMLElement}
     */
    /**
         * Returns an HTML element from an html string
         * @param {string} htmlString
         * @returns {HTMLElement}
         */
    ArticleLiveDirective.prototype.preRenderHtml = /**
         * Returns an HTML element from an html string
         * @param {string} htmlString
         * @returns {HTMLElement}
         */
    function (htmlString) {
        var divEl = this.renderer.createElement('div');
        this.renderer.setProperty(divEl, 'innerHTML', htmlString);
        return divEl;
    };
    ArticleLiveDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ps-page-article]'
                },] },
    ];
    /** @nocollapse */
    ArticleLiveDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
        { type: core_1.Compiler, },
        { type: core_1.Renderer2, },
    ]; };
    ArticleLiveDirective.propDecorators = {
        "html": [{ type: core_1.Input, args: ['ps-page-article',] },],
        "currentId": [{ type: core_1.Input, args: ['ps-content-id',] },],
    };
    return ArticleLiveDirective;
}());
exports.ArticleLiveDirective = ArticleLiveDirective;
//# sourceMappingURL=live-compile.directive.js.map