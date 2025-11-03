import { useColorScheme } from "@/hooks/use-color-scheme.web"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import React from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"

type InputFieldProps = TextInputProps & {
	icon?: keyof typeof MaterialIcons.glyphMap
	iconPosition?: "left" | "right"
}

export function InputField({ icon, iconPosition = "right", style, ...props }: InputFieldProps) {
	const colorScheme = useColorScheme()

	return (
		<View style={colorScheme === "dark" ? darkStyles.container : lightStyles.container}>
			<TextInput
				style={[colorScheme === "dark" ? darkStyles.input : lightStyles.input, style]}
				placeholderTextColor="#9BA1A6"
				{...props}
			/>
			{icon &&
				<View style={[
					colorScheme === "dark" ? darkStyles.iconContainer : lightStyles.iconContainer,
					iconPosition === "left" && (colorScheme === "dark" ? darkStyles.iconLeft : lightStyles.iconLeft)
				]}>
					<MaterialIcons name={icon} size={24} color="#90C695" />
				</View>
			}
		</View>
	)
}

const lightStyles = StyleSheet.create({
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
		borderRadius: 20,
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
	}
})

const darkStyles = StyleSheet.create({
	container: {
		position: "relative",
		width: "100%",
		marginBottom: 16,
	},
	input: {
		width: "100%",
		height: 56,
		color: "#E5E5E5",
		borderWidth: 1,
		borderColor: "#E5E5E533",
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingRight: 50,
		fontSize: 16,
		outline: "none",
		// backgroundColor: "#FFFFFF",
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
	}
})


