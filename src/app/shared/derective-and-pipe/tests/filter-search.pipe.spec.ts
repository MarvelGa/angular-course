import {FilterSearchPipe} from "../filter-search.pipe";

describe('FilterSearchPipe', () => {
  it('should find course by it title', () => {
    let course1 = {
      title: 'Java course'
    }

    let course2 = {
      title: 'Angular course'
    }
    let courses = [course1, course2];
    const pipe = new FilterSearchPipe();
    let result = pipe.transform(courses, 'angular');
    expect(result[0]).toEqual(course2);
  });

  it('should not filtering the courses if there word of search is empty', () => {
    let course1 = {
      title: 'Java course'
    }

    let course2 = {
      title: 'Angular course'
    }
    let courses = [course1, course2];
    const pipe = new FilterSearchPipe();
    let result = pipe.transform(courses, '');
    expect(result.length).toEqual(courses.length);
  });
})
