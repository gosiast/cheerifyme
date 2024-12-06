module.exports = {
	types: [
		{ value: "feat", name: "feat:     A new feature" },
		{ value: "fix", name: "fix:      A bug fix" },
		{ value: "docs", name: "docs:     Documentation changes" },
		{ value: "style", name: "style:    Code style changes (no logic change)" },
		{
			value: "refactor",
			name: "refactor: Code changes that neither fix a bug nor add a feature",
		},
		{ value: "perf", name: "perf:     Performance improvements" },
		{ value: "test", name: "test:     Adding or modifying tests" },
		{
			value: "chore",
			name: "chore:    Miscellaneous tasks like upgrading dependencies",
		},
		{
			value: "build",
			name: "build:    Changes to build system or external dependencies",
		},
		{ value: "ci", name: "ci:       Continuous integration changes" },
	],
	scopes: [{ name: "core" }, { name: "frontend" }, { name: "backend" }],
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
};
