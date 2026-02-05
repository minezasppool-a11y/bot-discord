const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot online!");
});

client.login("MTQ2OTEwODAwOTAxNDY2MTMyNQ.GI8Vt0.GVnp9d3AX48OZkJoM56oRqRpgLpH9S6I1MlxBc");
