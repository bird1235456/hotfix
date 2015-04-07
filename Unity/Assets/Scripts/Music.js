#pragma strict
public var clips: AudioClip[];
private var lastClipNum: int = -1;
function Awake() {
    // see if we've got menu music still playing
    var musicLoaded : GameObject = GameObject.Find("MusicLoaded");
    if (musicLoaded) {
        // kill menu music
        Destroy(gameObject);
        return;
    }
    gameObject.name = 'MusicLoaded';
    // make sure we survive going to different scenes
    DontDestroyOnLoad(gameObject);
}

function Start() {
	playClip(0);
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	while(true) {
		playRandomClip();
		yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	}
}

function playRandomClip() {
	var newClipNum = Random.Range(0, clips.length);
	while(newClipNum == lastClipNum) {
		newClipNum = Random.Range(0, clips.length);
	}
	playClip(newClipNum);
}

function playClip(num: int) {
	lastClipNum = num;
	GetComponent.<AudioSource>().clip = clips[num];
	GetComponent.<AudioSource>().Play();
}