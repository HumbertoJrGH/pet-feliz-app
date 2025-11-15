import { InputField } from "@/components/input-field"
import { QuickAccessCard } from "@/components/quick-access-card"
import { TabPill } from "@/components/tab-pill"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { RemoteImage } from "@/components/remote-image"
import Card from "@/components/ui/Card"
import { Link, RelativePathString, router } from "expo-router"
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { petImages } from "@/utils/imageHelper"
import { useColorScheme } from "@/hooks/use-color-scheme"
import { Logo } from "@/components/logo"

const promotions = [
	{
		id: "1",
		title: "Banho e Tosa",
		subtitle: "Desconto de 20%",
		image: petImages.service1,
		href: "../cardDetails?type=servicos" as RelativePathString,
	},
	{
		id: "2",
		title: "Ração Premium",
		subtitle: "Frete grátis",
		image: petImages.product1,
		href: "../cardDetails?type=produtos" as RelativePathString,
	},
];

const highlights = [
	{
		id: "1",
		icon: "local-hospital" as const,
		title: "Consulta Veterinária",
		description: "Agende agora",
		color: "#A1CEDC",
	},
	{
		id: "2",
		icon: "favorite" as const,
		title: "Programa Fidelidade",
		description: "Ganhe pontos",
		color: "#90C695",
	},
	{
		id: "3",
		icon: "pets" as const,
		title: "Adoção",
		description: "Veja os pets",
		color: "#ABC24C",
	},
];

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";
	
	const cards = [
		{ id: 1, label: "Serviços", icon: "pets", href: "../cardDetails?type=servicos" as RelativePathString },
		{
			id: 2,
			label: "Produtos",
			icon: "shopping-cart",
			href: "../cardDetails?type=produtos" as RelativePathString,
		},
		{ id: 3, label: "Fidelidade", icon: "", href: "/" as RelativePathString },
		{ id: 4, label: "Perfil", icon: "manage-accounts", href: "profile" as RelativePathString },
	]

	return (
		<ThemedView style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Header com saudação */}
				<View style={styles.header}>
					<View style={styles.headerContent}>
						<View style={styles.greetingContainer}>
							<ThemedText type="title" style={styles.greeting}>
								Olá!
							</ThemedText>
							<ThemedText type="subtitle" style={styles.subGreeting}>
								Bem-vindo ao Pet Feliz
							</ThemedText>
						</View>
						<View style={styles.headerIcon}>
							<Logo width={40} height={40} />
						</View>
					</View>
				</View>

				{/* Campo de busca */}
				<View style={styles.componentSection}>
					<InputField
						placeholder="Pesquisar produtos, serviços..."
						icon="search"
						iconPosition="right"
					/>
				</View>

				{/* Banner principal com imagem */}
				<TouchableOpacity 
					style={styles.bannerContainer}
					activeOpacity={0.9}
					onPress={() => router.push("../cardDetails?type=servicos")}
				>
					<RemoteImage
						source={petImages.feed1}
						fallback={require("@/assets/images/default.jpg")}
						style={styles.bannerImage}
						resizeMode="cover"
					/>
					<View style={styles.bannerOverlay}>
						<ThemedText type="title" style={styles.bannerTitle}>
							Cuidados Especiais
						</ThemedText>
						<ThemedText type="default" style={styles.bannerSubtitle}>
							Para o seu melhor amigo 🐾
						</ThemedText>
					</View>
				</TouchableOpacity>

				{/* Cards de destaque */}
				<ThemedText type="title" style={styles.sectionTitle}>
					Destaques
				</ThemedText>
				<View style={styles.highlightsSection}>
					{highlights.map((highlight) => (
						<TouchableOpacity
							key={highlight.id}
							style={[styles.highlightCard, { backgroundColor: `${highlight.color}15` }]}
							activeOpacity={0.7}
						>
							<View style={[styles.highlightIcon, { backgroundColor: highlight.color }]}>
								<MaterialIcons name={highlight.icon} size={32} color="#FFFFFF" />
							</View>
							<ThemedText type="defaultSemiBold" style={styles.highlightTitle}>
								{highlight.title}
							</ThemedText>
							<ThemedText type="subtitle" style={styles.highlightDescription}>
								{highlight.description}
							</ThemedText>
						</TouchableOpacity>
					))}
				</View>

				{/* Promoções */}
				<ThemedText type="title" style={styles.sectionTitle}>
					Promoções
				</ThemedText>
				<ScrollView 
					horizontal 
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.promotionsContainer}
				>
					{promotions.map((promo) => (
						<Link key={promo.id} href={promo.href} asChild>
							<TouchableOpacity activeOpacity={0.9}>
								<Card
									picture={
										<RemoteImage
											source={promo.image}
											fallback={require("@/assets/images/default.jpg")}
											style={styles.promoImage}
											resizeMode="cover"
										/>
									}
								>
									<ThemedText type="defaultSemiBold" style={styles.promoTitle}>
										{promo.title}
									</ThemedText>
									<ThemedText type="subtitle" style={styles.promoSubtitle}>
										{promo.subtitle}
									</ThemedText>
								</Card>
							</TouchableOpacity>
						</Link>
					))}
				</ScrollView>

				{/* Filtros de serviços */}
				<ThemedText type="title" style={styles.sectionTitle}>
					Serviços
				</ThemedText>
				<View style={styles.filterOptions}>
					<TabPill title="Tudo" isActive />
					<TabPill title="Banho" />
					<TabPill title="Tosa" />
					<TabPill title="Consulta" />
				</View>

				{/* Acesso rápido */}
				<ThemedText type="title" style={styles.sectionTitle}>
					Acesso rápido
				</ThemedText>

				<View style={styles.quickAccessRow}>
					{cards.map((card) => 
						<Link key={card.id} href={card.href} asChild>
							<QuickAccessCard
								icon={card.icon}
								label={card.label}
								comingSoon={card.label === "Fidelidade"}
							/>
						</Link>
					)}
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
	header: {
		marginBottom: 24,
	},
	headerContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	greetingContainer: {
		flex: 1,
	},
	greeting: {
		fontSize: 32,
		color: "#A1CEDC",
		marginBottom: 6,
		fontWeight: "700",
		letterSpacing: -0.5,
	},
	subGreeting: {
		fontSize: 17,
		opacity: 0.8,
		fontWeight: "500",
	},
	headerIcon: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: "#A1CEDC15",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 16,
	},
	logoIcon: {
		width: 40,
		height: 40,
	},
	bannerContainer: {
		width: "100%",
		height: 220,
		borderRadius: 16,
		overflow: "hidden",
		marginBottom: 24,
		position: "relative",
	},
	bannerImage: {
		width: "100%",
		height: "100%",
	},
	bannerOverlay: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		padding: 20,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	bannerTitle: {
		fontSize: 24,
		color: "#FFFFFF",
		marginBottom: 4,
	},
	bannerSubtitle: {
		fontSize: 16,
		color: "#FFFFFF",
		opacity: 0.9,
	},
	highlightsSection: {
		flexDirection: "row",
		gap: 12,
		marginBottom: 24,
	},
	highlightCard: {
		flex: 1,
		padding: 16,
		borderRadius: 16,
		alignItems: "center",
		minHeight: 140,
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.2)",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	highlightIcon: {
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 12,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},
	highlightTitle: {
		fontSize: 15,
		textAlign: "center",
		marginBottom: 6,
		fontWeight: "600",
	},
	highlightDescription: {
		fontSize: 13,
		opacity: 0.8,
		textAlign: "center",
	},
	sectionTitle: {
		color: "#A1CEDC",
		fontSize: 20,
		marginBottom: 12,
		marginTop: 8,
	},
	promotionsContainer: {
		paddingRight: 16,
		gap: 16,
		marginBottom: 24,
	},
	promoImage: {
		width: 300,
		height: 180,
		borderRadius: 20,
	},
	promoTitle: {
		fontSize: 18,
		marginBottom: 4,
	},
	promoSubtitle: {
		fontSize: 14,
		color: "#A1CEDC",
	},
	filterOptions: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 2,
		marginBottom: 20,
	},
	quickAccessRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
		marginBottom: 32,
	},
})
