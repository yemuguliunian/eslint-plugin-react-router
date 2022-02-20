# eslint-plugin-react-router

检测 umi 工程 config/routes.js 路由文件，测试用例尚缺。

## 安装

```
yarn add @vtx/eslint-plugin-react-router -D
```

## 使用

.eslintrc.js

```js
module.exports = {
    extends: ['plugin:@vtx/react-router/recommended'],
    plugins: ['@vtx/react-router'],
};
```

## rules

### no-unresolved

检测 components 文件路径是否正确（大小写敏感）。

### no-upperfirst-path

path 路径首字母必须是小写。
