<template>
  <v-card class="mx-auto">
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">Demo</div>
      </div>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">await dialog.alert('This is an alert')</pre>
            <v-btn class="primary" @click="showAlertDialog()">Alert</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">
await dialog.title('Title').alert('This is an alert')</pre
            >
            <v-btn class="primary" @click="showAlertTitleDialog()"
              >Title Alert</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">
this.answer = await dialog
.title('User')
.prompt("What's your name?")</pre
            >
            <v-btn class="primary" @click="onShowInput()">Prompt</v-btn>
          </div>
          <div v-if="answer">
            <p>{{ answer }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">
this.confirmed = await dialog
.okText('Yes')
.cancelText('No')
.confirm('Are you sure?')</pre
            >
            <v-btn class="primary" @click="onShowConfirm()">Confirm</v-btn>
          </div>
          <div v-if="confirmed">
            <p>{{ confirmed }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">
  await dialog
    .props({
      border: "start",
      borderColor: "deep-purple accent-4",
      elevation: "2",
      variant: "tonal",
    })
  .alert("This is Vuetify alert model");</pre
            >
            <v-btn class="primary" @click="onShowAlertProps()"
              >Vuetify Alert props</v-btn
            >
          </div>
          <div v-if="confirmed">
            <p>{{ confirmed }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <pre class="pre">
  await dialog
    .props({
      border: "start",
      borderColor: "deep-purple accent-4",
      elevation: "2",
      closable: true,
    })
  .alert("This is Vuetify alert model");</pre
            >
            <v-btn class="primary" @click="onShowAlertClosableProps()"
              >Vuetify Alert props</v-btn
            >
          </div>
          <div v-if="confirmed">
            <p>{{ confirmed }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
  <IshiDialog />
  <v-row align="center" justify="center"> </v-row>
</template>

<script setup>
import dialog from "@/utils/dialog";
import { IshiDialog } from "@/components";
import { ref } from "vue";

const showAlertTitleDialog = async () => {
  await dialog.title("Title").alert("This is an alert");
};

const showAlertDialog = async () => {
  await dialog.alert("This is an alert");
};

const answer = ref();
const onShowInput = async () => {
  answer.value = await dialog.title("User").prompt("What's your name?");
  console.log(answer.value);
};

const confirmed = ref();
const onShowConfirm = async () => {
  await dialog
    .okText("Yes")
    .cancelText("No")
    .confirm("Are you sure?")
    .then((value) => {
      confirmed.value = value;
    });
};
const onShowAlertProps = async () => {
  await dialog
    .props({
      border: "start",
      borderColor: "deep-purple accent-4",
      elevation: "2",
      variant: "tonal",
    })
    .alert("This is Vuetify alert model");
};

const onShowAlertClosableProps = async () => {
  await dialog
    .props({
      border: "start",
      borderColor: "deep-purple accent-4",
      elevation: "2",
      closable: true,
    })
    .alert("This is Vuetify alert model binded to alert close button");
};
</script>

<style scoped>
:deep(.pre) {
  color: #e2e8f0;
  background-color: #2d3748;
  overflow-x: auto;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding: 0.8571429em 1.1428571em;
  overflow-x: scroll;
}
</style>
