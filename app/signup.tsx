import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/buttons/general-button";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function SignupScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignup = () => {
		// Validação básica
		if (!name || !email || !phone || !password) {
			return;
		}
		if (password !== confirmPassword) {
			return;
		}
		// Simulação de cadastro - aqui você integraria com sua API
		router.replace("/(tabs)");
	};

	return (
		<ThemedView style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.header}>
					<ThemedText type="title" style={styles.title}>
						Criar conta
					</ThemedText>
					<ThemedText type="subtitle" style={styles.subtitle}>
						Preencha os dados para se cadastrar
					</ThemedText>
				</View>

				{/* Formulário */}
				<View style={styles.formContainer}>
					<InputField
						placeholder="Nome completo"
						icon="person"
						iconPosition="left"
						value={name}
						onChangeText={setName}
						autoCapitalize="words"
					/>

					<InputField
						placeholder="E-mail"
						icon="email"
						iconPosition="left"
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
					/>

					<InputField
						placeholder="Telefone"
						icon="phone"
						iconPosition="left"
						value={phone}
						onChangeText={setPhone}
						keyboardType="phone-pad"
					/>

					<PasswordInput
						placeholder="Senha"
						icon="lock"
						value={password}
						onChangeText={setPassword}
					/>

					<PasswordInput
						placeholder="Confirmar senha"
						icon="lock"
						value={confirmPassword}
						onChangeText={setConfirmPassword}
					/>

					<Button
						title="Cadastrar"
						onPress={handleSignup}
						variant="primary"
						style={styles.signupButton}
					/>

					<View style={styles.loginContainer}>
						<ThemedText type="default" style={styles.loginText}>
							Já tem uma conta?{" "}
						</ThemedText>
						<Link href="/login" asChild>
							<TouchableOpacity>
								<ThemedText type="link" style={styles.loginLink}>
									Entrar
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
	},
	formContainer: {
		width: "100%",
	},
	signupButton: {
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
});

