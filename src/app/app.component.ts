import { Component } from '@angular/core';
import {UserInterface} from "./types/user.interface";
import {CourseInterface} from "./types/course.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  coursesList:CourseInterface[] =[
    {
      id: '1',
      title: 'Angular course',
      creationDate: '8h 2min',
      duration : '9 Sep, 2022',
      description : 'Learn Angular 11 and build responsive, enterprise-strength applications that run smoothly on desktop and mobile devices with this Angular training course. Angular provides a robust framework that facilitates the development of richly interactive applications running on multiple platforms. Gain experience building components, creating directives, modularizing applications, and building template-driven forms.\n' +
        '\n' +
        'You\'ll be given remote access to a preconfigured virtual machine for you to redo your hands-on exercises, develop/test new code, and experiment with the same software used in your course. This course is compatible with older versions of Angular.'
    },

    {
      id: '2',
      title: 'JS course',
      creationDate: '1h 30min',
      duration : '20 Nov, 2022',
      description : 'JavaScript — один из наиболее распространенных языков программирования в мире, который преимущественно используется для интерактивных веб-приложений. Кроме того, JavaScript хорошо подойдет для начинающих, поскольку с его помощью можно писать код и получать визуальный результат, что дает дополнительную мотивацию новичкам в программировании. Динамический контент является актуальной темой в области веб-разработки. Под таким контентом понимаются материалы, которые постоянно видоизменяются и адаптируются под определенных пользователей. Например, JavaScript можно использовать, чтобы определить, с какого устройства (мобильного и компьютера) пользователь зашел на сайт, и на основании этих данных загрузить полную или мобильную версию веб-сайта. Эти вещи могут показаться мелочами, но именно благодаря им с помощью JavaScript можно создавать динамические веб-страницы, которые привлекают пользователей.'
    }

  ]

  trackByIds (item: any) {
    return item.id;
  };
}
