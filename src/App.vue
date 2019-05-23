<template>
  <div id="app">
    <div class="window">
      <div class="frame" v-if="page === 0">
        <div class="main">
          <div class="cell-header">
            <div class="header-wrapper">
              <div class="text">租屋電費分帳小幫手</div>
              <div class="underline"></div>
            </div>
          </div>

          <div class="cell">
            <v-text-field
              v-model="totalAmount"
              label="總電費"
              postfix="元"
            ></v-text-field>
          </div>

          <div class="cell">
            <v-text-field
              v-model="totalConsumed"
              label="度數"
              postfix="元"
            ></v-text-field>
          </div>

          <div class="cell">
            <v-radio-btn
              label="夏季電費"
              v-model="summer"
              :items="summerItems"
            ></v-radio-btn>
          </div>

          <div class="cell">
            <v-radio-btn
              label="公共區域"
              v-model="publicArea"
              :items="publicAreaItems"
            ></v-radio-btn>
          </div>

          <div class="cell-spacer"></div>

          <div class="cell">
            <div class="submit-btn" @click="page++">
              <div class="submit-btn__strip"></div>
              <div class="submit-btn__inner">
                輸入每間房間度數 &gt;
              </div>
              <div class="submit-btn__strip"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="frame" v-if="page === 1">
        <div class="main">
          <div class="cell-header">
            <div class="header-wrapper">
              <div class="text">每房度數</div>
              <div class="underline"></div>
              <p>
                輸入每個房間的小電表度數
              </p>
            </div>
          </div>

          <div class="cell">
            <v-radio-btn
              label="輸入方式"
              v-model="inputType"
              :items="inputTypeItems"
            ></v-radio-btn>
          </div>

          <div class="cell">
            <v-counter
              v-model="roomNumber"
              :label="`${roomConsumed.length}間房間`"
              :min="1"
              @increment="roomConsumed.push(0)"
              @decrement="roomConsumed.pop()"
            ></v-counter>
          </div>

          <div class="cell-spacer"></div>

          <template v-for="(_, index) in roomConsumed">
            <div class="cell" :key="index">
              <v-text-field2
                v-if="inputType === 'BeforeAfter'"
                :label="`房${index + 1}`"
                v-model="roomConsumed[index]"
                :type="inputType"
              ></v-text-field2>
              <v-text-field
                v-else-if="inputType === 'OnlyNow'"
                v-model="roomConsumed[index]"
                :label="`房${index + 1}`"
                postfix="度"
              ></v-text-field>
            </div>
          </template>

          <div class="cell-spacer"></div>

          <div class="cell">
            <v-counter
              v-model="roomNumber"
              :label="`${roomConsumed.length}間房間`"
              :min="1"
              @increment="roomConsumed.push(0)"
              @decrement="roomConsumed.pop()"
            ></v-counter>
          </div>

          <div class="cell-spacer"></div>

          <div class="cell">
            <div class="layout">
              <div
                class="flex xs4"
                style="border-right: 1px solid rgb(255, 183, 0);"
              >
                <div class="submit-btn" @click="page--">
                  <div class="submit-btn__strip"></div>
                  <div class="submit-btn__inner">&lt; 返回</div>
                  <div class="submit-btn__strip"></div>
                </div>
              </div>
              <div class="flex xs8">
                <div
                  class="submit-btn"
                  @click="
                    page++
                    loadSplitResult()
                  "
                >
                  <div class="submit-btn__strip"></div>
                  <div class="submit-btn__inner">開始分帳 &gt;</div>
                  <div class="submit-btn__strip"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="frame" v-if="page === 2">
        <div class="main">
          <div class="cell-header">
            <div class="header-wrapper">
              <div class="text">分帳結果</div>
              <div class="underline"></div>
            </div>
          </div>

          <div class="cell" v-if="publicArea">
            <v-radio-btn
              label="公共區域"
              v-model="publicAreaSplit"
              :items="publicAreaSplitItems"
            ></v-radio-btn>
          </div>

          <div class="cell-spacer"></div>

          <template v-for="(dollar, index) in adjustedAmount">
            <div class="cell" :key="index">
              <div class="result">
                <div class="result-wrapper layout">
                  <div class="label flex xs3">房{{ index + 1 }}</div>
                  <div class="memo flex xs5">
                    {{ sum(consumed[index]) }}度
                    <span
                      v-if="publicArea && publicAreaSplit === 'EquallyDivision'"
                    >
                      +公共區域{{ amountPublic / roomNumber }}元
                    </span>
                  </div>
                  <div class="amount flex xs4">{{ dollar }}元</div>
                </div>
              </div>
            </div>
          </template>

          <div class="cell" v-if="publicArea">
            <div class="result">
              <div class="result-wrapper layout">
                <div class="label flex xs3">公共</div>
                <div class="memo flex xs5">
                  {{ sum(consumed[consumed.length - 1]) }}度
                </div>
                <div class="amount flex xs4">{{ amountPublic }}元</div>
              </div>
            </div>
          </div>

          <div class="cell">
            <div class="result">
              <div class="result-wrapper layout">
                <div class="label flex xs3">總電費</div>
                <div class="memo flex xs5"></div>
                <div class="amount flex xs4">{{ sum(amount) }}元</div>
              </div>
            </div>
          </div>

          <div class="cell-spacer"></div>

          <div class="cell">
            <div class="layout">
              <div
                class="flex xs4"
                style="border-right: 1px solid rgb(255, 183, 0);"
              >
                <div class="submit-btn" @click="page--">
                  <div class="submit-btn__strip"></div>
                  <div class="submit-btn__inner">&lt; 返回</div>
                  <div class="submit-btn__strip"></div>
                </div>
              </div>
              <div class="flex xs8">
                <div class="submit-btn" @click="">
                  <div class="submit-btn__strip"></div>
                  <div class="submit-btn__inner">複製結果</div>
                  <div class="submit-btn__strip"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="cell-spacer"></div>

          <div class="cell">
            <a href="">瞭解分帳方式</a>

            <a href="">GitHub</a>
            <a href="">回饋</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTextField from './components/VTextField.vue'
import VTextField2 from './components/VTextField2.vue'
import VRadioBtn from './components/VRadioBtn.vue'
import VCounter from './components/VCounter.vue'

export default {
  name: 'app',
  components: {
    VTextField,
    VTextField2,
    VRadioBtn,
    VCounter
  },
  data() {
    return {
      totalAmount: 0,
      totalConsumed: 0,
      summer: false,
      summerItems: [
        { label: '夏季 (6~9月)', value: true },
        { label: '非夏季', value: false }
      ],

      publicArea: true,
      publicAreaItems: [
        { label: '有', value: true },
        { label: '沒有', value: false }
      ],

      inputTypeItems: [
        { label: '前後期', value: 'BeforeAfter' },
        { label: '本期度數', value: 'OnlyNow' }
      ],
      inputType: 'BeforeAfter',

      roomNumber: 4,

      roomConsumed: [0, 0, 0, 0],
      publicAreaConsumed: 0,

      publicAreaSplit: 'EquallyDivision',
      publicAreaSplitItems: [
        { label: '平均分攤', value: 'EquallyDivision' },
        { label: '獨立計算', value: 'Identical' }
      ],

      unitCost: {
        summer: [1.63, 2.38, 3.52, 4.8, 5.66, 6.41],
        notSummer: [1.63, 2.1, 2.89, 3.94, 4.6, 5.03]
      },

      consumed: [
        [40, 80, 0, 0, 0, 0],
        [40, 40, 0, 0, 0, 0],
        [40, 60, 0, 0, 0, 0]
      ],

      amount: [255.6, 160.4, 207],

      page: 2
    }
  },
  computed: {
    adjustedAmount() {
      if (!this.amount) {
        return []
      }
      if (this.publicArea) {
        let newAmount = this.amount.slice(0, this.amount.length - 1)

        if (this.publicAreaSplit === 'EquallyDivision') {
          let splitPublicAreaAmount = this.amountPublic / this.roomNumber
          for (let i = 0; i < newAmount.length; i++) {
            newAmount[i] += splitPublicAreaAmount
          }
        }

        return newAmount
      } else {
        return this.amount
      }
    },
    amountPublic() {
      if (!this.amount) {
        return 0
      }
      if (this.publicArea) {
        return this.amount[this.amount.length - 1]
      } else {
        return 0
      }
    }
  },
  methods: {
    sum(arr) {
      if (!arr) return 0
      return arr.reduce((a, b) => a + b, 0)
    },
    loadSplitResult() {
      let N = this.roomNumber
      let Ui = this.roomConsumed.slice(0)
      let sumUi = this.sum(Ui)
      let U = this.totalConsumed
      let adjustU = Math.max(U, sumUi)

      if (this.publicArea) {
        N += 1
        Ui.push(U > sumUi ? U - sumUi : 0)
      }
      let consumed = this.calculateSplitResult(N, Ui, adjustU)
      this.$set(this, 'consumed', consumed)

      this.loadAmount()
    },
    calculateSplitResult(N, Ui, U) {
      /*
      let N = this.roomNumber
      let Ui = this.roomConsumed
      let U = this.totalConsumed
      */
      let level = [120, 210, 170, 200, 300, 10000000000000]

      // initialize the consumed table, which is a 2D array
      // indices by room index and level index
      let consumed = []
      for (let i = 0; i < N; i++) {
        consumed.push([])
        for (let j = 0; j < level.length; j++) {
          consumed[i].push(0)
        }
      }

      let calAmountPerLevel = (level, U) => {
        let Uj = [Math.min(level[0], U)]
        for (let j = 1; j < level.length; j++) {
          Uj.push(Math.min(level[j], U - Uj[j - 1]))
        }
        return Uj
      }
      let calDoneRoomNumber = Ui => {
        let doneRoom = 0
        for (let i = 0; i < Ui.length; i++) {
          if (Ui[i] === 0) {
            doneRoom += 1
          }
        }
        return doneRoom
      }

      let amountPerLevel = calAmountPerLevel(level, U)
      let tmpUi = Ui.slice(0)

      for (let j = 0; j < level.length; j++) {
        let over = false
        let done = false
        let tmpLevelAmount = amountPerLevel[j]
        let maxTime = 10

        while (!done) {
          let split = tmpLevelAmount / (N - calDoneRoomNumber(tmpUi))
          for (let i = 0; i < N; i++) {
            if (tmpUi[i] === 0) {
              continue
            }

            let actualSplit = Math.min(split, tmpUi[i])
            consumed[i][j] += actualSplit
            tmpUi[i] -= actualSplit
            tmpLevelAmount -= actualSplit
          }

          done = tmpLevelAmount === 0

          if (calDoneRoomNumber(tmpUi) === N) {
            over = true
            break
          }

          if (maxTime-- <= 0) {
            over = true
            break
          }
        }

        if (over) {
          break
        }
      }

      return consumed
    },
    loadAmount() {
      let amount = this.calculateAmount(
        this.consumed,
        this.summer ? this.unitCost.summer : this.unitCost.notSummer
      )
      this.$set(this, 'amount', amount)
    },
    calculateAmount(consumed, unitCost) {
      let amount = []
      for (let i = 0; i < consumed.length; i++) {
        let sum = 0
        for (let j = 0; j < unitCost.length; j++) {
          sum += consumed[i][j] * unitCost[j]
        }
        amount.push(sum)
      }
      return amount
    }
  }
}
</script>

<style lang="scss">
$theme-color: rgb(255, 183, 0);

html {
  margin: 0;
  padding: 0;
}
body {
  background-color: $theme-color;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 600px;
}

.main {
  // background-color: #fff;
  $inner-border: 2px;

  border: 5px solid #000;
  margin: 16px;

  $cell-height: 54px;

  .cell {
    width: 100%;
    height: $cell-height;
    border-top: ($inner-border / 2) solid #000;
    border-bottom: ($inner-border / 2) solid #000;
  }

  .cell-header {
    width: 100%;
    border-bottom: ($inner-border / 2) solid #000;
    padding: 16px 8px;
    box-sizing: border-box;

    .header-wrapper {
      text-align: center;

      .text {
        display: inline-block;
        // background-color: #000;
        color: #000;
        font-weight: bold;
        font-size: 32px;
        text-shadow: 1px 1px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff,
          -1px 1px 0px #fff, 0px 1px 0px #fff, 1px 0px 0px #fff,
          0px -1px 0px #fff, -1px 0px 0px #fff;
        /*

          text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000,
            -1px 1px 0px #000, 0px 1px 0px #000, 1px 0px 0px #000,
            0px -1px 0px #000, -1px 0px 0px #000;
            */
      }

      .underline {
        margin: 0 auto;
        display: block;
        background-color: #000;
        height: 16px;
        width: 140px;
        position: relative;
        z-index: -1;
        top: -16px;
      }
    }
  }

  .cell-spacer {
    border-top: ($inner-border / 2) solid #000;
    border-bottom: ($inner-border / 2) solid #000;
    height: $cell-height * (2 / 3);
  }

  .submit-btn {
    user-select: none;
    $strip-height: 4px;
    width: 100%;
    height: $cell-height;
    color: #fff;
    background-color: #000;
    border: none;
    cursor: pointer;

    &:active {
      background-color: #e8003e;
      color: #fff;
    }

    .submit-btn__inner {
      height: $cell-height - $strip-height * 2;
      line-height: $cell-height - $strip-height * 2;
      font-size: 20px;
    }

    .submit-btn__strip {
      display: block;
      width: 100%;
      height: $strip-height;

      background: repeating-linear-gradient(
        -45deg,
        $theme-color,
        $theme-color 6px,
        transparent 5px,
        transparent 12px
      );
    }
  }

  .result {
    $height: 54px - 8px * 2;
    width: 100%;

    .result-wrapper {
      box-sizing: border-box;
      padding: 8px;
      width: 100%;
      font-size: 24px;
      color: #333;

      .label {
        line-height: $height;
        text-align: left;
        font-weight: bold;
      }
      .amount {
        line-height: $height;
        text-align: right;
      }

      .memo {
        text-align: left;
        font-size: 14px;

        span {
          display: block;
        }
      }
    }
  }

  .layout {
    display: flex;

    .flex {
      flex: 1;

      &.xs3 {
        flex-basis: 100% * (3 / 12);
        flex-grow: 0;
      }
      &.xs4 {
        flex-basis: 100% * (4 / 12);
        flex-grow: 0;
      }
      &.xs6 {
        flex-basis: 100% * (6 / 12);
        flex-grow: 0;
      }
      &.xs8 {
        flex-basis: 100% * (8 / 12);
        flex-grow: 0;
      }
      &.xs9 {
        flex-basis: 100% * (9 / 12);
        flex-grow: 0;
      }
    }
  }
}
</style>
