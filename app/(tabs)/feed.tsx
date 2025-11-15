import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { TabPill } from "@/components/tab-pill";
import Card from "@/components/ui/Card";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { petImages } from "@/utils/imageHelper";
import { RemoteImage } from "@/components/remote-image";

type Post = {
	id: string;
	author: string;
	authorAvatar?: string;
	content: string;
	image?: string | number;
	likes: number;
	comments: number;
	isLiked: boolean;
	timestamp: string;
};

const mockPosts: Post[] = [
	{
		id: "1",
		author: "Pet Shop Feliz",
		content: "Dicas importantes para o cuidado com seu pet no verão! 🐾 Mantenha sempre água fresca disponível e evite passeios nos horários mais quentes do dia.",
		image: petImages.feed1,
		likes: 42,
		comments: 8,
		isLiked: false,
		timestamp: "2h atrás",
	},
	{
		id: "2",
		author: "Dr. Carlos Silva",
		content: "Lembre-se: a vacinação anual é essencial para a saúde do seu animal de estimação. Agende sua consulta! 🏥",
		image: petImages.feed2,
		likes: 28,
		comments: 5,
		isLiked: true,
		timestamp: "5h atrás",
	},
	{
		id: "3",
		author: "Adoção Responsável",
		content: "Temos vários animais esperando por um lar cheio de amor! Venha conhecer nossos peludinhos disponíveis para adoção. ❤️",
		image: petImages.feed3,
		likes: 156,
		comments: 23,
		isLiked: false,
		timestamp: "1 dia atrás",
	},
	{
		id: "4",
		author: "Pet Grooming",
		content: "Novos produtos de higiene chegaram! Agora com desconto especial para clientes fiéis. Venha conferir! 🛁",
		image: petImages.feed4,
		likes: 67,
		comments: 12,
		isLiked: false,
		timestamp: "2 dias atrás",
	},
];

export default function FeedScreen() {
	const [activeFilter, setActiveFilter] = useState("Todos");
	const [posts, setPosts] = useState<Post[]>(mockPosts);
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";

	const handleLike = (postId: string) => {
		setPosts(posts.map(post => 
			post.id === postId 
				? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
				: post
		));
	};

	const filters = ["Todos", "Cuidados", "Adoção", "Produtos", "Serviços"];

	// Filtrar posts baseado no filtro ativo
	const filteredPosts = posts.filter(post => {
		if (activeFilter === "Todos") return true;
		if (activeFilter === "Adoção" && (post.author.includes("Adoção") || post.content.toLowerCase().includes("adoção"))) return true;
		if (activeFilter === "Cuidados" && (post.content.toLowerCase().includes("cuidado") || post.content.toLowerCase().includes("dica"))) return true;
		if (activeFilter === "Produtos" && post.content.toLowerCase().includes("produto")) return true;
		if (activeFilter === "Serviços" && (post.content.toLowerCase().includes("serviço") || post.content.toLowerCase().includes("agende"))) return true;
		return false;
	});

	return (
		<ThemedView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Campo de busca */}
				<View style={styles.searchSection}>
					<InputField
						placeholder="Buscar no feed..."
						icon="search"
						iconPosition="right"
					/>
				</View>

				{/* Filtros */}
				<View style={styles.filterSection}>
					<ScrollView 
						horizontal 
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.filterContainer}
					>
						{filters.map((filter) => (
							<TabPill
								key={filter}
								title={filter}
								isActive={activeFilter === filter}
								onPress={() => setActiveFilter(filter)}
							/>
						))}
					</ScrollView>
				</View>

				{/* Lista de posts */}
				<View style={styles.postsSection}>
					{filteredPosts.length > 0 ? (
						filteredPosts.map((post) => (
							<PostCard
								key={post.id}
								post={post}
								iconColor={iconColor}
								onLike={() => handleLike(post.id)}
							/>
						))
					) : (
						<View style={styles.emptyContainer}>
							<ThemedText type="default" style={styles.emptyText}>
								Nenhum post encontrado
							</ThemedText>
						</View>
					)}
				</View>
			</ScrollView>
		</ThemedView>
	);
}

function PostCard({ 
	post, 
	iconColor, 
	onLike 
}: { 
	post: Post; 
	iconColor: string; 
	onLike: () => void;
}) {
	return (
		<Card
			picture={
				<RemoteImage
					source={post.image || require("@/assets/images/default.jpg")}
					fallback={require("@/assets/images/default.jpg")}
					style={styles.postImage}
					resizeMode="cover"
				/>
			}
		>
			<View style={styles.postHeader}>
				<View style={styles.authorInfo}>
					<View style={styles.avatarPlaceholder}>
						<MaterialIcons name="person" size={20} color={iconColor} />
					</View>
					<View style={styles.authorDetails}>
						<View style={styles.authorNameRow}>
							<ThemedText type="defaultSemiBold" style={styles.authorName}>
								{post.author}
							</ThemedText>
							{post.likes > 100 && (
								<View style={styles.trendingBadge}>
									<MaterialIcons name="trending-up" size={12} color="#FFFFFF" />
									<ThemedText type="defaultSemiBold" style={styles.trendingText}>
										Trending
									</ThemedText>
								</View>
							)}
						</View>
						<ThemedText type="subtitle" style={styles.timestamp}>
							{post.timestamp}
						</ThemedText>
					</View>
				</View>
			</View>

			<ThemedText type="default" style={styles.postContent}>
				{post.content}
			</ThemedText>

			<View style={styles.postActions}>
				<TouchableOpacity 
					style={styles.actionButton}
					onPress={onLike}
					activeOpacity={0.7}
				>
					<MaterialIcons 
						name={post.isLiked ? "favorite" : "favorite-border"} 
						size={24} 
						color={post.isLiked ? "#ff4d4d" : iconColor} 
					/>
					<ThemedText 
						type="default" 
						style={[styles.actionText, post.isLiked && styles.actionTextLiked]}
					>
						{post.likes}
					</ThemedText>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.actionButton}
					activeOpacity={0.7}
				>
					<MaterialIcons name="comment" size={24} color={iconColor} />
					<ThemedText type="default" style={styles.actionText}>
						{post.comments}
					</ThemedText>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.actionButton}
					activeOpacity={0.7}
				>
					<MaterialIcons name="share" size={24} color={iconColor} />
					<ThemedText type="default" style={styles.actionText}>
						Compartilhar
					</ThemedText>
				</TouchableOpacity>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 32,
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
	postsSection: {
		gap: 16,
	},
	emptyContainer: {
		padding: 32,
		alignItems: "center",
		justifyContent: "center",
	},
	emptyText: {
		fontSize: 16,
		opacity: 0.6,
		textAlign: "center",
	},
	postImage: {
		width: "100%",
		height: 200,
	},
	postHeader: {
		marginBottom: 12,
	},
	authorInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	avatarPlaceholder: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(161, 206, 220, 0.2)",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12,
	},
	authorDetails: {
		flex: 1,
	},
	authorNameRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		marginBottom: 2,
	},
	authorName: {
		fontSize: 16,
	},
	trendingBadge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FF6B6B",
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 8,
		gap: 4,
	},
	trendingText: {
		fontSize: 10,
		color: "#FFFFFF",
	},
	timestamp: {
		fontSize: 12,
		opacity: 0.6,
	},
	postContent: {
		fontSize: 15,
		lineHeight: 22,
		marginBottom: 16,
	},
	postActions: {
		flexDirection: "row",
		alignItems: "center",
		gap: 24,
		paddingTop: 12,
		borderTopWidth: 1,
		borderTopColor: "rgba(161, 206, 220, 0.2)",
	},
	actionButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	actionText: {
		fontSize: 14,
		opacity: 0.7,
	},
	actionTextLiked: {
		color: "#ff4d4d",
		opacity: 1,
	},
});