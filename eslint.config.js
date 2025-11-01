// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config")
const expoConfig = require("eslint-config-expo/flat")

module.exports = defineConfig([
	expoConfig,
	{
		ignores: ["dist/*"],
		rules: {
			semi: ["error", "never"],
			quotes: ["error", "double", { avoidEscape: false, allowTemplateLiterals: false }],
			indent: ["error", "tab"],
			"react/jsx-indent": ["error", "tab"],
			"react/jsx-indent-props": ["error", "tab"],
			"no-tabs": "off",
			"no-extra-parens": ["error", "all", { "ignoreJSX": "none", "nestedBinaryExpressions": false }]
		}
	},
])
