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

export const staggerContainer = {
	initial: {
		opacity: 0,
		transition: {
			staggerChildren: 0.4,
			delayChildren: 0.5,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
			delayChildren: 0.5,
		},
	},
};

export const staggerChild = {
	initial: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.6,
		},
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export const appearVariant = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.8,
			delay: 0.5,
			ease: "easeIn",
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: 0.5,
			ease: "easeIn",
		},
	},
};

export const menuContainer = {
	open: {
		clipPath: "circle(145% at 100% 0%)",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.7,
			delayChildren: 0.3,
			staggerChildren: 0.05,
		},
	},
	closed: {
		clipPath: "circle(0% at 100% 0%)",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.5,
			staggerChildren: 0.05,
			staggerDirection: -1,
			delay: 0.4,
		},
	},
};

export const menuItem = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
