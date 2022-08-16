import {CourseInterface} from "../app/types/course.interface";

export const coursesList:CourseInterface[] =[
  {
    id: '1',
    title: 'Angular course',
    creationDate: '9 Aug, 2022',
    duration : '190',
    description : 'Learn Angular 11 and build responsive, enterprise-strength applications that run smoothly on desktop and mobile devices with this Angular training course. Angular provides a robust framework that facilitates the development of richly interactive applications running on multiple platforms. Gain experience building components, creating directives, modularizing applications, and building template-driven forms.\n' +
      '\n' +
      'You\'ll be given remote access to a preconfigured virtual machine for you to redo your hands-on exercises, develop/test new code, and experiment with the same software used in your course. This course is compatible with older versions of Angular.',
    topRated: false
  },

  {
    id: '2',
    title: 'JS course',
    creationDate: '20 Nov, 2022',
    duration : '90',
    description : 'JavaScript — один из наиболее распространенных языков программирования в мире, который преимущественно используется для интерактивных веб-приложений. Кроме того, JavaScript хорошо подойдет для начинающих, поскольку с его помощью можно писать код и получать визуальный результат, что дает дополнительную мотивацию новичкам в программировании. Динамический контент является актуальной темой в области веб-разработки. Под таким контентом понимаются материалы, которые постоянно видоизменяются и адаптируются под определенных пользователей. Например, JavaScript можно использовать, чтобы определить, с какого устройства (мобильного и компьютера) пользователь зашел на сайт, и на основании этих данных загрузить полную или мобильную версию веб-сайта. Эти вещи могут показаться мелочами, но именно благодаря им с помощью JavaScript можно создавать динамические веб-страницы, которые привлекают пользователей.',
    topRated: true
  },

  {
    id: '3',
    title: 'Java course',
    creationDate: '22 Mar, 2022',
    duration : '30',
    description : 'Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer.',
    topRated: false
  },

  {
    id: '4',
    title: 'Python course',
    creationDate: '22 Nov, 2022',
    duration : '120',
    description : 'Python is not only one of the most popular programming languages but also one of the easiest to learn. It’s also an excellent choice for securing stable, lucrative programming jobs, as Python programming is a common need for many businesses.' +
      'Although preferred for data science and automation, the Python programming language can be used for building a range of applications for a wide variety of platforms. If you’re interested in learning Python, you might kickstart your Python training with a Python course.',
    topRated: false
  }

]
