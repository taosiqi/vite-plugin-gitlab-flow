## vite-plugin-gitlab-flow
GitLab流水线打印构建信息插件

目的: 准确的在控制台看到当前运行代码的构建人、构建时间、分支、最新的COMMIT信息等

掘金文章 https://juejin.cn/post/7140516996428333070
## 效果
可以在控制台查看代码的部署信息
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69da24d8e31d4380822326b650a35e76~tplv-k3u1fbpfcp-watermark.image?)

##  使用
只在GitLab流水线有用
### 安装
```
npm i vite-plugin-gitlab-flow --D
```

在vite.config.js/ts中配置
```
import vitePluginGitLabFlow from "vite-plugin-gitlab-flow";

// plugins
plugins: [
    vitePluginGitLabFlow({ projectName: 'rs'}),
    ...
]
```

### 插件参数
目前版本只有一个项目名称配置
```
interface options {
    projectName?: string; // 项目名称 没有配置的话会取 package.json里的name字段。
}
```
