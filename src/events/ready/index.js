import { Events } from "discord.js";

export const event = {
  name: Events.ClientReady,
  once: true,
};

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
export const action = (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
};
