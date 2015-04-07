#pragma strict

function Start () {

}

function OnGUI () {
	GetComponent.<GUIText>().text = PlayerData.getStargazers().ToString();
}