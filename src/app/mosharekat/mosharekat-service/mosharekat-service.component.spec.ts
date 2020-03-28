import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosharekatServiceComponent } from './mosharekat-service.component';

describe('MosharekatServiceComponent', () => {
  let component: MosharekatServiceComponent;
  let fixture: ComponentFixture<MosharekatServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosharekatServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosharekatServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
