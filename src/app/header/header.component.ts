import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkThemeSelected: boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onClickThemeMode(mode: string) {
    const body = document.getElementsByTagName("body")[0];

    if (mode === "dark") {
      this.isDarkThemeSelected = true;
      body.setAttribute("data-bs-theme", "dark");
    } else if (mode === "light") {
      this.isDarkThemeSelected = false;
      body.setAttribute("data-bs-theme", "");
    }
  }
}




