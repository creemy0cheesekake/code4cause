import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateGradeLevel, getPriorityTasks } from "../lib/helpers";
import { milestones } from "../lib/data";
import { CheckCircle } from "lucide-react";

interface DashboardProps {
	profile: {
		graduationYear: number;
		location: string;
		interests: string[];
	};
}

const Dashboard: React.FC<DashboardProps> = ({ profile }) => {
	const gradeLevel = calculateGradeLevel(profile.graduationYear);
	const priorityTasks = getPriorityTasks(gradeLevel);
	const gradeMilestones =
		milestones[gradeLevel as keyof typeof milestones] ||
		milestones["Middle School"];

	return (
		<div className="space-y-6 animate-fade-in">
			<Tabs defaultValue="academics" className="w-full">
				<TabsList className="grid grid-cols-3 mb-4">
					<TabsTrigger value="academics">Academics</TabsTrigger>
					<TabsTrigger value="extracurricular">Activities</TabsTrigger>
					<TabsTrigger value="collegePrep">College Prep</TabsTrigger>
				</TabsList>

				<TabsContent value="academics" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Academic Milestones</CardTitle>
							<CardDescription>
								Key academic goals for {gradeLevel} students
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{gradeMilestones.academics.map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<div className="h-6 w-6 rounded-full bg-edu-blue-light flex items-center justify-center text-edu-blue font-medium shrink-0">
											{index + 1}
										</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="extracurricular" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Extracurricular Activities</CardTitle>
							<CardDescription>
								Recommended activities for {gradeLevel} students
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{gradeMilestones.extracurricular.map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<div className="h-6 w-6 rounded-full bg-edu-yellow-light flex items-center justify-center text-edu-yellow font-medium shrink-0">
											{index + 1}
										</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="collegePrep" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>College Preparation</CardTitle>
							<CardDescription>
								College planning steps for {gradeLevel} students
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{gradeMilestones.collegePrep.map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<div className="h-6 w-6 rounded-full bg-edu-green-light flex items-center justify-center text-edu-green font-medium shrink-0">
											{index + 1}
										</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Dashboard;
