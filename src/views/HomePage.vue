<script setup>
// import {matchScoreBoard} from '@/stores/score'
// const match = matchScoreBoard()
</script>
<template>
 <div class="score">
<h3>CSK VS MI</h3>
<h4>
Csk <strong>own</strong> by 23 runs
</h4>
<button @click="match.toggleScoreboard">Scoreboard</button>
<div v-if="match.showScoreboard" class="tables">
  <div v-for="(team, i) in match.scoreboard" :key="i" class="table-box">
    <h3 class="team-title">{{ team.team }} Innings</h3>

    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Runs</th>
          <th>Balls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in team.score" :key="index">
          <!-- {{ team.score }} -->
          <td>{{ player[0] }}</td>
          <td>{{ player[1] }}</td>
          <td>{{ player[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</template>

<style >
.tables {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.table-box {
  flex: 1;
  min-width: 320px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.team-title {
  text-align: center;
  margin-bottom: 12px;
  color: #f5c400;
}

button {
  margin: 12px 0;
  padding: 10px 18px;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  background-color: #f5c400;
  color: #000;
  cursor: pointer;
}

button:hover {
  background-color: #ffd700;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 6px;
}

th {
  background-color: #f5c400;
  color: #000;
}

th,
td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

h3,
h4 {
  color: #f5c400;
}

</style>