import React from "react";

const StatsSection = () => {
	return (
		<section className="bg-light py-36">
			<div className="flex items-stretch justify-center space-x-16 max-w-5xl mx-auto px-2">
				<div className="flex flex-col space-y-4 items-center">
					<h3 className="text-6xl text-accent">8</h3>
					<p className="text-secondary">Years Of Experience</p>
				</div>
				<span className="inline-block bg-accent h-30 w-[1px]" />
				<div className="flex flex-col space-y-4 items-center">
					<h3 className="text-6xl text-accent">76</h3>
					<p className="text-secondary">Successful Projects</p>
				</div>
				<span className="inline-block bg-accent h-30 w-[1px]" />
				<div className="flex flex-col space-y-4 items-center">
					<h3 className="text-6xl text-accent">62</h3>
					<p className="text-secondary">Happy Customers</p>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
