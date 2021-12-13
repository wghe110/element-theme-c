<template>
  <section class="item">
    <h2>基本用法</h2>
    <ul class="list">
      <li>
        <el-steps :active="1" finish-status="wait">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="process">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="finish">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="error">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="success">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
    </ul>
  </section>
  <section class="item">
    <h2>竖向</h2>
    <ul class="list inline">
      <li>
        <el-steps :active="1" finish-status="wait" direction="vertical" :space="70">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="process" direction="vertical" :space="70">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="finish" direction="vertical" :space="70">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="error" direction="vertical" :space="70">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="success" direction="vertical" :space="70">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </li>
    </ul>
  </section>

  <section class="item">
    <h2>尺寸</h2>
    <ul class="list">
      <li>
        <el-steps :active="1" finish-status="wait">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="process">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="finish">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="error">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="success">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
    </ul>
    <ul class="list inline">
      <li>
        <el-steps :active="1" finish-status="wait" direction="vertical" :space="70">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="process" direction="vertical" :space="70">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="finish" direction="vertical" :space="70">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="error" direction="vertical" :space="70">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
      <li>
        <el-steps :active="1" finish-status="success" direction="vertical" :space="70">
          <el-step title="Step 1" class="is-small"></el-step>
          <el-step title="Step 2" class="is-small" description="Some description"></el-step>
          <el-step title="Step 3" class="is-small"></el-step>
        </el-steps>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import '../theme-chalk/steps.scss'
import '../theme-chalk/step.scss'

export default {
  
}
</script>

<style lang="scss" scoped>
.inline{
  font-size: 0;
  >li{
    display: inline-block;
    vertical-align: top;
    width: 20%;
  }
}
</style>