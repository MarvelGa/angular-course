import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesAddComponent} from './courses-add.component';
import {Router} from "@angular/router";
import {CourseService} from "../../../shared/services/course.service";
import {CourseInterface} from "../../../types/course.interface";
import {of} from "rxjs";

describe('CoursesAddComponent', () => {
  let component: CoursesAddComponent;
  let fixture: ComponentFixture<CoursesAddComponent>;
  let service: CourseService;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [CoursesAddComponent],
      providers: [
        {provide: Router, useValue: routerSpy},
        {
          provide: CourseService, useValue: {
            getList: () => (of([])), createCourse: () => {
            }
          }
        }
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesAddComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a title from the child component and set it in the "courseTitle" field', () => {
    component.getTitle('Test');
    expect(component.courseTitle).toEqual('Test');
  });

  it('should receive a description from the child component and set it in the "description" field', () => {
    component.getDescription('Test');
    expect(component.courseDescription).toEqual('Test');
  });

  it('should receive a duration from the child component and set it in the "duration" field', () => {
    component.getDuration('60');
    expect(component.courseDuration).toEqual('60');
  });

  it('should receive a courseDate from the child component and set it in the "courseDate" field', () => {
    component.getCourseDate('1659996000000');
    expect(component.courseDate).toEqual('1659996000000');
  });


  it('should return last id', () => {
    let course1 = {
      id: '1',
      creationDate: 1668898800000
    } as CourseInterface;

    let course2 = {
      id: '2',
      creationDate: 1659996000000
    } as CourseInterface;

    const courses = [course1, course2] as CourseInterface[];
    spyOn(service, 'getList').and.returnValue(courses);
    let result = component.getLastId();
    expect(result).toBe(2)
  });

  it('should navigate by the url', () => {
    let router = fixture.debugElement.injector.get(Router);
    component.goToCourses('event');
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('/courses');
  });

  it('should save a course and redirect to "/courses" page ', () => {
    let course1 = {
      id: '1',
      creationDate: 1668898800000
    } as CourseInterface;

    let course2 = {
      id: '2',
      creationDate: 1659996000000
    } as CourseInterface;

    let course3 = {
      id: '3',
      title: 'test1',
      description: 'test description',
      duration: '90',
      creationDate: 1659996000000
    } as CourseInterface;

    const courses = [course1, course2] as CourseInterface[];
    spyOn(service, 'getList').and.returnValue(courses);
    spyOn(service, 'createCourse').and.returnValue([course1, course2, course3]);
    component.courseTitle = 'test1';
    component.courseDescription = 'test description';
    component.courseDate = '2020-12-25';
    component.courseDuration = '90';
    component.submitEvent('event');
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe('/courses');
  })

  it('should alert message if any of course field is empty', () => {
    component.courseTitle = '';
    spyOn(window, "alert");
    component.submitEvent('some');
    expect(window.alert).toHaveBeenCalledWith('Please, fill in all fields');
  })
});
