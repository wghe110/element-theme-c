<template>
  <div class="item">
    <h2>基本用法</h2>
    <ul class="list">
      <li>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </li>
      <li>
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </li>
      <li>
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </li>
      <li>
        <el-button circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
        <el-button type="primary" circle>
          <el-icon>
            <Edit />
          </el-icon>
        </el-button>
        <el-button type="success" circle>
          <el-icon>
            <Check />
          </el-icon>
        </el-button>
        <el-button type="info" circle>
          <el-icon>
            <Message />
          </el-icon>
        </el-button>
        <el-button type="warning" circle>
          <el-icon>
            <Star />
          </el-icon>
        </el-button>
        <el-button type="danger" circle>
          <el-icon>
            <Delete />
          </el-icon>
        </el-button>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>禁用状态</h2>
    <ul class="list">
      <li>
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </li>
      <li>
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>文字按钮</h2>
    <ul class="list">
      <li>
        <el-button type="text">Text Button</el-button>
        <el-button type="text" disabled>Text Button</el-button>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>图标按钮</h2>
    <ul class="list">
      <li>
        <el-button type="primary">
          <el-icon>
            <Edit />
          </el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon>
            <Share />
          </el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon>
            <Delete />
          </el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon>
            <Search />
          </el-icon>
          <span>Search</span>
        </el-button>
        <el-button type="primary">
          <span>Upload</span>
          <el-icon>
            <Upload />
          </el-icon>
        </el-button>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>按钮组</h2>
    <ul class="list">
      <li>
        <el-button-group>
          <el-button type="primary">
            <el-icon>
              <ArrowLeft />
            </el-icon>
            Previous Page
          </el-button>
          <el-button type="primary">
            Next Page
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </el-button-group>

        <el-button-group style="margin-left: 14px">
          <el-button type="primary">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
          <el-button type="primary">
            <el-icon>
              <Share />
            </el-icon>
          </el-button>
          <el-button type="primary">
            <el-icon>
              <Delete />
            </el-icon>
          </el-button>
        </el-button-group>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>加载中</h2>
    <ul class="list">
      <li>
        <el-button type="primary" :loading="true">Loading</el-button>
      </li>
    </ul>
  </div>

  <div class="item">
    <h2>各种尺寸的尺寸按钮</h2>
    <ul class="list">
      <li>
        <el-button size="large">large</el-button>
        <el-button>Default</el-button>
        <el-button>Medium</el-button>
        <el-button size="small">Small</el-button>
        <el-button size="mini">Mini</el-button>
      </li>
      <li>
        <el-button size="large" round>large</el-button>
        <el-button round>Default</el-button>
        <el-button size="medium" round>Medium</el-button>
        <el-button size="small" round>Small</el-button>
        <el-button size="mini" round>Mini</el-button>
      </li>
      <li>
        <el-button size="large" circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
        <el-button circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
        <el-button size="medium" circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
        <el-button size="small" circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
        <el-button size="mini" circle>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
  Share,
  Upload,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons";
import "../theme-chalk/button.scss";
import "../theme-chalk/button-group.scss";

export default {
  components: {
    Search,
    Edit,
    Check,
    Message,
    Star,
    Delete,
    Share,
    Upload,
    ArrowLeft,
    ArrowRight,
  },
};
</script>

<style lang="">
</style>