## 引言

配置和管理前端菜单

![#](resource\menuIndex.png)

## 新增菜单&编辑菜单

![#](resource\menuAdd.png)

1. **组件名称：指定路由的名称**
2. **默认跳转路径：只适用于一级菜单，列如：访问输入url访问/dashboard，则访问/dashboard/home页面**
3. **隐藏路由：隐藏后，则在左侧菜单看不到**
4. **隐藏tab：隐藏后，则在tab看不到**
5. **聚合路由：开启后，无法在tab去重，列如首页开启了聚合路由，保证首页在tab一直显示**

## 按钮配置

![#](resource\menuButton.png)

1. **为菜单配置的按钮，如果不配置，前端配置权限控制后，按钮将无法看到**
2. **按钮在数据字典维护**

## 前端按钮权限配置

**指令：v-auth="按钮的code"**

**举例：<Button v-auth="'add'" type="primary" @click="handleAdd">新增 &lt;/Button>**

