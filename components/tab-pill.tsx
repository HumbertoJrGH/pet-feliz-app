import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

type TabPillProps = {
	title: string
	isActive?: boolean
	onPress?: () => void
}

export function TabPill({ title, isActive = false, onPress }: TabPillProps) {
	return (
		<TouchableOpacity
			style={[styles.pill, isActive ? styles.pillActive : styles.pillInactive]}
			onPress={onPress}
			activeOpacity={0.7}>
			<Text style={[styles.text, isActive ? styles.textActive : styles.textInactive]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	pill: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 20,
		marginRight: 8,
	},
	pillActive: {
		backgroundColor: "#A1CEDC",
	},
	pillInactive: {
		backgroundColor: "#E5E5E5",
	},
	text: {
		fontSize: 14,
		fontWeight: "500",
	},
	textActive: {
		color: "#FFFFFF",
	},
	textInactive: {
		color: "#687076",
	},
})


