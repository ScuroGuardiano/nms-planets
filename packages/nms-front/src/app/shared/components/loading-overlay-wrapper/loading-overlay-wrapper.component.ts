import { Component, Input, OnDestroy } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';

/**
 * Set only one - loading, promise or observable or the entire Universe will collapse.
 */
@Component({
  selector: 'app-loading-overlay-wrapper',
  templateUrl: './loading-overlay-wrapper.component.html',
  styleUrls: ['./loading-overlay-wrapper.component.scss']
})
export class LoadingOverlayWrapperComponent implements OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  @Input() loading = false;

  @Input() set promise(value: Promise<any> | null | undefined) {
    this.changeObservable(value ? from(value) : null);
  }

  @Input() set observable(value: Observable<any> | null | undefined) {
    this.changeObservable(value);
  }

  private subscription?: Subscription;

  private changeObservable(value?: Observable<any> | null) {
    this.subscription?.unsubscribe();
    if (!value) {
      this.loading = false;
      return;
    }

    this.loading = true;
    this.subscription = value.subscribe(
      () => this.loading = false,
      () => this.loading = false
    );
  }
}

