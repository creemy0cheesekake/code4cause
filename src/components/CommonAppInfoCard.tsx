import { ExternalLink, UserCheck } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommonAppInfoCard() {
	return (
		<section className="space-y-6">
			{/* Common App Account Card */}
			<Card className="bg-gradient-to-r from-white via-gray-100 to-white shadow-lg rounded-xl p-6">
				<div className="flex gap-4 items-start">
					<div className="p-3 bg-yellow-100 rounded-full">
						<UserCheck className="h-7 w-7 text-yellow-600" />
					</div>
					<div>
						<CardTitle className="text-xl font-semibold text-gray-800">
							Create Your Common App Account
						</CardTitle>
						<CardDescription className="text-sm text-muted-foreground mt-1">
							The Common Application allows you to apply to over 900 colleges
							and universities through one streamlined application. Create your
							account today to start your college application journey and submit
							all necessary materials in one place.
						</CardDescription>
					</div>
				</div>

				<div className="flex flex-wrap gap-3 mt-4">
					<Button
						asChild
						className="bg-yellow-500 hover:bg-yellow-600 text-white">
						<a
							href="https://apply.commonapp.org/"
							target="_blank"
							rel="noopener noreferrer">
							Create Your Account <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button>
					{/* <Button
						asChild
						variant="outline"
						className="border-yellow-600 text-yellow-600 hover:bg-white">
						<a
							href="https://www.commonapp.org/apply-to-colleges/first-time-users"
							target="_blank"
							rel="noopener noreferrer">
							First-Time User Guide <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</Button> */}
				</div>
			</Card>
		</section>
	);
}
