import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdafaterComponent } from './listdafater.component';

describe('ListdafaterComponent', () => {
  let component: ListdafaterComponent;
  let fixture: ComponentFixture<ListdafaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdafaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdafaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
