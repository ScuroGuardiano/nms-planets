import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGalaxy } from 'src/app/api-interfaces';
import EditableRow from 'src/app/helpers/editable-row';

@Component({
  selector: 'app-galaxy-row',
  templateUrl: './galaxy-row.component.html',
  styleUrls: ['./galaxy-row.component.scss']
})
export class GalaxyRowComponent extends EditableRow<IGalaxy> {}
