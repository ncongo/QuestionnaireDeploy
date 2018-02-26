import { TestBed, inject } from '@angular/core/testing';

import { QuestionnairesAdminService } from './questionnaires-admin.service';

describe('QuestionnairesAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnairesAdminService]
    });
  });

  it('should be created', inject([QuestionnairesAdminService], (service: QuestionnairesAdminService) => {
    expect(service).toBeTruthy();
  }));
});
