import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticateService} from '../../services/authenticate.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage.service';
import {AuthResponse} from '../../entities/AuthResponse';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticateService: AuthenticateService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]]
    });
  }

  private onSubmit(): void {
    this.authenticateService
      .signIn(this.loginForm.value.loginControl, this.loginForm.value.passwordControl)
      .subscribe((resp: AuthResponse) => {
        this.localStorageService.saveToken(resp.token);
        this.router.navigate(['/environment']);
      });
  }

}
