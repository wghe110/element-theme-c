<template>
  <section class="item">
    <h2>基本用法</h2>
    <ul class="list">
      <li>
        <el-radio v-model="radio1" label="1">Option 1</el-radio>
        <el-radio v-model="radio1" label="2">Option 2</el-radio>
      </li>
      <li>
        <el-radio v-model="radio2" label="1" size="medium">Option 1</el-radio>
        <el-radio v-model="radio2" label="2" size="medium">Option 2</el-radio>
      </li>
      <li>
        <el-radio v-model="radio3" label="1" size="small">Option 1</el-radio>
        <el-radio v-model="radio3" label="2" size="small">Option 2</el-radio>
      </li>
      <li>
        <el-radio v-model="radio4" label="1" size="mini">Option 1</el-radio>
        <el-radio v-model="radio4" label="2" size="mini">Option 2</el-radio>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>禁用状态</h2>
    <ul class="list">
      <li>
        <el-radio v-model="radio" disabled label="disabled">Option A</el-radio>
        <el-radio v-model="radio" disabled label="selected and disabled"
          >Option B</el-radio
        >
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>单选框组</h2>
    <ul class="list">
      <li>
        <el-radio-group v-model="radioGroup">
          <el-radio :label="3">Option A</el-radio>
          <el-radio :label="6">Option B</el-radio>
          <el-radio :label="9">Option C</el-radio>
        </el-radio-group>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>按钮样式</h2>
    <ul class="list">
      <li>
        <el-radio-group v-model="radioBtn1" size="medium">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <el-radio-group v-model="radioBtn2" size="medium">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <el-radio-group v-model="radioBtn3" size="small">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington" disabled></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </li>
      <li>
        <el-radio-group v-model="radioBtn4" disabled size="mini">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>带有边框</h2>
    <ul class="list">
      <li>
        <el-radio v-model="radio1" label="1" border>Option A</el-radio>
        <el-radio v-model="radio1" label="2" border>Option B</el-radio>
      </li>
      <li>
        <el-radio v-model="radio2" label="1" border size="medium"
            >Option A</el-radio
          >
          <el-radio v-model="radio2" label="2" border size="medium"
            >Option B</el-radio
          >
      </li>
      <li>
        <el-radio-group v-model="radio3" size="small">
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border disabled>Option B</el-radio>
        </el-radio-group>
      </li>
      <li>
        <el-radio-group v-model="radio4" size="mini" disabled>
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border>Option B</el-radio>
        </el-radio-group>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref } from 'vue'
import '../theme-chalk/radio.scss'
import '../theme-chalk/radio-group.scss'
import '../theme-chalk/radio-button.scss'

export default {
  setup() {
    return  {
      radio1: ref('1'),
      radio2: ref('1'),
      radio3: ref('1'),
      radio4: ref('1'),
      radio: ref('selected and disabled'),
      radioGroup: ref(3),
      radioBtn1: ref('New York'),
      radioBtn2: ref('New York'),
      radioBtn3: ref('New York'),
      radioBtn4: ref('New York'),
    }
  }
}
</script>

<style lang="">
  
</style>