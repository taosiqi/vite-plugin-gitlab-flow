// 1. 将css样式内容放入数
const styles = [
    'color: white',
    'background: green',
    'font-size: 19px',
    'border: 1px solid #fff',
    'text-shadow: 2px 2px black',
    'padding: 5px',
].join(';');

console.log(`%c${__APP_INFO__.projectName}, 当前版本: V${__APP_INFO__.pkg.version}`, styles);

console.log(`%c打包时间: ${__APP_INFO__.lastBuildTime}`,styles);

console.log('__GLOBAL_ENV_', __GLOBAL_ENV_);

console.log(`%c流水线执行人: ${__GLOBAL_ENV_.GITLAB_USER_NAME || '-'}`, styles);

console.log(`%c标签: ${__GLOBAL_ENV_.CI_COMMIT_REF_NAME || '-'}`, styles);
console.log(`%cCOMMIT信息: ${__GLOBAL_ENV_.CI_COMMIT_TITLE || '-'} ${__GLOBAL_ENV_.CI_COMMIT_SHA || '-'}`, styles);
