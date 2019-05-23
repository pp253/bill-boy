<template>
  <div :class="'text-field' + (warning ? ' warning' : '')">
    <div class="text-field-wrapper">
      <label class="label" v-if="label">
        {{ label }}
      </label>

      <div class="input">
        <input type="number" v-model="beforeConsumed" placeholder="前期度數" />
      </div>
      <div class="postfix" style="margin-right: 8px;">度</div>

      <div class="input">
        <input type="number" v-model="afterConsumed" placeholder="本期度數" />
      </div>
      <div class="postfix">
        度
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTextField2',
  props: {
    label: { type: String, default: '' },
    value: [String, Number],
    type: { type: String, default: 'BeforeAfter' }
  },
  data() {
    return {
      beforeConsumed: '',
      afterConsumed: '',
      warning: false
    }
  },
  watch: {
    afterConsumed() {
      this.update()
    },
    beforeConsumed() {
      this.update()
    }
  },
  methods: {
    update() {
      if (!this.beforeConsumed || !this.afterConsumed) {
        this.warning = true
        return
      }

      let b = parseInt(this.beforeConsumed)
      let a = parseInt(this.afterConsumed)

      if (!Number.isInteger(b) || !Number.isInteger(a)) {
        this.warning = true
        return
      }

      if (a - b < 0 || a < 0 || b < 0) {
        this.warning = true
        return
      }

      this.$emit('input', a - b)
      this.warning = false
    }
  }
}
</script>

<style scoped lang="scss">
$height: 54px - 8px * 2;

.text-field {
  width: 100%;

  .text-field-wrapper {
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    display: flex;
    font-size: 24px;
    color: #333;

    .label {
      user-select: none;
      line-height: $height;
      font-weight: bold;
      margin-right: 8px;
      min-width: 40px;
      text-align: left;
    }

    .input {
      flex: 1;

      input {
        width: 100%;
        border: none;
        text-align: right;
        background-color: transparent;
        font-size: 1em;
        line-height: $height;
        padding: 0;
        outline: none;

        &:focus {
          border-bottom: 1px solid #000;
        }
      }
    }

    .postfix {
      user-select: none;
      font-size: 1em;
      margin-left: 8px;
      line-height: $height;
      text-align: right;
    }
  }

  &.warning {
    .text-field-wrapper {
      input {
        color: #e8003e !important;
      }
      color: #e8003e !important;
    }
  }
}
</style>
