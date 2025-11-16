import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { Button } from "@/components/buttons/general-button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";

export default function ProfileScreen() {
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";

	return (
		<ThemedView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Header com imagem de perfil */}
				<View style={styles.header}>
					<View style={styles.avatarContainer}>
						<Image
							source={require("@/assets/images/default.jpg")}
							style={styles.avatar}
						/>
						<TouchableOpacity style={styles.editAvatarButton}>
							<MaterialIcons name="camera-alt" size={20} color="#FFFFFF" />
						</TouchableOpacity>
					</View>
					<View style={styles.userInfo}>
						<ThemedText type="title" style={styles.userName}>
							 Usuário
						</ThemedText>
						<ThemedText type="subtitle" style={styles.userEmail}>
							usuário@dev.com
						</ThemedText>
						<View style={styles.badgeContainer}>
							<View style={styles.badge}>
								<MaterialIcons name="star" size={16} color="#FFD700" />
								<ThemedText type="defaultSemiBold" style={styles.badgeText}>
									Cliente VIP
								</ThemedText>
							</View>
						</View>
					</View>
				</View>

				{/* Estatísticas */}
				<View style={styles.statsContainer}>
					<View style={styles.statCard}>
						<MaterialIcons name="shopping-bag" size={24} color="#A1CEDC" />
						<ThemedText type="title" style={styles.statValue}>
							12
						</ThemedText>
						<ThemedText type="subtitle" style={styles.statLabel}>
							Compras
						</ThemedText>
					</View>
					<View style={styles.statCard}>
						<MaterialIcons name="event" size={24} color="#90C695" />
						<ThemedText type="title" style={styles.statValue}>
							5
						</ThemedText>
						<ThemedText type="subtitle" style={styles.statLabel}>
							Agendamentos
						</ThemedText>
					</View>
					<View style={styles.statCard}>
						<MaterialIcons name="loyalty" size={24} color="#ABC24C" />
						<ThemedText type="title" style={styles.statValue}>
							250
						</ThemedText>
						<ThemedText type="subtitle" style={styles.statLabel}>
							Pontos
						</ThemedText>
					</View>
				</View>

				{/* Seção de edição */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Meus dados
					</ThemedText>

					<InputField 
						placeholder="Nome completo" 
						icon="person" 
						iconPosition="left" 
						value="Usuário" 
					/>
					<InputField 
						placeholder="E-mail" 
						icon="email" 
						iconPosition="left" 
						value="usuario@dev.com" 
						keyboardType="email-address"
					/>
					<InputField 
						placeholder="Telefone" 
						icon="phone" 
						iconPosition="left" 
						value="(11) 99999-9999" 
						keyboardType="phone-pad"
					/>
					<InputField 
						placeholder="Endereço" 
						icon="home" 
						iconPosition="left" 
						value="Rua das Flores, 123" 
					/>

					<Button 
						title="Salvar alterações" 
						onPress={() => {}} 
						variant="primary"
					/>
				</View>

				{/* Seção de opções */}
				<View style={styles.section}>
					<ThemedText type="title" style={styles.sectionTitle}>
						Configurações
					</ThemedText>

					<View style={styles.optionList}>
						<OptionItem 
							label="Fazer Login" 
							icon="login" 
							iconColor="#A1CEDC"
							onPress={() => router.push("/login")}
						/>
						<OptionItem 
							label="Criar Conta" 
							icon="person-add" 
							iconColor="#90C695"
							onPress={() => router.push("/signup")}
						/>
						<View style={styles.divider} />
						<OptionItem 
							label="Notificações" 
							icon="notifications" 
							iconColor={iconColor}
							onPress={() => {}}
						/>
						<OptionItem 
							label="Privacidade" 
							icon="lock" 
							iconColor={iconColor}
							onPress={() => {}}
						/>
						<OptionItem 
							label="Ajuda e Suporte" 
							icon="help-outline" 
							iconColor={iconColor}
							onPress={() => {}}
						/>
						<OptionItem 
							label="Sobre o app" 
							icon="info-outline" 
							iconColor={iconColor}
							onPress={() => {}}
						/>
						<OptionItem 
							label="Sair" 
							icon="logout" 
							iconColor="#ff4d4d"
							isLogout 
							onPress={() => router.push("/login")}
						/>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

function OptionItem({
	label,
	icon,
	iconColor,
	isLogout = false,
	onPress,
}: {
	label: string;
	icon: keyof typeof MaterialIcons.glyphMap;
	iconColor: string;
	isLogout?: boolean;
	onPress?: () => void;
}) {
	return (
		<TouchableOpacity 
			style={[styles.optionItem, isLogout && styles.logoutItem]}
			onPress={onPress}
			activeOpacity={0.7}
		>
			<View style={styles.optionContent}>
				<MaterialIcons 
					name={icon} 
					size={24} 
					color={iconColor} 
					style={styles.optionIcon}
				/>
				<ThemedText
					type="defaultSemiBold"
					style={[styles.optionLabel, isLogout && styles.logoutLabel]}
				>
					{label}
				</ThemedText>
			</View>
			<MaterialIcons 
				name="chevron-right" 
				size={24} 
				color={isLogout ? "#ff4d4d" : iconColor} 
			/>
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
		marginBottom: 32,
	},
	avatarContainer: {
		position: "relative",
		marginRight: 16,
	},
	avatar: {
		width: 90,
		height: 90,
		borderRadius: 45,
		borderWidth: 3,
		borderColor: "#A1CEDC",
	},
	editAvatarButton: {
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: "#A1CEDC",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#FFFFFF",
	},
	userInfo: {
		flex: 1,
		flexDirection: "column",
	},
	userName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 4,
	},
	userEmail: {
		fontSize: 16,
		opacity: 0.7,
		marginBottom: 8,
	},
	badgeContainer: {
		marginTop: 4,
	},
	badge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "rgba(255, 215, 0, 0.2)",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 12,
		alignSelf: "flex-start",
		gap: 6,
	},
	badgeText: {
		fontSize: 12,
		color: "#FFD700",
	},
	statsContainer: {
		flexDirection: "row",
		gap: 12,
		marginBottom: 32,
		paddingHorizontal: 4,
	},
	statCard: {
		flex: 1,
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
	},
	statValue: {
		fontSize: 24,
		color: "#A1CEDC",
		marginTop: 8,
		marginBottom: 4,
	},
	statLabel: {
		fontSize: 12,
		opacity: 0.7,
	},
	section: {
		marginBottom: 32,
	},
	sectionTitle: {
		fontSize: 20,
		color: "#A1CEDC",
		marginBottom: 16,
	},
	optionList: {
		gap: 12,
	},
	optionItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderRadius: 12,
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
	},
	optionContent: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	optionIcon: {
		marginRight: 12,
	},
	optionLabel: {
		fontSize: 16,
	},
	logoutItem: {
		backgroundColor: "rgba(255, 77, 77, 0.1)",
		borderColor: "rgba(255, 77, 77, 0.2)",
	},
	logoutLabel: {
		color: "#ff4d4d",
	},
	divider: {
		height: 1,
		backgroundColor: "rgba(161, 206, 220, 0.2)",
		marginVertical: 8,
	},
});
