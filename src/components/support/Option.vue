<template>

  <!-- option component with switch and label for options section -->
  <div class="flex-r1 option">
    
    <label class="switch mr2">
      <input type="checkbox" :name="name" :checked="value" @change="changeHandler">
      <span class="slider"></span>
    </label>

    <label class="truncate flex-r1">{{ label }} <slot></slot></label>
  </div>

</template>

<script>
  export default {
    props: ['name', 'label', 'value'],

    methods: {
      changeHandler() {
        this.$emit('input', !this.value)
      }
    }
  }

</script>

<style>
  .option {
    padding: 15px 20px;
    font-size: 16px
  }
</style>
