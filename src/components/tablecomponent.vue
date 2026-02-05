<script setup>
import { ref,watch } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  emptyText: {
    type: String,
    default: 'No data available'
  },
})
const emit=defineEmits(['delete-row','search-data'])
function deleterow(index){
  emit('delete-row',index)
}
const search =ref('')
watch(search, (value) => {
  emit('search-data', value)
})
</script>

<template>
  <div class="container">
    <div class="search-wrapper">
      <input
        type="text"
        v-model="search"
        placeholder="Search users..."
        class="search"
      />
    </div>

    <div class="table-wrapper">
      <table v-if="rows.length" class="customtable">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h">
              {{ h.toUpperCase() }}
            </th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, rIndex) in rows" :key="rIndex">
            <td v-for="h in headers" :key="h">
              {{ row[h] }}
            </td>
            <td>
              <button class="delete-btn" @click="deleterow(rIndex)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else class="empty">{{ emptyText }}</p>
    </div>
  </div>
</template>



<style scoped>
.container {
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.search-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.search {
  width: 260px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  transition: all 0.2s ease;
}

.search:focus {
  outline: none;
  border-color: #e4a095;
  box-shadow: 0 0 0 3px rgba(228, 160, 149, 0.2);
}

.table-wrapper {
  display: flex;
  justify-content: center;
}

.customtable {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.customtable th {
  padding: 14px;
  background: #e4a095;
  color: #222;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}

.customtable td {
  padding: 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.customtable tbody tr {
  transition: background 0.15s ease;
}

.customtable tbody tr:hover {
  background: #fafafa;
}

.delete-btn {
  background: #ff5c5c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s ease, transform 0.1s ease;
}

.delete-btn:hover {
  background: #e54848;
  transform: translateY(-1px);
}

.delete-btn:active {
  transform: translateY(0);
}

/* Empty state */
.empty {
  margin-top: 20px;
  color: #777;
  font-style: italic;
  text-align: center;
}

</style>
