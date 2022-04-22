# Vapor
#### a simple, easy to use Matrix client for Windows96

Welcome to the offical repo of Vapor, an easy-to-use Matrix Client for Windows96!

## How to install:
1. Download the latest version of Vapor.
2. Put in the "C:/user/bin" folder (create it if it isn't already there)
3. Make sure it is titled "vapor96" (at the time of writing).
4. Run "vapor96" either via the run box or terminal.

## Compatibility
This has been tested on different versions of Windows96.
* It will run on V2 and higher.
* It will NOT run on V1 and anything older.

## Auto-Update Checker
In order to get the latest version of Vapor, you do NOT need to reinstall it.
Vapor is equipped with an automatic update-checker that runs when you start the app,
and every 2 minutes until the window is closed.
A notification will appear if a software update is availible, and you will be able to update now or dismiss it until you close the app.

## Features in 2.0.5
* Messaging - It's a Matrix Client.
* Rooms - Lists your rooms. You can create, rename, leave, or join rooms.
* CleanHTML - 2 functions that prevent viruses from being spread via markdown and html. Uses Vapor CleanHtml 1.0.0.
* Link Support - All links will open in Internet Exploder when clicked on, for the exception of room joining links.
* Join Room by Link - Clicking on a link to a room will prompt you if you would like to join that room.
* PFP - Profile pictures are showed next to the message.
* Read "/me" - the "/me" command renders differently than messages, (kinda) resembling hangouts "/me"
* Clean sign-in/sign-out - Transistions smoothly when signing in or out by using the same window the entire time
* Markdown - you can use markdown in your messages. All markdown/HTML is cleaned before it is sent to add extra protection for other clients.
* Commands - When you are typing, a "/" at the beginning will show a list of commands. From there you can filter the commands by name.
* XSS Protection - from Cross Site Scripting AND Cross Site Styling
* Easy migration features - software updates can now rename and move folders, bootscripts, and more!
* Upload Files - use the "/upload" command to directly upload files from your computer!
* Upload PFP - Go to "File > Upload PFP" to set a profile picture from your computer!
* File and Image Rendering - Properly render files and images (and download them too!).

## Commands in 2.0.5
Here is a list of commands you can currently use in Vapor:

`/plain <text>` Sends a message as plain text (no formatting)

`/html <content>` Sends a message formatted as HTML instead of markdown.

`/me <action>` Describe yourself doing something, eg /me eats pizza.

`/ban <userid>` Bans a user from the room.

`/unban <userid>` Unbans a user from the room.

`/kick <userid>` Kicks a user out of the room.

`/upload <fullpath>` (new!) Uploads a file from your computer into a room.

## Known Bugs in 2.0.5

Profile picture update event doesn't fire.

If there are any other bugs, you may report them in "Issues".


## ChangeLog - The Latest and Greatest Features in Vapor 2.0.5

* Fixed `/upload` - actually uploads to the room you're in
* PFP Upload - upload an image from your computer to set as your profile picture
* CSS Exploits Fixed - prevents inline CSS from being exploited
* Show uploaded images - view images that have been uploaded
* File downloads - click on the name of a file to download it
* Download images - right click > save image to download the image


## Important Information and Warnings
This applies to all versions. You need to have the file located in `C:/user/bin` unless otherwise specified by the README for that version.
If you do not name it the correct name, the old version will NOT be deleted. If you have another file with the intended name,
that file will be deleted during updates, or overwritten if going to the same path.
