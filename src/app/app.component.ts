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

  // TODO using https://www.youtube.com/watch?v=KeT7T_f-H2Q
  // TODO implement the titleService
  // TODO in seoService implement updateTags method
  // TODO on README.md  describe how to run in ssr mode
  }
}
