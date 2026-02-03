import { ref } from 'vue'
import { defineStore } from 'pinia'

export const matchScoreBoard = defineStore('counter', () => {
  const scoreboard = ref([
    {
      team : "CSK",
      score:[
    ['Ayush', 30, 19],
    ['Samson', 26, 14],
    ['Rutu', 39, 23],
    ['Drevis', 65, 36],
    ['MSD', 43, 17]
    ]},
  {
      team : "MI",
      score:[
    ['Rohit', 13, 19],
    ['SKY', 36, 14],
    ['Hardik', 19, 23],
    ['Santner', 55, 36],
    ['varma', 23, 7]
    ]}
  ]

  )

  const showScoreboard = ref(false)

  function toggleScoreboard() {
    showScoreboard.value = !showScoreboard.value
  }

  return { scoreboard, showScoreboard, toggleScoreboard }
})
