import React from "react"
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native"

type PrimaryButtonProps = TouchableOpacityProps & {
	title: string
}

export function PrimaryButton({ title, style, ...props }: PrimaryButtonProps) {
	return (
		<TouchableOpacity
			style={[styles.button, style]}
			activeOpacity={0.8}
			{...props}>
			<Text style={styles.buttonText}>{title.toUpperCase()}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 56,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#A1CEDC",
		marginTop: 16,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#FFFFFF",
	},
})

