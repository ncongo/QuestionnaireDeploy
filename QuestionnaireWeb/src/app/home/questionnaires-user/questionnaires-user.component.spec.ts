import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesUserComponent } from './questionnaires-user.component';

describe('QuestionnairesUserComponent', () => {
  let component: QuestionnairesUserComponent;
  let fixture: ComponentFixture<QuestionnairesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
