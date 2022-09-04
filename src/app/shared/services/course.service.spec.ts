import {CourseService} from "./course.service";
import {CourseInterface} from "../../types/course.interface";

describe('(CourseService)', () => {

  it('should get list of courses', () => {
    const courseService = new CourseService();
    const result = courseService.getList();
    expect(result).not.toBeNull();
  });

  it('should add a new course to the list of courses', () => {
    let newCourse = {
      id: '5',
      title: 'Test course',
      creationDate: 1668898800000,
      duration: '90',
      description: 'Test — один из наиболее распространенных языков программирования в мире.',
      topRated: false
    } as CourseInterface;

    const courseService = new CourseService();
    const result = courseService.createCourse(newCourse);
    expect(result.length).toBe(5)
    expect(result[4]).toEqual(newCourse)
  });

  it('should get course by id', () => {
    const courseService = new CourseService();
    const result = courseService.getItemById('1');
    expect(result.id).toEqual('1')
  });

  it('should update course', () => {
    const courseService = new CourseService();
    let updatedCourse ;
    let courseUpdateId = '1';
    updatedCourse = {
      id: courseUpdateId,
      title: 'Updated course',
      creationDate: 1668898800000,
      duration: '90',
      description: 'Updated',
      topRated: false
    }
    courseService.updateItem(updatedCourse);
    const updated = courseService.getItemById(courseUpdateId)
    expect(updated).toEqual(updatedCourse);
  });

  it('should remove course by id', () => {
    const courseService = new CourseService();
    let courseId = '1';
    let quantity = courseService.getList().length;
    const result = courseService.removeItem(courseId);
    expect(result.length).toEqual(quantity - 1)
  });
});
