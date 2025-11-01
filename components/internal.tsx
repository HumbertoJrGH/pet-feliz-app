import { Button, Image, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

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
				<Text style={{ color: "#B9C2D3" }}>Yeah</Text>
			</Card>
		</View>
	</View>
}

export function EmptyImage(props: any) {
	return <Image
		source={require("@/assets/images/default.jpg")}
		{...props}
	/>
}

export function Card({ picture, children, ...props }: {
	picture?: boolean;
	children: React.ReactNode;
}) {
	return <View style={{ borderWidth: 1, borderRadius: 20, marginTop: 16, borderColor: "#B9C2D377", backgroundColor: "#B9C2D311", overflow: "hidden" }}>
		{picture
			? <EmptyImage style={{ width: "100%", height: 256, opacity: 0.9 }} />
			: <></>}
		<View style={{ padding: 16 }}>{children}</View>
	</View>
}