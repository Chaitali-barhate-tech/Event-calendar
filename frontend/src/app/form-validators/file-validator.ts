import { ValidatorFn, FormControl } from '@angular/forms';

export function fileValidator(...type: string[]): ValidatorFn {
  return ((control: FormControl) => {
    const file = control.value;
    if (file) {
      const extension = file.match(/\.[0-9a-z]+$/i).toString();
      if (type.indexOf(extension) === -1) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  });
}
