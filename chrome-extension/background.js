// function resetDefaultSuggestion() {
// 	chrome.omnibox.setDefaultSuggestion({
// 		description: 'ArcGIS search %s'
// 	});
// }

// resetDefaultSuggestion();

// chrome.omnibox.onInputCancelled.addListener(function() {
// 	resetDefaultSuggestion();
// });

// function navigate(url) {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.update(tabs[0].id, {url: url});
// 	});
// }

// chrome.omnibox.onInputEntered.addListener(function(text) {
// 	navigate("https://esri-es.github.io/arcgis-search?search=" + text + "&amp;utm_source=chrome-extension");
// });

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
	// Encode user input for special characters , / ? : @ & = + $ #
	var newURL = "https://esri-es.github.io/arcgis-search?search=" + encodeURIComponent(text) + "&utm_source=chrome-extension";

	chrome.tabs.create({ url: newURL });
});