import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-newcomp",
  templateUrl: "./newcomp.component.html",
  styleUrls: ["./newcomp.component.css"]
})
export class NewcompComponent implements OnInit {
  displayParagraph = false;
  array = [];
  constructor() {}

  ngOnInit() {}

  displayIt() {
    this.displayParagraph = !this.displayParagraph;
    this.array.push(new Date());
  }
}
