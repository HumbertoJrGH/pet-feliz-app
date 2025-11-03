/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native"

const tintColorLight = "#0a7ea4"
const tintColorDark = "#fff"

export const lightColors = {
	"colors": {
		"primary": "rgb(0, 105, 112)",
		"onPrimary": "rgb(255, 255, 255)",
		"primaryContainer": "rgb(127, 244, 255)",
		"onPrimaryContainer": "rgb(0, 32, 34)",
		"secondary": "rgb(84, 101, 0)",
		"onSecondary": "rgb(255, 255, 255)",
		"secondaryContainer": "rgb(213, 238, 114)",
		"onSecondaryContainer": "rgb(24, 30, 0)",
		"tertiary": "rgb(104, 71, 192)",
		"onTertiary": "rgb(255, 255, 255)",
		"tertiaryContainer": "rgb(232, 221, 255)",
		"onTertiaryContainer": "rgb(33, 0, 93)",
		"error": "rgb(186, 26, 26)",
		"onError": "rgb(255, 255, 255)",
		"errorContainer": "rgb(255, 218, 214)",
		"onErrorContainer": "rgb(65, 0, 2)",
		"background": "rgb(250, 253, 252)",
		"onBackground": "rgb(25, 28, 29)",
		"surface": "rgb(250, 253, 252)",
		"onSurface": "rgb(25, 28, 29)",
		"surfaceVariant": "rgb(218, 228, 229)",
		"onSurfaceVariant": "rgb(63, 72, 73)",
		"outline": "rgb(111, 121, 122)",
		"outlineVariant": "rgb(190, 200, 201)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(45, 49, 49)",
		"inverseOnSurface": "rgb(239, 241, 241)",
		"inversePrimary": "rgb(77, 217, 229)",
		"elevation": {
			"level0": "transparent",
			"level1": "rgb(238, 246, 245)",
			"level2": "rgb(230, 241, 241)",
			"level3": "rgb(223, 237, 237)",
			"level4": "rgb(220, 235, 235)",
			"level5": "rgb(215, 232, 232)"
		},
		"surfaceDisabled": "rgba(25, 28, 29, 0.12)",
		"onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
		"backdrop": "rgba(41, 50, 51, 0.4)"
	}
}

export const darkColors = {
	"colors": {
		"primary": "rgb(77, 217, 229)",
		"onPrimary": "rgb(0, 54, 59)",
		"primaryContainer": "rgb(0, 79, 85)",
		"onPrimaryContainer": "rgb(127, 244, 255)",
		"secondary": "rgb(185, 209, 89)",
		"onSecondary": "rgb(43, 52, 0)",
		"secondaryContainer": "rgb(63, 76, 0)",
		"onSecondaryContainer": "rgb(213, 238, 114)",
		"tertiary": "rgb(206, 189, 255)",
		"onTertiary": "rgb(57, 5, 144)",
		"tertiaryContainer": "rgb(80, 43, 167)",
		"onTertiaryContainer": "rgb(232, 221, 255)",
		"error": "rgb(255, 180, 171)",
		"onError": "rgb(105, 0, 5)",
		"errorContainer": "rgb(147, 0, 10)",
		"onErrorContainer": "rgb(255, 180, 171)",
		"background": "rgb(25, 28, 29)",
		"onBackground": "rgb(224, 227, 227)",
		"surface": "rgb(25, 28, 29)",
		"onSurface": "rgb(224, 227, 227)",
		"surfaceVariant": "rgb(63, 72, 73)",
		"onSurfaceVariant": "rgb(190, 200, 201)",
		"outline": "rgb(137, 147, 147)",
		"outlineVariant": "rgb(63, 72, 73)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(224, 227, 227)",
		"inverseOnSurface": "rgb(45, 49, 49)",
		"inversePrimary": "rgb(0, 105, 112)",
		"elevation": {
			"level0": "transparent",
			"level1": "rgb(28, 37, 39)",
			"level2": "rgb(29, 43, 45)",
			"level3": "rgb(31, 49, 51)",
			"level4": "rgb(31, 51, 53)",
			"level5": "rgb(32, 55, 57)"
		},
		"surfaceDisabled": "rgba(224, 227, 227, 0.12)",
		"onSurfaceDisabled": "rgba(224, 227, 227, 0.38)",
		"backdrop": "rgba(41, 50, 51, 0.4)"
	}
}

export const Colors = {
	light: {
		text: "#11181C",
		background: "#fff",
		tint: tintColorLight,
		icon: "#687076",
		tabIconDefault: "#687076",
		tabIconSelected: tintColorLight,
		primary: {
			background: "#7CC2C9",
			text: "#FFFFFF"
		},
		secondary: {
			background: "#ABC24C",
			text: "#FFFFFF"
		}
	},
	dark: {
		text: "#ECEDEE",
		background: "#000",
		tint: tintColorDark,
		icon: "#9BA1A6",
		tabIconDefault: "#9BA1A6",
		tabIconSelected: tintColorDark,
		primary: {
			background: "#7CC2C9",
			text: "#FFFFFF"
		},
		secondary: {
			background: "#ABC24C",
			text: "#FFFFFF"
		}
	},
}

export const ButtonTokens = {
	defaultMode: "text",
	roundedRadius: 20,
	pillRadius: 999,
	height: 48,
	paddingHorizontal: 16,
	textSize: 16
}

export const Fonts = Platform.select({
	ios: {
		/** iOS `UIFontDescriptorSystemDesignDefault` */
		sans: "system-ui",
		/** iOS `UIFontDescriptorSystemDesignSerif` */
		serif: "ui-serif",
		/** iOS `UIFontDescriptorSystemDesignRounded` */
		rounded: "ui-rounded",
		/** iOS `UIFontDescriptorSystemDesignMonospaced` */
		mono: "ui-monospace",
	},
	default: {
		sans: "normal",
		serif: "serif",
		rounded: "normal",
		mono: "monospace",
	},
	web: {
		sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
		serif: "Georgia, 'Times New Roman', serif",
		rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
		mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	},
})
