import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '1';
          },
        },
      },
    };


    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SectionComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: routerSpy},
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "add new course" page', () => {
    component.printInConsoleLog('test')
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('courses/new');
  });

  it('should print', () => {
    component.printLog();
    console.log = jasmine.createSpy("log");
    component.printInConsoleLog('Test')
    expect(console.log).toHaveBeenCalledWith('Test');
  });
});
