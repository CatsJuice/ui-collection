<template>
  <section
    :style="`
    ${hide ? 'overflow:hidden;' : ''}
    height:${hide ? 0 : inputHeight + 30}px;
    opacity: ${hide?'0':'1'};
    transition: all 0.3s ease, overflow 0s;
    visibility: ${hide ? 'hidden' : 'visible'};
  `"
  >
    <div class="label-container">
      <span class="error">{{ errText }}</span>
    </div>
    <input
      :style="`
      height:${inputHeight}px;
      ${highLight ? 'border: 2px solid' + (errText.length > 0 ? errorColor : highLightColor) + ';': ''}`"
      :type="type"
      :value="value"
      name="input"
      :maxlength="max"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      ref="input"
    />
    <span
      :class="[this.labelActive ? 'active' : '']"
      :style="`line-height: ${inputHeight}px;${highLight ? 'color: ' + (errText.length > 0 ? errorColor : highLightColor) + ';': ''}`"
      @click="focusInput"
    >{{ placeholder }}</span>
    <div
      class="icon-container"
      :style="`width: ${inputHeight - 4}px;height: ${inputHeight-4}px;`"
      @click="() => {$emit('iconClick');focusInput();}"
    >
      <slot name="icon"></slot>
    </div>

    <!-- 字数统计 -->
    <div
      v-if="enableLetterCount"
      class="words-count"
      :style="`color:${ value.length > max ? errorColor : highLightColor};`"
    >{{ value.length }} / {{ max }}</div>
  </section>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: "提示文本" },
    type: { type: String, default: "text" },
    inputHeight: { type: Number, default: 50 },
    errText: { type: String, default: "" },
    highLightColor: { type: String, default: "#6200ee" },
    errorColor: { type: String, default: "#C70039" },
    max: { type: Number, default: 16 },
    enableLetterCount: { type: Boolean, default: true },
    hide: { type: Boolean, default: false },
    value: { type: String, default: ""}
  },
  modal: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      labelActive: this.value ? this.value.length !== 0 : false,
      highLight: false
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("change", e.target.value);
    },
    handleFocus() {
      this.labelActive = true;
      this.highLight = true;
    },
    handleBlur(e) {
      this.labelActive = this.value.length > 0;
      this.highLight = false;
      this.$emit("blur", e.target.value);
    },
    focusInput() {
      // @ts-ignore
      if (!this.labelActive) this.$refs.input.focus();
    }
  }
};
</script>


<style lang="less" scoped>
@form-high-light: #6200ee;
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .label-container {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    span {
      line-height: 30px;
      position: relative;
      top: 0;
      font-size: 0.7rem;
      color: #cb4335;
    }
  }

  input {
    width: 100%;
    border: 2px solid #c4c4c4;
    border-radius: 5px;
    padding: 0 10px;
    font-weight: bold;
    color: #999;

    &:focus {
      outline: none;
      //   border: 2px solid @form-high-light;
      color: #555;

      & ~ span.active {
        // color: @form-high-light;
      }
    }
  }

  span {
    padding: 0 10px;
    color: #bdbdbd;
    font-size: 0.9rem;
    position: absolute;
    transition: all 0.3s ease-in-out, background-color 0.3s;
    top: 30px;
    background: none;
    user-select: none;
    cursor: text;

    &.active {
      padding: 0 5px;
      transform: translateY(-50%);
      font-size: 0.7rem;
      margin-left: 10px;
      font-weight: bold;
      background-color: #fff;
      height: 30px;
      line-height: 30px !important;
    }
  }

  div.icon-container {
    position: absolute;
    right: 2px;
    bottom: 2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.words-count {
    position: absolute;
    width: 100%;
    text-align: right;
    height: 20px;
    top: 100%;
    right: 0;
    font-size: 0.6rem;
    font-weight: bold;
    opacity: 0;
  }

  input:focus ~ div.words-count {
    opacity: 1;
  }
}
</style>
