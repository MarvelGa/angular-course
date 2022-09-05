import {SetPlateBorderColorDirective} from "../set-plate-border-color.directive";
import {ElementRef} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CoursesComponent} from "../../../pages/courses/courses.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FilterSearchPipe} from "../filter-search.pipe";
import {OrderByCreationDatePipe} from "../order-by-creation-date.pipe";
import {DurationPipe} from "../duration.pipe";
import {TransformToDatetimePipe} from "../transform-to-datetime.pipe";
import {CourseInterface} from "../../../types/course.interface";
import {CourseService} from "../../services/course.service";

class MockElementRef {
}

describe('SetPlateBorderColorDirective', () => {
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
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>
  let courseService: CourseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetPlateBorderColorDirective, CoursesComponent, FilterSearchPipe, OrderByCreationDatePipe, DurationPipe, TransformToDatetimePipe],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: ElementRef, useClass: MockElementRef},
        {provide: CourseService, useValue: {getList: () => []}}
      ]
    }).compileComponents();
    courseService = TestBed.get(CourseService);
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;

  });

  it('should set "blue" color to border as course will be start soon', () => {
    let fifteenDays = 15;
    let addToToday15days = new Date().getTime() + (1000 * 60 * 60 * 24 * fifteenDays);
    let course = {
      id: '2',
      title: 'test2',
      description: 'test description',
      duration: '90',
      creationDate: addToToday15days,
      topRated: false
    } as CourseInterface;

    spyOn(courseService, 'getList').and.returnValue([course])

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let element = fixture.debugElement.nativeElement.querySelector('.coursesList').style.border;
      expect(element).toEqual('1px solid blue')
    })
  });

  it('should set "green" color to border as course was added within days', () => {
    let tenDays = 10;
    let minusFromToday10days = new Date().getTime() - (1000 * 60 * 60 * 24 * tenDays);
    let course = {
      id: '2',
      title: 'test2',
      description: 'test description',
      duration: '90',
      creationDate: minusFromToday10days,
      topRated: false
    } as CourseInterface;

    spyOn(courseService, 'getList').and.returnValue([course])

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let element = fixture.debugElement.nativeElement.querySelector('.coursesList').style.border;
      expect(element).toEqual('1px solid green')
    })
  });

  it('should set "none" color to border as course was added more than 14 days ago', () => {
    let twentyDays = 20;
    let minusFromToday20days = new Date().getTime() - (1000 * 60 * 60 * 24 * twentyDays);
    let course = {
      id: '2',
      title: 'test2',
      description: 'test description',
      duration: '90',
      creationDate: minusFromToday20days,
      topRated: false
    } as CourseInterface;

    spyOn(courseService, 'getList').and.returnValue([course])

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let element = fixture.debugElement.nativeElement.querySelector('.coursesList').style.border;
      expect(element).toEqual('none')
    })
  });

});
