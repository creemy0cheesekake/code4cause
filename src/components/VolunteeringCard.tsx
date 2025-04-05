import { MapPin, Heart, ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VolunteeringCard() {
	return (
		<Card className="bg-white border border-border rounded-lg shadow-md p-6">
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
				<Button
					asChild
					className="bg-pink-600 hover:bg-pink-700 text-white">
					<a
						href="https://www.volunteermatch.org/"
						target="_blank"
						rel="noopener noreferrer">
						Explore VolunteerMatch <ExternalLink className="ml-1 h-4 w-4" />
					</a>
				</Button>
			</CardContent>
		</Card>
	);
}