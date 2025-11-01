import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { PrimaryButton } from "./primary-button"

type EmailSentModalProps = {
	onOk?: () => void
	onResend?: () => void
}

export function EmailSentModal({ onOk, onResend }: EmailSentModalProps) {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<MaterialIcons name="email" size={80} color="#A1CEDC" />
				<View style={styles.checkBadge}>
					<MaterialIcons name="check" size={24} color="#FFFFFF" />
				</View>
			</View>

			<Text style={styles.title}>E-mail enviado!</Text>

			<Text style={styles.message}>
				Aguarde o e-mail para realizar a recuperação de senha
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
	iconContainer: {
		position: "relative",
		marginBottom: 32,
	},
	checkBadge: {
		position: "absolute",
		bottom: -8,
		right: -8,
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: "#DDA0DD",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 4,
		borderColor: "#FFFFFF",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#11181C",
		marginBottom: 16,
		textAlign: "center",
	},
	message: {
		fontSize: 16,
		color: "#11181C",
		textAlign: "center",
		marginBottom: 32,
		lineHeight: 24,
	},
	instruction: {
		fontSize: 14,
		color: "#11181C",
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
		color: "#A1CEDC",
	},
})


