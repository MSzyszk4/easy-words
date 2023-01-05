import {Component, Input} from '@angular/core';
import {WordType} from "../../data/models";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {

  @Input() title?: string;
  words: WordType[] = [];

  @Input() set word(word: WordType | null){
    if (word) {
      this.words.push(word)
    }
  }
}
