import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCollegeRecommendations, calculateGradeLevel } from "../lib/helpers";
import { GraduationCap, MapPin, BarChart } from "lucide-react";

interface CollegeExplorerProps {
	profile: {
		graduationYear: number;
		location: { city: string; lat: number; lng: number };
		interests: string[];
	};
}

const CollegeExplorer: React.FC<CollegeExplorerProps> = ({ profile }) => {
	const gradeLevel = calculateGradeLevel(profile.graduationYear);
	const recommendations = getCollegeRecommendations(profile.interests, profile.location.city, gradeLevel);

	// Don't show college explorer for middle school students
	if (gradeLevel === "Middle School" || recommendations.length === 0) {
		return null;
	}

	return (
		<div className="animate-fade-in">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<GraduationCap className="h-5 w-5 text-edu-blue" />
						College Explorer
					</CardTitle>
					<CardDescription>Colleges that match your interests and location</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-3">
						{recommendations.map((college, index) => (
							<div
								key={index}
								className="bg-white border border-border rounded-lg p-4 hover:shadow-md transition-all"
							>
								<h3 className="font-semibold text-base mb-2">{college.name}</h3>

								<div className="space-y-2 text-sm">
									<div className="flex items-center gap-2">
										<MapPin className="h-4 w-4 text-edu-gray" />
										<span>{college.location}</span>
									</div>

									<div>
										<span className="text-sm text-muted-foreground">Strong Programs:</span>
										<div className="flex flex-wrap gap-1 mt-1">
											{college.strongPrograms.map((program: string) => (
												<span
													key={program}
													className="inline-block px-2 py-0.5 bg-edu-blue-light text-edu-blue text-xs rounded-full"
												>
													{program}
												</span>
											))}
										</div>
									</div>

									<div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
										<div className="flex items-center gap-1">
											<BarChart className="h-3 w-3 text-edu-gray" />
											<span className="text-xs text-muted-foreground">
												Admission: {college.admissionRate}
											</span>
										</div>
										<span className="text-xs text-muted-foreground">
											Avg SAT: {college.averageSAT}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default CollegeExplorer;
