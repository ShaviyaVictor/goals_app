import { Component, OnInit } from '@angular/core';

import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goals: Goal [] = [
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
