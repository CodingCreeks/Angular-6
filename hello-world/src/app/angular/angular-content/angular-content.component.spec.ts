import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularContentComponent } from './angular-content.component';

describe('AngularContentComponent', () => {
  let component: AngularContentComponent;
  let fixture: ComponentFixture<AngularContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
