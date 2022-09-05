import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InputMinutesComponent} from './input-minutes.component';
import {By} from "@angular/platform-browser";

describe('InputMinusComponent', () => {
  let component: InputMinutesComponent;
  let fixture: ComponentFixture<InputMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputMinutesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the data and set it on the element', () => {
    component.data = '90';
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const inputElementValue: HTMLElement = postDebugElement.query(
      By.css('input')
    ).nativeElement.value;
    expect(inputElementValue).toContain('90');
  });

  it('should set a data when the function was invoked', () => {
    fixture.detectChanges();
    component.setData('90');
    expect(component.data).toContain('90');
  });
});
