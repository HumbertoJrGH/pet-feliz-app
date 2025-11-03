import { Image } from "expo-image"
import { Alert, FlatList, Pressable, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { ThemedText } from "./themed-text"
import Card from "./ui/Card"

const items = [
	{ id: "1", content: "Item 1" },
	{ id: "2", content: "Item 2" },
	{ id: "3", content: "Item 3" },
]

export default function Internal() {
	const buttonFunc = () => console.log("teste")
	return <View>
		<ThemedText type="title">
			Cards
		</ThemedText>

		<ThemedText type="subtitle">
			Card Normal
		</ThemedText>
		<View>
			<Card>
				<Text>Card de teste, veja a descrição a seguir:</Text>
				<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum eius cumque, cupiditate molestias ratione repellat at nostrum, praesentium eos deleniti itaque quam accusantium incidunt minus accusamus tempora maiores beatae.
					Pariatur cupiditate earum quibusdam error praesentium labore, nihil quia ipsa vel debitis eos voluptate, atque soluta natus at blanditiis, dolor molestiae rerum quos eum eaque architecto voluptatum nam? Exercitationem, veritatis!
					Maiores nulla quae quaerat. Corporis nam a ex omnis rem pariatur eos aliquid quibusdam saepe. Architecto similique, exercitationem ab minus iste perspiciatis possimus sunt quis quos nisi ut voluptatem molestias.</Text>
			</Card>
		</View>

		<View style={{ marginTop: 24 }}>
			<ThemedText type="subtitle">
				Cards com FlatList
			</ThemedText>
			<FlatList
				data={items}
				numColumns={2}
				keyExtractor={(i) => i.id}
				columnWrapperStyle={{ flex: 1, gap: 10 }}
				contentContainerStyle={{ gap: 10 }}
				renderItem={({ item, index }) => {
					return <View style={{ flex: 1 }}>
						<Card>
							<Text>{item.content}</Text>
						</Card>
					</View>
				}}
			/>
		</View>

		<View style={{ marginTop: 24 }}>
			<ThemedText type="subtitle">
				Card com ação
			</ThemedText>
			<Card
				action={<Button
					mode="contained"
					onPress={() => Alert.alert("Você apertou!", "Você apertou o botão.")}
				>
					<Text>Aperte</Text>
				</Button>}
			>
				<Text>Clique no botão para ver uma mágica.</Text>
			</Card>
		</View>

		<View style={{ marginTop: 24 }}>
			<ThemedText type="subtitle">
				Card com imagem
			</ThemedText>
			<Card picture={<Image source={require("@/assets/images/default.jpg")} style={{ width: "100%", height: 256, opacity: 0.9 }} />} >
				<Text>Veja a imagem acima.</Text>
			</Card>
		</View>

		<View style={{ marginTop: 24 }}>
			<ThemedText type="subtitle">
				Card com imagem interativa
			</ThemedText>
			<Text>Use o componente Pressable.</Text>
			<Card picture={<Pressable onPress={() => Alert.alert("Imagem apertada!", "Você apertou a imagem.")}>
				<Image
					source={require("@/assets/images/default.jpg")}
					style={{ width: "100%", height: 256, opacity: 0.9 }}
				/>
			</Pressable>
			} >
				<Text>Aperte a imagem acima.</Text>
			</Card>
		</View>

		<ThemedText type="title">
			Botões
		</ThemedText>
		<FlatList
			data={[
				{
					id: "0",
					comp: <Button onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão de Texto</Text>
					</Button>
				},
				{
					id: "1",
					comp: <Button mode="text" onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão de Texto (Declarado)</Text>
					</Button>
				},
				{
					id: "2",
					comp: <Button mode="contained" onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão Contido</Text>
					</Button>
				},
				{
					id: "3",
					comp: <Button mode="contained-tonal" onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão Tonal</Text>
					</Button>
				},
				{
					id: "4",
					comp: <Button mode="elevated" onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão Elevado</Text>
					</Button>
				},
				{
					id: "5",
					comp: <Button mode="outlined" onPress={buttonFunc} style={{ flex: 1 }}>
						<Text>Botão Demarcado</Text>
					</Button>
				},
			]}
			numColumns={2}
			keyExtractor={(i) => i.id}
			columnWrapperStyle={{ flex: 1, gap: 10 }}
			contentContainerStyle={{ gap: 10 }}
			renderItem={({ item }) => item.comp}
		/>
	</View >
}