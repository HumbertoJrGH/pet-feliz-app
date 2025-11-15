import React, { useState } from "react"
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type PasswordInputProps = TextInputProps & {
	icon?: keyof typeof MaterialIcons.glyphMap
	iconPosition?: "left" | "right"
}

export function PasswordInput({ icon, iconPosition = "right", style, ...props }: PasswordInputProps) {
	const [isVisible, setIsVisible] = useState(false)
	const isLeftIcon = icon && iconPosition === "left"

	return (
		<View style={styles.container}>
			<TextInput
				style={[
					styles.input,
					isLeftIcon && styles.inputWithLeftIcon,
					style
				]}
				placeholderTextColor="#9BA1A6"
				secureTextEntry={!isVisible}
				{...props}
			/>
			{icon && 
				<View style={[
					styles.iconContainer,
					iconPosition === "left" && styles.iconLeft
				]}>
					<MaterialIcons name={icon} size={24} color="#90C695" />
				</View>
			}
			<TouchableOpacity
				style={styles.eyeIcon}
				onPress={() => setIsVisible(!isVisible)}
				activeOpacity={0.7}>
				<MaterialIcons
					name={isVisible ? "visibility" : "visibility-off"}
					size={24}
					color="#9BA1A6"
				/>
			</TouchableOpacity>
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
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingRight: 50,
		fontSize: 16,
		backgroundColor: "#FFFFFF",
	},
	inputWithLeftIcon: {
		paddingLeft: 50,
		paddingRight: 50,
	},
	iconContainer: {
		position: "absolute",
		right: 40,
		top: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	iconLeft: {
		left: 16,
		right: "auto",
	},
	eyeIcon: {
		position: "absolute",
		right: 16,
		top: 16,
		justifyContent: "center",
		alignItems: "center",
	},
})


