import {Component, Input} from "@angular/core";
import {IReview} from "../../pizza.model";

@Component({
  selector: 'reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  private reviews: Array<IReview>;

  private newReview: IReview;

  constructor() {
    this.newReview = {};
  }

  public onSubmit(){
    this.newReview.createdOn = new Date().getMilliseconds();
    this.reviews.push(this.newReview);
    this.newReview = {};
  }
}
