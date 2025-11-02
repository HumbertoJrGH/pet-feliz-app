import { StyleSheet, View, ScrollView } from "react-native"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { TabPill } from "@/components/tab-pill"
import { Link } from "expo-router"
import { InputField } from "@/components/input-field"
import { QuickAccessCard } from "@/components/quick-access-card"
import { EmptyImage } from "@/components/ui/Card"

export default function HomeScreen() {
	const cards = [
		{ id: 1, label: "Serviços", icon: "pets", href: "cardDetails" },
		{
			id: 2,
			label: "Produtos",
			icon: "shopping-cart",
			href: "cardDetails",
		},
		{ id: 3, label: "Fidelidade", icon: "", href: "/" },
		{ id: 4, label: "Perfil", icon: "manage-accounts", href: "profile" },
	]

	return (
		<ThemedView style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.componentSection}>
					<InputField
						placeholder="Pesquisar"
						icon="search"
						iconPosition="right"
					/>
				</View>

				<View style={styles.componentSection}>
					<EmptyImage
						style={{ width: "100%", height: 200, borderRadius: 5 }}
					/>
				</View>

				<View style={styles.filterOptions}>
					<TabPill title="Tudo" isActive />
					<TabPill title="Banho" />
					<TabPill title="Tosa" />
					<TabPill title="Consulta" />
				</View>

				<ThemedText type="title" style={styles.title}>
					Acesso rápido
				</ThemedText>

				<View style={styles.quickAccessRow}>
					{cards.map((card) => (
						<Link key={card.id} href={card.href} asChild>
							<QuickAccessCard
								icon={card.icon}
								label={card.label}
								comingSoon={card.label === "Fidelidade"}
							/>
						</Link>
					))}
				</View>
			</ScrollView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	componentSection: {
		marginBottom: 16,
		gap: 12,
	},
	mainContainer: {
		padding: 16,
		paddingTop: 32,
		height: "100%",
	},
	filterOptions: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 2,
		marginBottom: 20,
	},
	title: {
		color: "#A1CEDC",
		fontSize: 20,
		marginBottom: 12,
	},
	quickAccessRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
})
