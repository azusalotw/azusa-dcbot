import { SlashCommandBuilder } from "discord.js";

export default {
  command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ping command"),
  action: async (content) => {
    content.reply("pong!");
  },
};
