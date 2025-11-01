import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type BottomNavigationProps = {
	activeTab?: "home" | "stats" | "rss" | "chat" | "profile"
	onTabPress?: (tab: "home" | "stats" | "rss" | "chat" | "profile") => void
}

export function BottomNavigation({ activeTab = "home", onTabPress }: BottomNavigationProps) {
	const tabs = [
		{ id: "home" as const, icon: "home", color: "#90C695" },
		{ id: "stats" as const, icon: "bar-chart", color: "#9370DB" },
		{ id: "rss" as const, icon: "rss-feed", color: "#A1CEDC" },
		{ id: "chat" as const, icon: "chat-bubble-outline", color: "#A1CEDC" },
		{ id: "profile" as const, icon: "person-outline", color: "#A1CEDC" },
	]

	return (
		<View style={styles.container}>
			{tabs.map((tab) => (
				<TouchableOpacity
					key={tab.id}
					style={styles.tab}
					onPress={() => onTabPress?.(tab.id)}
					activeOpacity={0.7}>
					<View style={styles.iconContainer}>
						<MaterialIcons
							name={tab.icon as keyof typeof MaterialIcons.glyphMap}
							size={28}
							color={tab.id === "home" ? tab.color : tab.color}
							style={activeTab === tab.id ? styles.activeIcon : undefined}
						/>
					</View>
					{activeTab === tab.id && <View style={[styles.indicator, { backgroundColor: tab.id === "home" ? tab.color : "#A1CEDC" }]} />}
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingVertical: 12,
		paddingHorizontal: 8,
		justifyContent: "space-around",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
	},
	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		paddingVertical: 8,
	},
	iconContainer: {
		marginBottom: 4,
	},
	activeIcon: {
		opacity: 1,
	},
	indicator: {
		position: "absolute",
		bottom: 0,
		width: 30,
		height: 3,
		borderRadius: 2,
	},
})


