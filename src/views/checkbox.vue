<template>
  <section class="item">
    <h2>基本用法</h2>
    <ul class="list">
      <li>
        <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
        <el-checkbox v-model="checked2" label="Option 2"></el-checkbox>
      </li>
      <li>
        <el-checkbox
          v-model="checked3"
          label="Option 1"
          size="medium"
        ></el-checkbox>
        <el-checkbox
          v-model="checked4"
          label="Option 2"
          size="medium"
        ></el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked5" label="Option 1" size="small"></el-checkbox>
        <el-checkbox v-model="checked6" label="Option 2" size="small"></el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked7" label="Option 1" size="mini"></el-checkbox>
        <el-checkbox v-model="checked8" label="Option 2" size="mini"></el-checkbox>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>禁用状态</h2>
    <ul class="list">
      <li>
        <el-checkbox v-model="checked1" label="Option 1" disabled></el-checkbox>
        <el-checkbox v-model="checked2" label="Option 2" disabled></el-checkbox>
        <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>多选框组</h2>
    <ul class="list">
      <li>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="Option A" />
          <el-checkbox label="Option B" />
          <el-checkbox label="Option C" />
          <el-checkbox label="disabled" disabled />
          <el-checkbox label="selected and disabled" disabled />
        </el-checkbox-group>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>中间状态</h2>
    <ul class="list">
      <li>
        <el-checkbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
          >Check all</el-checkbox
        >
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>按钮样式</h2>
    <ul class="list">
      <li>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox-button>
        </el-checkbox-group>
      </li>
      <li>
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox-button>
        </el-checkbox-group>
      </li>
      <li>
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button
            v-for="city in cities"
            :key="city"
            :label="city"
            :disabled="city === 'Beijing'"
            >{{ city }}</el-checkbox-button
          >
        </el-checkbox-group>
      </li>
      <li>
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox-button>
        </el-checkbox-group>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>带有边框</h2>
    <ul class="list">
      <li>
        <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
        <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
      </li>
      <li>
        <el-checkbox
          v-model="checked3"
          label="Option1"
          border
          size="medium"
        ></el-checkbox>
        <el-checkbox
          v-model="checked4"
          label="Option2"
          border
          size="medium"
        ></el-checkbox>
      </li>
      <li>
        <el-checkbox-group v-model="checkboxGroup5" size="small">
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border disabled></el-checkbox>
        </el-checkbox-group>
      </li>
      <li>
        <el-checkbox-group v-model="checkboxGroup6" size="mini">
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border></el-checkbox>
        </el-checkbox-group>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
import '../theme-chalk/checkbox.scss'
import '../theme-chalk/checkbox-group.scss'
import '../theme-chalk/checkbox-button.scss'

export default {
  setup() {
    const checked1 = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(false);
    const checked4 = ref(false);
    const checked5 = ref(true);
    const checked6 = ref(false);
    const checked7 = ref(false);
    const checked8 = ref(false);
    const checkList = ref(['selected and disabled', 'Option A'])

    const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
    const state = reactive({
      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
      isIndeterminate: true,
    })
    const handleCheckAllChange = (val) => {
      state.checkedCities = val ? cityOptions : []
      state.isIndeterminate = false
    }
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length
      state.checkAll = checkedCount === state.cities.length
      state.isIndeterminate =
        checkedCount > 0 && checkedCount < state.cities.length
    }

    const state2 = reactive({
      checkboxGroup1: ['Shanghai'],
      checkboxGroup2: ['Shanghai'],
      checkboxGroup3: ['Shanghai'],
      checkboxGroup4: ['Shanghai'],
      checkboxGroup5: [],
      checkboxGroup6: [],
      cities: cityOptions,
    })


    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checkList,

      ...toRefs(state),
      handleCheckAllChange,
      handleCheckedCitiesChange,

      ...toRefs(state2),
    }
  }
}
</script>