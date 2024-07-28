import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSefeLink]',
  standalone: true,
  host:{
    '(click)' : 'onConfirmLeavePage($event)'
  }
})
export class SefeLinkDirective {

  queryParam = input('myapp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() { }

  onConfirmLeavePage(event: MouseEvent) {
    const wantToLeave = window.confirm('Do you want to leave the app?');

    if (wantToLeave){
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }

}
