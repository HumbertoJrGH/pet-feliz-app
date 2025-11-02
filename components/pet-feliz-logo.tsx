import React from "react"
import { View, StyleSheet } from "react-native"
import { ThemedText } from "./themed-text"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type PetFelizLogoProps = {
	size?: number
	showText?: boolean
}

export function PetFelizLogo({ size = 200, showText = true }: PetFelizLogoProps) {
	const outerRingSize = size
	const innerRingSize = size * 0.85
	const dogSize = size * 0.5

	return (
		<View style={styles.container}>
			{/* Anel externo verde claro */}
			<View
				style={[
					styles.outerRing,
					{
						width: outerRingSize,
						height: outerRingSize,
						borderRadius: outerRingSize / 2,
						borderWidth: 8,
					},
				]}>
				{/* Anel interno azul claro */}
				<View
					style={[
						styles.innerRing,
						{
							width: innerRingSize,
							height: innerRingSize,
							borderRadius: innerRingSize / 2,
							borderWidth: 6,
						},
					]}>
					{/* Ícone do cachorro */}
					<View style={styles.dogContainer}>
						<MaterialIcons name="pets" size={dogSize} color="#D4A574" />
						{/* Coleira azul simulada */}
						<View style={[styles.collar, { width: dogSize * 0.8, height: dogSize * 0.12 }]} />
					</View>

					{/* Texto Pet Feliz */}
					{showText && 
						<View style={styles.textContainer}>
							<View style={styles.petTextContainer}>
								<View style={styles.pawInP}>
									<MaterialIcons name="pets" size={size * 0.08} color="#90C695" />
								</View>
								<ThemedText style={[styles.petText, { fontSize: size * 0.12 }]}>Pet</ThemedText>
							</View>
							<ThemedText style={[styles.felizText, { fontSize: size * 0.12 }]}>Feliz</ThemedText>
						</View>
					}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	outerRing: {
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#90C695", // Verde claro
		backgroundColor: "#FFFFFF",
	},
	innerRing: {
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#A1CEDC", // Azul claro
		backgroundColor: "#FFFFFF",
	},
	dogContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
	},
	collar: {
		backgroundColor: "#A1CEDC",
		borderRadius: 20,
		position: "absolute",
		bottom: "30%",
	},
	textContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 4,
	},
	petTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	pawInP: {
		position: "absolute",
		left: -10,
		top: -2,
	},
	petText: {
		color: "#90C695", // Verde claro
		fontWeight: "bold",
		fontFamily: "System",
	},
	felizText: {
		color: "#A1CEDC", // Azul claro
		fontWeight: "bold",
		fontFamily: "System",
	},
})


