const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log(`Bot online como ${client.user.tag}`);
});

// verifica se o token existe (evita crash silencioso)
if (!process.env.DISCORD_TOKEN) {
  console.error("ERRO: DISCORD_TOKEN não encontrado nas variáveis de ambiente");
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN);
