// components/APSuggestionsCard.tsx

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { apClassesByInterest } from "@/lib/data";

interface APSuggestionsCardProps {
	profile: {
		interests: string[];
	};
}

const APSuggestionsCard: React.FC<APSuggestionsCardProps> = ({ profile }) => {
	const relevantAPs = profile.interests.flatMap(interest => apClassesByInterest[interest] || []);

	const uniqueCourses = Array.from(new Map(relevantAPs.map(ap => [ap.name, ap])).values());

	if (uniqueCourses.length === 0) return null;

	return (
		<Card className="animate-fade-in">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<GraduationCap className="h-5 w-5 text-edu-blue" />
					Recommended AP Classes
				</CardTitle>
				<CardDescription>Explore AP courses that align with your interests.</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
					{uniqueCourses.map(course => (
						<li key={course.name}>
							<a
								href={course.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-edu-blue hover:underline font-medium"
							>
								{course.name}
							</a>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default APSuggestionsCard;
