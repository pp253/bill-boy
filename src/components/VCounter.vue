<template>
  <div class="counter">
    <div class="counter-wrapper layout">
      <div class="btn flex xs3" @click="decrement">
        -
      </div>
      <div class="label flex xs6">{{ label }}</div>
      <div class="btn flex xs3" @click="increment">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCounter',
  props: {
    label: { type: String, default: '' },
    value: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    min: { type: Number, default: 0 }
  },
  methods: {
    increment() {
      if (this.value < this.max) {
        this.$emit('input', this.value + 1)
        this.$emit('increment', this.value + 1)
      }
    },
    decrement() {
      if (this.value > this.min) {
        this.$emit('input', this.value - 1)
        this.$emit('decrement', this.value - 1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$height: 54px;

.counter {
  width: 100%;
  user-select: none;

  .counter-wrapper {
    box-sizing: border-box;
    width: 100%;
    color: #333;

    .label {
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      line-height: $height;
      font-weight: bold;
      text-align: center;
      font-size: 24px;
    }

    .btn {
      line-height: $height;
      font-weight: bold;
      text-align: center;
      font-size: 24px;
      cursor: pointer;

      &:active {
        background-color: #e8003e;
      }
    }
  }
}
</style>
