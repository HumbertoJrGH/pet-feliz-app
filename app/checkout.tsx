import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { Button } from "@/components/buttons/general-button";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function CheckoutScreen() {
	const params = useLocalSearchParams();
	const itemName = params.name as string || "Item";
	const itemPrice = parseFloat(params.price as string) || 0;
	const itemType = params.type as string || "produto";
	const isService = itemType === "serviço";

	const [paymentMethod, setPaymentMethod] = useState("credit");
	const [name, setName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvv, setCvv] = useState("");
	const [address, setAddress] = useState("");
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";

	const handlePayment = () => {
		// Simulação de pagamento - aqui você integraria com gateway de pagamento
		router.push({
			pathname: "/payment-success",
			params: {
				itemName,
				itemPrice: itemPrice.toString(),
			},
		});
	};

	return (
		<ThemedView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity 
						style={styles.backButton}
						onPress={() => router.back()}
					>
						<MaterialIcons name="arrow-back" size={24} color={iconColor} />
					</TouchableOpacity>
					<ThemedText type="title" style={styles.title}>
						{isService ? "Agendamento" : "Checkout"}
					</ThemedText>
				</View>

				{/* Resumo do item */}
				<View style={styles.summaryCard}>
					<View style={styles.summaryHeader}>
						<MaterialIcons 
							name={isService ? "event" : "shopping-bag"} 
							size={24} 
							color="#A1CEDC" 
						/>
						<ThemedText type="defaultSemiBold" style={styles.summaryTitle}>
							Resumo do {isService ? "serviço" : "pedido"}
						</ThemedText>
					</View>
					<View style={styles.summaryDivider} />
					<View style={styles.summaryRow}>
						<View style={styles.summaryItemInfo}>
							<MaterialIcons name="check-circle" size={20} color="#90C695" />
							<ThemedText type="default" style={styles.summaryLabel}>
								{itemName}
							</ThemedText>
						</View>
						<ThemedText type="defaultSemiBold" style={styles.summaryValue}>
							R$ {itemPrice.toFixed(2).replace(".", ",")}
						</ThemedText>
					</View>
					<View style={styles.summaryDivider} />
					<View style={styles.summaryRow}>
						<View style={styles.totalContainer}>
							<ThemedText type="title" style={styles.totalLabel}>
								Total
							</ThemedText>
							<ThemedText type="subtitle" style={styles.totalSubtitle}>
								{isService ? "A pagar" : "Inclui frete"}
							</ThemedText>
						</View>
						<ThemedText type="title" style={styles.totalValue}>
							R$ {itemPrice.toFixed(2).replace(".", ",")}
						</ThemedText>
					</View>
				</View>

				{/* Informações do cliente */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Informações pessoais
					</ThemedText>
					<InputField
						placeholder="Nome completo"
						icon="person"
						iconPosition="left"
						value={name}
						onChangeText={setName}
					/>
					<InputField
						placeholder="Endereço"
						icon="home"
						iconPosition="left"
						value={address}
						onChangeText={setAddress}
					/>
				</View>

				{/* Método de pagamento */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Método de pagamento
					</ThemedText>
					
					<View style={styles.paymentMethods}>
						<TouchableOpacity
							style={[
								styles.paymentMethod,
								paymentMethod === "credit" && styles.paymentMethodActive
							]}
							onPress={() => setPaymentMethod("credit")}
						>
							<MaterialIcons 
								name={paymentMethod === "credit" ? "radio-button-checked" : "radio-button-unchecked"} 
								size={24} 
								color={paymentMethod === "credit" ? "#A1CEDC" : iconColor} 
							/>
							<ThemedText type="defaultSemiBold" style={styles.paymentMethodText}>
								Cartão de Crédito
							</ThemedText>
						</TouchableOpacity>

						<TouchableOpacity
							style={[
								styles.paymentMethod,
								paymentMethod === "debit" && styles.paymentMethodActive
							]}
							onPress={() => setPaymentMethod("debit")}
						>
							<MaterialIcons 
								name={paymentMethod === "debit" ? "radio-button-checked" : "radio-button-unchecked"} 
								size={24} 
								color={paymentMethod === "debit" ? "#A1CEDC" : iconColor} 
							/>
							<ThemedText type="defaultSemiBold" style={styles.paymentMethodText}>
								Cartão de Débito
							</ThemedText>
						</TouchableOpacity>

						<TouchableOpacity
							style={[
								styles.paymentMethod,
								paymentMethod === "pix" && styles.paymentMethodActive
							]}
							onPress={() => setPaymentMethod("pix")}
						>
							<MaterialIcons 
								name={paymentMethod === "pix" ? "radio-button-checked" : "radio-button-unchecked"} 
								size={24} 
								color={paymentMethod === "pix" ? "#A1CEDC" : iconColor} 
							/>
							<ThemedText type="defaultSemiBold" style={styles.paymentMethodText}>
								PIX
							</ThemedText>
						</TouchableOpacity>
					</View>

					{paymentMethod !== "pix" && (
						<>
							<InputField
								placeholder="Número do cartão"
								icon="credit-card"
								iconPosition="left"
								value={cardNumber}
								onChangeText={setCardNumber}
								keyboardType="numeric"
							/>
							<View style={styles.cardRow}>
								<View style={styles.cardInput}>
									<InputField
										placeholder="MM/AA"
										icon="calendar-today"
										iconPosition="left"
										value={expiry}
										onChangeText={setExpiry}
										keyboardType="numeric"
									/>
								</View>
								<View style={styles.cardInput}>
									<InputField
										placeholder="CVV"
										icon="lock"
										iconPosition="left"
										value={cvv}
										onChangeText={setCvv}
										keyboardType="numeric"
										secureTextEntry
									/>
								</View>
							</View>
						</>
					)}
				</View>

				{/* Botão de pagamento */}
				<Button
					title={isService ? "Confirmar agendamento" : "Finalizar compra"}
					onPress={handlePayment}
					variant="primary"
					style={styles.paymentButton}
				/>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 32,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
	},
	backButton: {
		marginRight: 12,
	},
	title: {
		fontSize: 28,
		color: "#A1CEDC",
	},
	summaryCard: {
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		borderRadius: 16,
		padding: 20,
		marginBottom: 24,
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	summaryHeader: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginBottom: 12,
	},
	summaryTitle: {
		fontSize: 18,
	},
	summaryRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	summaryItemInfo: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		flex: 1,
	},
	summaryLabel: {
		fontSize: 16,
		flex: 1,
	},
	summaryValue: {
		fontSize: 18,
		color: "#A1CEDC",
		fontWeight: "600",
	},
	totalContainer: {
		flex: 1,
	},
	totalSubtitle: {
		fontSize: 12,
		opacity: 0.6,
		marginTop: 2,
	},
	summaryDivider: {
		height: 1,
		backgroundColor: "rgba(161, 206, 220, 0.2)",
		marginVertical: 12,
	},
	totalLabel: {
		fontSize: 20,
	},
	totalValue: {
		fontSize: 24,
		color: "#A1CEDC",
	},
	section: {
		marginBottom: 24,
	},
	sectionTitle: {
		fontSize: 20,
		color: "#A1CEDC",
		marginBottom: 16,
	},
	paymentMethods: {
		gap: 12,
		marginBottom: 16,
	},
	paymentMethod: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		borderRadius: 12,
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
	},
	paymentMethodActive: {
		backgroundColor: "rgba(161, 206, 220, 0.2)",
		borderColor: "#A1CEDC",
	},
	paymentMethodText: {
		marginLeft: 12,
		fontSize: 16,
	},
	cardRow: {
		flexDirection: "row",
		gap: 12,
	},
	cardInput: {
		flex: 1,
	},
	paymentButton: {
		marginTop: 8,
		marginBottom: 32,
	},
});

