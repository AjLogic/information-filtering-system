import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEsServerComponent } from './register-es-server.component';

describe('RegisterEsServerComponent', () => {
  let component: RegisterEsServerComponent;
  let fixture: ComponentFixture<RegisterEsServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEsServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
