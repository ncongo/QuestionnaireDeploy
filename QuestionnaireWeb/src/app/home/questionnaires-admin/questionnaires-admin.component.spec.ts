import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesAdminComponent } from './questionnaires-admin.component';

describe('QuestionnairesAdminComponent', () => {
  let component: QuestionnairesAdminComponent;
  let fixture: ComponentFixture<QuestionnairesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
