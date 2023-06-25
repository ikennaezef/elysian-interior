import ArticlesSection from "@/components/ArticlesSection";
import Brands from "@/components/Brands";
import CardSection from "@/components/CardSection";
import CreateSection from "@/components/CreateSection";
import HomeHero from "@/components/HomeHero";
import { JoinUsSectiion } from "@/components/JoinUsSectiion";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<main>
			<HomeHero />
			<CardSection />
			<CreateSection />
			<Testimonials />
			<Brands />
			<ProjectsSection />
			<StatsSection />
			<ArticlesSection />
			<JoinUsSectiion />
		</main>
	);
}
