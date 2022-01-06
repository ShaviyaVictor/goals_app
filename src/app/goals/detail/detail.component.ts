import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Goal } from '../../goal';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  goals: Goal[] = [
    {id:1, name: 'Watch finding Nemo', description:'It\'s been a while since I watched a movie or something'},
    {id:2, name:'Finish up my studies', description:'Opportunities meet preparation. Get ready coz the time nor the hour, no one knows.'},
    {id:3, name:'Plan ahead for the next module marathon', description:'It\s gonna be a race am telling you. They were sying a marathon yet there\' nothing lkike a marathon here! This is a race!'},
    {id:4, name:'Get my cat J some food', description:'It\'s been meowing meowing here a couple of times. I should give it a treat one of these fine days.'},
    {id:5, name:'Solve angular puzzle', description:'Am working on it and I must say I am making some progress, though small for now it counts to me in some way.'},
    {id:6, name:'Make posting schedules for the instagram accounts', description:'This must be the biggest load I\'ve put off my shoulder. This was giving stress! Too much stress. All done to around early March but amid the year, I\'ll find breaks and make things happen by moving them forward in Jesus name.'}
  ]

  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
