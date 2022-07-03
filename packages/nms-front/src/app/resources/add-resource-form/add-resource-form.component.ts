import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService, NotificationStyleType } from '@swimlane/ngx-ui';
import { IResource } from 'src/app/api-interfaces';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent implements OnInit {

  constructor(
    private resourcesService: ResourcesService,
    private notificationService: NotificationService,
    private errorHandler: ErrorHandlerService
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

  @Output() added = new EventEmitter<IResource>();

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
      this.added.emit(result);
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
    this.errorHandler.handleError(err);
  }
}
