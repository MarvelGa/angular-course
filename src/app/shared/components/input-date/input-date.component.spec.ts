import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InputDateComponent} from './input-date.component';
import {By} from "@angular/platform-browser";

describe('InputDateComponent', () => {
  let component: InputDateComponent;
  let fixture: ComponentFixture<InputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change data', () => {
    component.data = '2018-11-12';
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const inputElementValue: HTMLElement = postDebugElement.query(
      By.css('input')
    ).nativeElement.value;
    expect(inputElementValue).toContain('2018-11-12');
  });

  it('should set a date when the function was invoked', () => {
    fixture.detectChanges();
    component.setData('2018-11-12');
    expect(component.data).toContain('2018-11-12');
  });

});
