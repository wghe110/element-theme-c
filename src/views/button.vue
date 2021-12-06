<template>
  <div>
    <el-row style="margin-bottom: 16px">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row style="margin-bottom: 16px">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row style="margin-bottom: 16px">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row style="margin-bottom: 16px">
      <el-button  circle>
        <el-icon>
          <search />
        </el-icon>
      </el-button>
      <el-button type="primary" :icon="Edit" circle></el-button>
      <el-button type="success" :icon="Check" circle></el-button>
      <el-button type="info" :icon="Message" circle></el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="danger" :icon="Delete" circle></el-button>
    </el-row>
  </div>
</template>

<script>
  import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons'
  import '../element-theme/button.scss'

  export default {
    components: {
      Search, Edit, Check, Message, Star, Delete
    }
  }
</script>

<style lang="">
  
</style>