import { Button, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";

export default function TabTwoScreen() {
	return (
		<ThemedView style={styles.titleContainer}>
			<IconSymbol
				size={310}
				color="#808080"
				name="chevron.left.forwardslash.chevron.right"
				style={styles.headerImage}
			/>
			<ThemedText
				type="title"
				style={{
					fontFamily: Fonts.rounded,
				}}>
				Componentes
			</ThemedText>
			<View>
				<Button
					title="Botão"
					onPress={() => {}}
				/>
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
		paddingTop: 32,
		height: "100%",
		flexDirection: "column",
		gap: 8,
	},
});
