import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
  selector: '[appIsAuthenticated]'
})

export class AuthenticationDirective {
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input('appIsAuthenticated') set isAuthenticated(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
