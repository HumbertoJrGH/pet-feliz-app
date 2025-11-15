import { StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { InputField } from "@/components/input-field";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";

type Conversation = {
	id: string;
	name: string;
	lastMessage: string;
	time: string;
	unread: number;
	avatar?: any;
	isOnline?: boolean;
};

type Message = {
	id: number;
	text: string;
	sender: "me" | "other";
	time: string;
};

const conversations: Conversation[] = [
	{
		id: "1",
		name: "Atendimento Pet Feliz",
		lastMessage: "Agendamento confirmado, 17:00",
		time: "14:30",
		unread: 0,
		avatar: require("@/assets/images/default.jpg"),
		isOnline: true,
	},
	{
		id: "2",
		name: "Veterinária Dr. Silva",
		lastMessage: "Lembre-se da vacinação do seu pet",
		time: "Ontem",
		unread: 2,
		avatar: require("@/assets/images/default.jpg"),
		isOnline: false,
	},
	{
		id: "3",
		name: "Pet Shop Central",
		lastMessage: "Seu pedido foi enviado!",
		time: "2 dias",
		unread: 0,
		avatar: require("@/assets/images/default.jpg"),
		isOnline: false,
	},
];

const messages: Message[] = [
	{ id: 1, text: "Oi!", sender: "me", time: "14:20" },
	{ id: 2, text: "Quero agendar um atendimento", sender: "me", time: "14:21" },
	{ id: 3, text: "Olá! Temos um horário disponível às 17:00.", sender: "other", time: "14:25" },
	{ id: 4, text: "Ótimo! Pode agendar, por favor.", sender: "me", time: "14:26" },
	{ id: 5, text: "Agendamento confirmado, 17:00", sender: "other", time: "14:30" },
	{ id: 6, text: "Obrigado!", sender: "me", time: "14:31" },
];

export default function MsgScreen() {
	const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
	const [messageText, setMessageText] = useState("");
	const colorScheme = useColorScheme();
	const iconColor = colorScheme === "dark" ? "#E5E5E5" : "#11181C";

	const handleSendMessage = () => {
		if (messageText.trim()) {
			// Aqui você enviaria a mensagem para a API
			setMessageText("");
		}
	};

	if (selectedConversation) {
		return (
			<ThemedView style={styles.mainContainer}>
				{/* Header da conversa */}
				<View style={styles.chatHeader}>
					<TouchableOpacity 
						style={styles.backButton}
						onPress={() => setSelectedConversation(null)}
					>
						<MaterialIcons name="arrow-back" size={24} color={iconColor} />
					</TouchableOpacity>
					<Image
						source={selectedConversation.avatar || require("@/assets/images/default.jpg")}
						style={styles.chatAvatar}
					/>
					<View style={styles.chatHeaderInfo}>
						<ThemedText type="defaultSemiBold" style={styles.chatName}>
							{selectedConversation.name}
						</ThemedText>
						<ThemedText type="subtitle" style={styles.chatStatus}>
							{selectedConversation.isOnline ? "Online" : "Offline"}
						</ThemedText>
					</View>
					{selectedConversation.isOnline && (
						<View style={styles.onlineDot} />
					)}
				</View>

				{/* Mensagens */}
				<ScrollView 
					style={styles.messagesContainer}
					contentContainerStyle={styles.messagesContent}
				>
					{messages.map((message) => (
						<View
							key={message.id}
							style={[
								styles.messageContainer,
								message.sender === "me" ? styles.myMessage : styles.otherMessage,
							]}
						>
							<ThemedText type="default" style={styles.messageText}>
								{message.text}
							</ThemedText>
							<ThemedText type="subtitle" style={styles.messageTime}>
								{message.time}
							</ThemedText>
						</View>
					))}
				</ScrollView>

				{/* Input de mensagem */}
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.messageInput}
						placeholder="Digite uma mensagem..."
						placeholderTextColor="#9BA1A6"
						value={messageText}
						onChangeText={setMessageText}
						multiline
					/>
					<TouchableOpacity 
						style={styles.sendButton}
						onPress={handleSendMessage}
						activeOpacity={0.7}
					>
						<MaterialIcons name="send" size={24} color="#FFFFFF" />
					</TouchableOpacity>
				</View>
			</ThemedView>
		);
	}

	return (
		<ThemedView style={styles.mainContainer}>
			<View style={styles.header}>
				<ThemedText type="title" style={styles.title}>
					Mensagens
				</ThemedText>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				{conversations.map((conversation) => (
					<TouchableOpacity
						key={conversation.id}
						style={styles.conversationItem}
						onPress={() => setSelectedConversation(conversation)}
						activeOpacity={0.7}
					>
						<View style={styles.avatarContainer}>
							<Image
								source={conversation.avatar || require("@/assets/images/default.jpg")}
								style={styles.avatar}
							/>
							{conversation.isOnline && (
								<View style={styles.onlineIndicator} />
							)}
						</View>
						<View style={styles.conversationInfo}>
							<View style={styles.conversationHeader}>
								<ThemedText type="defaultSemiBold" style={styles.conversationName}>
									{conversation.name}
								</ThemedText>
								<ThemedText type="subtitle" style={styles.conversationTime}>
									{conversation.time}
								</ThemedText>
							</View>
							<View style={styles.conversationFooter}>
								<ThemedText 
									type="default" 
									style={styles.lastMessage}
									numberOfLines={1}
								>
									{conversation.lastMessage}
								</ThemedText>
								{conversation.unread > 0 && (
									<View style={styles.unreadBadge}>
										<ThemedText type="defaultSemiBold" style={styles.unreadText}>
											{conversation.unread}
										</ThemedText>
									</View>
								)}
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingTop: 32,
	},
	header: {
		padding: 16,
		paddingBottom: 8,
	},
	title: {
		fontSize: 28,
		color: "#A1CEDC",
	},
	conversationItem: {
		flexDirection: "row",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(161, 206, 220, 0.1)",
	},
	avatarContainer: {
		position: "relative",
		marginRight: 12,
	},
	avatar: {
		width: 56,
		height: 56,
		borderRadius: 28,
	},
	onlineIndicator: {
		position: "absolute",
		bottom: 2,
		right: 2,
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: "#00C851",
		borderWidth: 2,
		borderColor: "#FFFFFF",
	},
	conversationInfo: {
		flex: 1,
		justifyContent: "center",
	},
	conversationHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 4,
	},
	conversationName: {
		fontSize: 16,
		flex: 1,
	},
	conversationTime: {
		fontSize: 12,
		opacity: 0.6,
	},
	conversationFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	lastMessage: {
		fontSize: 14,
		opacity: 0.7,
		flex: 1,
	},
	unreadBadge: {
		backgroundColor: "#A1CEDC",
		borderRadius: 12,
		minWidth: 24,
		height: 24,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 8,
		marginLeft: 8,
	},
	unreadText: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	chatHeader: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(161, 206, 220, 0.1)",
		backgroundColor: "rgba(161, 206, 220, 0.05)",
	},
	backButton: {
		marginRight: 12,
	},
	chatAvatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 12,
	},
	chatHeaderInfo: {
		flex: 1,
	},
	chatName: {
		fontSize: 16,
	},
	chatStatus: {
		fontSize: 12,
		opacity: 0.6,
	},
	onlineDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "#00C851",
	},
	messagesContainer: {
		flex: 1,
	},
	messagesContent: {
		padding: 16,
	},
	messageContainer: {
		padding: 12,
		borderRadius: 16,
		marginBottom: 8,
		maxWidth: "75%",
	},
	myMessage: {
		backgroundColor: "#A1CEDC",
		alignSelf: "flex-end",
		borderBottomRightRadius: 4,
	},
	otherMessage: {
		backgroundColor: "rgba(161, 206, 220, 0.2)",
		alignSelf: "flex-start",
		borderBottomLeftRadius: 4,
	},
	messageText: {
		fontSize: 15,
		color: "#11181C",
		marginBottom: 4,
	},
	messageTime: {
		fontSize: 11,
		opacity: 0.6,
		alignSelf: "flex-end",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		padding: 12,
		borderTopWidth: 1,
		borderTopColor: "rgba(161, 206, 220, 0.1)",
		backgroundColor: "rgba(161, 206, 220, 0.05)",
	},
	messageInput: {
		flex: 1,
		minHeight: 40,
		maxHeight: 100,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgba(161, 206, 220, 0.3)",
		paddingHorizontal: 16,
		paddingVertical: 10,
		marginRight: 8,
		fontSize: 15,
		backgroundColor: "#FFFFFF",
	},
	sendButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#A1CEDC",
		justifyContent: "center",
		alignItems: "center",
	},
});
