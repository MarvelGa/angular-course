import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesEditComponent} from './courses-edit.component';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../shared/services/course.service";
import {of} from "rxjs";
import {CourseInterface} from "../../../types/course.interface";
import {DirectiveAndPipeModule} from "../../../shared/derective-and-pipe/directive-and-pipe.module";

describe('CoursesEditComponent', () => {
  let component: CoursesEditComponent;
  let fixture: ComponentFixture<CoursesEditComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  let service: CourseService;
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

    let course = {
      id: '1',
      title: 'test1',
      description: 'test description',
      duration: '90',
      creationDate: 1659996000000,
      topRated: false
    } as CourseInterface;

    await TestBed.configureTestingModule({
      declarations: [CoursesEditComponent],
      imports: [DirectiveAndPipeModule],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {
          provide: CourseService, useValue: {getItemById: () => of(course), updateItem: () => of(course)}
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesEditComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CourseService);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title', () => {
    component.getTitle('TestTitle');
    expect(component.courseTitle).toEqual('TestTitle');
  });

  it('should set description', () => {
    component.getDescription('TestDescription');
    expect(component.courseDescription).toEqual('TestDescription');
  });

  it('should set duration', () => {
    component.getDuration('90');
    expect(component.courseDuration).toEqual('90');
  });

  it('should set date', () => {
    component.getCourseDate('1659996000000');
    expect(component.courseDate).toEqual('1659996000000');
  });

  it('should update course and redirect to "courses" page', () => {
    component.submitEvent('update')
    spyOn(service, "updateItem");
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('courses');
  });

  it('should redirect to "courses" page', () => {
    component.goToCourses('event');
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('courses');
  });

  it('should convert date', () => {
    let result = component.setData(1659996000000);
    expect(result).toBe('2022-08-09')
  })

  it('should take data from "fake" database if user did not entered the value and redirect to "courses" page', () => {
    component.courseTitle = 'test';
    component.courseDescription = 'test';
    component.courseDuration = 'test';
    component.courseDate = 'test';
    component.submitEvent('update')
    spyOn(service, "updateItem");
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('courses');
  })

});
