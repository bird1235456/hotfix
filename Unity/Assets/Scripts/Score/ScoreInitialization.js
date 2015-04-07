#pragma strict

function Start () {
	GameObject.Find('nbcommits').GetComponent.<GUIText>().text = PlayerData.getCoins() + (PlayerData.getCoins() > 1 ? " commits" : " commit") + " (total is now: " + PlayerData.getTotalCoins() + ")";
	GameObject.Find('nbstargazers').GetComponent.<GUIText>().text = PlayerData.getStargazers() + (PlayerData.getStargazers() > 1 ? " stargazers" : " stargazer");
	
	var stargazers : int = PlayerData.getStargazers();
	
	PlayerData.gameover();
	
	var www : WWW = new WWW ('http://drouyer.com/hotfix/score.php?score=' + stargazers);

    // Wait for download to complete
    yield www;
    var scores: String[] = www.text.Split(':'[0]);
    
    GameObject.Find('ranking24').GetComponent.<GUIText>().text = scores[0];
    GameObject.Find('rankingOverall').GetComponent.<GUIText>().text = scores[1];
}