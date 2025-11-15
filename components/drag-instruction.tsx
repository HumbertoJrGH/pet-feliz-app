import React from "react"
import { View, Text, StyleSheet } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export function DragInstruction() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Arraste para o lado para preencher todos os campos</Text>
			<View style={styles.iconsContainer}>
				<MaterialIcons name="chevron-right" size={20} color="#9BA1A6" />
				<MaterialIcons name="chevron-right" size={20} color="#9BA1A6" />
			</View>
		</View>
	)
	
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 8,
		marginBottom: 16,
	},
	text: {
		fontSize: 12,
		color: "#A1CEDC",
		marginRight: 8,
	},
	iconsContainer: {
		flexDirection: "row",
		gap: 4,
	},
})

