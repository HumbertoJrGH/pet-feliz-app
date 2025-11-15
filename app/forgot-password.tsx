import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { Button } from "@/components/buttons/general-button";
import { Link, router } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ForgotPasswordScreen() {
	const [email, setEmail] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const handleSendEmail = () => {
		if (email) {
			// Simulação de envio de email - aqui você integraria com sua API
			setEmailSent(true);
		}
	};

	if (emailSent) {
		return (
			<ThemedView style={styles.container}>
				<ScrollView 
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.successContainer}>
						<View style={styles.iconContainer}>
							<MaterialIcons name="check-circle" size={80} color="#90C695" />
						</View>
						<ThemedText type="title" style={styles.successTitle}>
							E-mail enviado!
						</ThemedText>
						<ThemedText type="default" style={styles.successText}>
							Enviamos um link de recuperação para{"\n"}
							<ThemedText type="defaultSemiBold">{email}</ThemedText>
						</ThemedText>
						<ThemedText type="default" style={styles.instructionText}>
							Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
						</ThemedText>
						<Button
							title="Voltar ao login"
							onPress={() => router.push("/login")}
							variant="primary"
							style={styles.backButton}
						/>
					</View>
				</ScrollView>
			</ThemedView>
		);
	}

	return (
		<ThemedView style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity 
						style={styles.backIcon}
						onPress={() => router.back()}
					>
						<MaterialIcons name="arrow-back" size={24} color="#11181C" />
					</TouchableOpacity>
					<ThemedText type="title" style={styles.title}>
						Recuperar senha
					</ThemedText>
					<ThemedText type="subtitle" style={styles.subtitle}>
						Digite seu e-mail para receber um link de recuperação
					</ThemedText>
				</View>

				{/* Formulário */}
				<View style={styles.formContainer}>
					<InputField
						placeholder="E-mail"
						icon="email"
						iconPosition="left"
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
					/>

					<Button
						title="Enviar link de recuperação"
						onPress={handleSendEmail}
						variant="primary"
						style={styles.sendButton}
					/>

					<View style={styles.loginContainer}>
						<ThemedText type="default" style={styles.loginText}>
							Lembrou sua senha?{" "}
						</ThemedText>
						<Link href="/login" asChild>
							<TouchableOpacity>
								<ThemedText type="link" style={styles.loginLink}>
									Voltar ao login
								</ThemedText>
							</TouchableOpacity>
						</Link>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		padding: 24,
		paddingTop: 48,
	},
	backIcon: {
		marginBottom: 16,
	},
	header: {
		marginBottom: 32,
	},
	title: {
		fontSize: 32,
		marginBottom: 8,
		color: "#A1CEDC",
	},
	subtitle: {
		fontSize: 16,
		opacity: 0.7,
		lineHeight: 22,
	},
	formContainer: {
		width: "100%",
	},
	sendButton: {
		marginTop: 8,
	},
	loginContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},
	loginText: {
		fontSize: 14,
		opacity: 0.7,
	},
	loginLink: {
		fontSize: 14,
		fontWeight: "600",
	},
	successContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	iconContainer: {
		marginBottom: 24,
	},
	successTitle: {
		fontSize: 28,
		marginBottom: 16,
		color: "#A1CEDC",
		textAlign: "center",
	},
	successText: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 16,
		lineHeight: 24,
	},
	instructionText: {
		fontSize: 14,
		textAlign: "center",
		opacity: 0.7,
		marginBottom: 32,
		lineHeight: 20,
	},
	backButton: {
		marginTop: 16,
	},
});

