import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { calculateGradeLevel, getPriorityTasks } from "../lib/helpers";
import { CheckCircle } from "lucide-react";

interface DashboardProps {
	profile: {
		graduationYear: number;
		location: { city: string; lat: number; lng: number };
		interests: string[];
	};
}

const PriorityTasks: React.FC<DashboardProps> = ({ profile }) => {
	const gradeLevel = calculateGradeLevel(profile.graduationYear);
	const priorityTasks = getPriorityTasks(gradeLevel);

	return (
		<div className="space-y-6 animate-fade-in">
			<Card className="mt-3">
				<CardContent>
					<h3 className="text-lg font-medium mb-3 mt-3">Priority Tasks</h3>
					<Accordion type="multiple" className="w-full space-y-2">
						{priorityTasks.map((task, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left">
									<div className="flex items-start gap-2 text-base">
										<CheckCircle className="h-5 w-5 text-edu-green shrink-0 mt-0.5" />
										<span>{task.title}</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className="gap-2">
									<span className="gap-4">{task.description}</span>
									<ul className="list-disc ml-6 space-y-1 mt-4">
										{task.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<a
													href={link.url}
													className="text-blue-600 underline hover:text-blue-800"
													target="_blank"
													rel="noopener noreferrer"
												>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
		</div>
	);
};

export default PriorityTasks;
