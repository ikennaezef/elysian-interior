import Loader from "@/components/Loader";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiGlobe, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
	return (
		<div>
			<Loader />
			<header className="relative">
				<img
					src="/office.jpg"
					alt="Elysia Interior Decoration"
					className="w-full h-[18rem] object-cover"
				/>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white rounded-t-xl w-[20rem] py-8 px-5">
					<h2 className="text-3xl text-center mb-2">Contact Us</h2>
					<p className="text-secondary text-sm text-center">
						Magna clita no et aliquyam stet ipsum. Est dolores ipsum.
					</p>
				</div>
			</header>
			<section className="py-24">
				<div className="max-w-5xl mx-auto px-2">
					<h2 className="text-4xl text-center w-1/2 mx-auto mb-12">
						We love meeting new people and helping them
					</h2>
					<div className="grid grid-cols-3 gap-16">
						<div className="col-span-1">
							<div className="bg-light rounded-2xl py-12 px-4">
								<div className="flex flex-col space-y-4">
									<div className="flex items-center space-x-4">
										<div className="flex items-center justify-center min-h-[2rem] min-w-[2rem] text-accentDark bg-white rounded-full">
											<CiMail className="" />
										</div>
										<p className="text-secondary">elysianinterior@yahoo.com</p>
									</div>
									<div className="flex items-center space-x-4">
										<div className="flex items-center justify-center min-h-[2rem] min-w-[2rem] text-accentDark bg-white rounded-full">
											<CiPhone className="" />
										</div>
										<p className="text-secondary">+1 563 - 8903</p>
									</div>
									<div className="flex items-center space-x-4">
										<div className="flex items-center justify-center min-h-[2rem] min-w-[2rem] text-accentDark bg-white rounded-full">
											<CiGlobe className="" />
										</div>
										<p className="text-secondary">www.elysianinterior.com</p>
									</div>
								</div>
								<div className="flex items-center space-x-6 pl-2 mt-8">
									<button className="text-secondary">
										<FaFacebookF />
									</button>
									<button className="text-secondary">
										<FaTwitter />
									</button>
									<button className="text-secondary">
										<FaInstagram />
									</button>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 col-span-2">
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
							<input
								type="text"
								placeholder="Subject"
								className="border-b border-b-gray-600 focus:border-b-accentDark outline-none w-full p-2"
							/>
							<input
								type="tel"
								placeholder="Phone"
								className="border-b border-b-gray-600 focus:border-b-accentDark outline-none w-full p-2"
							/>
							<textarea
								cols={10}
								rows={5}
								name="content"
								id="content"
								placeholder="Say something..."
								className="col-span-2 rounded border-b border-b-gray-600 focus:border-b-accentDark outline-none resize-y w-full p-1"></textarea>
							<div className="flex justify-end col-span-2 mt-6">
								<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
									<span className="text-white text-sm tracking-wider">
										Send Now
									</span>
									<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16">
				<div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg px-2">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.6492854817957!2d-119.7519101884035!3d36.730983371482246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e53ec2b407f%3A0xc5701d733c109706!2s1121%20S%20Chance%20Ave%2C%20Fresno%2C%20CA%2093702%2C%20USA!5e0!3m2!1sen!2sng!4v1687513011950!5m2!1sen!2sng"
						width="100%"
						height="450"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
