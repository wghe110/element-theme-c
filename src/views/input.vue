<template>
  <section class="item">
    <h2>基础用法</h2>
    <ul class="list">
      <li>
        <el-input v-model="input1" placeholder="Please input" />
      </li>
      <li>
        <el-input v-model="input1" placeholder="Please input" disabled/>
      </li>
      <li>
        <el-input v-model="input1" placeholder="Please input" clearable />
      </li>
      <li>
        <el-input v-model="input1" placeholder="Please input password" show-password />
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>带 icon 的输入框</h2>
    <ul class="list">
      <li>
        <el-input v-model="input2" placeholder="Pick a date">
          <template #suffix>
            <el-icon class="el-input__icon"><calendar /></el-icon>
          </template>
        </el-input>
      </li>
      <li>
        <el-input v-model="input2" placeholder="Type something">
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>多行文本</h2>
    <ul class="list">
      <li>
        <el-input
          v-model="textarea"
          :rows="2"
          type="textarea"
          placeholder="Please input"
        />
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>复合型输入框</h2>
    <ul class="list">
      <li>
        <el-input v-model="input3" placeholder="Please input">
          <template #prepend>Http://</template>
        </el-input>
      </li>
      <li>
        <el-input v-model="input3" placeholder="Please input">
          <template #append>.com</template>
        </el-input>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>不同尺寸的输入框</h2>
    <ul class="list">
      <li>
        <el-input v-model="input4" placeholder="Please Input" />
      </li>
      <li>
        <el-input v-model="input4" size="medium" placeholder="Please Input" />
      </li>
      <li>
        <el-input v-model="input4" size="small" placeholder="Please Input" />
      </li>
      <li>
        <el-input v-model="input4" size="mini" placeholder="Please Input" />
      </li>
    </ul>
  </section>
</template>

<script>
import { Calendar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import '../theme-chalk/input.scss'

export default {
  components: {
    Calendar, 
    Search,
  },
  setup() {
    return  {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
      textarea: ref(''),
    }
  }
}
</script>

<style lang="">
  
</style>