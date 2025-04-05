// CompetitionsCard.tsx

import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import { competitionsData } from "../lib/data";

interface Profile {
	interests: string[];
}

interface CompetitionsCardProps {
	profile: Profile;
}

const CompetitionsCard: React.FC<CompetitionsCardProps> = ({ profile }) => {
	// Filter the competitions based on profile interests
	const filteredCompetitions = competitionsData.filter((competition) =>
		competition.tags.some((tag) => profile.interests.includes(tag))
	);

	return (
		<div className="animate-fade-in">
			<Card className="bg-white border border-border rounded-lg shadow-md p-6">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Award className="h-5 w-5 text-edu-blue" />
						Recommended Competitions
					</CardTitle>
					<CardDescription>
						Competitions that align with your interests
					</CardDescription>
				</CardHeader>

				<CardContent>
					<div className="space-y-6">
						{/* If no competitions match, show a message */}
						{filteredCompetitions.length === 0 ? (
							<p>No competitions found based on your interests.</p>
						) : (
							<div className="grid grid-cols-2 gap-4">
								{/* Loop through the filtered competitions and display them within the same card */}
								{filteredCompetitions.map((competition, index) => (
									<div
										key={index}
										className="rounded-sm mb-6 p-2 bg-gray-50 border-2 shadow-gray-30   ">
										<h3 className="font-semibold text-base">
											{competition.title}
										</h3>
										<p className="text-sm">{competition.description}</p>

										{/* Tags */}
										<div className="mt-4">
											<span className="font-medium text-sm text-muted-foreground">
												Competition Tags:
											</span>
											<div className="">
												{competition.tags.map((tag, idx) => (
													<div
														key={idx}
														className="inline-block px-2 py-0.5 bg-edu-blue-light text-edu-blue text-xs rounded-full">
														{tag}
													</div>
												))}
											</div>
										</div>

										{/* Links */}
										<div className="flex gap-3 mt-4 items-center">
											<Button
												asChild
												variant="secondary"
												className="bg-edu-blue hover:bg-edu-blue-dark text-white text-sm">
												<a
													href={competition.infoLink}
													target="_blank"
													rel="noopener noreferrer">
													Learn More <ExternalLink className="ml-1 h-4 w-4" />
												</a>
											</Button>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default CompetitionsCard;
