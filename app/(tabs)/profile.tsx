import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { Button } from "@/components/buttons/general-button";

export default function ProfileScreen() {
	return (
		<ThemedView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Header com imagem de perfil */}
				<View style={styles.header}>
					<Image
						source={require("@/assets/images/default.jpg")}
						style={styles.avatar}
					/>
					<View style={styles.userInfo}>
						<ThemedText type="title" style={styles.userName}>
							João da Silva
						</ThemedText>
						<ThemedText type="subtitle" style={styles.userEmail}>
							joao.silva@email.com
						</ThemedText>
					</View>
				</View>

				{/* Seção de edição */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Meus dados
					</ThemedText>

					<InputField placeholder="Nome completo" icon="person" iconPosition="left" value="João da Silva" />
					<InputField placeholder="E-mail" icon="email" iconPosition="left" value="joao.silva@email.com" />
					<InputField placeholder="Telefone" icon="phone" iconPosition="left" value="(11) 99999-9999" />
					<InputField placeholder="Endereço" icon="home" iconPosition="left" value="Rua das Flores, 123" />

					<Button title="Salvar alterações" onPress={() => { }} />
				</View>

				{/* Seção de opções */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Configurações
					</ThemedText>

					<View style={styles.optionList}>
						<OptionItem label="Notificações" icon="notifications" />
						<OptionItem label="Privacidade" icon="lock" />
						<OptionItem label="Ajuda e Suporte" icon="help" />
						<OptionItem label="Sair" icon="logout" isLogout />
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

function OptionItem({
	label,
	icon,
	isLogout = false,
}: {
	label: string;
	icon: string;
	isLogout?: boolean;
}) {
	return (
		<TouchableOpacity style={[styles.optionItem, isLogout && styles.logoutItem]}>
			<ThemedText
				type="defaultSemiBold"
				style={[styles.optionLabel, isLogout && styles.logoutLabel]}
			>
				{label}
			</ThemedText>
		</TouchableOpacity>
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
	avatar: {
		width: 90,
		height: 90,
		borderRadius: 45,
		marginRight: 16,
	},
	userInfo: {
		flexDirection: "column",
	},
	userName: {
		fontSize: 24,
		fontWeight: "bold",
	},
	userEmail: {
		fontSize: 16,
		opacity: 0.7,
	},
	section: {
		marginBottom: 32,
	},
	sectionTitle: {
		marginBottom: 16,
	},
	optionList: {
		gap: 12,
	},
	optionItem: {
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: "rgba(0,0,0,0.05)",
	},
	optionLabel: {
		fontSize: 16,
	},
	logoutItem: {
		backgroundColor: "#ff4d4d20",
	},
	logoutLabel: {
		color: "#ff4d4d",
	},
});
