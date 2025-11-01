import React from "react"
import { View, TextInput, StyleSheet, TextInputProps } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type InputFieldProps = TextInputProps & {
	icon?: keyof typeof MaterialIcons.glyphMap
	iconPosition?: "left" | "right"
}

export function InputField({ icon, iconPosition = "right", style, ...props }: InputFieldProps) {
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, style]}
				placeholderTextColor="#9BA1A6"
				{...props}
			/>
			{icon && (
				<View style={[styles.iconContainer, iconPosition === "left" && styles.iconLeft]}>
					<MaterialIcons name={icon} size={24} color="#90C695" />
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		width: "100%",
		marginBottom: 16,
	},
	input: {
		width: "100%",
		height: 56,
		borderWidth: 1,
		borderColor: "#E5E5E5",
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingRight: 50,
		fontSize: 16,
		backgroundColor: "#FFFFFF",
	},
	iconContainer: {
		position: "absolute",
		right: 16,
		top: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	iconLeft: {
		left: 16,
		right: "auto",
	},
})


