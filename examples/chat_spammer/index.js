const fs = require("fs");
const mineflayer = require("mineflayer");
let bot;

const config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

console.log(config.whitelist)
process.on('warning', e => console.warn(e.stack));

const main = () => {
  bot = mineflayer.createBot({
    host: "anarchy.6b6t.org",
    username: config.username,
    version: "1.19.4",
    skipValidation: true,
  });

  bot.once("login", async () => {
    bot.chat("/login " + config.password);
    // wait a second
    await bot.waitForTicks(40);
    while (True) {
      // select random message from config
      const message = config.messages[Math.floor(Math.random() * config.messages.length)];
      console.log(message);
      bot.chat(message);
      await bot.waitForTicks(config.delay);
    }
  });

  bot.on("error", (err) => {
    console.log(err);
    bot.end();
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
