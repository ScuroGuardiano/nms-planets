import { Component } from '@angular/core';
import { IResource } from 'src/app/api-interfaces';
import EditableRow from 'src/app/helpers/editable-row';

@Component({
  selector: 'app-resource-row',
  templateUrl: './resource-row.component.html',
  styleUrls: ['./resource-row.component.scss']
})
export class ResourceRowComponent extends EditableRow<IResource> {}
