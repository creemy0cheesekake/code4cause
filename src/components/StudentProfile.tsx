import React, { useState, useEffect } from "react";
import { regions, academicInterests, getGraduationYears, cityList } from "../lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InputAutocomplete } from "@/components/ui/input-autocomplete";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { calculateGradeLevel } from "@/lib/helpers";
import { profile } from "console";

interface StudentProfileData {
	graduationYear: number;
	location: string;
	interests: string[];
}

interface StudentProfileProps {
	onProfileUpdate: (profile: StudentProfileData) => void;
	initProfile?: StudentProfileData | null;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ onProfileUpdate, initProfile = null }) => {
	const [graduationYear, setGraduationYear] = useState<number | null>(null);
	const [location, setLocation] = useState<string>("");
	const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
	const [formCompleted, setFormCompleted] = useState<boolean>(false);
	const [possibleCities, setPossibleCities] = React.useState<[string]>();
	const [cityInput, setCityInput] = React.useState<[string]>();

	useEffect(() => {
		if (initProfile) {
			setGraduationYear(initProfile.graduationYear);
			setLocation(initProfile.location);
			setSelectedInterests(initProfile.interests);
			setFormCompleted(true);
		}
	}, [initProfile]);

	const handleInterestToggle = (interest: string) => {
		setSelectedInterests(prev =>
			prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest],
		);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (graduationYear && cityInput && selectedInterests.length > 0) {
			onProfileUpdate({
				graduationYear,
				location: cityInput,
				interests: selectedInterests,
			});
			setFormCompleted(true);
		}
	};

	const handleUpdateProfile = () => {
		setFormCompleted(false);
	};

	const handleCityInputChange = async (e: React.FormEvent) => {
		const inputVal = e.target.value;
		setCityInput(inputVal);
		if (inputVal)
			setPossibleCities(cityList.filter(el => el.toLowerCase().startsWith(inputVal.toLowerCase())).slice(0, 5));
		else setPossibleCities([]);
	};

	if (formCompleted) {
		return (
			<Card className="bg-white p-6 rounded-lg border border-border shadow-sm">
				<div className="text-center">
					<h2 className="text-xl font-semibold mb-2">Your Profile</h2>
					<p className="text-muted-foreground mb-4">You are a {calculateGradeLevel(graduationYear)}</p>
					<div className="space-y-2 text-left mb-4">
						<div className="flex justify-between">
							<span className="text-muted-foreground">Graduation Year:</span>
							<span className="font-medium text-right">{graduationYear}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Location:</span>
							<span className="font-medium text-right">{initProfile.location}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Interests:</span>
							<span className="font-medium text-right">{selectedInterests.join(", ")}</span>
						</div>
					</div>

					<Button variant="outline" onClick={handleUpdateProfile} className="w-full">
						Update Profile
					</Button>
				</div>
			</Card>
		);
	}

	return (
		<Card className="bg-white p-6 rounded-lg border border-border shadow-sm animate-fade-in">
			<form onSubmit={handleSubmit}>
				<h2 className="text-xl font-semibold mb-4">Create Your Student Profile</h2>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="graduation-year">Expected Graduation Year</Label>
						<Select onValueChange={value => setGraduationYear(parseInt(value))} required>
							<SelectTrigger id="graduation-year" className="w-full">
								<SelectValue placeholder="Select graduation year" />
							</SelectTrigger>
							<SelectContent>
								{getGraduationYears().map(year => (
									<SelectItem key={year} value={year.toString()}>
										{year}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="location">Where do you live?</Label>
						<InputAutocomplete
							options={possibleCities}
							placeholder="Select City"
							emptyPlaceholder="City not found."
							onChange={handleCityInputChange}
							value={cityInput}
							setValue={setCityInput}
						/>
					</div>

					<div className="space-y-2">
						<Label>Areas of Interest (select at least one)</Label>
						<div className="grid grid-cols-2 md:grid-cols-2 gap-2">
							{academicInterests.map(interest => (
								<div key={interest} className="flex items-center space-x-2">
									<Checkbox
										id={`interest-${interest}`}
										checked={selectedInterests.includes(interest)}
										onCheckedChange={() => handleInterestToggle(interest)}
									/>
									<Label htmlFor={`interest-${interest}`} className="text-sm cursor-pointer">
										{interest}
									</Label>
								</div>
							))}
						</div>
					</div>

					<Button
						type="submit"
						className="w-full bg-edu-blue hover:bg-edu-blue/90"
						disabled={!graduationYear || !cityList.includes(cityInput) || selectedInterests.length === 0}
					>
						Create My Dashboard
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default StudentProfile;
