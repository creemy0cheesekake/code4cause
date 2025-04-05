import React from "react";
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
import { DollarSign, FileText, GraduationCap } from "lucide-react";

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
			<Tabs defaultValue="fafsa" className="w-full">
				<TabsList className="grid grid-cols-2 mb-4">
					<TabsTrigger value="fafsa">FAFSA</TabsTrigger>
					<TabsTrigger value="scholarships">Scholarships</TabsTrigger>
				</TabsList>

				<TabsContent
					value="fafsa"
					className="animate-fade-in space-y-4 transition-opacity duration-500">
					<Card>
						<CardHeader>
							<CardTitle>FAFSA Resources</CardTitle>
							<CardDescription>
								Get started with the Free Application for Federal Student Aid.
								Submitting early improves your chances of receiving grants and
								institutional aid.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
								<li>
									<a
										href="https://studentaid.gov/fsa-id/create-account"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Create your FSA ID
									</a>
								</li>
								<li>
									<a
										href="https://studentaid.gov/apply-for-aid/fafsa/filling-out"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										What you need to fill out the FAFSA
									</a>
								</li>
								<li>
									<a
										href="https://studentaid.gov/h/apply-for-aid/fafsa"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Submit the FAFSA (application form)
									</a>
								</li>
								<li>
									<a
										href="https://studentaid.gov/help/how-sign-fafsa"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										How to sign and submit your FAFSA
									</a>
								</li>
								<li>
									<a
										href="https://studentaid.gov/apply-for-aid/fafsa/review-and-correct"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Review and correct your FAFSA
									</a>
								</li>
							</ul>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent
					value="scholarships"
					className="animate-fade-in space-y-4 transition-opacity duration-500">
					<Card>
						<CardHeader>
							<CardTitle>Scholarship Resources</CardTitle>
							<CardDescription>
								Explore scholarships that match your academic, extracurricular,
								and personal profile. Apply early and often to maximize aid.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
								<li>
									<a
										href="https://www.fastweb.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Fastweb – Search for scholarships by interest, GPA, and more
									</a>
								</li>
								<li>
									<a
										href="https://www.bold.org/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Bold.org – Apply to exclusive student scholarships
									</a>
								</li>
								<li>
									<a
										href="https://bigfuture.collegeboard.org/scholarship-search"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										BigFuture – College Board’s scholarship database
									</a>
								</li>
								<li>
									<a
										href="https://www.scholarships.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										Scholarships.com – Browse by state, major, or demographic
									</a>
								</li>
								<li>
									<a
										href="https://blog.collegevine.com/scholarship-essay-examples/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline">
										CollegeVine – Scholarship essay examples and tips
									</a>
								</li>
							</ul>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Dashboard;
