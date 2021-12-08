<template>
  <section class="item">
    <h2>基础用法</h2>
    <ul class="list">
      <li>
        <el-pagination background layout="total, prev, pager, next, jumper" :total="1000"></el-pagination>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import '../theme-chalk/pagination.scss'
import '../theme-chalk/input.scss'

export default{
  
}
</script>

<style lang="scss" scoped>

</style>