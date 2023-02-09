"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let currentPanel;
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        if (currentPanel) {
            currentPanel.reveal(vscode.ViewColumn.One);
        }
        else {
            currentPanel = vscode.window.createWebviewPanel('catCoding', "Cat Coding", vscode.ViewColumn.One, {
                enableScripts: true,
            });
            currentPanel.webview.html = getWebviewContent();
            currentPanel.onDidDispose(() => { currentPanel = undefined; }, undefined, context.subscriptions);
        }
        currentPanel.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'alert':
                    vscode.window.showErrorMessage(message.text);
                    return;
            }
        }, undefined, context.subscriptions);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.doRefactor', () => {
        if (!currentPanel) {
            return;
        }
        currentPanel.webview.postMessage({ command: 'refactor' });
    }));
}
exports.activate = activate;
function getWebviewContent() {
    return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Security-Policy">
		<title>Cat Coding</title>
	</head>
	<body>
		<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
		<h1 id="lines-of-code-counter">0</h1>

		<script>
			(function() {
				const vscode = acquireVsCodeApi();

				const counter = document.getElementById('lines-of-code-counter');

				// 检查是否需要恢复状态
				const previousState = vscode.getState();
				let count = previousState ? previousState.count : 0;
				counter.textContent = count;

				setInterval(() => {
					counter.textContent = count++;
					// 更新已经保存的状态
					vscode.setState({ count })
				}, 1000);
			}())
		</script>
	</body>
	</html>
`;
}
//# sourceMappingURL=extension.js.map