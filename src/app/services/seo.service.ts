import { Injectable } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private readonly metaTagService: Meta) { }

  initDefaultMetaInformation(){
    this.metaTagService.addTags([
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Pantelis Papasavvas'}
    ])
  }
}
