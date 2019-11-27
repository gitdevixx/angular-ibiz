import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../service/validation.service';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage !== null" class="text-danger">{{errorMessage}}</div>`,
  styleUrls: ['./control-messages.component.scss'],
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.getName(this.control)
        );
      }
    }

    return null;
  }

  private getName(control: FormControl): string | null {
    let group = <FormGroup>control.parent;
    if (!group) {
      return null;
    }
    let name: string;
    Object.keys(group.controls).forEach(key => {
      let childControl = group.get(key);
      if (childControl !== control) {
        return;
      }
      name = key;
    });
    if (typeof name != "undefined" && name !== null && name !== "") {
      name = name.toUpperCase();
    }
    return name;
  }

}