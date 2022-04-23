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

## The future is coming, prepare
Vapor 2.0.8 has 2 bug-free WIP releases (don't try them though) and the official release of Vapor 2.0.8 is almost here. With 2.0.8 WIP Updates being created and pushed overnight, issuess and pull requests being made every minute, bugs being fixed, Beta/WIP Versions being tested, and patch C for 2.0.7 in the Almost-developed-completely stage, 2.0.8 will be here before you know it!
If you are on 2.0.1 to 2.0.3, upgrade to 2.0.3 PATCH to provide compatibility,
2.0.3 to 2.0.6 should at least ugrade to 2.0.7, but 2.0.7b is recommended.
WARNING: If you do not choose to upgrade from 2.0.3 Patch to any version of 2.0.7, you will have to re-sign in after the 2.0.8 Offical Update!

## Tokens are here
Vapor 2.0.7a and newer use access tokens (user id, access token, device id) set. 2.0.6 and older, however use PlainTextPassword (username, password, device id) sets. Since 2.0.7a, tokens have been in use for extra security.

`2.0.1-2.0.6 - PlainText` V 2.0.1 to 2.0.6 use the same PlainTextPassword system (100% compatible)
`2.0.7x - Token Migration` Any build of 2.0.7 will migrate PlainTextPassword sets to AccessTokens sets.
`2.0.8+ - PTP Destruction` If "Session.json" represents a PlainTextPassword set, it will be destroyed before the app has started.

## 2.0.7 Patch C - Everything you need to know
Vapor 2.0.7 Patch C, more commonly known as 2.0.7c, will be coming out in the near future before 2.0.8 Initial Release.
Here's everything you need to know:

* Better Calls - Calling PFP will be resized, rounded, and styled blue
* Better security - A boot script will auto-migrate PlainTextPassword sets to AccessToken sets on each bootup


## 2.0.8 Offical Command List (Leaked!)
Full list of upcoming commands in Vapor 2.0.8 (Leaked!)
* `/me <text>` - Describe yourself.
* `/invite <userid>` - invite a user to the current room
* `/kick <userid>` - kick user from the current room
* `/ban <userid>` - ban user from the current room
* `/unban <userid>` - unban user from the current room
* `/upload <path>` - uploads and sends a file
* `/uploadimage <path>` - uploads and sends a file as an image
* `/call` - starts a voice call
* `/videocall` - starts a voice call and enables your camera
* `/plain <content>` - doesn't format your messagge
* `/html <content>` - sends HTML formatted content

## Rumors: with great power comes great compatibility
All versions of Vapor (2.0.1 to 2.0.8 WIP V2) run on Windows96 V3 AND V2.
But none work on V1.
With the release of 2.0.8, there may **OR MAY NOT** be an initial release (1.0.0) for a V1-targeted version of Vapor.


## SSO: Why it's not in Vapor and why it won't be in 2.0.8
If you sign in to matrix via Google, Facebook, or anything else, you won't be able to log into your account on Vapor.
Here is a list of reasons why this won't work:

1. The trackers - right when you add SSO to your app, Google, Microsoft, and Facebook will start tracking you. We don't want to expose user data, and we don't sell users data because we don't even collect it. Unlike most services with SSO sign ins.
2. Google.com don't support iframes - Vapor is a Matrix Client for Windows 96, which is a website. It's default browser, Internet Exploder, is an iframe browser, meaning sites are embedded in iframes. Most major companies don't let their sites be embedded in iframes, specifically the login page.
3. APIs are huge - The Matrix API itself is already big enough - SSO APIs could make us unable to publish updates due to their size.

## Rumors: Stop-Motion Screen Sharing
Hopefully a feature coming out in 2.0.8, a 2.0.8 Patch, or (at the latest) 2.0.9, a new feature will be coming out (hopefully): screen sharing.
The difference: it shares only your Windows96 screen and audio (iframes don't render, video or audio) through matrix.

## Currently Working On:
Here are Vapor features we are working on:
* Displaying Video Feeds - and Not Osciallating audio!
* the new and improved command system
* better security
* the next 2.0.8 WIP Version
* a bunch of new, fancy commands

## Auto-update bug
The CurrentVersiob JSON file is not formatted properly. When Updating to 2.0.7b, go to `C:/user/appdata/C:/user/appdata`, select "Vapor96", copy it, and paste it into `C:/user/appdata`

## That's all for now
I have ran out of things to write except in a 2.0.8 WIP Update, you'll be able to play uploaded audio files (maybe)
