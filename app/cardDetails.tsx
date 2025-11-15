import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { TabPill } from "@/components/tab-pill";
import Card from "@/components/ui/Card";
import { Button } from "@/components/buttons/general-button";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { petImages } from "@/utils/imageHelper";
import { RemoteImage } from "@/components/remote-image";

type Item = {
	id: string;
	name: string;
	description: string;
	price: number;
	image?: string | number;
	category: string;
};

const mockProducts: Item[] = [
	{
		id: "1",
		name: "Ração Premium para Cães",
		description: "Ração completa e balanceada para cães adultos de todas as raças",
		price: 89.90,
		image: petImages.product1,
		category: "Alimentação",
	},
	{
		id: "2",
		name: "Brinquedo Interativo",
		description: "Brinquedo que estimula a atividade mental do seu pet",
		price: 45.00,
		image: petImages.product2,
		category: "Brinquedos",
	},
	{
		id: "3",
		name: "Coleira Antipulgas",
		description: "Proteção eficaz contra pulgas e carrapatos por até 8 meses",
		price: 32.50,
		image: petImages.product3,
		category: "Higiene",
	},
	{
		id: "4",
		name: "Shampoo para Gatos",
		description: "Shampoo suave e hipoalergênico para gatos de todas as idades",
		price: 28.90,
		image: petImages.product4,
		category: "Higiene",
	},
];

const mockServices: Item[] = [
	{
		id: "1",
		name: "Banho e Tosa",
		description: "Serviço completo de banho, tosa higiênica e secagem",
		price: 60.00,
		image: petImages.service1,
		category: "Estética",
	},
	{
		id: "2",
		name: "Consulta Veterinária",
		description: "Consulta completa com exame físico e orientações",
		price: 120.00,
		image: petImages.service2,
		category: "Saúde",
	},
	{
		id: "3",
		name: "Vacinação",
		description: "Aplicação de vacinas obrigatórias e opcionais",
		price: 80.00,
		image: petImages.service3,
		category: "Saúde",
	},
	{
		id: "4",
		name: "Hospedagem",
		description: "Hospedagem com cuidados 24h para seu pet",
		price: 150.00,
		image: petImages.service4,
		category: "Hospedagem",
	},
];

export default function CardDetailsScreen() {
	const params = useLocalSearchParams();
	const type = params.type as string || "produtos";
	const isProducts = type === "produtos" || !type;
	
	const [activeFilter, setActiveFilter] = useState("Todos");
	const [searchQuery, setSearchQuery] = useState("");
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";

	const items = isProducts ? mockProducts : mockServices;
	const categories = ["Todos", ...new Set(items.map(item => item.category))];

	const filteredItems = items.filter(item => {
		const matchesCategory = activeFilter === "Todos" || item.category === activeFilter;
		const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const handleItemPress = (item: Item) => {
		router.push({
			pathname: "/checkout",
			params: {
				id: item.id,
				name: item.name,
				price: item.price.toString(),
				type: isProducts ? "produto" : "serviço",
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
						{isProducts ? "Produtos" : "Serviços"}
					</ThemedText>
				</View>

				{/* Busca */}
				<View style={styles.searchSection}>
					<InputField
						placeholder={`Buscar ${isProducts ? "produtos" : "serviços"}...`}
						icon="search"
						iconPosition="right"
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
				</View>

				{/* Filtros */}
				<View style={styles.filterSection}>
					<ScrollView 
						horizontal 
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.filterContainer}
					>
						{categories.map((category) => (
							<TabPill
								key={category}
								title={category}
								isActive={activeFilter === category}
								onPress={() => setActiveFilter(category)}
							/>
						))}
					</ScrollView>
				</View>

				{/* Lista de itens */}
				<View style={styles.itemsSection}>
					{filteredItems.map((item) => (
						<Card
							key={item.id}
							picture={
								<RemoteImage
									source={item.image || require("@/assets/images/default.jpg")}
									fallback={require("@/assets/images/default.jpg")}
									style={styles.itemImage}
									resizeMode="cover"
								/>
							}
							action={
								<Button
									title={isProducts ? "Adicionar ao carrinho" : "Agendar"}
									onPress={() => handleItemPress(item)}
									variant="primary"
								/>
							}
						>
							<View style={styles.itemHeader}>
								<ThemedText type="defaultSemiBold" style={styles.itemName}>
									{item.name}
								</ThemedText>
								{item.id === "1" && (
									<View style={styles.discountBadge}>
										<MaterialIcons name="local-offer" size={14} color="#FFFFFF" />
										<ThemedText type="defaultSemiBold" style={styles.discountText}>
											-20%
										</ThemedText>
									</View>
								)}
							</View>
							<ThemedText type="default" style={styles.itemDescription}>
								{item.description}
							</ThemedText>
							<View style={styles.itemFooter}>
								<View>
									{item.id === "1" && (
										<ThemedText type="subtitle" style={styles.oldPrice}>
											R$ {(item.price * 1.25).toFixed(2).replace(".", ",")}
										</ThemedText>
									)}
									<ThemedText type="title" style={styles.itemPrice}>
										R$ {item.price.toFixed(2).replace(".", ",")}
									</ThemedText>
								</View>
								<View style={styles.categoryBadge}>
									<MaterialIcons name="category" size={16} color="#A1CEDC" />
									<ThemedText type="subtitle" style={styles.itemCategory}>
										{item.category}
									</ThemedText>
								</View>
							</View>
						</Card>
					))}
				</View>
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
	searchSection: {
		marginBottom: 16,
	},
	filterSection: {
		marginBottom: 24,
	},
	filterContainer: {
		paddingRight: 16,
	},
	itemsSection: {
		gap: 16,
	},
	itemImage: {
		width: "100%",
		height: 200,
	},
	itemHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 8,
		gap: 8,
	},
	itemName: {
		fontSize: 20,
		flex: 1,
	},
	discountBadge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FF6B6B",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 8,
		gap: 4,
	},
	discountText: {
		fontSize: 12,
		color: "#FFFFFF",
	},
	itemDescription: {
		fontSize: 14,
		opacity: 0.7,
		marginBottom: 12,
		lineHeight: 20,
	},
	itemFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginTop: 8,
	},
	oldPrice: {
		fontSize: 14,
		textDecorationLine: "line-through",
		opacity: 0.5,
		marginBottom: 2,
	},
	itemPrice: {
		fontSize: 24,
		color: "#A1CEDC",
	},
	categoryBadge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "rgba(161, 206, 220, 0.1)",
		paddingHorizontal: 10,
		paddingVertical: 6,
		borderRadius: 8,
		gap: 4,
	},
	itemCategory: {
		fontSize: 12,
		color: "#A1CEDC",
	},
});
