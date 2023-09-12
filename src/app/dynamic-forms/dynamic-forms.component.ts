import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})

export class DynamicFormsComponent implements OnInit{
  numberOfPlayers: number = 2;
  lowestValue: number = -1;
  forms: any[] = [];
  totalSum: number[] = [];
  players: any[] = [];

  ngOnInit(): void {
    this.onModelChange();
  }

  onModelChange(){
    this.generateForms();
    this.generatePlayerInputs();
  }

  generateForms() {
    this.forms = new Array(this.numberOfPlayers).fill(null).map(_ => ({ round1: null, round2: null, round3: null, round4: null, round5: null, round6: null }));
    this.totalSum = new Array(this.numberOfPlayers).fill(null).map(_ => (0));
  }

  generatePlayerInputs() {
    this.players = new Array(this.numberOfPlayers).fill(null).map(_ => ({ name: null }));
  }

  calculateSum(form: any, index: number) {
    const totalSum = form.round1 + form.round2 + form.round3 + form.round4 + form.round5 + form.round6;
    this.totalSum[index] = totalSum;
    this.checkLowest();
    return totalSum;
  }

  checkLowest(){
    const lowest = Math.min.apply(Math, this.totalSum)
    this.lowestValue = lowest;
  }

  chooseRandomPlayer(){
    if (this.players.length == 0){
      return;
    }
    const randomIndex = this.randomIntFromInterval(0, this.players.length - 1)
    alert(`${this.players[randomIndex].name} is the first Player!`)
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setDefaultPlayers(){
    this.numberOfPlayers = 4
    this.generatePlayerInputs();
    this.players[0] = ({ name: 'Bram' })
    this.players[1] = ({ name: 'John' })
    this.players[2] = ({ name: 'Marlinda' })
    this.players[3] = ({ name: 'Ivonne' })
    this.generateForms();
  }
}