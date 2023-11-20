import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yaml-test';
  serverConfig: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDataFromYAMLFile().subscribe(
      (config) => {
        this.serverConfig = config;
        console.log('Server IP:', this.serverConfig.server.ip);
        console.log('Server Port:', this.serverConfig.server.port);
        // You can access other properties as needed
      },
      (error) => {
        console.error('Error loading YAML data:', error);
      }
    );
  }
}
