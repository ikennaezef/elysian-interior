export const heroVariant = {
	initial: {
		opacity: 0,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.1,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 1.5,
			staggerChildren: 0.2,
		},
	},
};

export const heroChildVariant = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeInOut",
		},
	},
};
