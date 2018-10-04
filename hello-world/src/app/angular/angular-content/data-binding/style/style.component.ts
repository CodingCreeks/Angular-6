import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  htmlCode1 = `<p [style.color]="green">Style Binding</p>`;

  htmlCode2 = `<p [style.color]="hasError?'orange':'green'">Style Binding</p>`;

  htmlCode3 = `<p [style.color]="hightlightColor">Style Binding</p>`;

  htmlCode4 = `<p [ngStyle]="titleStyles">Style Binding</p>`;

  public message = 'Style Binding';
  public successClass = 'text-success';
  public hasError = true;
  public hightlightColor = 'magenta';
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() {}

  ngOnInit() {}
}
