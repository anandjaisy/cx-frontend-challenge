import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {GenericHttpClient} from "../../../shared/http.service";
import {User} from "../../../shared/model/user";

@Component({
  selector: 'cx-user',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private genericHttpClient: GenericHttpClient<User[]>) {
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  private loadUsers(): void {
    this.genericHttpClient.get("https://jsonplaceholder.typicode.com/users").subscribe((item) => {
      this.users = item;
    })
  }
}
