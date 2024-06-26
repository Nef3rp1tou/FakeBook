import { UserParams } from './../../_models/userParams';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  showFilters = false;
  members: Member[];
  pagination : Pagination;
  userParams : UserParams;
  user : User;
  genderList = [{value:'male', display: 'მამრობითი'}, {value:'female', display:'მდედრობითი'}]

  constructor(private membersService:MembersService, private accountService:AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.userParams = new UserParams(user)

    })
   }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  resetFilters() {
    this.userParams = new UserParams(this.user);
    this.loadMembers();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.loadMembers();

  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

}
