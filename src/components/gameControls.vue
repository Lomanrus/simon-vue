<template>
  <div class="controls-wrapper">
    <div class="level">Уровень: {{ this.$store.state.level }}</div>
    <select name="difficulty" id="difficulty-select" v-model="$store.state.difficulty">
      <option v-for="level of this.$store.state.difficultyLevels" :key="level.id">{{ level }}</option>
    </select>
    <button @click="gameStart">Старт</button>
  </div>
</template>

<script>
export default {
  name: 'gameControls',
  methods: {
    gameStart () {
      setTimeout(() => {
        this.restartGame()
      }, 500)
    },
    restartGame () {
      if (!this.$store.state.started) {
        this.started = true
        window.$game.restart()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .controls-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    .level{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    }
    #difficulty-select{
    display: block;
    margin-bottom: 10px;
      font-size: 20px;
    }
    button{
      font-size: 20px;
      padding: 20px 40px;
      font-weight: bold;
    }
  }
</style>
