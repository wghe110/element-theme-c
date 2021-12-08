<template>
  <section class="item">
    <h2>顶部方式</h2>
    <ul class="list">
      <li>
        <el-form
          label-position="top"
          :model="formLabelAlign"
        >
          <el-form-item label="name" prop="name" required>
            <el-input v-model="formLabelAlign.name" placeholder="input"></el-input>
          </el-form-item>

          <el-form-item label="remark" prop="remark" required>
            <el-input v-model="formLabelAlign.remark"  type="textarea" placeholder="input"></el-input>
          </el-form-item>

          <el-form-item label="region" prop="region" required>
            <el-select v-model="formLabelAlign.region" placeholder="Select" style="width: 100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="type" prop="type" required>
            <el-checkbox-group v-model="formLabelAlign.type">
              <el-checkbox label="Option A" />
              <el-checkbox label="Option B" />
              <el-checkbox label="Option C" />
              <el-checkbox label="disabled" disabled />
              <el-checkbox label="selected and disabled" disabled />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="gender" prop="gender">
            <el-radio-group v-model="formLabelAlign.gender" size="small">
              <el-radio label="1">Option A</el-radio>
              <el-radio label="2" disabled>Option B</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="birthday" prop="birthday">
            <el-date-picker
              v-model="formLabelAlign.birthday"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
            >
            </el-date-picker>
          </el-form-item>
        </el-form> 

        <div class="btnBox">
          <el-button type="primary" size="small">确认</el-button>
          <el-button size="small">取消</el-button>
        </div>         
      </li>
    </ul>
  </section>
</template>

<script>
import { reactive } from 'vue'
import '../theme-chalk/form.scss'
import '../theme-chalk/form-item.scss'

import '../theme-chalk/input.scss'
import '../theme-chalk/select.scss'
import '../theme-chalk/option.scss'
import '../theme-chalk/popper.scss'
import '../theme-chalk/radio.scss'
import '../theme-chalk/radio-group.scss'
import '../theme-chalk/radio-button.scss'
import '../theme-chalk/checkbox.scss'
import '../theme-chalk/checkbox-group.scss'
import '../theme-chalk/checkbox-button.scss'
import '../theme-chalk/date-picker.scss'
import '../theme-chalk/button.scss'

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]

export default {
  setup() {
    return {
      formLabelAlign: reactive({
        name: '',
        region: '',
        type: [],
        gender: '',
        remark: '',
        birthday: []
      }),
      options,
    }
  }
}
</script>

<style lang="">
  
</style>