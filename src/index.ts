interface Product {
	id: number;
	name: string;
	gamme: string;
	couleur: string;
	disponibilité: boolean;
}

const newProductAdded = (product: Product) =>
	`${product.name} a bien été ajouté à votre panier`;
