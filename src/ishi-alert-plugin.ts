import { createApp, App } from "vue";
import { IshiAlert } from "@/components";
// Create a Vue 3 plugin
const IshiAlertPlugin = {
  install: (app: App) => {
    // Register the Dialog component globally
    app.component("IshiAlert", IshiAlert);
  },
};
export default IshiAlertPlugin;
