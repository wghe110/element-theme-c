<template>
  <section class="item">
    <h2>日期选择器</h2>
    <ul class="list">
      <li>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
      </li>
      <li>
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="Select date and time"
        >
        </el-date-picker>
      </li>
      <li>
        <el-date-picker
          v-model="value3"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        >
        </el-date-picker>
      </li>
    </ul>
  </section>
</template>

<script>
import '../theme-chalk/date-picker.scss'
import '../theme-chalk/popper.scss'
import '../theme-chalk/button.scss'
import { ref } from 'vue'

export default {
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref([]),
    }
  }
}
</script>

<style lang="">
  
</style>