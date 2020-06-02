import React from "react";
import Tester from "./components/Tester";
import CodeSnippets from "./components/CodeSnippets";
import Sender from "./components/Sender";

export default function App() {
	return (
		<div>
			<Sender />
			<Tester />
			<CodeSnippets />
		</div>
	);
}
