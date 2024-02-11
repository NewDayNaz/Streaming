## What is this?
This repository contains scripts and web pages for integrating various functionalities with OBS Studio. The project is aimed at enhancing live streaming workflows by providing seamless integration with external tools and services.

Folders:
1. LowerThirds
This folder contains a WebSocket server and a web page designed to facilitate communication between the Companion stream deck app and OBS Studio.
Users of the Companion app can send command messages to control an animated lower third box rendered into OBS with a transparent background.
2. Misc Scripts
This folder houses miscellaneous PowerShell scripts aimed at automating various tasks related to stream management.
Scripts include functionality for deleting stream archive recordings older than a specified number of days, helping to keep storage organized and efficient.
3. ProWebStage-LowerThird
Within this folder lies a web page that connects to ProPresenter's Stage Display WebSocket API.
The web page renders the current slide's text as a transparent lower third display, intended for use in OBS Studio.
This integration enables seamless incorporation of ProPresenter content into live streams.
