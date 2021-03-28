import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRdbmsComponent } from './register-rdbms.component';

describe('RegisterRdbmsComponent', () => {
  let component: RegisterRdbmsComponent;
  let fixture: ComponentFixture<RegisterRdbmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRdbmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRdbmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
