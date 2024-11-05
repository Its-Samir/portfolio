import Header from "./components/Header";
import About from "./components/About";
import KeySkillsAndKnowledge from "./components/KeySkillsAndKnowledge";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import ContactAndFooter from "./components/ContactAndFooter";

export default function Home() {
	return (
		<div className="xl:w-[75rem] mx-auto">
			<Header />
			<hr className="lg:mx-auto mx-4" />
			<About />
			<hr className="lg:mx-auto mx-4" />
			<KeySkillsAndKnowledge />
			<hr className="lg:mx-auto mx-4" />
			<Techs />
			<hr className="lg:mx-auto mx-4" />
			<Projects />
			<hr className="lg:mx-auto mx-4" />
			<ContactAndFooter />
		</div>
	);
}
