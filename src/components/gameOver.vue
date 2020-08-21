<template>
  <div class="gameover-wrapper" v-if="this.$store.state.gameState === 'gameover'">
    <h2>Игра окончена</h2>
    <button @click="gameReset">Повторить</button>
  </div>
</template>

<script>
export default {
  name: 'gameOver',
  methods: {
    gameReset () {
      window.$game.restart()
    }
  }
}
</script>

<style scoped lang="scss">
  .gameover-wrapper{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255,255,255,0.3);
    button{
      padding: 20px 40px;
      font-size: 20px;
    }
  }
</style>
