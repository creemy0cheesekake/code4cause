import React, { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming you're using a classnames utility

const faqs = [
	{
		question: "What are AP courses?",
		answer: "Advanced Placement (AP) courses are college-level classes that you can take in high school. They provide the opportunity to earn college credit or advanced placement in college courses based on your AP exam scores.",
	},
	{
		question: "What is the SAT/ACT/PSAT?",
		answer: "The SAT, ACT, and PSAT are standardized tests used for college admissions in the United States. The SAT and ACT assess a student’s readiness for college, while the PSAT is a practice test for the SAT and is often used to qualify for National Merit Scholarships.",
	},
	{
		question: "Difference between SAT and ACT?",
		answer: "The SAT focuses more on reasoning and problem-solving skills, while the ACT tests your knowledge in English, math, reading, and science. The SAT has no science section, and the ACT includes a science reasoning section.",
	},
	{
		question: "Safety, Match, and Reach Schools?",
		answer: "Safety schools are colleges where your academic credentials are above the school's admission standards. Match schools are those where your academic qualifications align with the school's average admitted student. Reach schools are colleges where your credentials are below their average admitted student.",
	},
	{
		question: "Fee waivers for SAT/ACT/PSAT?",
		answer: "Fee waivers are available for students who cannot afford the costs of the SAT, ACT, or PSAT. You can apply for a fee waiver through your high school counselor or directly through the testing organizations, based on your eligibility for financial assistance.",
	},
	{
		question: "What is the Common App?",
		answer: "The Common Application (Common App) is a standardized college application platform that allows students to apply to multiple colleges and universities with one application. It streamlines the admissions process for both students and institutions.",
	},
	{
		question: "What types of scholarships can I apply for?",
		answer: "There are various types of scholarships available for college students, including merit-based scholarships, need-based scholarships, athletic scholarships, and scholarships based on specific criteria such as community service, leadership, or field of study.",
	},
	{
		question: "What’s the difference between early action, early decision, and restricted early action?",
		answer: "Early action allows you to apply early and receive a decision early, but you are not committed to attending. Early decision is binding, meaning you commit to attending the college if admitted. Restricted early action is similar to early action but with limitations on applying to other schools early.",
	},
];

const Footer: React.FC = () => {
	const [open, setOpen] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpen(prev => (prev === index ? null : index));
	};

	return (
		<div className="bg-gray-100 py-10 px-6">
			<h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions:</h2>
			<div className="mx-auto w-full max-w-[1000px] space-y-4">
				{faqs.map((faq, index) => {
					const isOpen = open === index;
					return (
						<Card
							key={index}
							className="border p-4 shadow-sm transition-all duration-200 cursor-pointer"
							onClick={() => toggle(index)}
						>
							<CardTitle className="cursor-pointer text-sm font-semibold hover:text-blue-500 transition-colors">
								{faq.question}
							</CardTitle>
							<div
								className={cn(
									"overflow-hidden transition-all duration-300 ease-in-out",
									isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0",
								)}
							>
								<CardDescription className="text-sm">{faq.answer}</CardDescription>
							</div>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
