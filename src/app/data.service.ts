import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import * as yaml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getDataFromYAMLFile() {
    const yamlFilePath = './assets/server-config.yaml';

    return this.http.get(yamlFilePath, { responseType: 'text' })
      .pipe(
        map((yamlData: string) => yaml.load(yamlData))
      );
  }
}
