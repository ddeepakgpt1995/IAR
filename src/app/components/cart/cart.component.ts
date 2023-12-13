import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { course } from 'src/app/core/interfaces/course.model';
import { CommonService } from 'src/app/core/services/common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedCoursesId: number[] = [];
  coursesArray: course[] = []
  selectedCourses: course[] = []
  totalAmount: number = 0;

  constructor(private srvc: CommonService,
    private route: Router,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.selectedCoursesId = params['courses'];
      console.log(this.selectedCoursesId, "selectedCourses in cart compo");
      this.getCourses();
      console.log(this.selectedCourses, "this.selectedCourses");
    })
  }

  getCourses() {
    this.srvc.getCourse().subscribe((res: course[]) => {
      res.forEach((item) => {
        this.selectedCoursesId.forEach((itemId) => {
          if ( +item.id === +itemId) {
            this.totalAmount  += item.price;
            this.selectedCourses.push(item);
          }
        })
      })
    })
  }
  
  // getCourses() {
  //   this.srvc.getCourse().subscribe((courses: course[]) => {
  //     courses
  //       .filter(item => this.selectedCoursesId.includes(+item.id))
  //       .forEach(item => {
  //         this.totalAmount += item.price;
  //         this.selectedCourses.push(item);
  //       });
  //   });
  // }


  backToCourse() {
    this.route.navigate(['/dashboard']);
  }
}
