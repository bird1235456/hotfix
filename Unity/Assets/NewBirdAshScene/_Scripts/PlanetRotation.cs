﻿using UnityEngine;
using System.Collections;

public class PlanetRotation : MonoBehaviour {

	public float planetSpeedRotation = 1.0f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		transform.Rotate(-Vector3.forward * Time.deltaTime * planetSpeedRotation);
	}
}
