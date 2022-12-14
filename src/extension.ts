// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "debugger-alpha-bindings" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('toggleDebuggerAlphaBindings', async () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user

			let isEnabled = context.workspaceState.get("debuggerAlphaBindings.enabled", false);

			// Toggle
			isEnabled = !isEnabled;

			context.workspaceState.update("debuggerAlphaBindings.enabled", isEnabled);

			await vscode.commands.executeCommand('setContext', 'debuggerAlphaBindings.active', isEnabled);

			vscode.window.showInformationMessage(
				'Debugger Alpha Bindings: ' + (isEnabled ? "Enabled" : "Disabled")
			);
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
