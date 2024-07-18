import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../../services/loading/loading.service";
import { delay } from "rxjs";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrl: "./loading.component.css",
  animations: [trigger("fade", [transition("void => *", [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))])])]
})
export class LoadingComponent implements OnInit {
  loading: boolean = false;
  constructor(private _loading: LoadingService) {}

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe(loading => {
        this.loading = loading;
      });
  }

  ngOnInit(): void {
    this.listenToLoading();
  }
}
