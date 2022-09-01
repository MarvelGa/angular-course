import { OrderByCreationDatePipe } from "../order-by-creation-date.pipe";

describe('OrderByCreationDatePipe', ()=>{

  it ('should sort courses by the date', ()=>{
    let course1={
      creationDate: 1668898800000
    }

    let course2={
      creationDate: 1659996000000
    }

    let courses = [course1, course2];
     const orderByCreationDatePipe = new OrderByCreationDatePipe();
     let result = orderByCreationDatePipe.transform(courses);
     expect(result[0]).toEqual(course2);
     expect(result[1]).toEqual(course1);
  });
});
