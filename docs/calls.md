# How to Use WebRTC Calling

## Starting a call

1. Open the room you want to start a call in.
2. Run the command `/call` to start a voice call, or `/videocall` to start a video call.

## Muting Yourself
To mute or unmute yourself, click the microphone icon while in a call.

## Screen Sharing

### Sharing your entire desktop
1. Connect to a call.
2. Select the monitor icon.
3. Choose `Windows96` in the list.
4. Select the `share` button.

### Sharing a specific windo
1. Connect to call call.
2. Select the monitor icon.
3. Click on the `Windows` tab.
4. Choose the window you want to share.
5. Click the `share` button.

To disconnect from a screen share, click the monitor icon again.

## Hold Music
Hold music is played whenever you are put on hold. Hold music is stopped whenever you are taken off of hold or the call ends.

### Changing the Hold Music
1. Open the Windows96 Explorer.
2. Navigate to `C:/system/program-files/VaporMrx`
3. Delete `holdplease.mp3`.
4. Upload any audio file (it doesn't have to be mp3)
5. Rename it to `holdplease.mp3`

To remove the hold music, replace `holdplease.mp3` with a silent mp3.

## Incoming Calls
When you recieve calls, a bar will appear at the top of your screen.
There are two buttons: answer call (green) and decline call (red).

### Ringtone
The ringtone is played every time you recieve a call. It stops when the call is declined, ended, or answered.

#### Changing the ringtone
1. Follow steps 1 and 2 for "Changing the Hold Music"
2. Delete `ring.wav`
3. Upload an audio file and rename it to `ring.wav`

# Limitations
There is only one limitation:
Vapor to Vapor calls do not work. This is something in the Matrix JS SDK that causes the peer id to be `null`.
