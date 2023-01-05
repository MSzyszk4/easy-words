import {Component, OnDestroy, OnInit} from '@angular/core';
import {WordsService} from "../../services/words.service";
import {WordType} from "../../data/models";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy{

  word?: WordType;
  private words: WordType[] = [];
  private subscription!: Subscription;
  constructor(private wordsService: WordsService) {
  }

  ngOnInit() {
    this.subscription = this.wordsService.getWords().subscribe((words: WordType[]) => {
      this.words = words;
      this.fetchWord();
    })

  }


  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }



  private fetchWord(): void {
    this.word = this.words.shift();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
