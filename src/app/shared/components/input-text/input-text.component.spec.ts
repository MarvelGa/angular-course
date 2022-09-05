import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InputTextComponent} from './input-text.component';
import {By} from "@angular/platform-browser";

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the text and set it on the element', () => {
    component.text = 'Test';
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const inputElementValue: HTMLElement = postDebugElement.query(
      By.css('input')
    ).nativeElement.value;
    expect(inputElementValue).toContain('Test');
  });

  it('should set a data when the function was invoked', () => {
    fixture.detectChanges();
    component.setText('Test2');
    expect(component.text).toContain('Test2');
  });

});
