<template>
  <div class="buttons-holder">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'buttonsHolder'
}
</script>

<style scoped lang="scss">
  .buttons-holder{
    display: grid;
    grid-template-rows: repeat(2,auto);
    grid-template-columns: repeat(2,auto);
    height: 500px;
    width: 500px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
