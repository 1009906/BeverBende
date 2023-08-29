import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})

export class DynamicFormsComponent implements OnInit{
  numberOfPlayers: number = 2;
  forms: any[] = [];
  players: any[] = [{ name: '' }];

  ngOnInit(): void {
    this.onModelChange();
  }

  onModelChange(){
    this.generateForms();
    this.generatePlayerInputs();
  }

  generateForms() {
    this.forms = new Array(this.numberOfPlayers).fill(null).map(_ => ({ round1: null, round2: null, round3: null, round4: null, round5: null, round6: null }));
  }

  generatePlayerInputs() {
    this.players = new Array(this.numberOfPlayers).fill(null).map(_ => ({ name: 'Player' }));
  }

  calculateSum(form: any) {
    return form.round1 + form.round2 + form.round3 + form.round4 + form.round5 + form.round6;
  }
}
