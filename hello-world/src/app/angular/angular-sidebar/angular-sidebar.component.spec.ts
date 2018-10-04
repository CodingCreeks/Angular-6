import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSidebarComponent } from './angular-sidebar.component';

describe('AngularSidebarComponent', () => {
  let component: AngularSidebarComponent;
  let fixture: ComponentFixture<AngularSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
