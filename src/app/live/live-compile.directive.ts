import { Compiler, Component, Directive, Input, NgModule, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material';

@Directive({
    selector: '[ps-page-article]'
})
export class ArticleLiveDirective implements OnInit {

    @Input('ps-page-article') html: string;
    @Input('ps-content-id') currentId: string;


    constructor(
        private container: ViewContainerRef,
        private compiler: Compiler,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
        // Create PdfHtmlComponent on the fly and inject it.
        this.addHtmlComponent(this.html);
    }


    /**
     * Heavy stuff, can't be reduced and externalize in other file.
     * @param template
     * @param properties
     */
    private addHtmlComponent(template: string, properties: any = {}) {
        this.container.clear();
        // Force always rootDomElement.
        const divTag = this.preRenderHtml(template);
        this.renderer.setAttribute(divTag,'id', this.currentId);
        template = divTag.outerHTML;
        // We create dynamic component with injected template
        @Component({ template })
        class ArticleLIveComponent  { }

        // we declare module with all dependencies
        @NgModule({
            declarations: [
                ArticleLIveComponent
            ],
            imports: [
                BrowserModule,
                MatTabsModule
            ],
            providers: []
        })
        class ArticleLiveModule {}

        // we compile it
        const mod = this.compiler.compileModuleAndAllComponentsSync(ArticleLiveModule);
        const factory:any = mod.componentFactories.find((comp: any) =>
            comp.componentType === ArticleLIveComponent
        );
        // fetch instance of fresh crafted component
        const component = this.container.createComponent(factory);
        // we inject parameter.
        Object.assign(component.instance, properties);
        // If properties are changed at a later stage, the change detection
        // may need to be triggered manually:
        // component.changeDetectorRef.detectChanges();
    }
    /**
     * Returns an HTML element from an html string
     * @param {string} htmlString
     * @returns {HTMLElement}
     */
    private preRenderHtml(htmlString: string): HTMLElement {
        const divEl = this.renderer.createElement('div');
        this.renderer.setProperty(divEl, 'innerHTML', htmlString);
        return divEl;
    }
}