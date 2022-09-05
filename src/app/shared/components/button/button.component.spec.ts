import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonComponent} from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit info if the "cancelButton" button was clicked', () => {
    spyOn(component.toCoursesListEvent, "emit");
    fixture.debugElement.nativeElement.querySelector('#cancelButton').click();
    expect(component.toCoursesListEvent.emit).toHaveBeenCalled();
  });

  it('should emit info if the "saveButton" button was clicked', () => {
    spyOn(component.submitEvent, "emit");
    fixture.debugElement.nativeElement.querySelector('#saveButton').click();
    expect(component.submitEvent.emit).toHaveBeenCalled();
  });

});
