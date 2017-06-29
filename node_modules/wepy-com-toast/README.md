# 微信小程序 wepyjs 第三方toast组件

![toast](https://cloud.githubusercontent.com/assets/2182004/21178902/8f98f056-c22c-11e6-90ee-a9afa73399b9.jpg)


## 说明
官方toast组件只支持显示`success`，`loading`两种icon，因此需要一个更加个性化的toast组件。
此组件依赖于[wepyjs](https://github.com/wepyjs/wepy)，如果没有使用`wepyjs`，则可以使用[原版toast组件](https://github.com/kiinlam/wetoast)。


## 使用

### 安装组件
```
npm install wepy-com-toast --save
```

### 引入组件
```javascript
// index.wpy
<template>
    <component id="toast"></component>
</template>
<script>
    import wepy from 'wepy';
    import Toast from 'wepy-com-toast';

    export default class Index extends wepy.page {
        components = {
            toast: Toast
        };
    }
</script>
```


### 调用方法
```javascript
let promise = this.$invoke('toast', 'show', {
    title: '自定义标题',
    img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png',
});

promise.then((d) => {
    console.log('toast done');
});
```

## 更多说明
参考[原版插件](https://github.com/kiinlam/wetoast)。
