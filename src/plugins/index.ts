/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts
 */

// Plugins
import vuetify from "./vuetify";
import IshiAlertPlugin from "@/ishi-alert-plugin";

export function registerPlugins(app) {
  app.use(vuetify).use(IshiAlertPlugin);
}
