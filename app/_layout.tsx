import { DarkTheme, DefaultTheme, DefaultTheme as NavigationDefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "react-native-reanimated"

import { darkColors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import { PaperProvider } from "react-native-paper"

export const unstable_settings = {
	anchor: "(tabs)",
}

export default function RootLayout() {
	const colorScheme = useColorScheme()

	const mode = colorScheme === "dark"
		? DarkTheme
		: DefaultTheme

	return <PaperProvider
		theme={{
			...DefaultTheme,
			colors: {
				...DefaultTheme.colors,
				...darkColors.colors
			},

			fonts: {
				...NavigationDefaultTheme.fonts,
				// Define all expected variants, falling back to 'regular' or another existing variant
				displayLarge: NavigationDefaultTheme.fonts.regular,
				displayMedium: NavigationDefaultTheme.fonts.regular,
				displaySmall: NavigationDefaultTheme.fonts.regular,
				headlineLarge: NavigationDefaultTheme.fonts.regular,
				headlineMedium: NavigationDefaultTheme.fonts.regular,
				headlineSmall: NavigationDefaultTheme.fonts.regular,
				titleLarge: NavigationDefaultTheme.fonts.regular,
				titleMedium: NavigationDefaultTheme.fonts.medium, // Example using medium for title variants
				titleSmall: NavigationDefaultTheme.fonts.medium,
				labelLarge: NavigationDefaultTheme.fonts.medium,
				labelMedium: NavigationDefaultTheme.fonts.medium,
				labelSmall: NavigationDefaultTheme.fonts.medium,
				bodyLarge: NavigationDefaultTheme.fonts.regular,
				bodyMedium: NavigationDefaultTheme.fonts.regular,
				bodySmall: NavigationDefaultTheme.fonts.regular,
			},
		}}
	>
		<ThemeProvider value={mode}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
			</Stack>
			<StatusBar style="auto" />
		</ThemeProvider>
	</PaperProvider>
}
