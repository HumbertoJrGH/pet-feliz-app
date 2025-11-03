import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type QuickAccessCardProps = {
	icon?: string
	label: string
	onPress?: () => void
	comingSoon?: boolean
}

export function QuickAccessCard({ icon, label, onPress, comingSoon = false }: QuickAccessCardProps) {
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={onPress}
			activeOpacity={0.7}
			disabled={comingSoon}>
			<View style={styles.iconContainer}>
				{comingSoon ?
					<View style={styles.comingSoonContainer}>
						<View style={styles.grayBar} />
						<View style={styles.badge}>
							<Text style={styles.badgeText}>Em breve</Text>
						</View>
					</View>
					:
					icon && <MaterialIcons name={icon as keyof typeof MaterialIcons.glyphMap} size={48} color="#90C695" />
				}
			</View>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		width: "48%",
		aspectRatio: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	iconContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	label: {
		marginTop: 8,
		fontSize: 14,
		fontWeight: "500",
		color: "#687076",
		textAlign: "center",
	},
	comingSoonContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	grayBar: {
		width: 60,
		height: 8,
		backgroundColor: "#E5E5E5",
		borderRadius: 4,
		position: "absolute",
	},
	badge: {
		backgroundColor: "#FFD700",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 8,
		marginTop: 4,
	},
	badgeText: {
		fontSize: 10,
		fontWeight: "600",
		color: "#687076",
	},
})


