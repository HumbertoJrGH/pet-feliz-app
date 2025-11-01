import { Button, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function TabTwoScreen() {
	return (
		<ThemedView style={styles.titleContainer}>
			<ThemedText type="title">
				Componentes Internos
			</ThemedText>
			<View>
				<Button
					title="Botão"
					onPress={() => { }}
				/>
			</View>
			<ThemedText type="title">
				Componentes Externos
			</ThemedText>
			<View>				
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		padding: 16,
		paddingTop: 32,
		height: "100%",
		flexDirection: "column",
		gap: 8,
	},
});
