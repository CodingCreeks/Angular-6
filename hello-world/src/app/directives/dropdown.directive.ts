import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropright');

  @HostListener('mouseenter')
  toggleOpen() {
    this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
  }
  @HostListener('mouseleave')
  toggleClose() {
    this.dropdownParentEl
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }

  @HostListener('click')
  toogleOpen() {
    this.dropdownParentEl
      .querySelector('.dropdown-menu')
      .classList.toggle('show');
  }
}
