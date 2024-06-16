import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fact: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://catfact.ninja/fact').subscribe((response: any) => {
      console.log(response);
      this.fact = response.fact;
    });
  }


}
