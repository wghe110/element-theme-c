<template>
  <el-container class="wrap">
    <el-header style="border-bottom: 1px solid #dcdfe6;">
      <div class="header-content">header</div>
    </el-header>

    <el-container>
      <el-aside style="border-right: 1px solid #dcdfe6">
        <aside class="aside-content">
          <el-menu style="margin-right: -1px" default-active="button">
            <el-menu-item v-for="item in routes[0].children" 
              :key="item.path" 
              :index="item.path"
              @click="clickMenuFn(item)">
                {{ item.path }}
            </el-menu-item>
          </el-menu>
        </aside>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import routes from '../router/routes';
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();
    const clickMenuFn = (item: any) => {
      const { path } = item;
      router.push({
        path,
      })
    }

    return {
      routes,
      clickMenuFn,
    }
  }
}
</script>

<style lang="scss" scope>
  .wrap{
    height: 100vh;
  }
  .header-content{
    height: 55px;
    
    display: flex;
    align-items: center;
  }
  .aside-content{
    width: 240px;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>