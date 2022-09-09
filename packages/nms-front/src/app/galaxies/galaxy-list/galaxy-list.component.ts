import { Component, OnInit } from '@angular/core';
import { AlertService } from '@swimlane/ngx-ui';
import { IGalaxy } from 'src/app/api-interfaces';
import { ColumnEditUpdateEvent, DatatableColumn } from 'src/app/datatable/interfaces';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { GalaxiesService } from 'src/app/services/galaxies.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html',
  styleUrls: ['./galaxy-list.component.scss']
})
export class GalaxyListComponent implements OnInit {

  constructor(
    private galaxiesService: GalaxiesService,
    private errorHandler: ErrorHandlerService,
    private notificationService: NotificationService,
    private alertService: AlertService
  ) { }

  loadingPromise?: Promise<any>;
  galaxies?: IGalaxy[];

  columns: DatatableColumn[] = [
    { key: "order", label: "Order" },
    { key: "name", label: "Name" },
    { key: "color", label: "Color" },
    { key: "type", label: "Type" }
  ];

  ngOnInit(): void {
    this.loadData();
  }

  trackBy(index: number, item: IGalaxy) {
    return item.id;
  }

  async loadData() {
    this.loadingPromise = this.galaxiesService.list();
    try {
      this.galaxies = await this.loadingPromise;
    }
    catch(err) {
      this.handleError(err);
    }
  }

  async update(galaxy: ColumnEditUpdateEvent<IGalaxy>) {
    try {
      this.loadingPromise = this.galaxiesService.update(galaxy.prev.id, galaxy.updated);
      const updated = await this.loadingPromise;
      this.notificationService.success(`Galaxy ${galaxy.updated.order} - ${galaxy.prev.name} has been updated.`);
      this.galaxies = this.galaxies?.map(g => g.id === updated.id ? updated : g);
    }
    catch (err) {
      this.handleError(err);
    }
  }

  async onDelete(galaxy: IGalaxy) {
    const confirmation = await this.alertService.confirm({
      title: `Deleting galaxy ${galaxy.name}`,
      content: `Do you really want to delete galaxy ${galaxy.order} - ${galaxy.name}?`
    }).toPromise();

    if (confirmation.type === "ok") {
      this.delete(galaxy);
    }
  }

  private async delete(galaxy: IGalaxy) {
    this.loadingPromise = this.galaxiesService.delete(galaxy.id);

    try {
      await this.loadingPromise;
      this.notificationService.success(`Deleted galaxy ${galaxy.order} - ${galaxy.name}`);
      this.loadData();
    } catch(err) {
      this.handleError(err);
    }
  }

  private handleError(err: any) {
    this.errorHandler.handleError(err);
  }
}
