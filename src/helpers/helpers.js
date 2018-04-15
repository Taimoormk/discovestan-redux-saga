// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Dimensions,  } from 'react-native';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

const { height, width } = Dimensions.get('window');

export function contentText(str) {
  var baseURL = `src="https://discovestan.azurewebsites.net/wp`;
  return str.replace(/src="[/]wp/gm, baseURL).replace(/(\r\n|\n|\r)/gm, "");
}

export function contentURL(str) {
  var baseURL = `https://discovestan.azurewebsites.net/wp`;
  return str.replace(/[/]wp/gm, baseURL);
}

export function reduceStringLength(str) {
  return str.split(/\s+/).slice(0, 30).join(" ")+"...";
}