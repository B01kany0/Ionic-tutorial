import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutionicComponent } from './aboutionic.component';

describe('AboutionicComponent', () => {
  let component: AboutionicComponent;
  let fixture: ComponentFixture<AboutionicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutionicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutionicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
