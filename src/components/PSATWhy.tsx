import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PSATWhy() {
	return (
		<section className="space-y-6">
			{/* Introductory Explanation */}
			<div className="bg-edu-green/10 p-6 rounded-xl shadow-sm">
				<h2 className="text-xl font-semibold mb-2">Why Take the PSAT?</h2>
				<p className="text-sm text-muted-foreground mb-4">
					A low-stakes way to practice for the SAT—and potentially qualify for
					scholarships.
				</p>
				<ul className="list-disc list-inside text-sm leading-relaxed space-y-1 mt-2">
					<li>
						Build familiarity with the SAT's structure and question types.
					</li>
					<li>
						Receive personalized feedback on your academic strengths and
						weaknesses.
					</li>
					<li>
						Qualify for the National Merit Scholarship Program (if taken in 11th
						grade).
					</li>
				</ul>

				<div className="flex flex-col sm:flex-row gap-3"></div>

				<Button asChild variant="secondary" className="mt-4">
					<a
						href="https://satsuite.collegeboard.org/psat-nmsqt"
						target="_blank"
						rel="noopener noreferrer">
						Learn more about the PSAT <ExternalLink className="ml-1 h-4 w-4" />
					</a>
				</Button>
			</div>
		</section>
	);
}
