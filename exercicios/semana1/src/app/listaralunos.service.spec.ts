import { TestBed } from '@angular/core/testing';

import { ListaralunosService } from './listaralunos.service';

describe('ListaralunosService', () => {
  let service: ListaralunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaralunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
