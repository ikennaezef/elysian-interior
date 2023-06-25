import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ProjectsSection = () => {
	return (
		<section className="py-8">
			<div className="max-w-5xl mx-auto px-2">
				<h3 className="text-4xl text-center mb-4">Follow Our Projects</h3>
				<p className="text-center text-sm max-w-xl mx-auto text-secondary mb-16">
					Et dolor sit eirmod duo ipsum no voluptua. Clita sit diam tempor
					nonumy tempor duo, magna at takimata labore kasd duo diam sit dolor
					erat. Sit sit at amet magna.
				</p>
				<div className="grid grid-cols-2 gap-16">
					<div>
						<div className="rounded-tr-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/kitchen.jpg"
								alt="Elysia Project"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Kitchen Redesign</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</div>
					<div>
						<div className="rounded-tl-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/sitting.jpg"
								alt="Elysia Project"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Classic Sitting Room</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</div>
					<div>
						<div className="rounded-br-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/living.jpg"
								alt="Elysia Project"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Living Room Decor</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</div>
					<div>
						<div className="rounded-bl-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/room.jpg"
								alt="Elysia Project"
								className="object-cover pos h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Simple Bedroom</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
