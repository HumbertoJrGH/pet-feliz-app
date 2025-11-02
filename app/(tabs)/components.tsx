import { StyleSheet, View, ScrollView, Text } from "react-native"

import Internal from "@/components/internal"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { Button } from "@/components/buttons/general-button"
import Card from "@/components/ui/Card"
import { InputField } from "@/components/input-field"
import { PrimaryButton } from "@/components/primary-button"
import { PasswordInput } from "@/components/password-input"
import { QuickAccessCard } from "@/components/quick-access-card"
import { TabPill } from "@/components/tab-pill"
import { LinkText } from "@/components/link-text"
import { SocialIcon } from "@/components/social-icon"
import { BottomNavigation } from "@/components/bottom-navigation"
import { DragInstruction } from "@/components/drag-instruction"

export default function ComponentsScreen() {
	return (
		<ThemedView style={styles.titleContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Internal />
				
				<ThemedText type="title" style={styles.sectionTitle}>
					Botões
				</ThemedText>
				<View style={styles.componentSection}>
					<Button
						title="Botão Geral"
						onPress={() => {}}
					/>
					<Button
						title="Botão Secundário"
						variant="secondary"
						onPress={() => {}}
					/>
					<PrimaryButton
						title="Botão Primário"
						onPress={() => {}}
					/>
				</View>

				<ThemedText type="title" style={styles.sectionTitle}>
					Inputs
				</ThemedText>
				<View style={styles.componentSection}>
					<InputField
						placeholder="Campo de entrada"
						icon="person"
						iconPosition="right"
					/>
					<InputField
						placeholder="Campo com ícone à esquerda"
						icon="email"
						iconPosition="left"
					/>
					<PasswordInput
						placeholder="Senha"
						icon="lock"
					/>
				</View>

				<ThemedText type="title" style={styles.sectionTitle}>
					Cards
				</ThemedText>
				<View style={styles.componentSection}>
					<Card>
						<Text style={{ color: "#B9C2D3" }}>Card simples</Text>
						<Button title="Ação" onPress={() => {}} />
					</Card>
					<Card picture>
						<Text style={{ color: "#B9C2D3" }}>Card com imagem</Text>
						<Button title="Ver mais" onPress={() => {}} />
					</Card>
					<View style={styles.quickAccessRow}>
						<QuickAccessCard
							icon="pets"
							label="Acessar"
							onPress={() => {}}
						/>
						<QuickAccessCard
							icon="favorite"
							label="Em breve"
							comingSoon={true}
						/>
					</View>
				</View>

				<ThemedText type="title" style={styles.sectionTitle}>
					Navegação e Tabs
				</ThemedText>
				<View style={styles.componentSection}>
					<View style={styles.pillRow}>
						<TabPill title="Ativo" isActive={true} />
						<TabPill title="Inativo" isActive={false} />
						<TabPill title="Outro" isActive={false} />
					</View>
					<BottomNavigation activeTab="home" onTabPress={() => {}} />
				</View>

				<ThemedText type="title" style={styles.sectionTitle}>
					Links e Textos
				</ThemedText>
				<View style={styles.componentSection}>
					<LinkText onPress={() => {}}>Clique aqui para ver mais</LinkText>
					<DragInstruction />
				</View>

				<ThemedText type="title" style={styles.sectionTitle}>
					Ícones Sociais
				</ThemedText>
				<View style={styles.componentSection}>
					<View style={styles.socialRow}>
						<SocialIcon type="facebook" onPress={() => {}} />
						<SocialIcon type="google" onPress={() => {}} />
						<SocialIcon type="linkedin" onPress={() => {}} />
						<SocialIcon type="twitter" onPress={() => {}} />
					</View>
				</View>

				<View style={{ height: 40 }} />
			</ScrollView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		padding: 16,
		paddingTop: 32,
		height: "100%",
		flexDirection: "column",
		gap: 8,
	},
	sectionTitle: {
		marginTop: 24,
		marginBottom: 16,
	},
	componentSection: {
		marginBottom: 16,
		gap: 12,
	},
	quickAccessRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	pillRow: {
		flexDirection: "row",
		marginBottom: 16,
	},
	socialRow: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 16,
	},
})
