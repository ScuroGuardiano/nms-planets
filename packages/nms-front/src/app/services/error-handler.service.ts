import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationStyleType } from '@swimlane/ngx-ui';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private notificationService: NotificationService) { }

  handleError(err: any) {
    console.error(err);

    if (err instanceof HttpErrorResponse) {
      this.handleHttpError(err);
    }
    this.displayNotification(`Error: ${err?.message}. Check console for more details.`);
  }

  handleHttpError(err: HttpErrorResponse) {
    const errorDetails = JSON.stringify(err.error, null, 2);
    this.displayNotification(`HTTP Error [${err.status} ${err.statusText}]: ${errorDetails}`);
  }

  private displayNotification(message: string) {
    this.notificationService.create({
      title: "Error!",
      body: message,
      styleType: NotificationStyleType.error,
      timeout: 8000
    });
  }
}
