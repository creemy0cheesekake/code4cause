import { ExternalLink, Landmark } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OtherTestsInfoCard() {
	return (
		<section className="space-y-6">
			{/* SAT/ACT Detail Card */}
			<Card className="border-r-4 border-blue-600 bg-background shadow-sm p-6">
				<div className="flex gap-4 items-start">
					<div className="bg-blue-100 p-3 rounded-lg">
						<Landmark className="h-7 w-7 text-blue-600" />
					</div>
					<div>
						<CardTitle className="text-xl font-semibold text-blue-800">
							SAT & ACT Preparation
						</CardTitle>
						<CardDescription className="text-sm text-muted-foreground mt-1">
							The SAT and ACT are standardized tests used for college
							admissions. Both assess your readiness for college and offer
							scholarships or placement advantages at many universities. Choose
							one that fits your strengths—and start preparing early.
						</CardDescription>
					</div>
				</div>

				<div className="flex flex-wrap gap-3 mt-4">
					<Button asChild className="border-blue-600">
						<a
							href="https://satsuite.collegeboard.org/sat"
							target="_blank"
							rel="noopener noreferrer">
							SAT Registration <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
					<Button asChild className="border-blue-600">
						<a
							href="https://www.act.org/"
							target="_blank"
							rel="noopener noreferrer">
							ACT Registration <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
					<Button asChild variant="outline">
						<a
							href="https://www.khanacademy.org/digital-sat"
							target="_blank"
							rel="noopener noreferrer">
							Free SAT Prep (Khan Academy){" "}
							<ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
					<Button asChild variant="outline">
						<a
							href="https://academy.act.org/"
							target="_blank"
							rel="noopener noreferrer">
							Free ACT Academy <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
				</div>
			</Card>
		</section>
	);
}
