import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { PrimaryButton } from "./primary-button"

type SuccessModalProps = {
	title: string
	message: string
	onOk?: () => void
}

export function SuccessModal({ title, message, onOk }: SuccessModalProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			
			<View style={styles.iconContainer}>
				<View style={styles.circle}>
					<MaterialIcons name="check" size={60} color="#FFFFFF" />
				</View>
			</View>

			<Text style={styles.message}>{message}</Text>

			<PrimaryButton title="OK" onPress={onOk} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 24,
		backgroundColor: "#FFFFFF",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#11181C",
		marginBottom: 32,
		textAlign: "center",
	},
	iconContainer: {
		marginBottom: 32,
	},
	circle: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "#A1CEDC",
		justifyContent: "center",
		alignItems: "center",
	},
	message: {
		fontSize: 16,
		color: "#687076",
		textAlign: "center",
		marginBottom: 32,
		lineHeight: 24,
		paddingHorizontal: 16,
	},
})


