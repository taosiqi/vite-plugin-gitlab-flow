vite-plugin-gitlab-flow
=======
![license](https://img.shields.io/npm/l/vite-plugin-gitlab-flow)
![downloads](https://img.shields.io/npm/dt/vite-plugin-gitlab-flow)

GitLab流水线打印构建信息插件

# 功能特性

**目的:** 在控制台显示当前运行代码的构建人、构建时间、分支、最新的COMMIT信息等, 方便确认是否漏发错发版本。  
**注意：** 只在GitLab流水线有用
# 效果预览
可以在控制台查看代码的部署信息

![image.png](https://static-1253419794.file.myqcloud.com/img/MgWpbn.png)


# 安装

```bash
pnpm i -D vite-plugin-gitlab-flow
```

或者

```bash
yarn add -D vite-plugin-gitlab-flow
```

或者

```bash
npm i -D vite-plugin-gitlab-flow
```

# 基本使用
在vite.config.js/ts中配置
```ts
import vitePluginGitLabFlow from "vite-plugin-gitlab-flow";

plugins: [
    vitePluginGitLabFlow({
        projectName: '榕树工具',
        debug: true,
        extra: [
            {
                keys: 'VITE_APP_TITLE',
                label: '项目title'
            }
        ],
        styles:{
            color: 'red',
        }
    }),
]
```

# 配置项


| options      | description                         | type  | default    |
|--------------|-------------------------------------|-------|------------|
| projectName? | 项目名称，默认取package.json里的name字段。       | string | package.name |
| debug?       | debug模式                             | boolean | false      |
| extra?       | 额外需要显示的字段，需要是env里面有的字段，可开启debug模式查看 | string | []         |
| styles?      | 自定义样式                               | Style | Style           | 

# 鸣谢
感谢提供的思路和代码，https://www.npmjs.com/package/vite-plugin-aliyun-flow
