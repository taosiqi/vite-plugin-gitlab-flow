import type { Plugin, HtmlTagDescriptor } from 'vite';
import dayjs from 'dayjs';
import fs from 'fs';
import {Properties,PropertiesHyphen} from 'csstype';
interface Style extends Properties, PropertiesHyphen {}
export const defaultStyle:Style = {
    color: 'white',
    background: 'green',
    'font-size': '16px',
    border: '1px solid #fff',
    'text-shadow': '1px 1px black',
    padding: '2px 5px',
}

interface GitLabFlowOptions {
    projectName?: string,
    debug?:boolean,
    extra?:{
        label:string
        keys:string,
    }[],
    styles?:Style[]
}
export default function gitLabFlow(options: GitLabFlowOptions={}): Plugin {
    let {debug=false,extra=[],styles=defaultStyle}=options
    let styleOption=''
    for (const styleOptionKey in styles) {
        styleOption+=`${styleOptionKey}:${styles[styleOptionKey]};`
    }
    const env = process.env;

    const pkg:any = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf-8'));

    let packageInfo: any = JSON.parse(fs.readFileSync(process.cwd() + '/node_modules/vite-plugin-gitlab-flow/package.json', 'utf-8'))

    const appInfo = {
        projectName: options.projectName || pkg.name,
        name:pkg.name,
        version:pkg.version,
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };

    let extStr=`
    console.log("%c插件名称: ${packageInfo.name} 当前版本: V${packageInfo.version}","${styleOption}" );
    console.log("%c插件作者: ${packageInfo.author} 仓库地址: ${packageInfo.homepage}","${styleOption}");
    console.log("%c项目名称:${appInfo.projectName}", "${styleOption}");
    console.log("%c打包时间: ${appInfo.lastBuildTime}","${styleOption}");
    console.log("%c流水线执行人: ${env.GITLAB_USER_NAME || '-'}", "${styleOption}");
    console.log("%c标签: ${env.CI_COMMIT_REF_NAME || '-'}", "${styleOption}");
    console.log("%cCOMMIT信息: ${env.CI_COMMIT_TITLE || '-'} ${env.CI_COMMIT_SHA || '-'}", "${styleOption}");
    `

    // 新增自定义字段
    extra.forEach(({label,keys})=>{
        extStr+=`console.log("%c${label}: ${env?.[keys] || '-'}","${styleOption}");`
    })

    // debugger模式
    if (debug){
        extStr+=`console.log('appInfo', ${JSON.stringify(appInfo)});`
        extStr+=`console.log('packageInfo', ${JSON.stringify(packageInfo)});`
        extStr+=`console.log('env', ${JSON.stringify(env)});`
    }

    return {
        name: 'vite-plugin-gitlab-flow',
        apply: 'build',
        transformIndexHtml(html): HtmlTagDescriptor[] {
            return [
                {
                    tag: 'script',
                    attrs: { defer: true },
                    children: extStr,
                    injectTo: 'body'
                },
            ]
        }
    };
}
