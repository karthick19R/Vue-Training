<script setup>
const props = defineProps({
  header: {
    type: Array,
    required: true
  },
  values: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="table">
    <table class="customtable">
      <thead>
        <tr>
          <th v-for="(h, i) in header" :key="i">
            {{ h }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, rIndex) in values" :key="rIndex">
          <td v-for="(data, cIndex) in row" :key="cIndex">
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.customtable {
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  background: #ffffff;
  border: 1px solid #e5e7eb;
}
.customtable th {
  padding: 10px;
  text-align: left;
  font-weight: 600;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}

.table td {
  padding: 10px;
  border-bottom: 1px solid #e5e7eb;
}

.customtable tr:last-child td {
  border-bottom: none;
}
.customtable tbody tr:hover {
  background: #f9fafb;
}
</style>
