import {inject, TestBed} from '@angular/core/testing';
import {AUTH_SERVICE, AuthServiceProvider, IAuthService} from "./auth.service";

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceProvider]
    });
  });

  it('should be created', inject([AUTH_SERVICE], (service: IAuthService) => {
    expect(service).toBeTruthy();
  }));
});
