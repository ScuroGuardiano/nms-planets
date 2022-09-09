import { Injectable } from '@angular/core';
import { NotificationService as NgxNotificationService, NotificationStyleType } from '@swimlane/ngx-ui';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notificationService: NgxNotificationService) { }

  readonly defaultTimeout = 8000;

  success(message: string, title = "Success", timeout = this.defaultTimeout) {
    this.notificationService.create({
      title: title,
      body: message,
      timeout: timeout,
      styleType: NotificationStyleType.success
    });
  }

  info(message: string, title = "Info", timeout = this.defaultTimeout) {
    this.notificationService.create({
      title: title,
      body: message,
      timeout: timeout,
      styleType: NotificationStyleType.info
    });
  }

  warn(message: string, title = "Warning", timeout = this.defaultTimeout) {
    this.notificationService.create({
      title: title,
      body: message,
      timeout: timeout,
      styleType: NotificationStyleType.warning
    });
  }

  error(message: string, title = "Error!", timeout = this.defaultTimeout) {
    this.notificationService.create({
      title: title,
      body: message,
      timeout: timeout,
      styleType: NotificationStyleType.error
    });
  }
}
