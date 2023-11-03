<template>
  <transition name="dialog">
    <div v-if="dialog.state.active" class="dialog">
      <div class="dialog-inner rounded shadow">
        <v-alert
          :title="dialog.state.title"
          :text="dialog.state.message"
          v-bind:="dialog.state.props"
          @click:close="dialog.cancel()"
        >
          <template v-if="dialog.state.form === AlertType.prompt">
            <div class="my-4">
              <v-text-field
                v-model="userInput"
                variant="outlined"
                :type="dialog.state.inputType"
                @keypress.enter="dialog.ok(userInput)"
              />
            </div>
          </template>
          <div
            class="flex justify-end mt-4"
            v-if="dialog.state.props && dialog.state.props.closable !== true"
          >
            <v-row>
              <v-col v-if="dialog.state.form !== AlertType.alert">
                <v-btn variant="tonal" @click="dialog.cancel()">
                  {{ dialog.state.cancelText }}
                </v-btn>
              </v-col>
              <v-spacer v-if="dialog.state.form !== AlertType.alert" />
              <v-col>
                <v-btn variant="tonal" @click="dialog.ok(userInput)">
                  {{ dialog.state.okText }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-alert>
      </div>
      <div class="dialog-bg" @click="dialog.cancel()"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { AlertType } from "@/enums/alert-type";
import dialog from "@/utils/dialog";
import { computed } from "vue";
import { ref } from "vue";
const userInput = ref();
</script>

<style>
.dialog {
  transition: 0.3s ease all;
}
.dialog-enter .dialog-bg {
  opacity: 0;
}

.dialog-leave-active .dialog-bg {
  opacity: 0;
}

.dialog-enter .dialog-inner,
.dialog-leave-active .dialog-inner {
  opacity: 0;
  transform: translateY(-50px) translateX(-50%);
}
.dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
}
.dialog-inner {
  background: white;
  will-change: contents;
  transform-origin: center;
  transition: all 0.3s ease-out;
  z-index: 2;
  /* padding: 20px; */
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 400px;
  opacity: 1;
}
</style>
