import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  results: any = {};
  couter: number = 0;
  isGood: boolean = false;
  showQuiz: boolean = true;
  showResult: boolean = false;
  result:string = "";
  imgGood:string = "https://cdn.boldomatic.com/content/post/hEuyNw/You-re-a-good-person-and-you-know-it-so-don-t-was?size=800";
  imgBad:string = "https://memegenerator.net/img/instances/36404317.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  handleSumbit(formData: any) {
    this.results = formData;
    if (this.results.Q1 == '1') {
      this.couter++;
    }
    if (this.results.Q2 == '1') {
      this.couter++;
    }
    if (this.results.Q3 == '1') {
      this.couter++;
    }
    if (this.couter > 1) {
      this.isGood = true;
      this.result='Good person';
    }
    else{
      this.result='Bad person';
    }
    this.showQuiz = false;
    this.showResult = true;
  }
  saveResults(){
    localStorage.setItem('result', this.result);
  }
}
