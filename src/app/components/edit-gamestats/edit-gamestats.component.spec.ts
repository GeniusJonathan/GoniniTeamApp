import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamestatsComponent } from './edit-gamestats.component';

describe('EditGamestatsComponent', () => {
  let component: EditGamestatsComponent;
  let fixture: ComponentFixture<EditGamestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGamestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
