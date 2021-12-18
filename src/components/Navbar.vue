<template>
  <div>
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '74px' }"
        class="menu"
      >
        <div>
          <router-link to="/">
            <h1 class="logo">NGEN Movies</h1>
          </router-link>
        </div>
        <div class="subMenu">
          <a-dropdown>
            <a class="dropDown" @click.prevent>
              Hover me
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/" class="menuItem">
                    <h5>Popular Movies</h5>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/topRated" class="menuItem">
                    <h5>Top Rated Movies</h5>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  name: "navbar",
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    DownOutlined,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      console.log(this.collapsed);
    },
  },
};
</script>

<style scoped>
.logo {
  color: white;
  font-size: 30px;
}
.menuItems {
  display: flex;
  justify-content: space-between;
}
.menuItem {
  color: white;
}
.subMenu {
  width: 140px;
  position: absolute;
  right: 20px;
}
.dropDown {
  color: white;
  font-size: 18px;
}
</style>