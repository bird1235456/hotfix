#pragma strict


function OnGUI () {
	GetComponent.<GUIText>().text = PlayerData.getCoins().ToString();
}