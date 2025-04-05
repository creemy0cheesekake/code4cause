import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import StudentProfile from "@/components/StudentProfile";
import Dashboard from "@/components/Dashboard";
import CollegeExplorer from "@/components/CollegeExplorer";
import PSATInfoCard from "@/components/PSATInfoCard";
import MapCard from "@/components/MapCard";
import PSATWhy from "@/components/PSATWhy";
import PriorityTasks from "@/components/PriorityTasks";
import OtherTestsInfoCard from "@/components/OtherTestsInfoCard";
import CommonAppInfoCard from "@/components/CommonAppInfoCard";
import CompetitionsCard from "@/components/CompetitionsCard";
import DualEnrollmentCard from "@/components/DualEnrollmentCard";
import VolunteeringCard from "@/components/VolunteeringCard";
import FAQFooter from "@/components/FAQFooter";

import { yearsToGraduate } from "../lib/helpers";

const Index: React.FC = () => {
	const [profile, setProfile] = useState<{
		graduationYear: number;
		location: string;
		interests: string[];
	} | null>(null);

	const handleProfileUpdate = (newProfile: { graduationYear: number; location: string; interests: string[] }) => {
		setProfile(newProfile);
	};

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Navbar />
			<main className="flex-grow container mx-auto px-4 py-8">
				<div className="max-w-4xl mx-auto">
					{!profile ? (
						<div className="space-y-8">
							<div className="text-center mb-8">
								<h1 className="text-3xl font-bold text-edu-blue mb-4">Welcome to Pathway Partner</h1>
								<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
									Get personalized college preparation advice based on your grade level, location, and
									academic interests.
								</p>
							</div>

							<StudentProfile onProfileUpdate={handleProfileUpdate} initProfile={profile} />
						</div>
					) : (
						<div className="space-y-6 md:grid md:grid-cols-3 md:gap-6">
							<div className="md:col-span-1">
								<StudentProfile onProfileUpdate={handleProfileUpdate} initProfile={profile} />
								<PriorityTasks profile={profile} />
							</div>

							<div className="md:col-span-2 space-y-6">
								{yearsToGraduate(profile.graduationYear) <= 1 &&
									yearsToGraduate(profile.graduationYear) >= 0 && <CommonAppInfoCard />}

								{yearsToGraduate(profile.graduationYear) <= 3 &&
									yearsToGraduate(profile.graduationYear) >= 0 && <OtherTestsInfoCard />}

								{yearsToGraduate(profile.graduationYear) <= 5 &&
									yearsToGraduate(profile.graduationYear) >= 1 && <PSATInfoCard />}

								{yearsToGraduate(profile.graduationYear) <= 5 &&
									yearsToGraduate(profile.graduationYear) >= 2 && <PSATWhy />}

								{yearsToGraduate(profile.graduationYear) <= 5 &&
									yearsToGraduate(profile.graduationYear) >= 0 && (
										<CompetitionsCard profile={profile} />
									)}

								<Dashboard profile={profile} />

								{yearsToGraduate(profile.graduationYear) <= 5 &&
									yearsToGraduate(profile.graduationYear) >= 0 && <DualEnrollmentCard />}

								{yearsToGraduate(profile.graduationYear) <= 5 &&
									yearsToGraduate(profile.graduationYear) >= 0 && <VolunteeringCard />}

								<CollegeExplorer profile={profile} />
								<MapCard profile={profile} />
							</div>
						</div>
					)}
				</div>
			</main>

			<FAQFooter />
		</div>
	);
};

export default Index;
