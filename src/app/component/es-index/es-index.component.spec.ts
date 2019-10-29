import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsIndexComponent } from './es-index.component';

describe('EsIndexComponent', () => {
  let component: EsIndexComponent;
  let fixture: ComponentFixture<EsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
