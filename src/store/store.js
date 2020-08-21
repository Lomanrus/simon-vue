import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: 0,
    sequence: [],
    userSequence: [],
    started: false,
    difficultyLevels: ['easy', 'medium', 'hard'],
    difficulty: 'easy',
    gameState: 'waiting' // Для контроллера будем использовать 4 состояния: waiting, listening и gameover
  }
})
