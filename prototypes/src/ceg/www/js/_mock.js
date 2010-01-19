// This is a function which randomly generates ecg data
// NOTE: this is out of pure disknowledge and taken from data which
// "look like" ECG data
//(function(){
	var baseArr = [{}],
		returnArr = [
			"1 0 1 252",
			"1 1 1 253 74",
			"1 2 1 254 73 74",
			"1 3 1 255 73 73 74",
			"1 4 1 0 72 73 73 74",
			"1 5 1 1 72 72 73 73 74",
			"1 6 1 2 72 72 72 73 73 74",
			"1 7 1 3 73 72 72 72 73 73 74",
			"1 8 1 4 74 73 72 72 72 73 73 74",
			"1 9 1 5 73 74 73 72 72 72 73 73 74",
			"1 10 1 6 73 73 74 73 72 72 72 73 73 74",
			"1 11 1 7 72 73 73 74 73 72 72 72 73 73 74",
			"1 12 1 8 72 72 73 73 74 73 72 72 72 73 73 74",
			"1 13 1 10 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 14 1 11 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 15 1 12 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 16 1 13 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 17 1 14 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 18 1 15 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 19 1 16 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 20 1 17 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 21 1 18 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 22 1 19 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 23 1 20 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 24 1 21 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 25 1 22 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 26 1 23 77 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 27 1 24 77 77 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 28 1 25 77 77 77 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 29 1 26 77 77 77 77 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 30 1 27 78 77 77 77 77 76 75 75 74 74 74 75 75 74 73 73 72 71 71 72 72 73 73 74 73 72 72 72 73 73",
			"1 0 1 28",
			"1 1 1 29 82",
			"1 2 1 30 82 82",
			"1 3 1 31 82 82 82",
			"1 4 1 32 88 82 82 82",
			"1 5 1 33 90 88 82 82 82",
			"1 6 1 34 94 90 88 82 82 82",
			"1 7 1 35 95 94 90 88 82 82 82",
			"1 8 1 36 98 95 94 90 88 82 82 82",
			"1 9 1 37 99 98 95 94 90 88 82 82 82",
			"1 10 1 38 99 99 98 95 94 90 88 82 82 82",
			"1 11 1 39 99 99 99 98 95 94 90 88 82 82 82",
			"1 12 1 40 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 13 1 41 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 14 1 42 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 15 1 43 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 16 1 44 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 17 1 45 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 18 1 46 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 19 1 47 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 20 1 48 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 21 1 49 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 22 1 50 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 23 1 51 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 24 1 52 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 25 1 53 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 26 1 54 71 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 27 1 55 71 71 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 28 1 56 71 71 71 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 29 1 57 70 71 71 71 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82",
			"1 30 1 58 70 70 71 71 71 72 73 73 72 73 74 74 77 81 84 87 94 96 98 99 99 99 98 95 94 90 88 82 82 82"
		],
		i = 0;

	function generateEcg(){
		dojo.publish("packet/new", [returnArr[i]]);
		if (i<returnArr.length-2){
			i++;
		}else{
			i = 0;
		}
	}

	generateEcg();

	setInterval(function(){
		generateEcg();
	},1000);
//})();