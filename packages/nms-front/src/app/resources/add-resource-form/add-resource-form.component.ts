import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationStyleType } from '@swimlane/ngx-ui';
import { IResource } from 'src/app/api-interfaces';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent implements OnInit {

  constructor(
    private resourcesService: ResourcesService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  valid = false;
  addingPromise?: Promise<IResource>;

  name = '';
  symbol = '';
  group?: string;
  rarity?: string;
  baseValue?: number;

  onInput(form: HTMLFormElement) {
    console.log("AddResourceFormComponent::onInput");
    this.valid = form.checkValidity();
  }

  async submit(form: HTMLFormElement) {
    this.addingPromise = this.resourcesService.create({
      name: this.name,
      symbol: this.symbol,
      group: this.group,
      rarity: this.rarity,
      baseValue: this.baseValue
    });

    try {
      const result = await this.addingPromise;
      this.notificationService.create({
        title: "Added resource!",
        body: `Resource ${result.name} (${result.symbol}) has been added.`,
        styleType: NotificationStyleType.success,
        timeout: 8000
      })
      form.reset();
    }
    catch (err: any) {
      this.handleError(err);
    }
  }

  handleError(err: any) {
    let message = `Error: ${err?.message}. Check console for more details.`;

    if (err instanceof HttpErrorResponse) {
      const errorDetails = JSON.stringify(err.error, null, 2);
      message = `HTTP Error [${err.status} ${err.statusText}]: ${errorDetails}`;
    }

    this.notificationService.create({
      title: "Error!",
      body: message,
      styleType: NotificationStyleType.error,
      timeout: 8000
    });
    console.error(err);
  }
}
