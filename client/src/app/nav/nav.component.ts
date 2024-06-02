import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Route, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={}

  constructor(public accountService:AccountService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');

  }, error => {
    console.log(error);
    this.toastr.error(error.error);
  })
}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
