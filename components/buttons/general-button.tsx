import { ButtonTokens, Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import React from "react"
import { GestureResponderEvent, StyleSheet, Text, TextStyle, ViewStyle } from "react-native"
import { Button as PaperButton } from "react-native-paper"

type ButtonProps = {
	title: string
	onPress?: (e: GestureResponderEvent) => void
	variant?: "primary" | "secondary"
	mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal"
	style?: ViewStyle
	textStyle?: TextStyle
	disabled?: boolean
}

export function Button({ title, onPress, mode = "contained", variant = "primary", style, textStyle, disabled }: ButtonProps) {
	const colorScheme = useColorScheme()
	const palette = Colors[colorScheme ?? "light"][variant]
	const borderRadius = ButtonTokens.roundedRadius

	const backgroundColor = variant === "primary" ? palette.background : "transparent"
	const color = variant === "primary" ? "#fff" : palette.text
	const opacity = disabled ? 0.6 : 1

	return <PaperButton
		onPress={onPress}
		disabled={disabled}
		mode={mode}
		style={[
			styles.button,
			{
				height: ButtonTokens.height,
				borderRadius,
				opacity,
			},
			style,
		]}
	>
		<Text style={[styles.text, { color, fontSize: ButtonTokens.textSize }, textStyle]}>{title}</Text>
	</PaperButton>
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	text: {
		fontWeight: "200",
	},
})