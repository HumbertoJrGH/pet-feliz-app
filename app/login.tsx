import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/buttons/general-button";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Logo } from "@/components/logo";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Simulação de login - aqui você integraria com sua API
		if (email && password) {
			router.replace("/(tabs)");
		}
	};

	return (
		<ThemedView style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				{/* Logo */}
				<View style={styles.logoContainer}>
					<View style={styles.logoWrapper}>
						<Logo width={150} height={150} />
					</View>
					<ThemedText type="subtitle" style={styles.subtitle}>
						Bem-vindo de volta!
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

					<PasswordInput
						placeholder="Senha"
						icon="lock"
						value={password}
						onChangeText={setPassword}
					/>

					<TouchableOpacity 
						style={styles.forgotPassword}
						onPress={() => router.push("/forgot-password")}
					>
						<ThemedText type="link" style={styles.forgotPasswordText}>
							Esqueceu sua senha?
						</ThemedText>
					</TouchableOpacity>

					<Button
						title="Entrar"
						onPress={handleLogin}
						variant="primary"
						style={styles.loginButton}
					/>

					<View style={styles.signupContainer}>
						<ThemedText type="default" style={styles.signupText}>
							Não tem uma conta?{" "}
						</ThemedText>
						<Link href="/signup" asChild>
							<TouchableOpacity>
								<ThemedText type="link" style={styles.signupLink}>
									Cadastre-se
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
		justifyContent: "center",
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 48,
	},
	logoWrapper: {
		width: 150,
		height: 150,
		borderRadius: 75,
		overflow: "hidden",
		marginBottom: 16,
		backgroundColor: "#FFFFFF",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
	},
	logo: {
		width: "100%",
		height: "100%",
	},
	title: {
		fontSize: 32,
		marginBottom: 8,
		color: "#A1CEDC",
	},
	subtitle: {
		fontSize: 18,
		opacity: 0.7,
	},
	formContainer: {
		width: "100%",
	},
	forgotPassword: {
		alignSelf: "flex-end",
		marginBottom: 24,
	},
	forgotPasswordText: {
		fontSize: 14,
	},
	loginButton: {
		marginTop: 8,
	},
	signupContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},
	signupText: {
		fontSize: 14,
		opacity: 0.7,
	},
	signupLink: {
		fontSize: 14,
		fontWeight: "600",
	},
});

