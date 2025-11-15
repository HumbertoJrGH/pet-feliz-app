import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/buttons/general-button";
import { router, useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PaymentSuccessScreen() {
	const params = useLocalSearchParams();
	const itemName = params.itemName as string || "Item";
	const itemPrice = params.itemPrice as string || "0";

	return (
		<ThemedView style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.successContainer}>
					<View style={styles.iconContainer}>
						<MaterialIcons name="check-circle" size={100} color="#90C695" />
					</View>
					
					<ThemedText type="title" style={styles.successTitle}>
						Pagamento realizado!
					</ThemedText>
					
					<ThemedText type="default" style={styles.successText}>
						Seu {itemName} foi {itemName.includes("Agendamento") ? "agendado" : "comprado"} com sucesso!
					</ThemedText>

					<View style={styles.detailsCard}>
						<View style={styles.detailRow}>
							<ThemedText type="default" style={styles.detailLabel}>
								Item:
							</ThemedText>
							<ThemedText type="defaultSemiBold" style={styles.detailValue}>
								{itemName}
							</ThemedText>
						</View>
						<View style={styles.detailRow}>
							<ThemedText type="default" style={styles.detailLabel}>
								Valor:
							</ThemedText>
							<ThemedText type="title" style={styles.detailValue}>
								R$ {parseFloat(itemPrice).toFixed(2).replace(".", ",")}
							</ThemedText>
						</View>
					</View>

					<ThemedText type="default" style={styles.instructionText}>
						Você receberá um e-mail de confirmação em breve.
					</ThemedText>

					<Button
						title="Voltar ao início"
						onPress={() => router.replace("/(tabs)")}
						variant="primary"
						style={styles.backButton}
					/>
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
	successContainer: {
		alignItems: "center",
		justifyContent: "center",
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
		marginBottom: 32,
		lineHeight: 24,
		opacity: 0.8,
	},
	detailsCard: {
		width: "100%",
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		borderRadius: 12,
		padding: 20,
		marginBottom: 24,
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
	},
	detailRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	detailLabel: {
		fontSize: 16,
		opacity: 0.7,
	},
	detailValue: {
		fontSize: 16,
		color: "#A1CEDC",
	},
	instructionText: {
		fontSize: 14,
		textAlign: "center",
		opacity: 0.7,
		marginBottom: 32,
		lineHeight: 20,
	},
	backButton: {
		width: "100%",
	},
});

