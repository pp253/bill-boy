<template>
  <div class="radio-btn">
    <div class="radio-btn-wrapper">
      <div class="label" v-if="label">
        {{ label }}
      </div>
      <div class="items" v-if="items">
        <template v-for="(item, index) in items">
          <div class="item" :key="index" @click="$emit('input', item.value)">
            <div class="radiobox" v-if="item.value === value">
              ✔
            </div>
            {{ item.label }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VRadioBtn',
  props: {
    label: { type: String, default: '' },
    value: [String, Number, Boolean],
    items: { type: Array }
  }
}
</script>

<style scoped lang="scss">
$height: 54px;

.radio-btn {
  width: 100%;

  .radio-btn-wrapper {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    font-size: 24px;

    .label {
      padding-left: 8px;
      line-height: $height;
      font-weight: bold;
      margin-right: 8px;
      min-width: 100px;
      text-align: left;
    }

    .items {
      flex: 1;
      display: flex;
      font-size: 16px;

      .item {
        line-height: $height;
        flex: 1;
        height: 100%;
        border-left: 1px solid #000;

        .radiobox {
          display: inline;
        }
      }
    }
  }
}
</style>
