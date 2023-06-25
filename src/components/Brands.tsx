import React from "react";

const brands = [
	{ id: 1, image: "/01.svg" },
	{ id: 2, image: "/02.svg" },
	{ id: 3, image: "/03.svg" },
	{ id: 4, image: "/04.svg" },
	{ id: 5, image: "/05.svg" },
];

const Brands = () => {
	return (
		<section className="py-16">
			<div className="flex items-center justify-center space-x-12 max-w-5xl mx-auto">
				{brands.map((brand) => (
					<img key={brand.id} src={brand.image} alt="Partner" className="" />
				))}
			</div>
		</section>
	);
};

export default Brands;
