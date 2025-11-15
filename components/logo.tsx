import React from "react";
import { View, StyleSheet, Image as RNImage } from "react-native";

interface LogoProps {
	width?: number;
	height?: number;
	style?: any;
}

export function Logo({ width = 150, height = 150, style }: LogoProps) {
	// Usando icon.png que é a logo do projeto
	return (
		<View style={[styles.container, { width, height }, style]}>
			<RNImage
				source={require("@/assets/images/icon.png")}
				style={styles.image}
				resizeMode="contain"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

