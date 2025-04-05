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
<<<<<<< Updated upstream
import { DollarSign, FileText, GraduationCap } from "lucide-react";
=======
import { CheckCircle, Heart, DollarSign, School } from "lucide-react";
>>>>>>> Stashed changes

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
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Heart className="h-5 w-5 text-pink-600" />
								Find Volunteering Opportunities Near You
							</CardTitle>
							<CardDescription>
								Use your location to get matched with causes you care about.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-sm text-muted-foreground">
								VolunteerMatch helps you find local volunteering opportunities that align with your interests.
							</p>
							<a
								href="https://www.volunteermatch.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md text-sm font-medium">
								Explore VolunteerMatch
							</a>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<DollarSign className="h-5 w-5 text-green-600" />
								Scholarships & Financial Aid
							</CardTitle>
							<CardDescription>
								Get matched with scholarships and funding opportunities.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-sm text-muted-foreground">
								Explore databases that help match scholarships based on your background, interests, and academic plans.
							</p>
							<a
								href="https://studentaid.gov/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium">
								Explore Options
							</a>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<School className="h-5 w-5 text-blue-600" />
								Dual Enrollment Opportunities
							</CardTitle>
							<CardDescription>
								Find community college classes near you to earn both high school and college credit.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-sm text-muted-foreground">
								Dual enrollment is a great way to challenge yourself and save on college tuition. Use your location to find nearby programs.
							</p>
							<a
								href="https://www.collegeboard.org/dual-enrollment"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium">
								Learn More
							</a>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="collegeExplorers" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Volunteer Opportunities</CardTitle>
							<CardDescription>
								Explore ways to give back to your community
							</CardDescription>
						</CardHeader>
						<CardContent>
							<a
								href="https://www.volunteermatch.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-pink-600 hover:underline text-sm font-medium">
								Explore VolunteerMatch <CheckCircle className="ml-1 h-4 w-4" />
							</a>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Scholarship Opportunities</CardTitle>
							<CardDescription>
								Find scholarships to help fund your education
							</CardDescription>
						</CardHeader>
						<CardContent>
							<a
								href="https://studentaid.gov/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-green-600 hover:underline text-sm font-medium">
								Explore Options <CheckCircle className="ml-1 h-4 w-4" />
							</a>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Dual Enrollment</CardTitle>
							<CardDescription>
								Understand your options for dual enrollment
							</CardDescription>
						</CardHeader>
						<CardContent>
							<a
								href="https://www.collegeboard.org/dual-enrollment"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium">
								Learn More <CheckCircle className="ml-1 h-4 w-4" />
							</a>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Dashboard;
