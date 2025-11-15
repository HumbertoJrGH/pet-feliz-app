import { Tabs } from "expo-router"
import React from "react"

import { HapticTab } from "@/components/haptic-tab"
import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import Feather from "@expo/vector-icons/Feather"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Feather
						name="home"
						size={28}
						color={color}
					/>
				}}
			/>
			<Tabs.Screen
				name="msg"
				options={{
					title: "Mensagens",
					tabBarIcon: ({ color }) => <Feather
						name="message-square"
						size={28}
						color={color}
					/>
				}}
			/>
			<Tabs.Screen
				name="feed"
				options={{
					title: "Feed",
					tabBarIcon: ({ color }) => <Feather
						name="rss"
						size={28}
						color={color}
					/>
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Perfil",
					tabBarIcon: ({ color }) => <Feather
						name="user"
						size={28}
						color={color}
					/>
				}}
			/>
			<Tabs.Screen
				name="components"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	)
}
