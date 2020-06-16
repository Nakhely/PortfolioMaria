import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworksComponentComponent } from './myworks-component.component';

describe('MyworksComponentComponent', () => {
  let component: MyworksComponentComponent;
  let fixture: ComponentFixture<MyworksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyworksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyworksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
