<template>
  <div class="game-button">
    <button
      ref="btn"
      :style="{
        backgroundColor:color,
    }"
      @click="click"
      :data-key="buttonkey"
      :disabled="this.$store.state.gameState === 'gameover'"
    >
    </button>
  </div>
</template>

<script>
export default {
  name: 'gameButton',
  props: [
    'color',
    'sound',
    'buttonkey'
  ],
  methods: {
    // Не обрабатываем нажатия пока не проиграет последовательность
    click ($event) {
      if (this.$store.state.gameState !== 'listening' && (!$event || $event.isTrusted)) {
      } else {
        const $btn = this.$refs.btn
        $btn.style.opacity = 1
        setTimeout(() => {
          $btn.style.opacity = 0.6
        }, 200)
        this.playSound(require(`@/assets/sound/${this.sound}`))
        this.checkSequence(this.buttonkey)
      }
    },
    playSound (sound) {
      const audio = new Audio(sound)
      audio.play()
    },
    checkSequence (key) {
      if (this.$store.state.gameState === 'listening') {
        const expectedKey = this.$store.state.userSequence.shift()
        if (key === expectedKey) {
          if (!this.$store.state.userSequence.length) {
            setTimeout(() => {
              if (this.$store.state.gameState !== 'gameover') {
                this.$store.state.gameState = 'waiting'
                window.$game.levelUp()
              }
            }, 1000)
          }
        } else {
          this.$store.state.gameState = 'gameover'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .game-button{
    button{
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0.6;
    }
  }
</style>
