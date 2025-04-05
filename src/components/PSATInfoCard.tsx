import { ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";

export default function PSATInfoCard() {
	return (
		<section className="space-y-6">
			{/* PSAT Detail Card */}
			<Card className="flex flex-col gap-4 p-6 border-l-4 border-edu-green shadow-md bg-muted/30">
				<div className="flex items-start gap-4">
					<div className="p-3 bg-edu-green/10 rounded-full">
						<BookOpenCheck className="h-8 w-8 text-edu-green" />
					</div>
					<div>
						<CardTitle className="text-xl font-semibold">
							Register for the PSAT
						</CardTitle>
						<CardDescription className="text-sm text-muted-foreground mt-1">
							The PSAT/NMSQT is a preparatory version of the SAT, typically
							taken in 10th or 11th grade. It helps you practice for the SAT,
							receive feedback on academic skills, and even qualify for the
							National Merit Scholarship Program.
						</CardDescription>
					</div>
				</div>

				<div className="flex gap-3 mt-2 items-center">
					<Button asChild variant="secondary">
						<a
							href="https://satsuite.collegeboard.org/psat-nmsqt"
							target="_blank"
							rel="noopener noreferrer">
							Register for the PSAT <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
					<Button asChild variant="outline">
						<a
							href="https://www.khanacademy.org/test-prep/get-ready-for-sat-prep-math"
							target="_blank"
							rel="noopener noreferrer">
							Free PSAT Prep (Khan Academy){" "}
							<ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
				</div>
			</Card>
		</section>
	);
}
