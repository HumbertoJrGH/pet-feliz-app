import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

type WaveShapeProps = {
	height?: number
	color?: string
	showDots?: boolean
}

export function WaveShape({ height = SCREEN_HEIGHT * 0.5, color = "#A1CEDC", showDots = true }: WaveShapeProps) {
	const containerHeight = SCREEN_HEIGHT - height + 100
	const waveHeight = 80

	// Gerar pontos aleatórios para os dots
	const generateDots = () => {
		const dots = []
		const numDots = 25
		for (let i = 0; i < numDots; i++) {
			const x = Math.random() * SCREEN_WIDTH
			const y = waveHeight + Math.random() * (containerHeight - waveHeight)
			dots.push({ x, y })
		}
		return dots
	}

	const dots = showDots ? generateDots() : []

	return (
		<View style={[styles.container, { height: containerHeight }]}>
			{/* Forma de onda usando múltiplas camadas */}
			<View style={[styles.waveContainer, { backgroundColor: color, height: containerHeight }]}>
				{/* Onda principal - curva suave do meio */}
				<View style={[styles.waveMain, { backgroundColor: color }]} />
				{/* Curvas laterais para efeito mais fluido */}
				<View style={[styles.waveLeft, { backgroundColor: color }]} />
				<View style={[styles.waveRight, { backgroundColor: color }]} />
			</View>
			
			{/* Linha divisória sutil */}
			<View style={[styles.divider, { backgroundColor: color }]} />
			
			{showDots &&
				dots.map((dot, index) => (
					<View
						key={index}
						style={[
							styles.dot,
							{
								left: dot.x,
								top: dot.y,
							},
						]}
					/>
				))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		overflow: "hidden",
	},
	waveContainer: {
		position: "absolute",
		bottom: 0,
		width: SCREEN_WIDTH,
	},
	waveMain: {
		position: "absolute",
		top: -60,
		left: 0,
		right: 0,
		height: 120,
		borderTopLeftRadius: SCREEN_WIDTH * 0.6,
		borderTopRightRadius: SCREEN_WIDTH * 0.6,
	},
	waveLeft: {
		position: "absolute",
		top: -50,
		left: -SCREEN_WIDTH * 0.15,
		width: SCREEN_WIDTH * 0.5,
		height: 100,
		borderTopLeftRadius: SCREEN_WIDTH * 0.5,
		borderTopRightRadius: SCREEN_WIDTH * 0.3,
	},
	waveRight: {
		position: "absolute",
		top: -50,
		right: -SCREEN_WIDTH * 0.15,
		width: SCREEN_WIDTH * 0.5,
		height: 100,
		borderTopLeftRadius: SCREEN_WIDTH * 0.3,
		borderTopRightRadius: SCREEN_WIDTH * 0.5,
	},
	divider: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: 2,
		opacity: 0.3,
	},
	dot: {
		position: "absolute",
		width: 4,
		height: 4,
		borderRadius: 2,
		backgroundColor: "#FFFFFF",
		opacity: 0.6,
	},
})


