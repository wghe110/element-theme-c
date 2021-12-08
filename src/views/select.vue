<template>
  <section class="item">
    <h2>基础用法</h2>
    <ul class="list">
      <li>
        <el-select v-model="value1" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select v-model="value1" placeholder="Select" disabled style="margin-left: 16px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>基础多选</h2>
    <ul class="list">
      <li>
        <el-select v-model="value2" multiple placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
      <li>
        <el-select
          v-model="value3"
          multiple
          collapse-tags
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>不同尺寸</h2>
    <ul class="list">
      <li>
        <el-select v-model="value1" placeholder="Select" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"            
          >
          </el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="value1" placeholder="Select" size="medium">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="value1" placeholder="Select" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"            
          >
          </el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="value1" placeholder="Select" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
    </ul>
  </section>
</template>

<script>
import {  ref } from 'vue'

import '../theme-chalk/input.scss'
import '../theme-chalk/tag.scss'
import '../theme-chalk/popper.scss'

import '../theme-chalk/option.scss'
import '../theme-chalk/option-item.scss'
import '../theme-chalk/option-group.scss'
import '../theme-chalk/select.scss'
import '../theme-chalk/select-v2.scss'
import '../theme-chalk/select-dropdown.scss'
import '../theme-chalk/select-dropdown-v2.scss'

export default {
  setup() {
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ];
    const value1 = ref('')
    const value2 = ref([])
    const value3 = ref([])

    return {
      options,
      value1,
      value2,
      value3,
    }
  }
}
</script>

<style lang="">
  
</style>