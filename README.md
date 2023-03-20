vite-plugin-gitlab-flow
=======
![license](https://img.shields.io/npm/l/vite-plugin-gitlab-flow)
![downloads](https://img.shields.io/npm/dt/vite-plugin-gitlab-flow)

GitLab pipelined print build information plug-ins

[中文文档](https://github.com/taosiqi/vite-plugin-gitlab-flow/blob/main/README_CN.md)

# Feature

**Goal:** The console displays the builder, build time, branch, and latest COMMIT information of the current running code, so that you can easily confirm whether the wrong version is missing.  
**Attention：** Only useful in GitLab pipeline

# Preview
You can view the deployment information for the code in the console

![image.png](https://static-1253419794.file.myqcloud.com/img/MgWpbn.png)


# Installation

```bash
pnpm i -D vite-plugin-gitlab-flow
```

or

```bash
yarn add -D vite-plugin-gitlab-flow
```

or

```bash
npm i -D vite-plugin-gitlab-flow
```

# Basic usage
vite.config.js/ts
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

# Options


| options      | description         | type  | default    |
|--------------|---------------------|-------|------------|
| projectName? | project name        | string | package.name |
| debug?       | debug               | boolean | false      |
| extra?       | Extra display field | string | []         |
| styles?      | Custom style        | Style | Style           | 

# 鸣谢
Thanks [vite-plugin-aliyun-flow](https://www.npmjs.com/package/vite-plugin-aliyun-flow) the ideas and code. 
