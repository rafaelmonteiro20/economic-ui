import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  template: `
    <label class="form-control-label" [class.has-error]="hasError()" [class.required]="required">
      {{ value }}
    </label>
  `,
  styles: []
})
export class LabelComponent  {

  @Input() control: FormControl;
  @Input() value: string;
  @Input() required = false;

  hasError(): boolean {
    return this.control.invalid && this.control.dirty;
  }

}
