<template>
  <div class="text-field">
    <div class="text-field-wrapper">
      <label class="label" v-if="label">
        {{ label }}
      </label>
      <div class="input">
        <input
          type="number"
          :value="value"
          @change="$emit('input', parseInt($event.target.value))"
        />
      </div>
      <div class="postfix" v-if="postfix">
        {{ postfix }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTextField',
  props: {
    label: { type: String, default: '' },
    value: [String, Number],
    postfix: { type: String, default: '' }
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
      min-width: 100px;
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
          border-bottom: 2px solid #e8003e;
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
}
</style>
