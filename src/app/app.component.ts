import { Component } from '@angular/core';
import {WordsService} from "./services/words.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-words';

  nouns = this.wordsService.getNouns();
  verbs = this.wordsService.getVerbs();

  constructor(private wordsService: WordsService) {
  }

  // get nouns() {
  //   return this.wordsService.getNouns();
  // }
  //
  // get verbs() {
  //   return this.wordsService.getVerbs();
  // }



}
