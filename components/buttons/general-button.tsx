import { ButtonTokens, Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import React from "react"
import { GestureResponderEvent, Pressable, StyleSheet, Text, TextStyle, ViewStyle } from "react-native"

type ButtonProps = {
	title: string
	onPress?: (e: GestureResponderEvent) => void
	variant?: "primary" | "secondary"
	shape?: "rounded" | "pill" | "square"
	style?: ViewStyle
	textStyle?: TextStyle
	disabled?: boolean
}

export function Button({ title, onPress, variant = "primary", shape, style, textStyle, disabled }: ButtonProps) {
	const colorScheme = useColorScheme()
	const palette = Colors[colorScheme ?? "light"][variant]
	const chosenShape = shape ?? ButtonTokens.defaultShape
	const borderRadius = chosenShape === "pill" ? ButtonTokens.pillRadius : chosenShape === "square" ? 4 : ButtonTokens.roundedRadius

	const backgroundColor = variant === "primary" ? palette.background : "transparent"
	const color = variant === "primary" ? "#fff" : palette.text
	const opacity = disabled ? 0.6 : 1

	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				{
					height: ButtonTokens.height,
					paddingHorizontal: ButtonTokens.paddingHorizontal,
					backgroundColor,
					borderRadius,
					opacity,
				},
				style,
			]}>
			<Text style={[styles.text, { color, fontSize: ButtonTokens.textSize }, textStyle]}>{title}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	text: {
		fontWeight: "600",
	},
})