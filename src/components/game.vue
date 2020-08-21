<template>
  <div class="game">
    <buttons-holder>
      <game-button :color="'#FF5643'" :buttonkey="0" :sound="'1.mp3'"></game-button>
      <game-button :color="'#1E90FF'" :buttonkey="1" :sound="'2.mp3'"></game-button>
      <game-button :color="'#FEEF33'" :buttonkey="2" :sound="'3.mp3'"></game-button>
      <game-button :color="'#BEDE15'" :buttonkey="3" :sound="'4.mp3'"></game-button>
    </buttons-holder>
    <game-over></game-over>
    <game-controls></game-controls>
  </div>
</template>

<script>
import buttonsHolder from '@/components/buttonsHolder'
import gameButton from '@/components/gameButton'
import gameControls from '@/components/gameControls'
import gameOver from '@/components/gameOver'

export default {
  name: 'game',
  components: {
    buttonsHolder,
    gameOver,
    gameButton,
    gameControls
  },
  methods: {
    play (sequence = []) {
      this.$store.state.gameState = 'waiting'
      // Вызываем метод click для каждой кнопки в последовательности
      sequence.forEach((n, i) => {
        setTimeout(() => {
          document.querySelectorAll('[data-key]')[n].click()
          if (i === sequence.length - 1) {
            this.$store.state.gameState = 'listening'
          }
        }, this.getTimeout() * i)
      })
    },
    levelUp () {
      this.$store.state.level++
      this.$store.state.sequence.push(this.generateNumber(0, 3))
      this.$store.state.userSequence = [...this.$store.state.sequence]
      this.play(this.$store.state.sequence)
    },
    // Генерирует случайное целое число
    generateNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    gameOver () {
      this.$store.state.gameState = 'gameover'
    },
    restart () {
      this.$store.state.gameState = 'waiting'
      this.$store.state.sequence = []
      this.$store.state.level = 0
      this.$store.state.userSequence = []
      setTimeout(() => {
        window.$game.levelUp()
      }, 500)
    },
    getTimeout () {
      switch (this.$store.state.difficulty) {
        case 'easy':
          return 1500
        case 'medium':
          return 1000
        case 'hard':
          return 400
      }
    }
  },
  mounted () {
    window.$game = this
  }
}
</script>

<style scoped>
  .game{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
