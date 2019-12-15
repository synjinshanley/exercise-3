/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary extrasensory perception game (ESP) || created: 12/4/19
 *  @todo
 */
 
 "use strict";
const PROMPT = require('readline-sync');

let i, number, color, answer, correct, continueGame;
const RED = "Red";
const GREEN = "Green";
const BLUE = "Blue";
const ORANGE = "Orange";
const YELLOW = "Yellow";
const MAX_ROUND = 9;

function main(continueGame){
	setI();
	while(i <= MAX_ROUND){
		setNumber();
		setColor();
		setAnswer();
		setCorrect(correct);
		i++
	}
	setConinueGame();
}

main();

function setI(){
	i = 0
}
	
	function setNumber(){
		number = Math.round(Math.random() * 4)+1;
	}

	function setColor(){
		if(number == 1){
			color = RED;
		}else if(number == 2){
			color = GREEN;
		}else if(number == 3){
			color = BLUE;
		}else if(number == 4){
			color = ORANGE;
		}else{
			color = YELLOW;
		}
	}

	function setAnswer(){
		if(i == 0){
		console.log(`Welcome to the ESP game! The rules are simple, pick a color the comuter picked in advance.`)
		}
		answer = PROMPT.question(`\nWhat color do you think the computer picked? [Red = 1, Green = 2, Blue = 3, Orange = 4, Yellow = 5]:`)
	}

	function setCorrect(){
		if(correct == undefined){
			correct = 0;
		}
		if(number == answer){
			console.log(`good job! you guessed the color right!`)
			correct = correct + 1;
		}else{
			console.log(`Sorry the color was actualy ${color}`)
		}
	}

function setConinueGame(){
	 console.log(`Thank you for playing the ESP game! You scored ${correct} out of 10`)
	 continueGame = PROMPT.question(`\nWould you like to play again? [1 = Yes, 0 = No]`)
	 if(continueGame == 1){
		 return main
	 }else if(continueGame == 0){
		 console.log(`\nThank you for playing!`)
	 }else{
		 console.log(`\nSorry, that is an invalad responce`)
		 return setConinueGame
	 } 
}
