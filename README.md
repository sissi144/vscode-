# vscode-
记录一下学习vscode插件开发的代码

[1. 学习webview开发 ](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/extension-guides/webview?id=%e8%84%9a%e6%9c%ac%e5%92%8c%e4%bf%a1%e6%81%af%e4%bc%a0%e9%80%92)

在vscode中使用webview开发 可以结合js+html很快接入 就是没搞懂onCommand和onWebviewPanel的区别？ 还有 本地资源加载也有些问题。

[2. 学习status开发 ](https://code.visualstudio.com/api/references/vscode-api#StatusBarItem)
statusbar是指vscode下面的状态栏 可以创建在左边或者右边，可以指定点击状态栏所激活的命令，
subscriptions其实是创建了一系列的监听，包括命令以及状态修改。
<img width="788" alt="1" src="https://user-images.githubusercontent.com/39649322/218249085-f8ae6398-13b5-47b9-8f29-ab307035b021.png">
