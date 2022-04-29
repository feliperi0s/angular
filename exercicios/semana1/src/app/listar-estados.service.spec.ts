import { TestBed } from '@angular/core/testing';

import { ListarEstadosService } from './listar-estados.service';

describe('ListarEstadosService', () => {
  let service: ListarEstadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEstadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
