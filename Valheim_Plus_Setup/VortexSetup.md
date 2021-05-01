# Valheim

## BGIS The Next Generation Modded

### Prerequisites

- Valheim (Steam)
- NexusMods account
  - https://www.nexusmods.com/
- Vortex Mod Manager from NexusMods
  - https://www.nexusmods.com/site/mods/1?tab=files&file_id=1016

### Steps

1. Log into Vortex using your NexusMods account.
1. Select __Games__ from the right-hand sidebar
1. Search for __Valheim__ in the top bar
1. Click the Checkmark, you will be prompted to download an extension.
1. Press __Download__ and restart Vortex.
1. Click __Scan for Games__ button on the bottom right
1. Enter your Steam library path (eg. ......\Steam\steamapps\common)
1. If Valheim is not found, add game manually by searching the Unmanaged list,  press (+) and provide the fpath.

This this point Valheim should be listed as a managed game.  If it's not appearing, the Extension may not have been installed successfully.

### Config

You may wish to change where Mods are stored (default is `\{UserData}\{GAME}`)

1. Select Settings
2. Select MODS Tab
3. Change `Mod Staging Folder (Valheim)` to wherever you want MODS to go that doesn't kill your precious OS drive free space.

## Mod Installation

Binding Vortex as a handler for NexusMods is strongly recommended.

### DIY ModPack Steps

1. Select `MODS` on the sidebar in Vortex.
1. Switch to a browser and being locating mods you like on NexusMods.com
1. On each mod you're interested in, press the Vortex button on the Mod's information page.
1. Wait for download page to load, then select Slow Download.
1. Mod should appear to download in Vortex.
1. Repeat as neccessary until you have a set of mods you want to play with.

> :warning: At this point the mods only exist in a set of ZIP files, they aren't yet staged or installed yet.

### Engaging Mods

1. Select all of the mods in your list with `CTRL+A`.
1. Press the `Install` button that appears at the bottom of the list.
1. Your mods should be extracted and staged for deployment.
1. Press `Enable` on all, or a selection you wish to try
1. Finally, press `Deploy` when all your desired changes are completed.

> :warning: Vortex will prompt for Administrative control to link all of the staged & enabled mods into Valheim.

### Ready to Play

* Press the `(>)` icon in the Valheim picture in the upper right to launch the game.

If the mods were successfully loaded, `BepInEx 5.x.x.x. - Valheim` console window should appear along with the game, and you should see log messages like this showing all of the mods injecting & loading.

```
[Message:   BepInEx] Chainloader ready
[Message:   BepInEx] Chainloader started
[Info   :   BepInEx] 16 plugins to load
[Info   :   BepInEx] Loading [Craft From Containers 2.1.3]
```