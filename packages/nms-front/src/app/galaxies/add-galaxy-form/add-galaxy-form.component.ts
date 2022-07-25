import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-galaxy-form',
  templateUrl: './add-galaxy-form.component.html',
  styleUrls: ['./add-galaxy-form.component.scss']
})
export class AddGalaxyFormComponent implements OnInit {

  constructor() { }

  addingPromise?: Promise<any>;
  valid = false;

  name = '';
  order?: number;
  type = '';
  color = '';

  ngOnInit(): void {
  }

  onInput(form: HTMLFormElement) {
    this.valid = form.checkValidity();
  }

  submit(form: HTMLFormElement) {

  }
}
