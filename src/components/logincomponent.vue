<script setup>

const credentials = defineModel()
const emit = defineEmits(['login'])
//variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal"

</script>
<<template>
  <v-card variant="elevated" width="400" class="pa-5">
    <v-card-title class="text-center">
      Login
    </v-card-title>
    <v-text-field
      label="Email"
      v-model="credentials.email"
    />
    <v-text-field
      label="Password"
      type="password"
      v-model="credentials.password"
    />
    <v-btn
      color="primary"
      block
      class="mt-4"
      @click="emit('login')"
    >
      Login
    </v-btn>
  </v-card>
</template>