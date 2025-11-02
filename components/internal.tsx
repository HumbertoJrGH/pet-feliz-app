import { Text, View } from "react-native"
import { Button } from "./buttons/general-button"
import { ThemedText } from "./themed-text"
import Card from "./ui/Card"

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
			<Card picture>
				<Text style={{ color: "#B9C2D3" }}>Teste</Text>
				<Button title="teste" />
			</Card>
		</View>
	</View>
}