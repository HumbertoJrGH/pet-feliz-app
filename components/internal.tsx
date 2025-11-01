import { Button, Image, Text, View } from "react-native"
import { ThemedText } from "./themed-text"

export default function Internal() {
	return <View>
		<ThemedText type="title">
			Componentes Internos
		</ThemedText>
		<View>
			<Button
				title="Botão"
				onPress={() => { }}
			/>
			<Card>

			</Card>
		</View>
	</View>
}


export function Card() {
	return <View style={{ borderWidth: 1, borderRadius: 20, marginTop: 16, borderColor: "#B9C2D3", backgroundColor: "#B9C2D333" }}>
		<Image
			source={require("@/assets/images/splash-icon.png")}
			style={{ width: "100%", height: 256 }}
		/>
		<Text style={{ padding: 16, color: "#fff" }}>Conteúdo do Card</Text>
	</View>
}