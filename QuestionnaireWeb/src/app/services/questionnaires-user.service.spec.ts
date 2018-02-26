import { TestBed, inject } from '@angular/core/testing';

import { QuestionnairesUserService } from './questionnaires-user.service';

describe('QuestionnairesUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnairesUserService]
    });
  });

  it('should be created', inject([QuestionnairesUserService], (service: QuestionnairesUserService) => {
    expect(service).toBeTruthy();
  }));
});
