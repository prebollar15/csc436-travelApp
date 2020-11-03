import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  environment = 'MacOS 10.15.7';
  ide = 'VS Code';

  constructor() { }

  ngOnInit(): void {
  }

}
