import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IReview} from "../../../pizza.model";

@Component({
  selector: 'reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  private reviews: Array<IReview>;

  @Output()
  private addReview: EventEmitter<IReview> = new EventEmitter();

  private newReview: IReview;

  constructor() {
    this.newReview = {};
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = {};
  }
}
