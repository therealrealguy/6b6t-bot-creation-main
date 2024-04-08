# 100% uptime 6b6t bot

This repo serves as a tutorial for developers to create a [6b6t](https://www.6b6t.org) bot using the template provided. We will cover everything from bot creation to hosting.

<sub>Please star ⭐</sub>

## Contents

- [Bot creation](#creation)
  - [Option 1 (custom)](#option1)
  - [Option 2 (preset)](#option2)
- [Running locally](#local)
- [Bot hosting](#hosting)

<a name="creation"></a>
## Creation
1. The first step is to clone this repo by running the command
```shell
git clone git:github.com/ByroBuff/6b6t-bot-template.git
```
This will download the all of the code into a folder.

2. You also need to download and install [Nodejs](https://www.nodejs.org)

<a name="option1"></a>
#### Option 1: Custom code
1. To create your bot you can navigate to the template folder and just copy the 2 files `config.json` and `index.js` to your working directory.
2. in your working directory you need to run the following command to download mineflayer
```shell
npm i mineflayer
```
Keep in mind, this will only install mineflayer in the current folder your command prompt is in. Make sure you have navigated to the folder with 'index.js'

<a name="option2"></a>
#### Option 2: Preset code
1. Another option is to use an example bot from the examples folder. Navigate to the examples folder and click on which ever bot you want to use and copy the 2 files `config.json` and `index.js`
2. in your working directory you need to run the following command to download mineflayer
```shell
npm i mineflayer
```
Keep in mind, this will only install mineflayer in the current folder your command prompt is in. Make sure you have navigated to the folder with 'index.js'

<a name="local"></a>
## Running locally
You can run your bot locally on your computer by opening a command prompt in the folder with all of your code and running the following command:
```
node index.js
```

<a name="hosting"></a>
## Hosting
The best hosting service for 24/7 6b6t bots is [Endelon hosting](https://my.endelon-hosting.de/)

1. Visit [Endelon hosting](https://my.endelon-hosting.de/) and create an account
2. Press the green `create` button and select server
3. Name your server and select javascript runtime
4. In a command prompt on your local machine under the directory with all your code run the following command:
```
npm init
```
6. Navigate to the files tab in your server on Endelon hosting
7. Import the following 4 files along with any more you may have added
```
index.js
config.json
package.json
package-lock.json
```

8. Start your bot by pressing the green start button in your dashboard
