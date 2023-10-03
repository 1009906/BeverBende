import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'yathzee-dynamic-forms',
  templateUrl: './yathzee-dynamic-forms.component.html',
  styleUrls: ['./yathzee-dynamic-forms.component.scss']
})

export class YathzeeDynamicFormsComponent implements OnInit {
  constructor(private cookieService: CookieService) { }

  numberOfPlayers: number = 2;
  forms: any[] = [];
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
    this.forms = new Array(this.numberOfPlayers).fill(null).map(_ => ({ aces: null, twos: null, threes: null, fours: null, fives: null, sixes: null, threeofkind: null, fourofkind: null, fullhouse: null, smallstraight: null, largestraight: null, yathzee: null, chance: null }));
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
  calculatePart1(form: any){
    return form.aces + form.twos + form.threes + form.fours + form.fives + form.sixes;
  }

  calculatePart2(form: any){
    return form.threeofkind + form.fourofkind + form.fullhouse + form.smallstraight + form.largestraight + form.yathzee + form.chance;
  }

  calculateTotal(form: any, index: number) {
    var totalSum = 0
    const totalSumPart1 = this.calculatePart1(form);
    const totalSumPart2 = this.calculatePart2(form);
    totalSum = totalSumPart1 + totalSumPart2;

    if (totalSumPart1 >= 63){
      totalSum = totalSum + 35;
    }
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
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 100);
    this.cookieService.set('playerArray', JSON.stringify(this.players), expirationDate)
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