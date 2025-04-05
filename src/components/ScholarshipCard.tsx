import { DollarSign, ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ScholarshipCard() {
	return (
		<Card className="bg-white border border-border rounded-lg shadow-md p-6">
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
				<Button
					asChild
					className="bg-green-600 hover:bg-green-700 text-white">
					<a
						href="https://studentaid.gov/"
						target="_blank"
						rel="noopener noreferrer">
						Explore Options <ExternalLink className="ml-1 h-4 w-4" />
					</a>
				</Button>
			</CardContent>
		</Card>
	);
}