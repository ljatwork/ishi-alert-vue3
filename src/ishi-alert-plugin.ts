import { createApp, App } from "vue";
import { IshiDialog } from "@/components";
// Create a Vue 3 plugin
const IshiDialogPlugin = {
  install: (app: App) => {
    // Register the Dialog component globally
    app.component("IshiDialog", IshiDialog);
  },
};
export default IshiDialogPlugin;
