import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})

export class DynamicFormsComponent implements OnInit {
  constructor(private cookieService: CookieService) { }

  numberOfPlayers: number = 2;
  lowestValue: number = -1;
  forms: any[] = [];
  totalSum: number[] = [];
  players: any[] = [];

  ngOnInit(): void {
    this.generatePlayerInputs();
    this.getCookieAndSetValues();
    this.generateForms();
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
    this.players = new Array(this.numberOfPlayers).fill(null).map(_ => ({ name: '' }));
    const playerArrayCookie = this.cookieService.get('playerArray')
    if (playerArrayCookie) {
      var playerArray = JSON.parse(playerArrayCookie)
      
      this.players.forEach((value, index) => {
        if(index < playerArray.length){
          this.players[index] = playerArray[index]?.name != undefined ? { name: `${playerArray[index].name}` } : null
        }
      })
    }
  }

  calculateSum(form: any, index: number) {
    const totalSum = form.round1 + form.round2 + form.round3 + form.round4 + form.round5 + form.round6;
    this.totalSum[index] = totalSum;
    return totalSum;
  }

  clearAllPlayers(){
    this.players = new Array(this.numberOfPlayers).fill(null).map(_ => ({ name: '' }));
    this.cookieService.delete('playerArray');
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

  setCookie(){
    this.cookieService.set('playerArray', JSON.stringify(this.players))
  }

  getCookieAndSetValues(){
    const playerArrayCookie = this.cookieService.get('playerArray')
    if (playerArrayCookie) {
      var playerArray = JSON.parse(playerArrayCookie)
      this.players = playerArray;
      this.numberOfPlayers = playerArray.length;
    }
  }
}