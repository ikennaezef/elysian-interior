"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";

const AnimateContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnimatePresence mode="wait" initial={false}>
			{children}
		</AnimatePresence>
	);
};

export default AnimateContainer;
