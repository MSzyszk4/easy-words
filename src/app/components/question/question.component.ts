import {Component, OnInit} from '@angular/core';
import {WordsService} from "../../services/words.service";
import {WordType} from "../../data/models";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{

  word?: WordType;
  constructor(private wordsService: WordsService) {
  }

  ngOnInit() {
    this.fetchWord();
  }


  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

  check() {
    this.wordsService.check();
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
  }
}
