/**
 * Helper para gerenciar imagens do projeto
 * Usa APIs públicas para fornecer imagens de pets
 */

// URLs de imagens de pets usando Unsplash API
// Todas as imagens são de pets e produtos relacionados
export const petImages = {
	// Produtos para pets - Ração e Alimentação
	product1: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
	product2: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
	product3: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
	product4: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
	
	// Serviços - Banho, Tosa, Veterinária
	service1: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
	service2: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop",
	service3: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
	service4: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop",
	
	// Feed/Posts - Cães e gatos (imagens reais de pets)
	feed1: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
	feed2: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
	feed3: "https://images.unsplash.com/photo-1534361960057-19889c4d6c8d?w=600&h=400&fit=crop",
	feed4: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
	
	// Avatar padrão
	avatar: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop",
};

/**
 * Retorna uma URL de imagem aleatória de pet
 */
export function getRandomPetImage(): string {
	const images = Object.values(petImages);
	return images[Math.floor(Math.random() * images.length)];
}

/**
 * Retorna uma URL de imagem específica
 */
export function getPetImage(key: keyof typeof petImages): string {
	return petImages[key] || petImages.avatar;
}

