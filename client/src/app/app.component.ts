import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Init } from 'v8';
import { DataService } from './data.service'; // Adjust the path if needed
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'მაჭანკალი!';
  users : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {

    this.users = response;  
    }, error => {
      console.log(error);
    })
  }
}
