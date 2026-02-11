# TTRPG-Project-cloudflarePage

## Overview
This project is about creating a simple website to share character sheets between my players and me. There are services like dnd beyond and other vtt(virtuel tabletop), or online tools like worldAnvil. But i do not need all the features of world Anvil and i only have about 10 users. So a free service on cloud flare should do the trick. 

## Features
### Functional features
- Log in
	- Can log in as either a player or a gm
- Different user experience. 

- GM features
	- Create different system specific items
		- share items with players
	- Create lore for a world
		- share lore with players
	- Manage sagas
		- manage player's sheets in the saga
		- Create invite link to players
	- Create new player code

- Player features
	- Create Characters in different systems
	- add a character to a saga
	- view lore specific to the saga
	- view a list of system specific items and features
### Non functional features

- Original content from the books can not be accessed with out permission from a GM who already owns a book.
- A new player can not just create an account a gm has to give them an new player code.
	- This so paid content has to be supported. By all on the internet
	- The Books need to be split into different part on the database so even if somehow someone gets into the database it will take work to find all the content for a specific book. 
	- All database actions have to go trough the workers that needs a cookie with an authentication code, gotten trough a login system. 

### Supported Systems
- **Break!!:** This will be the main focus right now
- **Vaesen:** Not yet
- **D&D:** at some point
- More will be added if i want to at some point
## Disclaimer
- **Fan-Made Project**: This is an unofficial, fan-made project created for personal use and convenience.
- **No Affiliation**: This project is not affiliated with, endorsed, sponsored, or approved by the systems the website support.
- **Personal Use Only**: This tool is intended for personal, non-commercial use only.
- **Support the Official Game**: This character sheet is a supplement to, not a replacement for, the official RPG rulebooks. We strongly encourage you to purchase the official books from the different systems
## Copyright
- Vaesen™ and all associated names, art, and concepts are trademarks and copyright © Fria Ligan AB. This tool uses names and concepts from the Vaesen RPG for the purpose of creating a functional character sheet.

## Acknowledgements
