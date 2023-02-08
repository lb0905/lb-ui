<template>
  <svg
    class="lb-icon"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import "../styles/icon";
export default {
  name: "lb-icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.lb-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>