# Vapor
#### a simple, easy to use Matrix client for Windows96

Welcome to the offical repo of Vapor, an easy-to-use Matrix Client for Windows96!

## How to install:
1. Download the latest version of Vapor.
2. Put in the "C:/user/bin" folder (create it if it isn't already there)
3. Make sure it is titled "mrx96" (at the time of writing).
4. Run "mrx96" either via the run box or terminal.

## Compatibility
This has been tested on different versions of Windows96.
* It will run on V2 and higher.
* It will NOT run on V1 and anything older.

## Auto-Update Checker
In order to get the latest version of Vapor, you do NOT need to reinstall it.
Vapor is equipped with an automatic update-checker that runs when you start the app,
and every 2 minutes until the window is closed.
A notification will appear if a software update is availible, and you will be able to update now or dismiss it until you close the app.

## Features in 2.0.2
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

## Commands in 2.0.2
Here is a list of commands you can currently use in Vapor:

`/plain <text>` Sends a message as plain text (no formatting)

`/html <content>` Sends a message formatted as HTML instead of markdown.

`/me <action>` Describe yourself doing something, eg /me eats pizza.

## Known Bugs in 2.0.2
This is a list of known bugs in Vapor 2.0.2. We are working hard to try to fix them:

### Visited Links and Message Bubbles: Similar Colors
This may not seem like a problem, but on certain displays that can only show limited colors, you can't even see the links at all.

### Leaving and Rejoining Breaks Rooms List
If you are in a room, leave, and rejoin the room, it will not reappear in the rooms list. This bug should be fixed, but no guarentees.


If there are any other bugs, you may report them in "Issues".


## Important Information and Warnings
This applies to all versions. You need to have the file located in `C:/user/bin` unless otherwise specified by the README for that version.
If you do not name it the correct name, the old version will NOT be deleted. If you have another file with the intended name,
that file will be deleted during updates, or overwritten if going to the same path.
