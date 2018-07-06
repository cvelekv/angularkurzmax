import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "testserver";
  username = "cvele";
  serverCreated = false;
  servers = ["testserver", "testserver 2"];
  displayParagraph = false;
  array = [];
  i = 0;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  reset() {
    this.username = "";
  }
  displayIt() {
    this.displayParagraph = !this.displayParagraph;
    this.array.push(this.array.length + 1);
  }

  }

