// user class
function user () {
	//using this means you can have multiple instances of users like Bucky or Daniel
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife (targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + " gave life to " + targetPlayer.name);
	}
}

var Billy = new user ();
var Daniel = new user ();

Billy.name = "Billy";
Daniel.name = "Daniel";

Billy.giveLife(Daniel);
console.log(Billy.life);
console.log(Daniel.life);

user.prototype.stab = function stab (targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " took away 3 life points from " + targetPlayer.name);
}

Daniel.stab(Billy);
console.log(Billy.life);

user.prototype.mana = 100;

console.log(Billy.mana);
console.log(Daniel.mana);