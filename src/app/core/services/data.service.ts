import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService  {

  constructor() { }
  createDb() {
    return {
      courses: [
        {
          id: 1,
          image: "../assets/images/arduino.jfif", 
          courseName: 'Arduino',
          price:4000
        },
        {
          id: 2,
          image: "../assets/images/angular", 
          courseName: 'Angular',
          price:5000
        },
        {
          id: 3,
          image: "../assets/images/dotnet.png", 
          courseName: 'Dot Net',
          price:6000
        },
        {
          id: 4,
          image: "../assets/images/python.png", 
          courseName: 'Python',
          price:5000
        },
        {
          id: 5,
          image: "../assets/images/react.png", 
          courseName: 'React',
          price:6000
        },
        {
          id: 6,
          image: "../assets/images/nodeJs.png", 
          courseName: 'NodeJs',
          price:5000
        }
      ]
    };
  }

}
