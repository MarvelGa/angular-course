import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TextAreaComponent} from './text-area.component';
import {By} from "@angular/platform-browser";

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextAreaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the text and set it on the element', () => {
    component.text = 'Describe something';
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const textareaElementValue: HTMLElement = postDebugElement.query(
      By.css('textarea')
    ).nativeElement.value;
    expect(textareaElementValue).toContain('Describe something');
  });

  it('should set a data when the function was invoked', () => {
    fixture.detectChanges();
    component.setText('Describe something');
    expect(component.text).toContain('Describe something');
  });
});
