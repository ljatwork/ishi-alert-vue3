import { reactive } from "vue";
import { AlertType } from "@/enums/alert-type";
import { VAlert } from "vuetify/components/VAlert";

const state = reactive({
  form: AlertType.alert,
  active: false,
  message: "",
  title: "",
  okText: "Ok",
  cancelText: "Cancel",
  inputType: "text",
  props: { closable: false },
});

//-----------------------------------
// Private Methods
//-----------------------------------
let close;
const dialogPromise = () => new Promise((resolve) => (close = resolve));
const open = (message) => {
  state.message = message;
  state.active = true;
  return dialogPromise();
};
const reset = () => {
  state.active = false;
  state.message = "";
  state.okText = "Ok";
  state.cancelText = "Cancel";
  state.inputType = "text";
  state.title = "";
  state.form = AlertType.alert;
  state.props = { closable: false };
};

//-----------------------------------
// Public interface
//-----------------------------------

const dialog = {
  get state() {
    return state;
  },
  alert(message: string) {
    state.form = AlertType.alert;
    return open(message);
  },
  confirm(message: string) {
    state.form = AlertType.confirm;
    return open(message);
  },
  prompt(message: string) {
    state.form = AlertType.prompt;
    return open(message);
  },
  cancel() {
    close(false);
    reset();
  },
  ok(input: any) {
    input = state.form === AlertType.prompt ? input : true;
    close(input);
    reset();
  },
  title(title: string) {
    state.title = title;
    return this;
  },
  okText(text: string) {
    state.okText = text;
    return this;
  },

  cancelText(text: string) {
    state.cancelText = text;
    return this;
  },
  inputType(type: string) {
    state.inputType = type;
    return this;
  },
  props(props: any) {
    state.props = props;
    return this;
  },
};

export default dialog;
