import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdbmsMetadataTreeComponent } from './rdbms-metadata-tree.component';

describe('RdbmsMetadataTreeComponent', () => {
  let component: RdbmsMetadataTreeComponent;
  let fixture: ComponentFixture<RdbmsMetadataTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdbmsMetadataTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdbmsMetadataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
