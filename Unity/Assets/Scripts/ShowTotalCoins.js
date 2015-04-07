#pragma strict

var complete: boolean = false;
function Start () {

}

function OnGUI () {
	GetComponent.<GUIText>().text = PlayerData.getTotalCoins().ToString() + (complete ? (PlayerData.getTotalCoins() > 1 ? ' commits' : ' commit') : '');
}