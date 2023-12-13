import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from 'src/app/core/interfaces/course.model';
// import { course } from 'src/app/core/interfaces/course.model';
import { CommonService } from 'src/app/core/services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coursesArray: course[] = [];
  addedItems = 0;
  _id:number[]=[]; // !--- non-null assertion operator.

  constructor(private router: Router,
    private commonService: CommonService,
    private activatedroute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.commonService.getCourse().subscribe((res: course[]) => {
      this.coursesArray = res;
      console.log(this.coursesArray);
    })
  }
  addToCart(event: Event,id:number) {
    this.addedItems++;
    const clickedButton = event.target as HTMLButtonElement;
    clickedButton.disabled = true;
    this._id.push(+id);
    console.log(this._id);
  }

  // lookCart(id:any) :void{
  //   // this.activatedroute.params.subscribe(params => {
  //   //   const id = +params['id'];
  //   //       });
  //   this.router.navigate(['/cart',id]);
  // }
}
