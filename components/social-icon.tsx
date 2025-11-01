import React from "react"
import { View, TouchableOpacity, StyleSheet, Text } from "react-native"

type SocialIconProps = {
	type: "facebook" | "google" | "linkedin" | "twitter"
	onPress?: () => void
}

export function SocialIcon({ type, onPress }: SocialIconProps) {
	const renderTwitterIcon = () => {
		return (
			<View style={styles.twitterContainer}>
				{/* Cabeça do pássaro */}
				<View style={styles.twitterHead} />
				{/* Corpo do pássaro - asa */}
				<View style={styles.twitterBody} />
				{/* Bico */}
				<View style={styles.twitterBeak} />
			</View>
		)
	}

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<View style={styles.circle}>
				{type === "facebook" && <Text style={styles.label}>f</Text>}
				{type === "google" && <Text style={styles.label}>G+</Text>}
				{type === "linkedin" && <Text style={styles.label}>in</Text>}
				{type === "twitter" && renderTwitterIcon()}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	circle: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: "#90C695",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 8,
	},
	label: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	twitterContainer: {
		width: 18,
		height: 18,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	twitterHead: {
		position: "absolute",
		top: 2,
		left: 2,
		width: 6,
		height: 6,
		borderRadius: 6,
		backgroundColor: "#FFFFFF",
	},
	twitterBody: {
		position: "absolute",
		bottom: 2,
		right: 2,
		width: 12,
		height: 8,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "#FFFFFF",
		borderTopWidth: 0,
		borderRightWidth: 0,
		transform: [{ rotate: "45deg" }],
	},
	twitterBeak: {
		position: "absolute",
		bottom: 4,
		right: 6,
		width: 4,
		height: 2,
		backgroundColor: "#FFFFFF",
		borderRadius: 1,
		transform: [{ rotate: "-45deg" }],
	},
})

