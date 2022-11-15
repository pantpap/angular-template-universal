import {Component, OnInit} from '@angular/core';
import {SeoService} from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-template-universal';
  constructor(private seoService: SeoService) {
  }
  ngOnInit() {
    this.seoService.initDefaultMetaInformation();
  }
}
