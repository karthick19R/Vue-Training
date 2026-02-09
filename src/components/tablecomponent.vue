<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  headers: Array,
  rows: Array,
  modelValue: String,
  emptyText: {
    type: String,
    default: 'No data available'
  },
  rowsPerPage: {
    type: Number,
    default: 5
  }
})

const emit = defineEmits(['delete-row', 'update:modelValue'])
const currentpage = ref(1)
watch(
  () => {
    currentpage.value = 1
  }
)
const pagedRows = computed(() => {
  const start = (currentpage.value - 1) * props.rowsPerPage
  const end = start + props.rowsPerPage
  return props.rows.slice(start, end)
})
const totalPages = computed(() =>
  Math.ceil(props.rows.length / props.rowsPerPage)
)
// function deleterow(rIndex) {
//   const confirmDelete = window.confirm(
//     'Are you sure you want to delete this record?'
//   )
//   if (!confirmDelete) return
//   const globalIndex =
//     (currentpage.value - 1) * props.rowsPerPage + rIndex

//   emit('delete-row', globalIndex)
// }

function nextPage() {
  if (currentpage.value < totalPages.value) {
    currentpage.value++
  }
}
function previousPage() {
  if (currentpage.value > 1) {
    currentpage.value--
  }
}
const dataAvailable = computed(() => props.rows.length > 0)

</script>
<template>
  <div class="container">
    <div class="search-wrapper">
       <input
    type="text"
    placeholder="Search..."
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :class="{hidden :!dataAvailable}"
  />
    </div>
    <div class="table-wrapper">
      <div v-if="rows.length" >
      <table class="customtable">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h">
              {{ h.toUpperCase() }}
            </th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(Data, rIndex) in pagedRows" :key="rIndex">
            <td v-for="h in headers" :key="h">
              {{ Data[h] }}
            </td>
            <td> 
                <slot name="delete" :index="rIndex"></slot>
            </td>
          </tr>
        </tbody>
        
      </table>

      <div class="navbtn"> 
        <button @click="previousPage" :disabled="currentpage === 1">Previous Page</button>
        <button @click="nextPage" :disabled="currentpage === totalPages">Next Page</button>
        
        </div>
      </div>
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
.navbtn{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
}
button {
  background: #ff5c5c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin: auto;
  font-size: 13px;
  transition: background 0.2s ease, transform 0.1s ease;
}
.hidden {
  display: none;
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
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}
td{
  color: #222;
}
.customtable td {
  padding: 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
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
.empty {
  margin-top: 20px;
  color: #777;
  font-style: italic;
  text-align: center;
}
</style>
