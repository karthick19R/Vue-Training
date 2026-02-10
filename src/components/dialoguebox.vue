<script setup>
const value = defineModel({
  type: Boolean,
  default: false
})

const emit = defineEmits(['yes', 'no'])

function onYes() {
  emit('yes')
  value.value = false
}

function onNo() {
  emit('no')
  value.value = false
}
</script>

<template>
  <v-dialog v-model="value" max-width="400" persistent>
    <v-card>
      <v-card-title>
        <slot name="title">Confirmation</slot>
      </v-card-title>

      <v-card-text>
        <slot name="message">
          Please confirm your activity
        </slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="onNo">No</v-btn>
        <v-btn color="primary" @click="onYes">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
