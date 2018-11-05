var number_players = [0,1,2,3,4,5,6,7,8];
var n = [0,1,2,3,4,5,6,7,8];
var player_turn = 0;
var game_mode;
var roll_number = 0;

var d1_color = ["C","G","M"];
var d1_color_score;
var d1_number = [0,"1.png","2.png","3.png","4.png","5.png","6.png"];
var d1_score;
var d1_state = 0;
var d2_color = ["C","G","M"];
var d2_color_score;
var d2_number = [0,"1.png","2.png","3.png","4.png","5.png","6.png"];
var d2_score;
var d2_state = 0;
var d3_color = ["C","G","M"];
var d3_color_score;
var d3_number = [0,"1.png","2.png","3.png","4.png","5.png","6.png"];
var d3_score;
var d3_state = 0;
var d4_color = ["C","G","M"];
var d4_color_score;
var d4_number = [0,"1.png","2.png","3.png","4.png","5.png","6.png"];
var d4_score;
var d4_state = 0;
var d5_color = ["C","G","M"];
var d5_color_score;
var d5_number = [0,"1.png","2.png","3.png","4.png","5.png","6.png"];
var d5_score;
var d5_state = 0;

var roll_1s = 0;
var roll_2s = 0;
var roll_3s = 0;
var roll_4s = 0;
var roll_5s = 0;
var roll_6s = 0;
var roll_Cs = 0;
var roll_Ms = 0;
var roll_Gs = 0;

var number_1s = 0;
var number_2s = 0;
var number_3s = 0;
var number_4s = 0;
var number_5s = 0;
var number_6s = 0;
var number_3x = 0;
var number_4x = 0;
var number_FH = 0;
var number_LS = 0;
var number_HS = 0;
var number_C = 0;
var number_Y = 0;
var number_Cs = 0;
var number_Ms = 0;
var number_Gs = 0;
var number_RH = 0;

var p1_turn = 0;
var p1_1s;
var p1_2s;
var p1_3s;
var p1_4s;
var p1_5s;
var p1_6s;
var p1_top;
var p1_3x;
var p1_4x;
var p1_fh;
var p1_ls;
var p1_hs;
var p1_y;
var p1_c;
var p1_bottom;
var p1_gs;
var p1_cs;
var p1_ms;
var p1_rh;
var p1_color;
var p1_total;

var p2_turn = 0;
var p2_1s;
var p2_2s;
var p2_3s;
var p2_4s;
var p2_5s;
var p2_6s;
var p2_top;
var p2_3x;
var p2_4x;
var p2_fh;
var p2_ls;
var p2_hs;
var p2_y;
var p2_c;
var p2_bottom;
var p2_gs;
var p2_cs;
var p2_ms;
var p2_rh;
var p2_color;
var p2_total;

var p3_turn = 0;
var p3_1s;
var p3_2s;
var p3_3s;
var p3_4s;
var p3_5s;
var p3_6s;
var p3_top;
var p3_3x;
var p3_4x;
var p3_fh;
var p3_ls;
var p3_hs;
var p3_y;
var p3_c;
var p3_bottom;
var p3_gs;
var p3_cs;
var p3_ms;
var p3_rh;
var p3_color;
var p3_total;

var p4_turn = 0;
var p4_1s;
var p4_2s;
var p4_3s;
var p4_4s;
var p4_5s;
var p4_6s;
var p4_top;
var p4_3x;
var p4_4x;
var p4_fh;
var p4_ls;
var p4_hs;
var p4_y;
var p4_c;
var p4_bottom;
var p4_gs;
var p4_cs;
var p4_ms;
var p4_rh;
var p4_color;
var p4_total;

function setup(n) {
	number_players = n;
	document.getElementById("menu-main").style.display = "none";
	document.getElementById("game-main").style.display = "block";
	readyUp();
}

function readyUp() {
	element1 = document.getElementById("player2-tab");
	element2 = document.getElementById("player3-tab");
	element3 = document.getElementById("player4-tab");
	if (number_players==4 || number_players==8) {
		element1.classList.remove("not-playing");
		element2.classList.remove("not-playing");
		element3.classList.remove("not-playing");
	}
	else if (number_players==3 || number_players==7) {
		element1.classList.remove("not-playing");
		element2.classList.remove("not-playing");
	}
	else if (number_players==2 || number_players==6) {
		element1.classList.remove("not-playing");
	}
	if (number_players==1 || number_players==2 || number_players==3 || number_players==4) {
		game_mode = 1;
	}
	else if (number_players==5 || number_players==6 || number_players==7 || number_players==8) {
		game_mode = 2;
	}
	
	if (game_mode == 1) {
		document.getElementById("P1-rain").style.display = "none";
		document.getElementById("P2-rain").style.display = "none";
		document.getElementById("P3-rain").style.display = "none";
		document.getElementById("P4-rain").style.display = "none";
	}
	else if (game_mode == 2) {
		document.getElementById("P1-reg").style.display = "none";
		document.getElementById("P2-reg").style.display = "none";
		document.getElementById("P3-reg").style.display = "none";
		document.getElementById("P4-reg").style.display = "none";
	}
	document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
	player_turn = 1;
	roll_number = 0;
}

function holdD1() {
	if (roll_number == 3) {
		return;
	}
	
	else {
		if (d1_state == 0) {
			d1_state = 1;
			document.getElementById("D1").style.top = "50px";
		}
		else if (d1_state == 1) {
			d1_state = 0;
			document.getElementById("D1").style.top = "33px";
		}
	}
}

function holdD2() {
	if (roll_number == 3) {
		return;
	}
	
	else {
		if (d2_state == 0) {
			d2_state = 1;
			document.getElementById("D2").style.top = "50px";
		}
		else if (d2_state == 1) {
			d2_state = 0;
			document.getElementById("D2").style.top = "33px";
		}
	}
}

function holdD3() {
	if (roll_number == 3) {
		return;
	}
	
	else {
		if (d3_state == 0) {
			d3_state = 1;
			document.getElementById("D3").style.top = "50px";
		}
		else if (d3_state == 1) {
			d3_state = 0;
			document.getElementById("D3").style.top = "33px";
		}
	}
}

function holdD4() {
	if (roll_number == 3) {
		return;
	}
	
	else {
		if (d4_state == 0) {
			d4_state = 1;
			document.getElementById("D4").style.top = "50px";
		}
		else if (d4_state == 1) {
			d4_state = 0;
			document.getElementById("D4").style.top = "33px";
		}
	}
}

function holdD5() {
	if (roll_number == 3) {
		return;
	}
	
	else {
		if (d5_state == 0) {
			d5_state = 1;
			document.getElementById("D5").style.top = "50px";
		}
		else if (d5_state == 1) {
			d5_state = 0;
			document.getElementById("D5").style.top = "33px";
		}
	}
}

function rollD1() {
	if (player_turn == 1) {
		document.getElementById("player1-tab").classList.add("current");
		document.getElementById("player2-tab").classList.remove("current");
		document.getElementById("player3-tab").classList.remove("current");
		document.getElementById("player4-tab").classList.remove("current");
		document.getElementById("player1").classList.add("current-area");
		document.getElementById("player2").classList.remove("current-area");
		document.getElementById("player3").classList.remove("current-area");
		document.getElementById("player4").classList.remove("current-area");
	}
	
	else if (player_turn == 2) {
		document.getElementById("player2-tab").classList.add("current");
		document.getElementById("player1-tab").classList.remove("current");
		document.getElementById("player3-tab").classList.remove("current");
		document.getElementById("player4-tab").classList.remove("current");
		document.getElementById("player2").classList.add("current-area");
		document.getElementById("player1").classList.remove("current-area");
		document.getElementById("player3").classList.remove("current-area");
		document.getElementById("player4").classList.remove("current-area");
	}
	
	else if (player_turn == 3) {
		document.getElementById("player3-tab").classList.add("current");
		document.getElementById("player1-tab").classList.remove("current");
		document.getElementById("player2-tab").classList.remove("current");
		document.getElementById("player4-tab").classList.remove("current");
		document.getElementById("player3").classList.add("current-area");
		document.getElementById("player1").classList.remove("current-area");
		document.getElementById("player2").classList.remove("current-area");
		document.getElementById("player4").classList.remove("current-area");
	}
	
	else if (player_turn == 4) {
		document.getElementById("player4-tab").classList.add("current");
		document.getElementById("player1-tab").classList.remove("current");
		document.getElementById("player2-tab").classList.remove("current");
		document.getElementById("player3-tab").classList.remove("current");
		document.getElementById("player4").classList.add("current-area");
		document.getElementById("player1").classList.remove("current-area");
		document.getElementById("player2").classList.remove("current-area");
		document.getElementById("player3").classList.remove("current-area");
	}
		
	dice1 = document.getElementById("D1");
	
	if (game_mode == 1) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d1_score = Math.floor((Math.random())*6)+1;
			dice1.src = "Graphics/Dice/" + d1_number[d1_score];
			dice1.style.display = "block";
			rollD2();
		}
		
		else if (roll_number == 1) {
			if (d1_state == 0) {
				d1_score = Math.floor((Math.random())*6)+1;
				dice1.src = "Graphics/Dice/" + d1_number[d1_score];
				rollD2();
			}
			else {
				rollD2();
			}
		}
		
		else if (roll_number == 2) {
			if (d1_state == 0) {
				d1_score = Math.floor((Math.random())*6)+1;
				dice1.src = "Graphics/Dice/" + d1_number[d1_score];
				rollD2();
			}
			else {
				rollD2();
			}
		}
	}
	
	else if (game_mode == 2) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d1_color_score = Math.floor((Math.random())*3);
			d1_score = Math.floor((Math.random())*6)+1;
			dice1.src = "Graphics/Dice/" + d1_color[d1_color_score] + d1_number[d1_score];
			dice1.style.display = "block";
			rollD2();
		}
		
		else if (roll_number == 1) {
			if (d1_state == 0) {
				d1_color_score = Math.floor((Math.random())*3);
				d1_score = Math.floor((Math.random())*6)+1;
				dice1.src = "Graphics/Dice/" + d1_color[d1_color_score] + d1_number[d1_score];
				rollD2();
			}
			else {
				rollD2();
			}
		}
		
		else if (roll_number == 2) {
			if (d1_state == 0) {
				d1_color_score = Math.floor((Math.random())*3);
				d1_score = Math.floor((Math.random())*6)+1;
				dice1.src = "Graphics/Dice/" + d1_color[d1_color_score] + d1_number[d1_score];
				rollD2();
			}
			else {
				rollD2();
			}
		}
	}
}

function rollD2() {
	dice2 = document.getElementById("D2");
	
	if (game_mode == 2) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d2_color_score = Math.floor((Math.random())*3);
			d2_score = Math.floor((Math.random())*6)+1;
			dice2.src = "Graphics/Dice/" + d2_color[d2_color_score] + d2_number[d2_score];
			dice2.style.display = "block";
			rollD3();
		}
		
		else if (roll_number == 1) {
			if (d2_state == 0) {
				d2_color_score = Math.floor((Math.random())*3);
				d2_score = Math.floor((Math.random())*6)+1;
				dice2.src = "Graphics/Dice/" + d2_color[d2_color_score] + d2_number[d2_score];
				rollD3();
			}
			else {
				rollD3();
			}
		}
		
		else if (roll_number == 2) {
			if (d2_state == 0) {
				d2_color_score = Math.floor((Math.random())*3);
				d2_score = Math.floor((Math.random())*6)+1;
				dice2.src = "Graphics/Dice/" + d2_color[d2_color_score] + d2_number[d2_score];
				rollD3();
			}
			else {
				rollD3();
			}
		}
	}
	
	else if (game_mode == 1) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d2_score = Math.floor((Math.random())*6)+1;
			dice2.src = "Graphics/Dice/" + d2_number[d2_score];
			dice2.style.display = "block";
			rollD3();
		}
		
		else if (roll_number == 1) {
			if (d2_state == 0) {
				d2_score = Math.floor((Math.random())*6)+1;
				dice2.src = "Graphics/Dice/" + d2_number[d2_score];
				rollD3();
			}
			else {
				rollD3();
			}
		}
		
		else if (roll_number == 2) {
			if (d2_state == 0) {
				d2_score = Math.floor((Math.random())*6)+1;
				dice2.src = "Graphics/Dice/" + d2_number[d2_score];
				rollD3();
			}
			else {
				rollD3();
			}
		}
	}
}

function rollD3() {
	dice3 = document.getElementById("D3");
	
	if (game_mode == 2) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d3_color_score = Math.floor((Math.random())*3);
			d3_score = Math.floor((Math.random())*6)+1;
			dice3.src = "Graphics/Dice/" + d3_color[d3_color_score] + d3_number[d3_score];
			dice3.style.display = "block";
			rollD4();
		}
		
		else if (roll_number == 1) {
			if (d3_state == 0) {
				d3_color_score = Math.floor((Math.random())*3);
				d3_score = Math.floor((Math.random())*6)+1;
				dice3.src = "Graphics/Dice/" + d3_color[d3_color_score] + d3_number[d3_score];
				rollD4();
			}
			else {
				rollD4();
			}
		}
		
		else if (roll_number == 2) {
			if (d3_state == 0) {
				d3_color_score = Math.floor((Math.random())*3);
				d3_score = Math.floor((Math.random())*6)+1;
				dice3.src = "Graphics/Dice/" + d3_color[d3_color_score] + d3_number[d3_score];
				rollD4();
			}
			else {
				rollD4();
			}
		}
	}
	
	else if (game_mode == 1) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d3_score = Math.floor((Math.random())*6)+1;
			dice3.src = "Graphics/Dice/" + d3_number[d3_score];
			dice3.style.display = "block";
			rollD4();
		}
		
		else if (roll_number == 1) {
			if (d3_state == 0) {
				d3_score = Math.floor((Math.random())*6)+1;
				dice3.src = "Graphics/Dice/" + d3_number[d3_score];
				rollD4();
			}
			else {
				rollD4();
			}
		}
		
		else if (roll_number == 2) {
			if (d3_state == 0) {
				d3_score = Math.floor((Math.random())*6)+1;
				dice3.src = "Graphics/Dice/" + d3_number[d3_score];
				rollD4();
			}
			else {
				rollD4();
			}
		}
	}
}

function rollD4() {
	dice4 = document.getElementById("D4");
	
	if (game_mode == 2) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d4_color_score = Math.floor((Math.random())*3);
			d4_score = Math.floor((Math.random())*6)+1;
			dice4.src = "Graphics/Dice/" + d4_color[d4_color_score] + d4_number[d4_score];
			dice4.style.display = "block";
			rollD5();
		}
		
		else if (roll_number == 1) {
			if (d4_state == 0) {
				d4_color_score = Math.floor((Math.random())*3);
				d4_score = Math.floor((Math.random())*6)+1;
				dice4.src = "Graphics/Dice/" + d4_color[d4_color_score] + d4_number[d4_score];
				rollD5();
			}
			else {
				rollD5();
			}
		}
		
		else if (roll_number == 2) {
			if (d4_state == 0) {
				d4_color_score = Math.floor((Math.random())*3);
				d4_score = Math.floor((Math.random())*6)+1;
				dice4.src = "Graphics/Dice/" + d4_color[d4_color_score] + d4_number[d4_score];
				rollD5();
			}
			else {
				rollD5();
			}
		}
	}
	
	else if (game_mode == 1) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d4_score = Math.floor((Math.random())*6)+1;
			dice4.src = "Graphics/Dice/" + d4_number[d4_score];
			dice4.style.display = "block";
			rollD5();
		}
		
		else if (roll_number == 1) {
			if (d4_state == 0) {
				d4_score = Math.floor((Math.random())*6)+1;
				dice4.src = "Graphics/Dice/" + d4_number[d4_score];
				rollD5();
			}
			else {
				rollD5();
			}
		}
		
		else if (roll_number == 2) {
			if (d4_state == 0) {
				d4_score = Math.floor((Math.random())*6)+1;
				dice4.src = "Graphics/Dice/" + d4_number[d4_score];
				rollD5();
			}
			else {
				rollD5();
			}
		}
	}
}

function rollD5() {
	dice5 = document.getElementById("D5");
	
	if (game_mode == 2) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d5_color_score = Math.floor((Math.random())*3);
			d5_score = Math.floor((Math.random())*6)+1;
			dice5.src = "Graphics/Dice/" + d5_color[d5_color_score] + d5_number[d5_score];
			dice5.style.display = "block";
			roll_number = roll_number + 1;
			document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
			checkdice();
		}
		
		else if (roll_number == 1) {
			if (d5_state == 0) {
				d5_color_score = Math.floor((Math.random())*3);
				d5_score = Math.floor((Math.random())*6)+1;
				dice5.src = "Graphics/Dice/" + d5_color[d5_color_score] + d5_number[d5_score];
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
			else {
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
		}
		
		else if (roll_number == 2) {
			if (d5_state == 0) {
				d5_color_score = Math.floor((Math.random())*3);
				d5_score = Math.floor((Math.random())*6)+1;
				dice5.src = "Graphics/Dice/" + d5_color[d5_color_score] + d5_number[d5_score];
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
			else {
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
		}
	}
	
	else if (game_mode == 1) {
		if (roll_number == 3) {
			return;
		}
		
		rollDice.play();
		if (roll_number == 0) {
			d5_score = Math.floor((Math.random())*6)+1;
			dice5.src = "Graphics/Dice/" + d5_number[d5_score];
			dice5.style.display = "block";
			roll_number = roll_number + 1;
			document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
			checkdice();
		}
		
		else if (roll_number == 1) {
			if (d5_state == 0) {
				d5_score = Math.floor((Math.random())*6)+1;
				dice5.src = "Graphics/Dice/" + d5_number[d5_score];
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
			else {
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
		}
		
		else if (roll_number == 2) {
			if (d5_state == 0) {
				d5_score = Math.floor((Math.random())*6)+1;
				dice5.src = "Graphics/Dice/" + d5_number[d5_score];
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
			else {
				roll_number = roll_number + 1;
				document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
				checkdice();
			}
		}
	}
}

function checkdice() {
	if (roll_number == 1) {
		roll_1s = 0;
		roll_2s = 0;
		roll_3s = 0;
		roll_4s = 0;
		roll_5s = 0;
		roll_6s = 0;
		roll_Cs = 0;
		roll_Gs = 0;
		roll_Ms = 0;
		
		if (d1_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d1_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d1_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d2_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d2_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d2_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d3_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d3_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d3_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d4_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d4_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d4_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d5_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d5_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d5_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}	
		
		if (d1_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d1_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d1_score == 3) {
			roll_3s = roll_3s + 1;
		}
		else if (d1_score == 4) {
			roll_4s = roll_4s + 1;
		}
		else if (d1_score == 5) {
			roll_5s = roll_5s + 1;
		}
		else if (d1_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d2_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d2_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d2_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d2_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d2_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d2_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d3_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d3_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d3_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d3_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d3_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d3_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d4_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d4_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d4_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d4_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d4_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d4_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d5_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d5_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d5_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d5_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d5_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d5_score == 6) {
			roll_6s = roll_6s + 1;
		}
		checkscore();
	}

	else if (roll_number == 2) {
		roll_1s = 0;
		roll_2s = 0;
		roll_3s = 0;
		roll_4s = 0;
		roll_5s = 0;
		roll_6s = 0;
		roll_Cs = 0;
		roll_Gs = 0;
		roll_Ms = 0;
		
		if (d1_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d1_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d1_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d2_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d2_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d2_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d3_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d3_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d3_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d4_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d4_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d4_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d5_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d5_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d5_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}	
		
		if (d1_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d1_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d1_score == 3) {
			roll_3s = roll_3s + 1;
		}
		else if (d1_score == 4) {
			roll_4s = roll_4s + 1;
		}
		else if (d1_score == 5) {
			roll_5s = roll_5s + 1;
		}
		else if (d1_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d2_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d2_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d2_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d2_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d2_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d2_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d3_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d3_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d3_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d3_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d3_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d3_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d4_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d4_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d4_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d4_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d4_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d4_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d5_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d5_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d5_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d5_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d5_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d5_score == 6) {
			roll_6s = roll_6s + 1;
		}
		checkscore();
	}
	
	else if (roll_number == 3) {
		roll_1s = 0;
		roll_2s = 0;
		roll_3s = 0;
		roll_4s = 0;
		roll_5s = 0;
		roll_6s = 0;
		roll_Cs = 0;
		roll_Gs = 0;
		roll_Ms = 0;
		
		if (d1_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d1_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d1_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d2_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d2_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d2_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d3_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d3_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d3_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d4_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d4_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d4_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}
		
		if (d5_color_score == 0) {
			roll_Cs = roll_Cs + 1;
		}
		else if (d5_color_score == 1) {
			roll_Gs = roll_Gs + 1;
		}
		else if (d5_color_score == 2) {
			roll_Ms = roll_Ms + 1;
		}	
		
		if (d1_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d1_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d1_score == 3) {
			roll_3s = roll_3s + 1;
		}
		else if (d1_score == 4) {
			roll_4s = roll_4s + 1;
		}
		else if (d1_score == 5) {
			roll_5s = roll_5s + 1;
		}
		else if (d1_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d2_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d2_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d2_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d2_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d2_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d2_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d3_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d3_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d3_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d3_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d3_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d3_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d4_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d4_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d4_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d4_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d4_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d4_score == 6) {
			roll_6s = roll_6s + 1;
		}
		
		if (d5_score == 1) {
			roll_1s = roll_1s + 1;
		}
		else if (d5_score == 2) {
			roll_2s = roll_2s + 1;
		}
		else if (d5_score == 3) {
			roll_3s = roll_3s + 1;
		}		
		else if (d5_score == 4) {
			roll_4s = roll_4s + 1;
		}		
		else if (d5_score == 5) {
			roll_5s = roll_5s + 1;
		}		
		else if (d5_score == 6) {
			roll_6s = roll_6s + 1;
		}
		checkscore();
	}
}

function checkscore() {
	number_1s = roll_1s;
	number_2s = roll_2s;
	number_3s = roll_3s;
	number_4s = roll_4s;
	number_5s = roll_5s;
	number_6s = roll_6s;
	number_Cs = roll_Cs;
	number_Gs = roll_Gs;
	number_Ms = roll_Ms;
	
	if  (player_turn == 1) {
		document.getElementById("P1-1s-holder").innerHTML = "-";
		document.getElementById("P1-2s-holder").innerHTML = "-";
		document.getElementById("P1-3s-holder").innerHTML = "-";
		document.getElementById("P1-4s-holder").innerHTML = "-";
		document.getElementById("P1-5s-holder").innerHTML = "-";
		document.getElementById("P1-6s-holder").innerHTML = "-";
		document.getElementById("P1-3x-holder").innerHTML = "-";
		document.getElementById("P1-4x-holder").innerHTML = "-";
		document.getElementById("P1-FH-holder").innerHTML = "-";
		document.getElementById("P1-LS-holder").innerHTML = "-";
		document.getElementById("P1-HS-holder").innerHTML = "-";
		document.getElementById("P1-Y-holder").innerHTML = "-";
		document.getElementById("P1-Yh-holder").innerHTML = "-";
		document.getElementById("P1-CY-holder").innerHTML = "-";
		document.getElementById("P1-GY-holder").innerHTML = "-";
		document.getElementById("P1-MY-holder").innerHTML = "-";
		document.getElementById("P1-RH-holder").innerHTML = "-";
		document.getElementById("P1-C-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
		number_C = d1_score + d2_score + d3_score + d4_score + d5_score;
		document.getElementById("P1-1s-holder").innerHTML = number_1s;
		document.getElementById("P1-2s-holder").innerHTML = number_2s*2;
		document.getElementById("P1-3s-holder").innerHTML = number_3s*3;
		document.getElementById("P1-4s-holder").innerHTML = number_4s*4;
		document.getElementById("P1-5s-holder").innerHTML = number_5s*5;
		document.getElementById("P1-6s-holder").innerHTML = number_6s*6;
		if (
		number_1s >= 3 ||
		number_2s >= 3 ||
		number_3s >= 3 ||
		number_4s >= 3 ||
		number_5s >= 3 ||
		number_6s >= 3
		) {
			document.getElementById("P1-3x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_3x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s >= 4 ||
		number_2s >= 4 ||
		number_3s >= 4 ||
		number_4s >= 4 ||
		number_5s >= 4 ||
		number_6s >= 4
		) {
			document.getElementById("P1-4x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_4x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s == 5 ||
		number_2s == 5 ||
		number_3s == 5 ||
		number_4s == 5 ||
		number_5s == 5 ||
		number_6s == 5
		) {
			document.getElementById("P1-Y-holder").innerHTML = "50";
			document.getElementById("P1-Yh-holder").innerHTML = "50";
			number_Y = 50;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P1-LS-holder").innerHTML = "30";
			number_LS = 30;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P1-HS-holder").innerHTML = "40";
			number_HS = 40;
		}
		if (
		number_1s == 2 && number_2s == 3 ||
		number_1s == 2 && number_3s == 3 ||
		number_1s == 2 && number_4s == 3 ||
		number_1s == 2 && number_5s == 3 ||
		number_1s == 2 && number_6s == 3 ||
		number_2s == 2 && number_1s == 3 ||
		number_2s == 2 && number_3s == 3 ||
		number_2s == 2 && number_4s == 3 ||
		number_2s == 2 && number_5s == 3 ||
		number_2s == 2 && number_6s == 3 ||
		number_3s == 2 && number_1s == 3 ||
		number_3s == 2 && number_2s == 3 ||
		number_3s == 2 && number_4s == 3 ||
		number_3s == 2 && number_5s == 3 ||
		number_3s == 2 && number_6s == 3 ||
		number_4s == 2 && number_1s == 3 ||
		number_4s == 2 && number_2s == 3 ||
		number_4s == 2 && number_3s == 3 ||
		number_4s == 2 && number_5s == 3 ||
		number_4s == 2 && number_6s == 3 ||
		number_5s == 2 && number_1s == 3 ||
		number_5s == 2 && number_2s == 3 ||
		number_5s == 2 && number_3s == 3 ||
		number_5s == 2 && number_4s == 3 ||
		number_5s == 2 && number_6s == 3 ||
		number_6s == 2 && number_1s == 3 ||
		number_6s == 2 && number_2s == 3 ||
		number_6s == 2 && number_3s == 3 ||
		number_6s == 2 && number_4s == 3 ||
		number_6s == 2 && number_5s == 3
		) {
			document.getElementById("P1-FH-holder").innerHTML = "25";
			number_FH = 25;
		}
		
		if (
		number_Cs == 5
		) {
			document.getElementById("P1-CY-holder").innerHTML = "30";
			number_Cs = 30;
		}
		
		if (
		number_Gs == 5
		) {
			document.getElementById("P1-GY-holder").innerHTML = "30";
			number_Gs = 30;
		}
		
		if (
		number_Ms == 5
		) {
			document.getElementById("P1-MY-holder").innerHTML = "30";
			number_Ms = 30;
		}
		
		if (
		number_Cs == 2 && number_Gs == 3 ||
		number_Cs == 2 && number_Ms == 3 ||
		number_Gs == 2 && number_Cs == 3 ||
		number_Gs == 2 && number_Ms == 3 ||
		number_Ms == 2 && number_Cs == 3 ||
		number_Ms == 2 && number_Gs == 3
		) {
			document.getElementById("P1-RH-holder").innerHTML = "15";
			number_RH = 15;
		}
	}
	
	else if  (player_turn == 2) {
		document.getElementById("P2-1s-holder").innerHTML = "-";
		document.getElementById("P2-2s-holder").innerHTML = "-";
		document.getElementById("P2-3s-holder").innerHTML = "-";
		document.getElementById("P2-4s-holder").innerHTML = "-";
		document.getElementById("P2-5s-holder").innerHTML = "-";
		document.getElementById("P2-6s-holder").innerHTML = "-";
		document.getElementById("P2-3x-holder").innerHTML = "-";
		document.getElementById("P2-4x-holder").innerHTML = "-";
		document.getElementById("P2-FH-holder").innerHTML = "-";
		document.getElementById("P2-LS-holder").innerHTML = "-";
		document.getElementById("P2-HS-holder").innerHTML = "-";
		document.getElementById("P2-Y-holder").innerHTML = "-";
		document.getElementById("P2-Yh-holder").innerHTML = "-";
		document.getElementById("P2-CY-holder").innerHTML = "-";
		document.getElementById("P2-GY-holder").innerHTML = "-";
		document.getElementById("P2-MY-holder").innerHTML = "-";
		document.getElementById("P2-RH-holder").innerHTML = "-";
		document.getElementById("P2-C-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
		number_C = d1_score + d2_score + d3_score + d4_score + d5_score;
		document.getElementById("P2-1s-holder").innerHTML = number_1s;
		document.getElementById("P2-2s-holder").innerHTML = number_2s*2;
		document.getElementById("P2-3s-holder").innerHTML = number_3s*3;
		document.getElementById("P2-4s-holder").innerHTML = number_4s*4;
		document.getElementById("P2-5s-holder").innerHTML = number_5s*5;
		document.getElementById("P2-6s-holder").innerHTML = number_6s*6;
		if (
		number_1s >= 3 ||
		number_2s >= 3 ||
		number_3s >= 3 ||
		number_4s >= 3 ||
		number_5s >= 3 ||
		number_6s >= 3
		) {
			document.getElementById("P2-3x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_3x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s >= 4 ||
		number_2s >= 4 ||
		number_3s >= 4 ||
		number_4s >= 4 ||
		number_5s >= 4 ||
		number_6s >= 4
		) {
			document.getElementById("P2-4x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_4x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s == 5 ||
		number_2s == 5 ||
		number_3s == 5 ||
		number_4s == 5 ||
		number_5s == 5 ||
		number_6s == 5
		) {
			document.getElementById("P2-Y-holder").innerHTML = "50";
			document.getElementById("P2-Yh-holder").innerHTML = "50";
			number_Y = 50;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P2-LS-holder").innerHTML = "30";
			number_LS = 30;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P2-HS-holder").innerHTML = "40";
			number_HS = 40;
		}
		if (
		number_1s == 2 && number_2s == 3 ||
		number_1s == 2 && number_3s == 3 ||
		number_1s == 2 && number_4s == 3 ||
		number_1s == 2 && number_5s == 3 ||
		number_1s == 2 && number_6s == 3 ||
		number_2s == 2 && number_1s == 3 ||
		number_2s == 2 && number_3s == 3 ||
		number_2s == 2 && number_4s == 3 ||
		number_2s == 2 && number_5s == 3 ||
		number_2s == 2 && number_6s == 3 ||
		number_3s == 2 && number_1s == 3 ||
		number_3s == 2 && number_2s == 3 ||
		number_3s == 2 && number_4s == 3 ||
		number_3s == 2 && number_5s == 3 ||
		number_3s == 2 && number_6s == 3 ||
		number_4s == 2 && number_1s == 3 ||
		number_4s == 2 && number_2s == 3 ||
		number_4s == 2 && number_3s == 3 ||
		number_4s == 2 && number_5s == 3 ||
		number_4s == 2 && number_6s == 3 ||
		number_5s == 2 && number_1s == 3 ||
		number_5s == 2 && number_2s == 3 ||
		number_5s == 2 && number_3s == 3 ||
		number_5s == 2 && number_4s == 3 ||
		number_5s == 2 && number_6s == 3 ||
		number_6s == 2 && number_1s == 3 ||
		number_6s == 2 && number_2s == 3 ||
		number_6s == 2 && number_3s == 3 ||
		number_6s == 2 && number_4s == 3 ||
		number_6s == 2 && number_5s == 3
		) {
			document.getElementById("P2-FH-holder").innerHTML = "25";
			number_FH = 25;
		}
		
		if (
		number_Cs == 5
		) {
			document.getElementById("P2-CY-holder").innerHTML = "30";
			number_Cs = 30;
		}
		
		if (
		number_Gs == 5
		) {
			document.getElementById("P2-GY-holder").innerHTML = "30";
			number_Gs = 30;
		}
		
		if (
		number_Ms == 5
		) {
			document.getElementById("P2-MY-holder").innerHTML = "30";
			number_Ms = 30;
		}
		
		if (
		number_Cs == 2 && number_Gs == 3 ||
		number_Cs == 2 && number_Ms == 3 ||
		number_Gs == 2 && number_Cs == 3 ||
		number_Gs == 2 && number_Ms == 3 ||
		number_Ms == 2 && number_Cs == 3 ||
		number_Ms == 2 && number_Gs == 3
		) {
			document.getElementById("P2-RH-holder").innerHTML = "15";
			number_RH = 15;
		}
	}
	
	else if  (player_turn == 3) {
		document.getElementById("P3-1s-holder").innerHTML = "-";
		document.getElementById("P3-2s-holder").innerHTML = "-";
		document.getElementById("P3-3s-holder").innerHTML = "-";
		document.getElementById("P3-4s-holder").innerHTML = "-";
		document.getElementById("P3-5s-holder").innerHTML = "-";
		document.getElementById("P3-6s-holder").innerHTML = "-";
		document.getElementById("P3-3x-holder").innerHTML = "-";
		document.getElementById("P3-4x-holder").innerHTML = "-";
		document.getElementById("P3-FH-holder").innerHTML = "-";
		document.getElementById("P3-LS-holder").innerHTML = "-";
		document.getElementById("P3-HS-holder").innerHTML = "-";
		document.getElementById("P3-Y-holder").innerHTML = "-";
		document.getElementById("P3-Yh-holder").innerHTML = "-";
		document.getElementById("P3-CY-holder").innerHTML = "-";
		document.getElementById("P3-GY-holder").innerHTML = "-";
		document.getElementById("P3-MY-holder").innerHTML = "-";
		document.getElementById("P3-RH-holder").innerHTML = "-";
		document.getElementById("P3-C-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
		number_C = d1_score + d2_score + d3_score + d4_score + d5_score;
		document.getElementById("P3-1s-holder").innerHTML = number_1s;
		document.getElementById("P3-2s-holder").innerHTML = number_2s*2;
		document.getElementById("P3-3s-holder").innerHTML = number_3s*3;
		document.getElementById("P3-4s-holder").innerHTML = number_4s*4;
		document.getElementById("P3-5s-holder").innerHTML = number_5s*5;
		document.getElementById("P3-6s-holder").innerHTML = number_6s*6;
		if (
		number_1s >= 3 ||
		number_2s >= 3 ||
		number_3s >= 3 ||
		number_4s >= 3 ||
		number_5s >= 3 ||
		number_6s >= 3
		) {
			document.getElementById("P3-3x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_3x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s >= 4 ||
		number_2s >= 4 ||
		number_3s >= 4 ||
		number_4s >= 4 ||
		number_5s >= 4 ||
		number_6s >= 4
		) {
			document.getElementById("P3-4x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_4x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s == 5 ||
		number_2s == 5 ||
		number_3s == 5 ||
		number_4s == 5 ||
		number_5s == 5 ||
		number_6s == 5
		) {
			document.getElementById("P3-Y-holder").innerHTML = "50";
			document.getElementById("P3-Yh-holder").innerHTML = "50";
			number_Y = 50;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P3-LS-holder").innerHTML = "30";
			number_LS = 30;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P3-HS-holder").innerHTML = "40";
			number_HS = 40;
		}
		if (
		number_1s == 2 && number_2s == 3 ||
		number_1s == 2 && number_3s == 3 ||
		number_1s == 2 && number_4s == 3 ||
		number_1s == 2 && number_5s == 3 ||
		number_1s == 2 && number_6s == 3 ||
		number_2s == 2 && number_1s == 3 ||
		number_2s == 2 && number_3s == 3 ||
		number_2s == 2 && number_4s == 3 ||
		number_2s == 2 && number_5s == 3 ||
		number_2s == 2 && number_6s == 3 ||
		number_3s == 2 && number_1s == 3 ||
		number_3s == 2 && number_2s == 3 ||
		number_3s == 2 && number_4s == 3 ||
		number_3s == 2 && number_5s == 3 ||
		number_3s == 2 && number_6s == 3 ||
		number_4s == 2 && number_1s == 3 ||
		number_4s == 2 && number_2s == 3 ||
		number_4s == 2 && number_3s == 3 ||
		number_4s == 2 && number_5s == 3 ||
		number_4s == 2 && number_6s == 3 ||
		number_5s == 2 && number_1s == 3 ||
		number_5s == 2 && number_2s == 3 ||
		number_5s == 2 && number_3s == 3 ||
		number_5s == 2 && number_4s == 3 ||
		number_5s == 2 && number_6s == 3 ||
		number_6s == 2 && number_1s == 3 ||
		number_6s == 2 && number_2s == 3 ||
		number_6s == 2 && number_3s == 3 ||
		number_6s == 2 && number_4s == 3 ||
		number_6s == 2 && number_5s == 3
		) {
			document.getElementById("P3-FH-holder").innerHTML = "25";
			number_FH = 25;
		}
		
		if (
		number_Cs == 5
		) {
			document.getElementById("P3-CY-holder").innerHTML = "30";
			number_Cs = 30;
		}
		
		if (
		number_Gs == 5
		) {
			document.getElementById("P3-GY-holder").innerHTML = "30";
			number_Gs = 30;
		}
		
		if (
		number_Ms == 5
		) {
			document.getElementById("P3-MY-holder").innerHTML = "30";
			number_Ms = 30;
		}
		
		if (
		number_Cs == 2 && number_Gs == 3 ||
		number_Cs == 2 && number_Ms == 3 ||
		number_Gs == 2 && number_Cs == 3 ||
		number_Gs == 2 && number_Ms == 3 ||
		number_Ms == 2 && number_Cs == 3 ||
		number_Ms == 2 && number_Gs == 3
		) {
			document.getElementById("P3-RH-holder").innerHTML = "15";
			number_RH = 15;
		}
	}
	
	else if  (player_turn == 4) {
		document.getElementById("P4-1s-holder").innerHTML = "-";
		document.getElementById("P4-2s-holder").innerHTML = "-";
		document.getElementById("P4-3s-holder").innerHTML = "-";
		document.getElementById("P4-4s-holder").innerHTML = "-";
		document.getElementById("P4-5s-holder").innerHTML = "-";
		document.getElementById("P4-6s-holder").innerHTML = "-";
		document.getElementById("P4-3x-holder").innerHTML = "-";
		document.getElementById("P4-4x-holder").innerHTML = "-";
		document.getElementById("P4-FH-holder").innerHTML = "-";
		document.getElementById("P4-LS-holder").innerHTML = "-";
		document.getElementById("P4-HS-holder").innerHTML = "-";
		document.getElementById("P4-Y-holder").innerHTML = "-";
		document.getElementById("P4-Yh-holder").innerHTML = "-";
		document.getElementById("P4-CY-holder").innerHTML = "-";
		document.getElementById("P4-GY-holder").innerHTML = "-";
		document.getElementById("P4-MY-holder").innerHTML = "-";
		document.getElementById("P4-RH-holder").innerHTML = "-";
		document.getElementById("P4-C-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
		number_C = d1_score + d2_score + d3_score + d4_score + d5_score;
		document.getElementById("P4-1s-holder").innerHTML = number_1s;
		document.getElementById("P4-2s-holder").innerHTML = number_2s*2;
		document.getElementById("P4-3s-holder").innerHTML = number_3s*3;
		document.getElementById("P4-4s-holder").innerHTML = number_4s*4;
		document.getElementById("P4-5s-holder").innerHTML = number_5s*5;
		document.getElementById("P4-6s-holder").innerHTML = number_6s*6;
		if (
		number_1s >= 3 ||
		number_2s >= 3 ||
		number_3s >= 3 ||
		number_4s >= 3 ||
		number_5s >= 3 ||
		number_6s >= 3
		) {
			document.getElementById("P4-3x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_3x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s >= 4 ||
		number_2s >= 4 ||
		number_3s >= 4 ||
		number_4s >= 4 ||
		number_5s >= 4 ||
		number_6s >= 4
		) {
			document.getElementById("P4-4x-holder").innerHTML = d1_score + d2_score + d3_score + d4_score + d5_score;
			number_4x = d1_score + d2_score + d3_score + d4_score + d5_score;
		}
		if (
		number_1s == 5 ||
		number_2s == 5 ||
		number_3s == 5 ||
		number_4s == 5 ||
		number_5s == 5 ||
		number_6s == 5
		) {
			document.getElementById("P4-Y-holder").innerHTML = "50";
			document.getElementById("P4-Yh-holder").innerHTML = "50";
			number_Y = 50;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P4-LS-holder").innerHTML = "30";
			number_LS = 30;
		}
		if (
		number_1s >= 1 && number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 ||
		number_2s >= 1 && number_3s >= 1 && number_4s >= 1 && number_5s >= 1 && number_6s >= 1
		) {
			document.getElementById("P4-HS-holder").innerHTML = "40";
			number_HS = 40;
		}
		if (
		number_1s == 2 && number_2s == 3 ||
		number_1s == 2 && number_3s == 3 ||
		number_1s == 2 && number_4s == 3 ||
		number_1s == 2 && number_5s == 3 ||
		number_1s == 2 && number_6s == 3 ||
		number_2s == 2 && number_1s == 3 ||
		number_2s == 2 && number_3s == 3 ||
		number_2s == 2 && number_4s == 3 ||
		number_2s == 2 && number_5s == 3 ||
		number_2s == 2 && number_6s == 3 ||
		number_3s == 2 && number_1s == 3 ||
		number_3s == 2 && number_2s == 3 ||
		number_3s == 2 && number_4s == 3 ||
		number_3s == 2 && number_5s == 3 ||
		number_3s == 2 && number_6s == 3 ||
		number_4s == 2 && number_1s == 3 ||
		number_4s == 2 && number_2s == 3 ||
		number_4s == 2 && number_3s == 3 ||
		number_4s == 2 && number_5s == 3 ||
		number_4s == 2 && number_6s == 3 ||
		number_5s == 2 && number_1s == 3 ||
		number_5s == 2 && number_2s == 3 ||
		number_5s == 2 && number_3s == 3 ||
		number_5s == 2 && number_4s == 3 ||
		number_5s == 2 && number_6s == 3 ||
		number_6s == 2 && number_1s == 3 ||
		number_6s == 2 && number_2s == 3 ||
		number_6s == 2 && number_3s == 3 ||
		number_6s == 2 && number_4s == 3 ||
		number_6s == 2 && number_5s == 3
		) {
			document.getElementById("P4-FH-holder").innerHTML = "25";
			number_FH = 25;
		}
		
		if (
		number_Cs == 5
		) {
			document.getElementById("P4-CY-holder").innerHTML = "30";
			number_Cs = 30;
		}
		
		if (
		number_Gs == 5
		) {
			document.getElementById("P4-GY-holder").innerHTML = "30";
			number_Gs = 30;
		}
		
		if (
		number_Ms == 5
		) {
			document.getElementById("P4-MY-holder").innerHTML = "30";
			number_Ms = 30;
		}
		
		if (
		number_Cs == 2 && number_Gs == 3 ||
		number_Cs == 2 && number_Ms == 3 ||
		number_Gs == 2 && number_Cs == 3 ||
		number_Gs == 2 && number_Ms == 3 ||
		number_Ms == 2 && number_Cs == 3 ||
		number_Ms == 2 && number_Gs == 3
		) {
			document.getElementById("P4-RH-holder").innerHTML = "15";
			number_RH = 15;
		}
	}
}

function place1s() {
	if (player_turn == 1) {
		if (p1_1s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_1s = number_1s;
			document.getElementById("P1-1s-score").style.display = "block";
			document.getElementById("P1-1s-score").innerHTML = p1_1s;
			document.getElementById("P1-1s-holder").style.display = "none";
			document.getElementById("P1-1s").src = "Graphics/1s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_1s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_1s = number_1s;
			document.getElementById("P2-1s-score").style.display = "block";
			document.getElementById("P2-1s-score").innerHTML = p2_1s;
			document.getElementById("P2-1s-holder").style.display = "none";
			document.getElementById("P2-1s").src = "Graphics/1s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_1s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_1s = number_1s;
			document.getElementById("P3-1s-score").style.display = "block";
			document.getElementById("P3-1s-score").innerHTML = p3_1s;
			document.getElementById("P3-1s-holder").style.display = "none";
			document.getElementById("P3-1s").src = "Graphics/1s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_1s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_1s = number_1s;
			document.getElementById("P4-1s-score").style.display = "block";
			document.getElementById("P4-1s-score").innerHTML = p4_1s;
			document.getElementById("P4-1s-holder").style.display = "none";
			document.getElementById("P4-1s").src = "Graphics/1s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place2s() {
	if (player_turn == 1) {
		if (p1_2s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_2s = number_2s*2;
			document.getElementById("P1-2s-score").style.display = "block";
			document.getElementById("P1-2s-score").innerHTML = p1_2s;
			document.getElementById("P1-2s-holder").style.display = "none";
			document.getElementById("P1-2s").src = "Graphics/2s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_2s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_2s = number_2s*2;
			document.getElementById("P2-2s-score").style.display = "block";
			document.getElementById("P2-2s-score").innerHTML = p2_2s;
			document.getElementById("P2-2s-holder").style.display = "none";
			document.getElementById("P2-2s").src = "Graphics/2s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_2s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_2s = number_2s*2;
			document.getElementById("P3-2s-score").style.display = "block";
			document.getElementById("P3-2s-score").innerHTML = p3_2s;
			document.getElementById("P3-2s-holder").style.display = "none";
			document.getElementById("P3-2s").src = "Graphics/2s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_2s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_2s = number_2s*2;
			document.getElementById("P4-2s-score").style.display = "block";
			document.getElementById("P4-2s-score").innerHTML = p4_2s;
			document.getElementById("P4-2s-holder").style.display = "none";
			document.getElementById("P4-2s").src = "Graphics/2s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place3s() {
	if (player_turn == 1) {
		if (p1_3s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_3s = number_3s*3;
			document.getElementById("P1-3s-score").style.display = "block";
			document.getElementById("P1-3s-score").innerHTML = p1_3s;
			document.getElementById("P1-3s-holder").style.display = "none";
			document.getElementById("P1-3s").src = "Graphics/3s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_3s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_3s = number_3s*3;
			document.getElementById("P2-3s-score").style.display = "block";
			document.getElementById("P2-3s-score").innerHTML = p2_3s;
			document.getElementById("P2-3s-holder").style.display = "none";
			document.getElementById("P2-3s").src = "Graphics/3s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_3s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_3s = number_3s*3;
			document.getElementById("P3-3s-score").style.display = "block";
			document.getElementById("P3-3s-score").innerHTML = p3_3s;
			document.getElementById("P3-3s-holder").style.display = "none";
			document.getElementById("P3-3s").src = "Graphics/3s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_3s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_3s = number_3s*3;
			document.getElementById("P4-3s-score").style.display = "block";
			document.getElementById("P4-3s-score").innerHTML = p4_3s;
			document.getElementById("P4-3s-holder").style.display = "none";
			document.getElementById("P4-3s").src = "Graphics/3s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place4s() {
	if (player_turn == 1) {
		if (p1_4s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_4s = number_4s*4;
			document.getElementById("P1-4s-score").style.display = "block";
			document.getElementById("P1-4s-score").innerHTML = p1_4s;
			document.getElementById("P1-4s-holder").style.display = "none";
			document.getElementById("P1-4s").src = "Graphics/4s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_4s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_4s = number_4s*4;
			document.getElementById("P2-4s-score").style.display = "block";
			document.getElementById("P2-4s-score").innerHTML = p2_4s;
			document.getElementById("P2-4s-holder").style.display = "none";
			document.getElementById("P2-4s").src = "Graphics/4s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_4s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_4s = number_4s*4;
			document.getElementById("P3-4s-score").style.display = "block";
			document.getElementById("P3-4s-score").innerHTML = p3_4s;
			document.getElementById("P3-4s-holder").style.display = "none";
			document.getElementById("P3-4s").src = "Graphics/4s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_4s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_4s = number_4s*4;
			document.getElementById("P4-4s-score").style.display = "block";
			document.getElementById("P4-4s-score").innerHTML = p4_4s;
			document.getElementById("P4-4s-holder").style.display = "none";
			document.getElementById("P4-4s").src = "Graphics/4s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place5s() {
	if (player_turn == 1) {
		if (p1_5s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_5s = number_5s*5;
			document.getElementById("P1-5s-score").style.display = "block";
			document.getElementById("P1-5s-score").innerHTML = p1_5s;
			document.getElementById("P1-5s-holder").style.display = "none";
			document.getElementById("P1-5s").src = "Graphics/5s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_5s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_5s = number_5s*5;
			document.getElementById("P2-5s-score").style.display = "block";
			document.getElementById("P2-5s-score").innerHTML = p2_5s;
			document.getElementById("P2-5s-holder").style.display = "none";
			document.getElementById("P2-5s").src = "Graphics/5s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_5s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_5s = number_5s*5;
			document.getElementById("P3-5s-score").style.display = "block";
			document.getElementById("P3-5s-score").innerHTML = p3_5s;
			document.getElementById("P3-5s-holder").style.display = "none";
			document.getElementById("P3-5s").src = "Graphics/5s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_5s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_5s = number_5s*5;
			document.getElementById("P4-5s-score").style.display = "block";
			document.getElementById("P4-5s-score").innerHTML = p4_5s;
			document.getElementById("P4-5s-holder").style.display = "none";
			document.getElementById("P4-5s").src = "Graphics/5s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place6s() {
	if (player_turn == 1) {
		if (p1_6s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_6s = number_6s*6;
			document.getElementById("P1-6s-score").style.display = "block";
			document.getElementById("P1-6s-score").innerHTML = p1_6s;
			document.getElementById("P1-6s-holder").style.display = "none";
			document.getElementById("P1-6s").src = "Graphics/6s2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_6s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_6s = number_6s*6;
			document.getElementById("P2-6s-score").style.display = "block";
			document.getElementById("P2-6s-score").innerHTML = p2_6s;
			document.getElementById("P2-6s-holder").style.display = "none";
			document.getElementById("P2-6s").src = "Graphics/6s2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_6s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_6s = number_6s*6;
			document.getElementById("P3-6s-score").style.display = "block";
			document.getElementById("P3-6s-score").innerHTML = p3_6s;
			document.getElementById("P3-6s-holder").style.display = "none";
			document.getElementById("P3-6s").src = "Graphics/6s2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_6s >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_6s = number_6s*6;
			document.getElementById("P4-6s-score").style.display = "block";
			document.getElementById("P4-6s-score").innerHTML = p4_6s;
			document.getElementById("P4-6s-holder").style.display = "none";
			document.getElementById("P4-6s").src = "Graphics/6s2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place3x() {
	if (player_turn == 1 || roll_number == 0) {
		if (p1_3x >= 0) {
			return;
		}
		else {
			p1_3x = number_3x;
			document.getElementById("P1-3x-score").style.display = "block";
			document.getElementById("P1-3x-score").innerHTML = p1_3x;
			document.getElementById("P1-3x-holder").style.display = "none";
			document.getElementById("P1-3x").src = "Graphics/3x2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_3x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_3x = number_3x;
			document.getElementById("P2-3x-score").style.display = "block";
			document.getElementById("P2-3x-score").innerHTML = p2_3x;
			document.getElementById("P2-3x-holder").style.display = "none";
			document.getElementById("P2-3x").src = "Graphics/3x2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_3x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_3x = number_3x;
			document.getElementById("P3-3x-score").style.display = "block";
			document.getElementById("P3-3x-score").innerHTML = p3_3x;
			document.getElementById("P3-3x-holder").style.display = "none";
			document.getElementById("P3-3x").src = "Graphics/3x2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_3x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_3x = number_3x;
			document.getElementById("P4-3x-score").style.display = "block";
			document.getElementById("P4-3x-score").innerHTML = p4_3x;
			document.getElementById("P4-3x-holder").style.display = "none";
			document.getElementById("P4-3x").src = "Graphics/3x2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function place4x() {
	if (player_turn == 1) {
		if (p1_4x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_4x = number_4x;
			document.getElementById("P1-4x-score").style.display = "block";
			document.getElementById("P1-4x-score").innerHTML = p1_4x;
			document.getElementById("P1-4x-holder").style.display = "none";
			document.getElementById("P1-4x").src = "Graphics/4x2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_4x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_4x = number_4x;
			document.getElementById("P2-4x-score").style.display = "block";
			document.getElementById("P2-4x-score").innerHTML = p2_4x;
			document.getElementById("P2-4x-holder").style.display = "none";
			document.getElementById("P2-4x").src = "Graphics/4x2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_4x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_4x = number_4x;
			document.getElementById("P3-4x-score").style.display = "block";
			document.getElementById("P3-4x-score").innerHTML = p3_4x;
			document.getElementById("P3-4x-holder").style.display = "none";
			document.getElementById("P3-4x").src = "Graphics/4x2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_4x >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_4x = number_4x;
			document.getElementById("P4-4x-score").style.display = "block";
			document.getElementById("P4-4x-score").innerHTML = p4_4x;
			document.getElementById("P4-4x-holder").style.display = "none";
			document.getElementById("P4-4x").src = "Graphics/4x2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeFH() {
	if (player_turn == 1) {
		if (p1_fh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_fh = number_FH;
			document.getElementById("P1-FH-score").style.display = "block";
			document.getElementById("P1-FH-score").innerHTML = p1_fh;
			document.getElementById("P1-FH-holder").style.display = "none";
			document.getElementById("P1-FH").src = "Graphics/FH2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_fh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_fh = number_FH;
			document.getElementById("P2-FH-score").style.display = "block";
			document.getElementById("P2-FH-score").innerHTML = p2_fh;
			document.getElementById("P2-FH-holder").style.display = "none";
			document.getElementById("P2-FH").src = "Graphics/FH2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_fh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_fh = number_FH;
			document.getElementById("P3-FH-score").style.display = "block";
			document.getElementById("P3-FH-score").innerHTML = p3_fh;
			document.getElementById("P3-FH-holder").style.display = "none";
			document.getElementById("P3-FH").src = "Graphics/FH2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_fh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_fh = number_FH;
			document.getElementById("P4-FH-score").style.display = "block";
			document.getElementById("P4-FH-score").innerHTML = p4_fh;
			document.getElementById("P4-FH-holder").style.display = "none";
			document.getElementById("P4-FH").src = "Graphics/FH2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeLS() {
	if (player_turn == 1) {
		if (p1_ls >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_ls = number_LS;
			document.getElementById("P1-LS-score").style.display = "block";
			document.getElementById("P1-LS-score").innerHTML = p1_ls;
			document.getElementById("P1-LS-holder").style.display = "none";
			document.getElementById("P1-LS").src = "Graphics/LS2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_ls >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_ls = 30;
			document.getElementById("P2-LS-score").style.display = "block";
			document.getElementById("P2-LS-score").innerHTML = p2_ls;
			document.getElementById("P2-LS-holder").style.display = "none";
			document.getElementById("P2-LS").src = "Graphics/LS2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_ls >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_ls = number_LS;
			document.getElementById("P3-LS-score").style.display = "block";
			document.getElementById("P3-LS-score").innerHTML = p3_ls;
			document.getElementById("P3-LS-holder").style.display = "none";
			document.getElementById("P3-LS").src = "Graphics/LS2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_ls >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_ls = number_LS;
			document.getElementById("P4-LS-score").style.display = "block";
			document.getElementById("P4-LS-score").innerHTML = p4_ls;
			document.getElementById("P4-LS-holder").style.display = "none";
			document.getElementById("P4-LS").src = "Graphics/LS2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeHS() {
	if (player_turn == 1) {
		if (p1_hs >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_hs = number_HS;
			document.getElementById("P1-HS-score").style.display = "block";
			document.getElementById("P1-HS-score").innerHTML = p1_hs;
			document.getElementById("P1-HS-holder").style.display = "none";
			document.getElementById("P1-HS").src = "Graphics/HS2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_hs >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_hs = number_HS;
			document.getElementById("P2-HS-score").style.display = "block";
			document.getElementById("P2-HS-score").innerHTML = p2_hs;
			document.getElementById("P2-HS-holder").style.display = "none";
			document.getElementById("P2-HS").src = "Graphics/HS2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_hs >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_hs = number_HS;
			document.getElementById("P3-HS-score").style.display = "block";
			document.getElementById("P3-HS-score").innerHTML = p3_hs;
			document.getElementById("P3-HS-holder").style.display = "none";
			document.getElementById("P3-HS").src = "Graphics/HS2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_hs >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_hs = number_HS;
			document.getElementById("P4-HS-score").style.display = "block";
			document.getElementById("P4-HS-score").innerHTML = p4_hs;
			document.getElementById("P4-HS-holder").style.display = "none";
			document.getElementById("P4-HS").src = "Graphics/HS2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeC() {
	if (player_turn == 1) {
		if (p1_c >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_c = number_C;
			document.getElementById("P1-C-score").style.display = "block";
			document.getElementById("P1-C-score").innerHTML = p1_c;
			document.getElementById("P1-C-holder").style.display = "none";
			document.getElementById("P1-C").src = "Graphics/C2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_c >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_c = number_C;
			document.getElementById("P2-C-score").style.display = "block";
			document.getElementById("P2-C-score").innerHTML = p2_c;
			document.getElementById("P2-C-holder").style.display = "none";
			document.getElementById("P2-C").src = "Graphics/C2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_c >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_c = number_C;
			document.getElementById("P3-C-score").style.display = "block";
			document.getElementById("P3-C-score").innerHTML = p3_c;
			document.getElementById("P3-C-holder").style.display = "none";
			document.getElementById("P3-C").src = "Graphics/C2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_c >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_c = number_C;
			document.getElementById("P4-C-score").style.display = "block";
			document.getElementById("P4-C-score").innerHTML = p4_c;
			document.getElementById("P4-C-holder").style.display = "none";
			document.getElementById("P4-C").src = "Graphics/C2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeY() {
	if (player_turn == 1) {
		if (p1_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_y = number_Y;
			document.getElementById("P1-Y-score").style.display = "block";
			document.getElementById("P1-Y-score").innerHTML = p1_y;
			document.getElementById("P1-Y-holder").style.display = "none";
			document.getElementById("P1-Y").src = "Graphics/Yahtzee2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_y = number_Y;
			document.getElementById("P2-Y-score").style.display = "block";
			document.getElementById("P2-Y-score").innerHTML = p2_y;
			document.getElementById("P2-Y-holder").style.display = "none";
			document.getElementById("P2-Y").src = "Graphics/Yahtzee2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_y = number_Y;
			document.getElementById("P3-Y-score").style.display = "block";
			document.getElementById("P3-Y-score").innerHTML = p3_y;
			document.getElementById("P3-Y-holder").style.display = "none";
			document.getElementById("P3-Y").src = "Graphics/Yahtzee2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_y = number_Y;
			document.getElementById("P4-Y-score").style.display = "block";
			document.getElementById("P4-Y-score").innerHTML = p4_y;
			document.getElementById("P4-Y-holder").style.display = "none";
			document.getElementById("P4-Y").src = "Graphics/Yahtzee2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeYh(){
	if (player_turn == 1) {
		if (p1_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_y = number_Y;
			document.getElementById("P1-Yh-score").style.display = "block";
			document.getElementById("P1-Yh-score").innerHTML = p1_y;
			document.getElementById("P1-Yh-holder").style.display = "none";
			document.getElementById("P1-Yh").src = "Graphics/Y2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_y = number_Y;
			document.getElementById("P2-Yh-score").style.display = "block";
			document.getElementById("P2-Yh-score").innerHTML = p2_y;
			document.getElementById("P2-Yh-holder").style.display = "none";
			document.getElementById("P2-Yh").src = "Graphics/Y2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_y = number_Y;
			document.getElementById("P3-Yh-score").style.display = "block";
			document.getElementById("P3-Yh-score").innerHTML = p3_y;
			document.getElementById("P3-Yh-holder").style.display = "none";
			document.getElementById("P3-Yh").src = "Graphics/Y2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_y >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_y = number_Y;
			document.getElementById("P4-Yh-score").style.display = "block";
			document.getElementById("P4-Yh-score").innerHTML = p4_y;
			document.getElementById("P4-Yh-holder").style.display = "none";
			document.getElementById("P4-Yh").src = "Graphics/Y2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function placeCY(){
	if (player_turn == 1) {
		if (p1_cs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Cs == 30) {
				p1_cs = number_Cs;
				document.getElementById("P1-CY-score").style.display = "block";
				document.getElementById("P1-CY-score").innerHTML = p1_cs;
				document.getElementById("P1-CY-holder").style.display = "none";
				document.getElementById("P1-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
			else {
				p1_cs = 0;
				document.getElementById("P1-CY-score").style.display = "block";
				document.getElementById("P1-CY-score").innerHTML = p1_cs;
				document.getElementById("P1-CY-holder").style.display = "none";
				document.getElementById("P1-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 2) {
		if (p2_cs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Cs == 30) {
				p2_cs = number_Cs;
				document.getElementById("P2-CY-score").style.display = "block";
				document.getElementById("P2-CY-score").innerHTML = p2_cs;
				document.getElementById("P2-CY-holder").style.display = "none";
				document.getElementById("P2-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
			else {
				p2_cs = 0;
				document.getElementById("P2-CY-score").style.display = "block";
				document.getElementById("P2-CY-score").innerHTML = p2_cs;
				document.getElementById("P2-CY-holder").style.display = "none";
				document.getElementById("P2-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 3) {
		if (p3_cs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Cs == 30) {
				p3_cs = number_Cs;
				document.getElementById("P3-CY-score").style.display = "block";
				document.getElementById("P3-CY-score").innerHTML = p3_cs;
				document.getElementById("P3-CY-holder").style.display = "none";
				document.getElementById("P3-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
			else {
				p3_cs = 0;
				document.getElementById("P3-CY-score").style.display = "block";
				document.getElementById("P3-CY-score").innerHTML = p3_cs;
				document.getElementById("P3-CY-holder").style.display = "none";
				document.getElementById("P3-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 4) {
		if (p4_cs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Cs == 30) {
				p4_cs = number_Cs;
				document.getElementById("P4-CY-score").style.display = "block";
				document.getElementById("P4-CY-score").innerHTML = p4_cs;
				document.getElementById("P4-CY-holder").style.display = "none";
				document.getElementById("P4-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
			else {
				p4_cs = 0;
				document.getElementById("P4-CY-score").style.display = "block";
				document.getElementById("P4-CY-score").innerHTML = p4_cs;
				document.getElementById("P4-CY-holder").style.display = "none";
				document.getElementById("P4-CY").src = "Graphics/CY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
		}
	}
}

function placeMY(){
	if (player_turn == 1) {
		if (p1_ms >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Ms == 30) {
				p1_ms = number_Ms;
				document.getElementById("P1-MY-score").style.display = "block";
				document.getElementById("P1-MY-score").innerHTML = p1_ms;
				document.getElementById("P1-MY-holder").style.display = "none";
				document.getElementById("P1-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
			else {
				p1_ms = 0;
				document.getElementById("P1-MY-score").style.display = "block";
				document.getElementById("P1-MY-score").innerHTML = p1_ms;
				document.getElementById("P1-MY-holder").style.display = "none";
				document.getElementById("P1-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 2) {
		if (p2_ms >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Ms == 30) {
				p2_ms = number_Ms;
				document.getElementById("P2-MY-score").style.display = "block";
				document.getElementById("P2-MY-score").innerHTML = p2_ms;
				document.getElementById("P2-MY-holder").style.display = "none";
				document.getElementById("P2-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
			else {
				p2_ms = 0;
				document.getElementById("P2-MY-score").style.display = "block";
				document.getElementById("P2-MY-score").innerHTML = p2_ms;
				document.getElementById("P2-MY-holder").style.display = "none";
				document.getElementById("P2-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 3) {
		if (p3_ms >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Ms == 30) {
				p3_ms = number_Ms;
				document.getElementById("P3-MY-score").style.display = "block";
				document.getElementById("P3-MY-score").innerHTML = p3_ms;
				document.getElementById("P3-MY-holder").style.display = "none";
				document.getElementById("P3-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
			else {
				p3_ms = 0;
				document.getElementById("P3-MY-score").style.display = "block";
				document.getElementById("P3-MY-score").innerHTML = p3_ms;
				document.getElementById("P3-MY-holder").style.display = "none";
				document.getElementById("P3-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 4) {
		if (p4_ms >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Ms == 30) {
				p4_ms = number_Ms;
				document.getElementById("P4-MY-score").style.display = "block";
				document.getElementById("P4-MY-score").innerHTML = p4_ms;
				document.getElementById("P4-MY-holder").style.display = "none";
				document.getElementById("P4-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
			else {
				p4_ms = 0;
				document.getElementById("P4-MY-score").style.display = "block";
				document.getElementById("P4-MY-score").innerHTML = p4_ms;
				document.getElementById("P4-MY-holder").style.display = "none";
				document.getElementById("P4-MY").src = "Graphics/MY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
		}
	}
}

function placeGY() {
	if (player_turn == 1) {
		if (p1_gs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Gs == 30) {
				p1_gs = number_Gs;
				document.getElementById("P1-GY-score").style.display = "block";
				document.getElementById("P1-GY-score").innerHTML = p1_gs;
				document.getElementById("P1-GY-holder").style.display = "none";
				document.getElementById("P1-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
			else {
				p1_gs = 0;
				document.getElementById("P1-GY-score").style.display = "block";
				document.getElementById("P1-GY-score").innerHTML = p1_gs;
				document.getElementById("P1-GY-holder").style.display = "none";
				document.getElementById("P1-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p1_turn = p1_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 2) {
		if (p2_gs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Gs == 30) {
				p2_gs = number_Gs;
				document.getElementById("P2-GY-score").style.display = "block";
				document.getElementById("P2-GY-score").innerHTML = p2_gs;
				document.getElementById("P2-GY-holder").style.display = "none";
				document.getElementById("P2-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
			else {
				p2_gs = 0;
				document.getElementById("P2-GY-score").style.display = "block";
				document.getElementById("P2-GY-score").innerHTML = p2_gs;
				document.getElementById("P2-GY-holder").style.display = "none";
				document.getElementById("P2-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p2_turn = p2_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 3) {
		if (p3_gs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Gs == 30) {
				p3_gs = number_Gs;
				document.getElementById("P3-GY-score").style.display = "block";
				document.getElementById("P3-GY-score").innerHTML = p3_gs;
				document.getElementById("P3-GY-holder").style.display = "none";
				document.getElementById("P3-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
			else {
				p3_gs = 0;
				document.getElementById("P3-GY-score").style.display = "block";
				document.getElementById("P3-GY-score").innerHTML = p3_gs;
				document.getElementById("P3-GY-holder").style.display = "none";
				document.getElementById("P3-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p3_turn = p3_turn + 1;
				changePlayer();
			}
		}
	}
	
	else if (player_turn == 4) {
		if (p4_gs >= 0 || roll_number == 0) {
			return;
		}
		else {
			if (number_Gs == 30) {
				p4_gs = number_Gs;
				document.getElementById("P4-GY-score").style.display = "block";
				document.getElementById("P4-GY-score").innerHTML = p4_gs;
				document.getElementById("P4-GY-holder").style.display = "none";
				document.getElementById("P4-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
			else {
				p4_gs = 0;
				document.getElementById("P4-GY-score").style.display = "block";
				document.getElementById("P4-GY-score").innerHTML = p4_gs;
				document.getElementById("P4-GY-holder").style.display = "none";
				document.getElementById("P4-GY").src = "Graphics/GY2.png";
				roll_number = 3;
				p4_turn = p4_turn + 1;
				changePlayer();
			}
		}
	}
}

function placeRH() {
	if (player_turn == 1) {
		if (p1_rh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p1_rh = number_RH;
			document.getElementById("P1-RH-score").style.display = "block";
			document.getElementById("P1-RH-score").innerHTML = p1_rh;
			document.getElementById("P1-RH-holder").style.display = "none";
			document.getElementById("P1-RH").src = "Graphics/RH2.png";
			roll_number = 3;
			p1_turn = p1_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 2) {
		if (p2_rh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p2_rh = number_RH;
			document.getElementById("P2-RH-score").style.display = "block";
			document.getElementById("P2-RH-score").innerHTML = p2_rh;
			document.getElementById("P2-RH-holder").style.display = "none";
			document.getElementById("P2-RH").src = "Graphics/RH2.png";
			roll_number = 3;
			p2_turn = p2_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 3) {
		if (p3_rh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p3_rh = number_RH;
			document.getElementById("P3-RH-score").style.display = "block";
			document.getElementById("P3-RH-score").innerHTML = p3_rh;
			document.getElementById("P3-RH-holder").style.display = "none";
			document.getElementById("P3-RH").src = "Graphics/RH2.png";
			roll_number = 3;
			p3_turn = p3_turn + 1;
			changePlayer();
		}
	}
	
	else if (player_turn == 4) {
		if (p4_rh >= 0 || roll_number == 0) {
			return;
		}
		else {
			p4_rh = number_RH;
			document.getElementById("P4-RH-score").style.display = "block";
			document.getElementById("P4-RH-score").innerHTML = p4_rh;
			document.getElementById("P4-RH-holder").style.display = "none";
			document.getElementById("P4-RH").src = "Graphics/RH2.png";
			roll_number = 3;
			p4_turn = p4_turn + 1;
			changePlayer();
		}
	}
}

function changePlayer() {
	updateScores();
	document.getElementById("D1").style.top = "33px";
	document.getElementById("D2").style.top = "33px";
	document.getElementById("D3").style.top = "33px";
	document.getElementById("D4").style.top = "33px";
	document.getElementById("D5").style.top = "33px";
	roll_number = 0;
	document.getElementById("roll-number").innerHTML = "x" + (3 - roll_number);
	d1_state = 0;
	d2_state = 0;
	d3_state = 0;
	d4_state = 0;
	d5_state = 0;
	number_1s = 0;
	number_2s = 0;
	number_3s = 0;
	number_4s = 0;
	number_5s = 0;
	number_6s = 0;
	number_3x = 0;
	number_4x = 0;
	number_FH = 0;
	number_LS = 0;
	number_HS = 0;
	number_C = 0;
	number_Y = 0;
	number_Cs = 0;
	number_Gs = 0;
	number_Ms = 0;
	number_RH = 0;
	document.getElementById("P1-1s-holder").innerHTML = "";
	document.getElementById("P1-2s-holder").innerHTML = "";
	document.getElementById("P1-3s-holder").innerHTML = "";
	document.getElementById("P1-4s-holder").innerHTML = "";
	document.getElementById("P1-5s-holder").innerHTML = "";
	document.getElementById("P1-6s-holder").innerHTML = "";
	document.getElementById("P1-3x-holder").innerHTML = "";
	document.getElementById("P1-4x-holder").innerHTML = "";
	document.getElementById("P1-FH-holder").innerHTML = "";
	document.getElementById("P1-LS-holder").innerHTML = "";
	document.getElementById("P1-HS-holder").innerHTML = "";
	document.getElementById("P1-C-holder").innerHTML = "";
	document.getElementById("P2-1s-holder").innerHTML = "";
	document.getElementById("P2-2s-holder").innerHTML = "";
	document.getElementById("P2-3s-holder").innerHTML = "";
	document.getElementById("P2-4s-holder").innerHTML = "";
	document.getElementById("P2-5s-holder").innerHTML = "";
	document.getElementById("P2-6s-holder").innerHTML = "";
	document.getElementById("P2-3x-holder").innerHTML = "";
	document.getElementById("P2-4x-holder").innerHTML = "";
	document.getElementById("P2-FH-holder").innerHTML = "";
	document.getElementById("P2-LS-holder").innerHTML = "";
	document.getElementById("P2-HS-holder").innerHTML = "";
	document.getElementById("P2-C-holder").innerHTML = "";
	document.getElementById("P3-1s-holder").innerHTML = "";
	document.getElementById("P3-2s-holder").innerHTML = "";
	document.getElementById("P3-3s-holder").innerHTML = "";
	document.getElementById("P3-4s-holder").innerHTML = "";
	document.getElementById("P3-5s-holder").innerHTML = "";
	document.getElementById("P3-6s-holder").innerHTML = "";
	document.getElementById("P3-3x-holder").innerHTML = "";
	document.getElementById("P3-4x-holder").innerHTML = "";
	document.getElementById("P3-FH-holder").innerHTML = "";
	document.getElementById("P3-LS-holder").innerHTML = "";
	document.getElementById("P3-HS-holder").innerHTML = "";
	document.getElementById("P3-C-holder").innerHTML = "";
	document.getElementById("P4-1s-holder").innerHTML = "";
	document.getElementById("P4-2s-holder").innerHTML = "";
	document.getElementById("P4-3s-holder").innerHTML = "";
	document.getElementById("P4-4s-holder").innerHTML = "";
	document.getElementById("P4-5s-holder").innerHTML = "";
	document.getElementById("P4-6s-holder").innerHTML = "";
	document.getElementById("P4-3x-holder").innerHTML = "";
	document.getElementById("P4-4x-holder").innerHTML = "";
	document.getElementById("P4-FH-holder").innerHTML = "";
	document.getElementById("P4-LS-holder").innerHTML = "";
	document.getElementById("P4-HS-holder").innerHTML = "";
	document.getElementById("P4-C-holder").innerHTML = "";
	roll_number = 0;
	document.getElementById("D1").style.display = "none";
	document.getElementById("D2").style.display = "none";
	document.getElementById("D3").style.display = "none";
	document.getElementById("D4").style.display = "none";
	document.getElementById("D5").style.display = "none";
	if (game_mode == 1) {
		document.getElementById("P1-Y-holder").innerHTML = "";
		document.getElementById("P2-Y-holder").innerHTML = "";
		document.getElementById("P3-Y-holder").innerHTML = "";
		document.getElementById("P4-Y-holder").innerHTML = "";
	}
	
	else if (game_mode == 2) {
		document.getElementById("P1-Yh-holder").innerHTML = "";
		document.getElementById("P1-CY-holder").innerHTML = "";
		document.getElementById("P1-GY-holder").innerHTML = "";
		document.getElementById("P1-MY-holder").innerHTML = "";
		document.getElementById("P1-RH-holder").innerHTML = "";
		document.getElementById("P2-Yh-holder").innerHTML = "";
		document.getElementById("P2-CY-holder").innerHTML = "";
		document.getElementById("P2-GY-holder").innerHTML = "";
		document.getElementById("P2-MY-holder").innerHTML = "";
		document.getElementById("P2-RH-holder").innerHTML = "";
		document.getElementById("P3-Yh-holder").innerHTML = "";
		document.getElementById("P3-CY-holder").innerHTML = "";
		document.getElementById("P3-GY-holder").innerHTML = "";
		document.getElementById("P3-MY-holder").innerHTML = "";
		document.getElementById("P3-RH-holder").innerHTML = "";
		document.getElementById("P4-Yh-holder").innerHTML = "";
		document.getElementById("P4-CY-holder").innerHTML = "";
		document.getElementById("P4-GY-holder").innerHTML = "";
		document.getElementById("P4-MY-holder").innerHTML = "";
		document.getElementById("P4-RH-holder").innerHTML = "";
	}
	
	if (number_players == 1) {
		if (p1_turn == 13) {
			finalScores();
		}
		
		else {
			return;
		}
	}
	
	else if (number_players == 2) {
		if (p2_turn == 13) {
			finalScores();
		}
		
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
		}
	}
	
	else if (number_players == 3) {
		if (p3_turn == 13) {
			finalScores();
		}
		
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 3;
				document.getElementById("player3-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player3").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
			else if (player_turn == 3) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player3-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player3").classList.remove("current-area");
			}
		}
	}
	
	else if (number_players == 4) {
		if (p4_turn == 13) {
			finalScores();
		}
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 3;
				document.getElementById("player3-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player3").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
			else if (player_turn == 3) {
				player_turn = 4;
				document.getElementById("player4-tab").classList.add("current");
				document.getElementById("player3-tab").classList.remove("current");
				document.getElementById("player4").classList.add("current-area");
				document.getElementById("player3").classList.remove("current-area");
			}
			else if (player_turn == 4) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player4-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player4").classList.remove("current-area");
			}
		}
	}
	
	if (number_players == 5) {
		if (p1_turn == 17) {
			finalScores();
		}
		
		else {
			return;
		}
	}
	
	else if (number_players == 6) {
		if (p2_turn == 17) {
			finalScores();
		}
		
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
		}
	}
	
	else if (number_players == 7) {
		if (p3_turn == 17) {
			finalScores();
		}
		
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 3;
				document.getElementById("player3-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player3").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
			else if (player_turn == 3) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player3-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player3").classList.remove("current-area");
			}
		}
	}
	
	else if (number_players == 8) {
		if (p4_turn == 17) {
			finalScores();
		}
		else {
			if (player_turn == 1) {
				player_turn = 2;
				document.getElementById("player2-tab").classList.add("current");
				document.getElementById("player1-tab").classList.remove("current");
				document.getElementById("player2").classList.add("current-area");
				document.getElementById("player1").classList.remove("current-area");
			}
			else if (player_turn == 2) {
				player_turn = 3;
				document.getElementById("player3-tab").classList.add("current");
				document.getElementById("player2-tab").classList.remove("current");
				document.getElementById("player3").classList.add("current-area");
				document.getElementById("player2").classList.remove("current-area");
			}
			else if (player_turn == 3) {
				player_turn = 4;
				document.getElementById("player4-tab").classList.add("current");
				document.getElementById("player3-tab").classList.remove("current");
				document.getElementById("player4").classList.add("current-area");
				document.getElementById("player3").classList.remove("current-area");
			}
			else if (player_turn == 4) {
				player_turn = 1;
				document.getElementById("player1-tab").classList.add("current");
				document.getElementById("player4-tab").classList.remove("current");
				document.getElementById("player1").classList.add("current-area");
				document.getElementById("player4").classList.remove("current-area");
			}
		}
	}
}

function updateScores() {
	var p1_top_temp = 0;
	var p1_bottom_temp = 0;
	var p2_top_temp = 0;
	var p2_bottom_temp = 0;
	var p3_top_temp = 0;
	var p3_bottom_temp = 0;
	var p4_top_temp = 0;
	var p4_bottom_temp = 0;
	
	if (p1_1s >= 0) {
		p1_top_temp = p1_top_temp + p1_1s;
	}
	if (p1_2s >= 0) {
		p1_top_temp = p1_top_temp + p1_2s;
	}
	if (p1_3s >= 0) {
		p1_top_temp = p1_top_temp + p1_3s;
	}
	if (p1_4s >= 0) {
		p1_top_temp = p1_top_temp + p1_4s;
	}
	if (p1_5s >= 0) {
		p1_top_temp = p1_top_temp + p1_5s;
	}
	if (p1_6s >= 0) {
		p1_top_temp = p1_top_temp + p1_6s;
	}
	if (p1_3x >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_3x;
	}
	if (p1_4x >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_4x;
	}
	if (p1_fh >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_fh;
	}
	if (p1_ls >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_ls;
	}
	if (p1_hs >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_hs;
	}
	if (p1_c >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_c;
	}
	if (p1_y >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_y;
	}
	if (p1_cs >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_cs;
	}
	if (p1_gs >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_gs;
	}
	if (p1_ms >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_ms;
	}
	if (p1_rh >= 0) {
		p1_bottom_temp = p1_bottom_temp + p1_rh;
	}
	
	if (p2_1s >= 0) {
		p2_top_temp = p2_top_temp + p2_1s;
	}
	if (p2_2s >= 0) {
		p2_top_temp = p2_top_temp + p2_2s;
	}
	if (p2_3s >= 0) {
		p2_top_temp = p2_top_temp + p2_3s;
	}
	if (p2_4s >= 0) {
		p2_top_temp = p2_top_temp + p2_4s;
	}
	if (p2_5s >= 0) {
		p2_top_temp = p2_top_temp + p2_5s;
	}
	if (p2_6s >= 0) {
		p2_top_temp = p2_top_temp + p2_6s;
	}
	if (p2_3x >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_3x;
	}
	if (p2_4x >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_4x;
	}
	if (p2_fh >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_fh;
	}
	if (p2_ls >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_ls;
	}
	if (p2_hs >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_hs;
	}
	if (p2_c >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_c;
	}
	if (p2_y >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_y;
	}
	if (p2_cs >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_cs;
	}
	if (p2_gs >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_gs;
	}
	if (p2_ms >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_ms;
	}
	if (p2_rh >= 0) {
		p2_bottom_temp = p2_bottom_temp + p2_rh;
	}
	
	if (p3_1s >= 0) {
		p3_top_temp = p3_top_temp + p3_1s;
	}
	if (p3_2s >= 0) {
		p3_top_temp = p3_top_temp + p3_2s;
	}
	if (p3_3s >= 0) {
		p3_top_temp = p3_top_temp + p3_3s;
	}
	if (p3_4s >= 0) {
		p3_top_temp = p3_top_temp + p3_4s;
	}
	if (p3_5s >= 0) {
		p3_top_temp = p3_top_temp + p3_5s;
	}
	if (p3_6s >= 0) {
		p3_top_temp = p3_top_temp + p3_6s;
	}
	if (p3_3x >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_3x;
	}
	if (p3_4x >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_4x;
	}
	if (p3_fh >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_fh;
	}
	if (p3_ls >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_ls;
	}
	if (p3_hs >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_hs;
	}
	if (p3_c >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_c;
	}
	if (p3_y >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_y;
	}
	if (p3_cs >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_cs;
	}
	if (p3_gs >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_gs;
	}
	if (p3_ms >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_ms;
	}
	if (p3_rh >= 0) {
		p3_bottom_temp = p3_bottom_temp + p3_rh;
	}
	
	if (p4_1s >= 0) {
		p4_top_temp = p4_top_temp + p4_1s;
	}
	if (p4_2s >= 0) {
		p4_top_temp = p4_top_temp + p4_2s;
	}
	if (p4_3s >= 0) {
		p4_top_temp = p4_top_temp + p4_3s;
	}
	if (p4_4s >= 0) {
		p4_top_temp = p4_top_temp + p4_4s;
	}
	if (p4_5s >= 0) {
		p4_top_temp = p4_top_temp + p4_5s;
	}
	if (p4_6s >= 0) {
		p4_top_temp = p4_top_temp + p4_6s;
	}
	if (p4_3x >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_3x;
	}
	if (p4_4x >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_4x;
	}
	if (p4_fh >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_fh;
	}
	if (p4_ls >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_ls;
	}
	if (p4_hs >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_hs;
	}
	if (p4_c >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_c;
	}
	if (p4_y >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_y;
	}
	if (p4_cs >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_cs;
	}
	if (p4_gs >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_gs;
	}
	if (p4_ms >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_ms;
	}
	if (p4_rh >= 0) {
		p4_bottom_temp = p4_bottom_temp + p4_rh;
	}

	document.getElementById("P1-top").innerHTML = p1_top_temp;
	document.getElementById("P2-top").innerHTML = p2_top_temp;
	document.getElementById("P3-top").innerHTML = p3_top_temp;
	document.getElementById("P4-top").innerHTML = p4_top_temp;
	
	if (p1_top_temp >= 63) {
		document.getElementById("P1-bonus").style.display = "inline";
	}
	
	if (p2_top_temp >= 63) {
		document.getElementById("P2-bonus").style.display = "inline";
	}
	
	if (p3_top_temp >= 63) {
		document.getElementById("P3-bonus").style.display = "inline";
	}
	
	if (p4_top_temp >= 63) {
		document.getElementById("P4-bonus").style.display = "inline";
	}
	
	document.getElementById("P1-bottom").innerHTML = p1_bottom_temp;
	document.getElementById("P2-bottom").innerHTML = p2_bottom_temp;
	document.getElementById("P3-bottom").innerHTML = p3_bottom_temp;
	document.getElementById("P4-bottom").innerHTML = p4_bottom_temp;
	
	document.getElementById("P1-total-summary").innerHTML = p1_top_temp + p1_bottom_temp;
	document.getElementById("P2-total-summary").innerHTML = p2_top_temp + p2_bottom_temp;
	document.getElementById("P3-total-summary").innerHTML = p3_top_temp + p3_bottom_temp;
	document.getElementById("P4-total-summary").innerHTML = p4_top_temp + p4_bottom_temp;
}

function finalScores() {
	if (game_mode == 1) {
		p1_top = p1_1s + p1_2s + p1_3s + p1_4s + p1_5s + p1_6s;
		p1_bottom = p1_3x + p1_4x + p1_fh + p1_ls + p1_hs + p1_y + p1_c;
		
		p2_top = p2_1s + p2_2s + p2_3s + p2_4s + p2_5s + p2_6s;
		p2_bottom = p2_3x + p2_4x + p2_fh + p2_ls + p2_hs + p2_y + p2_c;
		
		p3_top = p3_1s + p3_2s + p3_3s + p3_4s + p3_5s + p3_6s;
		p3_bottom = p3_3x + p3_4x + p3_fh + p3_ls + p3_hs + p3_y + p3_c;
		
		p4_top = p4_1s + p4_2s + p4_3s + p4_4s + p4_5s + p4_6s;
		p4_bottom = p4_3x + p4_4x + p4_fh + p4_ls + p4_hs + p4_y + p4_c;
	}
	
	else if (game_mode == 2) {
		p1_top = p1_1s + p1_2s + p1_3s + p1_4s + p1_5s + p1_6s;
		p1_bottom = p1_3x + p1_4x + p1_fh + p1_ls + p1_hs + p1_y + p1_c + p1_cs + p1_gs + p1_ms + p1_rh;
		
		p2_top = p2_1s + p2_2s + p2_3s + p2_4s + p2_5s + p2_6s;
		p2_bottom = p2_3x + p2_4x + p2_fh + p2_ls + p2_hs + p2_y + p2_c + p2_cs + p2_gs + p2_ms + p2_rh;
		
		p3_top = p3_1s + p3_2s + p3_3s + p3_4s + p3_5s + p3_6s;
		p3_bottom = p3_3x + p3_4x + p3_fh + p3_ls + p3_hs + p3_y + p3_c + p3_cs + p3_gs + p3_ms + p3_rh;
		
		p4_top = p4_1s + p4_2s + p4_3s + p4_4s + p4_5s + p4_6s;
		p4_bottom = p4_3x + p4_4x + p4_fh + p4_ls + p4_hs + p4_y + p4_c + p4_cs + p4_gs + p4_ms + p4_rh;
	}
	
	document.getElementById("final-scores").style.display = "block";
	
	if (number_players == 1 || number_players == 5) {
		if (p1_top >=63) {
			p1_top = p1_top + 35;
			document.getElementById("P1-top-total").innerHTML = p1_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P1-top-total").innerHTML = p1_top;
		}
	
		document.getElementById("P1-bottom-total").innerHTML = p1_bottom;
		document.getElementById("P1-total-total").innerHTML = p1_top + p1_bottom;
	}
	
	if (number_players == 2 || number_players == 6) {
		if (p1_top >=63) {
			p1_top = p1_top + 35;
			document.getElementById("P1-top-total").innerHTML = p1_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P1-top-total").innerHTML = p1_top;
		}
		if (p2_top >=63) {
			p2_top = p2_top + 35;
			document.getElementById("P2-top-total").innerHTML = p2_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P2-top-total").innerHTML = p2_top;
		}
		document.getElementById("P1-top-total").innerHTML = p1_top;
		document.getElementById("P1-bottom-total").innerHTML = p1_bottom;
		document.getElementById("P1-total-total").innerHTML = p1_top + p1_bottom;
		document.getElementById("P2-total").style.display = "block";
		document.getElementById("P2-top-total").innerHTML = p2_top;
		document.getElementById("P2-bottom-total").innerHTML = p2_bottom;
		document.getElementById("P2-total-total").innerHTML = p2_top + p2_bottom;
	}
	
	if (number_players == 3 || number_players == 7) {
		if (p1_top >=63) {
			p1_top = p1_top + 35;
			document.getElementById("P1-top-total").innerHTML = p1_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P1-top-total").innerHTML = p1_top;
		}
		if (p2_top >=63) {
			p2_top = p2_top + 35;
			document.getElementById("P2-top-total").innerHTML = p2_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P2-top-total").innerHTML = p2_top;
		}
		if (p3_top >=63) {
			p3_top = p3_top + 35;
			document.getElementById("P3-top-total").innerHTML = p3_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P3-top-total").innerHTML = p3_top;
		}
		document.getElementById("P1-top-total").innerHTML = p1_top;
		document.getElementById("P1-bottom-total").innerHTML = p1_bottom;
		document.getElementById("P1-total-total").innerHTML = p1_top + p1_bottom;
		document.getElementById("P2-total").style.display = "block";
		document.getElementById("P2-top-total").innerHTML = p2_top;
		document.getElementById("P2-bottom-total").innerHTML = p2_bottom;
		document.getElementById("P2-total-total").innerHTML = p2_top + p2_bottom;
		document.getElementById("P3-total").style.display = "block";
		document.getElementById("P3-top-total").innerHTML = p3_top;
		document.getElementById("P3-bottom-total").innerHTML = p3_bottom;
		document.getElementById("P3-total-total").innerHTML = p3_top + p3_bottom;
	}
	
	if (number_players == 4  || number_players == 8) {
		if (p1_top >=63) {
			p1_top = p1_top + 35;
			document.getElementById("P1-top-total").innerHTML = p1_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P1-top-total").innerHTML = p1_top;
		}
		if (p2_top >=63) {
			p2_top = p2_top + 35;
			document.getElementById("P2-top-total").innerHTML = p2_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P2-top-total").innerHTML = p2_top;
		}
		if (p3_top >=63) {
			p3_top = p3_top + 35;
			document.getElementById("P3-top-total").innerHTML = p3_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P3-top-total").innerHTML = p3_top;
		}
		if (p4_top >=63) {
			p4_top = p4_top + 35;
			document.getElementById("P4-top-total").innerHTML = p4_top - 35 + " (+35)"
		}
		else {
			document.getElementById("P4-top-total").innerHTML = p4_top;
		}
		document.getElementById("P1-top-total").innerHTML = p1_top;
		document.getElementById("P1-bottom-total").innerHTML = p1_bottom;
		document.getElementById("P1-total-total").innerHTML = p1_top + p1_bottom;
		document.getElementById("P2-total").style.display = "block";
		document.getElementById("P2-top-total").innerHTML = p2_top;
		document.getElementById("P2-bottom-total").innerHTML = p2_bottom;
		document.getElementById("P2-total-total").innerHTML = p2_top + p2_bottom;
		document.getElementById("P3-total").style.display = "block";
		document.getElementById("P3-top-total").innerHTML = p3_top;
		document.getElementById("P3-bottom-total").innerHTML = p3_bottom;
		document.getElementById("P3-total-total").innerHTML = p3_top + p3_bottom;
		document.getElementById("P4-total").style.display = "block";
		document.getElementById("P4-top-total").innerHTML = p4_top;
		document.getElementById("P4-bottom-total").innerHTML = p4_bottom;
		document.getElementById("P4-total-total").innerHTML = p4_top + p4_bottom;
	}
}