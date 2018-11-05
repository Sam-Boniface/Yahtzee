var tabName = ["player1-tab","player2-tab","player3-tab","player4-tab"];
var tabArea = ["player1","player2","player3","player4"];
var i = [0,1,2,3];
var h;

function change() {
	h = 0;
	for (h=0; h<tabName.length; h++) {
		var element1 = document.getElementById(tabName[h]);
		var element2 = document.getElementById(tabArea[h]);
		element1.classList.remove("current");
		element2.classList.remove("current-area");
	}
}

function showTab(i) {
	var element1 = document.getElementById(tabName[i]);
	var element2 = document.getElementById(tabArea[i]);
	element1.classList.add("current");
	element2.classList.add("current-area");
}