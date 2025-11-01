import React from "react"
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"

type LinkTextProps = TouchableOpacityProps & {
	children: React.ReactNode
}

export function LinkText({ children, style, ...props }: LinkTextProps) {
	return (
		<TouchableOpacity {...props} activeOpacity={0.7}>
			<Text style={[styles.link, style]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	link: {
		color: "#A1CEDC",
		fontSize: 14,
		fontWeight: "500",
	},
})


