import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesComponent} from './courses.component';
import {ActivatedRoute, Router} from "@angular/router";
import {FilterSearchPipe} from "../../shared/derective-and-pipe/filter-search.pipe";
import {OrderByCreationDatePipe} from "../../shared/derective-and-pipe/order-by-creation-date.pipe";
import {DurationPipe} from "../../shared/derective-and-pipe/duration.pipe";
import {TransformToDatetimePipe} from "../../shared/derective-and-pipe/transform-to-datetime.pipe";
import {CourseService} from "../../shared/services/course.service";
import {of} from "rxjs";
import {CourseInterface} from "../../types/course.interface";

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
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

    let course2 = {
      id: '2',
      title: 'test2',
      description: 'test description',
      duration: '90',
      creationDate: 1659996000000,
      topRated: false
    } as CourseInterface;

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent, FilterSearchPipe, OrderByCreationDatePipe, DurationPipe, TransformToDatetimePipe],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: routerSpy},
        {
          provide: CourseService, useValue: {getList: () => of([course, course2]), removeItem: () => of([course])}
        }

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edite course', () => {
    let id = '1';
    component.editCourse(id);
    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should navigate by the url')
      .toBe(`courses/${id}`);
  });

  it('should delete courses', () => {
    let id = '1';
    spyOn(window, "confirm").and.returnValue(true);
    component.deleteCourse(id);
    expect(window.confirm).toHaveBeenCalledWith('Do you really want to delete this course?');
  });

  it('should print', () => {
    console.log = jasmine.createSpy("log");
    component.printInConsoleLog('Test')
    expect(console.log).toHaveBeenCalledWith('Test');
  });

  it('should return id', () => {
    let course1 = {
      id: '1',
      creationDate: 1668898800000
    } as CourseInterface;
    let result = component.trackByIds(1, course1);
    expect(result).toBe('1');
  })
});
