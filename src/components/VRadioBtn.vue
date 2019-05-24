<template>
  <div class="radio-btn">
    <div class="radio-btn-wrapper">
      <div class="label" v-if="label">
        {{ label }}
      </div>
      <div class="items" v-if="items">
        <template v-for="(item, index) in items">
          <div class="item" :key="index" @click="$emit('input', item.value)">
            <div class="item-wrapper">
              <div class="radiobox" v-if="item.value === value">
                ✔
              </div>
              {{ item.label }}
            </div>
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
  user-select: none;

  .radio-btn-wrapper {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    font-size: 24px;
    color: #333;

    .label {
      padding-left: 8px;
      line-height: $height;
      font-weight: bold;
      margin-right: 8px;
      min-width: 100px;
      text-align: left;
      flex: 1;
    }

    .items {
      flex: 2;
      display: flex;
      font-size: 16px;
      max-width: 400px;

      .item {
        flex: 1;
        line-height: $height;
        height: 100%;
        border-left: 1px solid #000;
        overflow: hidden;
        cursor: pointer;

        .item-wrapper {
          vertical-align: middle;
          display: inline-block;
          line-height: normal;
        }

        &:active {
          background-color: #e8003e;
          color: #fff;
        }

        .radiobox {
          display: inline;
        }
      }
    }
  }
}
</style>
