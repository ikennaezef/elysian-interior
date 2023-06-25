import Loader from "@/components/Loader";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const team = [
	{
		id: 1,
		name: "Charles Stinson",
		image: "/charles.jpg",
		email: "charlestinson@mail.com",
		phone: "+1 (378) 400-2764",
	},
	{
		id: 2,
		name: "Adanna Obi",
		image: "/adanna.jpg",
		email: "adanna_o@mail.com",
		phone: "+1 (378) 360-2934",
	},
	{
		id: 3,
		name: "Hannah Cruz",
		image: "/hannah.jpg",
		email: "hannahcruz@mail.com",
		phone: "+1 (378) 420-2747",
	},
	{
		id: 4,
		name: "Courtney Cook",
		image: "/courtney.jpg",
		email: "courtneycook@mail.com",
		phone: "+1 (378) 400-9375",
	},
];

const AboutPage = () => {
	return (
		<div>
			<Loader />
			<header className="relative">
				<img
					src="/space.jpg"
					alt="Elysia Interior Decoration"
					className="w-full h-[18rem] object-cover"
				/>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white rounded-t-xl w-[20rem] py-8 px-5">
					<h2 className="text-3xl text-center mb-2">About Us</h2>
					<p className="text-secondary text-sm text-center">
						Magna clita no et aliquyam stet ipsum. Est dolores ipsum.
					</p>
				</div>
			</header>
			<section className="py-8">
				<div className="max-w-xl mx-auto py-2 px-2">
					<div className="flex flex-col items-center border-8 border-light rounded-xl pt-6 px-3">
						<span>
							<ImQuotesLeft size={40} />
						</span>
						<h5 className="text-lg text-center italic my-6">
							Have nothing in your houses that you do not know to be useful or
							believe to be beautiful.
						</h5>
						<p className="text-sm text-secondary bg-white uppercase p-6 -mb-8">
							William Morris
						</p>
					</div>
				</div>
			</section>
			<section className="py-12">
				<div className="max-w-5xl mx-auto px-2">
					<div className="flex items-center space-x-16 mb-24">
						<div className="w-[45%]">
							<h3 className="text-3xl mb-2">What We Do</h3>
							<p className="text-secondary mb-6">
								Eremites unto woe it the sighed sore, flee most longdeserted and
								hight dares and eremites, scorching the not mothernot deigned
								earthly consecrate, shell start them his there knew heralds,
								could.
							</p>
							<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Get Started
								</span>
								<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
						<div className="w-[55%] h-[16rem]">
							<img
								src="/living_2.jpg"
								alt="Elysia"
								className="rounded-3xl object-cover h-full w-full"
							/>
						</div>
					</div>
					<div className="flex items-center space-x-16">
						<div className="w-[55%] h-[16rem]">
							<img
								src="/living_3.jpg"
								alt="Elysia"
								className="rounded-3xl object-cover h-full w-full"
							/>
						</div>
						<div className="w-[45%]">
							<h3 className="text-3xl mb-2">The Outcome</h3>
							<p className="text-secondary mb-6">
								Eremites unto woe it the sighed sore, flee most longdeserted and
								hight dares and eremites, scorching the not mothernot deigned
								earthly consecrate, shell start them his there knew heralds,
								could.
							</p>
							<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Get Started
								</span>
								<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light py-24">
				<div className="max-w-5xl mx-auto px-2">
					<h2 className="text-4xl text-center mb-4">Meet The Team</h2>
					<p className="text-sm text-center text-secondary">
						Meet the extraordinary people doing amazing things at Elysian
					</p>
					<div className="grid grid-cols-4 gap-8 mt-16">
						{team.map((person) => (
							<div className="relative rounded-2xl cursor-pointer group h-[18rem] overflow-hidden">
								<img
									src={person.image}
									alt="Elysia Team Member"
									className="w-full h-full object-cover object-top"
								/>
								<div className="absolute top-0 left-0 z-10 scale-y-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 bg-white w-full h-full text-center py-6 p-3">
									<h4 className="text-xl mb-2">{person.name}</h4>
									<p className="text-secondary text-sm">Design, California</p>
									<div className="flex items-center justify-center space-x-4 mt-12 mb-8">
										<button className="text-secondary">
											<FaFacebookF />
										</button>
										<button className="text-secondary">
											<FaTwitter />
										</button>
										<button className="text-secondary">
											<FaLinkedinIn />
										</button>
										<button className="text-secondary">
											<FaInstagram />
										</button>
									</div>
									<div>
										<p className="text-secondary mb-1">{person.phone}</p>
										<p className="text-secondary">{person.email}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="py-16">
				<div className="max-w-5xl mx-auto px-2">
					<h2 className="text-4xl text-center w-1/2 mx-auto mb-4">
						Have a Creative Project in Mind? Let's Have a Talk.{" "}
					</h2>
					<div className="max-w-3xl mx-auto mt-12">
						<div className="flex items-center space-x-6 mb-6">
							<input
								type="text"
								placeholder="Name"
								className="border-b border-b-gray-600 focus:border-b-accentDark outline-none w-full p-2"
							/>
							<input
								type="email"
								placeholder="Email"
								className="border-b border-b-gray-600 focus:border-b-accentDark outline-none w-full p-2"
							/>
						</div>
						<textarea
							cols={10}
							rows={10}
							name="content"
							id="content"
							placeholder="Say something..."
							className="p-1 rounded border-b border-b-gray-600 focus:border-b-accentDark outline-none resize-y w-full"></textarea>
						<div className="flex justify-center mt-6">
							<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Send Now
								</span>
								<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
