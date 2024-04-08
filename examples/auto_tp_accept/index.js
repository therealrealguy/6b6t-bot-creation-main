const fs = require("fs");
const mineflayer = require("mineflayer");
let bot;

const config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));
process.on('warning', e => console.warn(e.stack));

// Specify the file path for logging
const logFilePath = "./bot_log.txt";

// Function to log messages to a file
const logMessageToFile = (message) => {
  fs.appendFileSync(logFilePath, `${new Date().toLocaleString()}: ${message}\n`, "utf-8");
};

const color = {
  "green": "\x1b[32m",
};

const main = () => {
  bot = mineflayer.createBot({
    host: "anarchy.6b6t.org",
    username: config.username || "Advikbot",
    version: "1.19.4",
    skipValidation: true,
  });

  bot.once("login", async () => {
    bot.chat(`/login ${config.password}`);
  });

  bot.on("error", (err) => {
    console.log(err);
    logMessageToFile(`Error: ${err}`);
    bot.end();
  });

  bot.on("chat", (message, username) => {
    if (message === '!command') {
      bot.chat('command');
    }
  });

  bot.on("messagestr", (message) => {
    console.log(message);
    logMessageToFile(message);
  });

  bot.on("message", (message) => {
    const messageString = message.toString();
    console.log(messageString);

    for (const user of config.whitelist) {
      if (messageString === `${user} wants to teleport to you.`) {
        console.log(color.green + `${user} wants to teleport to you.` + color.reset);
        bot.chat(`/tpy ${user}`);
      }
    }
  });

  bot.on("kicked", (err) => {
    console.log(err);
    bot.end();
  });

  bot.on("end", () => {
    bot.removeAllListeners();
    setTimeout(main, 5000);
  });
};

main();