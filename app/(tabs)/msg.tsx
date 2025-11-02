import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import { ThemedView } from "@/components/themed-view"
import { InputField } from "@/components/input-field"

const messages = [
  { id: 1, text: 'Oi!', sender: 'me' },
  { id: 2, text: 'Quero agendar um atendimento', sender: 'me' },
  { id: 3, text: 'Olá! Temos um horário disponível às 17:00.', sender: 'other' },
  { id: 4, text: 'Ótimo! Pode agendar, por favor.', sender: 'me' },
  { id: 5, text: 'Agendamento confimado, 17:00', sender: 'other' },
  { id: 6, text: 'Obrigado!', sender: 'me' },
];

const Messages = () => {
  return (
    <ScrollView style={styles.container}>
      {messages.map((message) => (
        <View
          key={message.id}
          style={[
            styles.messageContainer,
            message.sender === 'me' ? styles.myMessage : styles.otherMessage,
          ]}
        >
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default function MsgScreen() {
	return (
		<ThemedView style={styles.mainContainer}>
			<View style={styles.user}>
				<Image
					source={require("@/assets/images/default.jpg")}
					style={styles.userImage}
				/>
				<Text style={styles.userName}>Atendente</Text>
				<View style={styles.onlineDot} />
			</View>
			<Messages />
			<View style={styles.textInput}>
				<InputField
					placeholder="Digite uma mensagem"
					icon="send"
					iconPosition="right"
				/>
			</View>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		height: "100%",
	},
	user: {
		padding: "2%",
		height: "8%",
		flexDirection: "row",
		alignItems: "center",
		gap: "2%",
		backgroundColor: "rgb(10, 132, 255)",
	},
	userImage: {
		width: "10%",
		height: "110%",
		borderRadius: "80%",
	},
	userName: {
		color: "white",
		fontSize: 22,
		fontWeight: "bold",
	},
	onlineDot: {
		position: "absolute",
		width: 15,
		height: 15,
		right: 15,
		borderRadius: "100%",
		backgroundColor: "#00C851",
	},
	textInput: {
		position: "absolute",
		bottom: 5,
		width: "100%",
		gap: "2%",
		paddingHorizontal: "2%",
		flexDirection: "row",
	},
	container: {
		flex: 1,
		padding: 10,
	},
	messageContainer: {
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		maxWidth: "80%",
	},
	myMessage: {
		backgroundColor: "#DCF8C6",
		alignSelf: "flex-end",
	},
	otherMessage: {
		backgroundColor: "#E5E5EA",
		alignSelf: "flex-start",
	},
	messageText: {
		fontSize: 16,
	},
})
