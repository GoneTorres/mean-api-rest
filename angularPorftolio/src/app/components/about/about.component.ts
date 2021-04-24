import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public title: string;
public subtitle: string;
public email: string;
  constructor() {
    this.title = 'Gonzalo Torres';
    this.subtitle = 'Desarrollador Full Stack | Diseñador Multimedia';
    this.email = 'gonzalotorres@gonzalotorres.com.ar';
  }

  ngOnInit(): void {
  }

}
