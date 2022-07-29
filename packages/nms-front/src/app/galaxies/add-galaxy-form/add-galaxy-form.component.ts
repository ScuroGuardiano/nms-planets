import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService, NotificationStyleType } from '@swimlane/ngx-ui';
import { IGalaxy } from 'src/app/api-interfaces';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { GalaxiesService } from 'src/app/services/galaxies.service';

@Component({
  selector: 'app-add-galaxy-form',
  templateUrl: './add-galaxy-form.component.html',
  styleUrls: ['./add-galaxy-form.component.scss']
})
export class AddGalaxyFormComponent implements OnInit {

  constructor(
    private galaxiesService: GalaxiesService,
    private notificationService: NotificationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  addingPromise?: Promise<any>;
  valid = false;

  name = '';
  order?: number;
  type?: string;
  color?: string;

  @Output() added = new EventEmitter<IGalaxy>();

  onInput(form: HTMLFormElement) {
    this.valid = form.checkValidity();
  }

  async submit(form: HTMLFormElement) {
    this.addingPromise = this.galaxiesService.create({
      name: this.name,
      order: this.order!,
      type: this.type,
      color: this.color
    });

    try {
      const result = await this.addingPromise;
      this.added.emit(result);
      this.notificationService.create({
        title: "Added galaxy!",
        body: `Galaxy no ${result.order}: ${result.name} has been added`,
        styleType: NotificationStyleType.success,
        timeout: 8000
      });
      form.reset();
    }
    catch(err: any) {
      this.handleError(err);
    }
  }

  handleError(err: any) {
    this.errorHandler.handleError(err);
  }
}
