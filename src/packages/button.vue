<template>
  <button
    class="lb-button"
    :class="[type ? 'lb-button--' + type : '']"
  >
    <lb-icon
      :icon="icon"
      class="icon"
      v-if="icon"
    ></lb-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>

  </button>
</template>

<script>
export default {
  name: "lb-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            "type类型必须为:" +
              ["warning", "success", "danger", "info", "primary"].join("、")
          );
        } else {
          return true;
        }
      },
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.lb-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  @each $type,
    $color
      in (
        warning: $warning,
        success: $success,
        danger: $danger,
        info: $info,
        primary: $primary
      )
  {
    &--#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    margin-left: 4px;
  }
}
</style>