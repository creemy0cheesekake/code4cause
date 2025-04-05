import { School, MapPin, ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DualEnrollmentCard() {
	return (
		<Card className="bg-white border border-border rounded-lg shadow-md p-6">
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
				<Button
					asChild
					className="bg-blue-600 hover:bg-blue-700 text-white">
					<a
						href="https://www.collegeboard.org/dual-enrollment"
						target="_blank"
						rel="noopener noreferrer">
						Learn More <ExternalLink className="ml-1 h-4 w-4" />
					</a>
				</Button>
			</CardContent>
		</Card>
	);
}