import { Image, View } from "react-native";

export default function Card({ picture, children, action, ...props }: {
	picture?: React.ReactNode
	children: React.ReactNode
	action?: React.ReactNode
}) {
	return <View style={{ borderWidth: 1, borderRadius: 20, borderColor: "#B9C2D377", backgroundColor: "#B9C2D311", overflow: "hidden" }}>
		<View style={{ maxHeight: 256, overflow: "hidden" }}>
			{picture}
		</View>
		<View style={{ padding: 16 }}>
			{children}
		</View>
		{action
			? <View style={{ padding: 16, paddingTop: 0 }}>
				{action}
			</View>
			: <></>}
	</View>
}

export function EmptyImage(props: any) {
	return <Image
		source={require("@/assets/images/default.jpg")}
		{...props}
	/>
}
