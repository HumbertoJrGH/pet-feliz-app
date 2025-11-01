import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { PrimaryButton } from "./primary-button"

type VerificationModalProps = {
	onOk?: () => void
	onResend?: () => void
}

export function VerificationModal({ onOk, onResend }: VerificationModalProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Verifique seu e-mail</Text>
			
			<View style={styles.iconContainer}>
				<MaterialIcons name="email" size={80} color="#A1CEDC" />
				<View style={styles.notificationBadge}>
					<View style={styles.badgeDot} />
				</View>
			</View>

			<Text style={styles.message}>
				Enviaremos um e-mail para que você confirme a finalização do cadastro
			</Text>

			<PrimaryButton title="OK" onPress={onOk} />

			<Text style={styles.instruction}>
				Caso não receba nosso e-mail em alguns minutos, tente reenviar
			</Text>

			<TouchableOpacity style={styles.resendButton} onPress={onResend} activeOpacity={0.7}>
				<Text style={styles.resendText}>Reenviar</Text>
			</TouchableOpacity>
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
		position: "relative",
		marginBottom: 32,
	},
	notificationBadge: {
		position: "absolute",
		top: -8,
		right: -8,
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: "#A1CEDC",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		borderColor: "#FFFFFF",
	},
	badgeDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#FFFFFF",
	},
	message: {
		fontSize: 16,
		color: "#687076",
		textAlign: "center",
		marginBottom: 32,
		lineHeight: 24,
	},
	instruction: {
		fontSize: 14,
		color: "#687076",
		textAlign: "center",
		marginTop: 24,
		marginBottom: 16,
	},
	resendButton: {
		width: "100%",
		height: 56,
		borderWidth: 1,
		borderColor: "#A1CEDC",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
	},
	resendText: {
		fontSize: 16,
		fontWeight: "600",
	},
})

