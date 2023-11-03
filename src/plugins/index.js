/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import IshiDialogPlugin from "@/ishi-alert-plugin";

export function registerPlugins(app) {
  app.use(vuetify).use(IshiDialogPlugin);
}
