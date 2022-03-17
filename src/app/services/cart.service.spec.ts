import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

describe('CartService', () => {
  let service: CartService;
  let httpClient: HttpClient ;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Function: getApiFeedback', () => {
    it('should exist', () => {
      expect(service.getApiFeedback).toEqual(jasmine.any(Function));
    });

    it('should call httpClient.post with a given list of ids', () => {
      spyOn(httpClient, 'post').and.returnValue(Observable.of('foobar'));
      let data = '';
      service.getApiFeedback('foobar')
        .subscribe(
          (response) => {

            data = response;
          }
        );

        expect(data).toEqual('foobar');
    });
  });
});