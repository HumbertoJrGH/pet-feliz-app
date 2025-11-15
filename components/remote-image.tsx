import { Image as RNImage, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

type RemoteImageProps = {
	source: { uri: string } | number | string;
	fallback?: number;
	style?: any;
	resizeMode?: "cover" | "contain" | "stretch" | "center";
};

/**
 * Componente de imagem que suporta URLs remotas e fallback local
 */
export function RemoteImage({ source, fallback, style, resizeMode = "cover" }: RemoteImageProps) {
	const [error, setError] = useState(false);

	// Se for um require (número), usa Image do React Native diretamente
	if (typeof source === "number") {
		return <RNImage source={source} style={style} resizeMode={resizeMode} />;
	}

	// Se for string, converte para objeto com uri
	const imageSource = typeof source === "string" ? { uri: source } : source;

	// Se houver erro e tiver fallback, mostra fallback
	if (error && fallback) {
		return <RNImage source={fallback} style={style} resizeMode={resizeMode} />;
	}

	return (
		<View style={[styles.container, style]}>
			<Image
				source={imageSource}
				style={StyleSheet.absoluteFill}
				contentFit={resizeMode}
				onError={() => {
					setError(true);
				}}
				transition={200}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	loadingContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.1)",
	},
});

