// Calculate the current grade level based on graduation year
export const calculateGradeLevel = (graduationYear: number): string => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();

	// Adjust for academic year (assuming academic year starts in September)
	const academicYear = currentMonth >= 8 ? currentYear + 1 : currentYear;
	const yearsToGraduation = graduationYear - academicYear;

	switch (yearsToGraduation) {
		case 3:
			return "Freshman (9th Grade)";
		case 2:
			return "Sophomore (10th Grade)";
		case 1:
			return "Junior (11th Grade)";
		case 0:
			return "Senior (12th Grade)";
		default:
			return yearsToGraduation > 3 ? "Middle School" : "College/Graduate";
	}
};

export const yearsToGraduate = (graduationYear: number): number => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();

	// Adjust for academic year (assuming academic year starts in September)
	const academicYear = currentMonth >= 8 ? currentYear + 1 : currentYear;
	const yearsToGraduation = graduationYear - academicYear;

	return yearsToGraduation;
};

export interface Task {
	title: string;
	description: string;
	links: { label: string; url: string }[];
}

export const getPriorityTasks = (gradeLevel: string): Task[] => {
	switch (gradeLevel) {
		case "Freshman (9th Grade)":
			return [
				{
					title: "Explore extracurricular activities and clubs",
					description:
						"Find something that you enjoy and could forsee yourself doing for all four years. If possible consider clubs you would like to have a leaderhip role in in the next year or two.",
					links: [
						{
							label: "Benefits of Extracurriculars",
							url: "https://www.collegevine.com/blog/extracurricular-activities/",
						},
					],
				},
				{
					title: "Develop good study habits",
					description:
						"Freshman year sets you up for success or failure. If things don't go well, you can get back, but it's much easier to try your best now and save yourself the trouble later.",
					links: [
						{
							label: "Study Tips for High School",
							url: "https://www.princetonreview.com/college-advice/high-school-study-tips",
						},
					],
				},
				{
					title: "Take challenging courses that interest you",
					description:
						"Honors or AP courses are a great thing to consider, you can also see if you can pursue dual-enrollment at the local community college",
					links: [
						{
							label: "How to Choose High School Courses",
							url: "https://bigfuture.collegeboard.org/plan-for-college/college-basics/how-to-choose-high-school-courses",
						},
					],
				},
				{
					title: "Start thinking about potential career interests",
					description: "",
					links: [
						{
							label: "Career Exploration for Teens",
							url: "https://www.bls.gov/k12/",
						},
					],
				},
			];

		case "Sophomore (10th Grade)":
			return [
				{
					title: "Take the PSAT for practice",
					description: "",
					links: [
						{
							label: "PSAT Information",
							url: "https://satsuite.collegeboard.org/psat-nmsqt",
						},
					],
				},
				{
					title: "Research colleges and visit campuses if possible",
					description: "",
					links: [
						{
							label: "How to Research Colleges",
							url: "https://bigfuture.collegeboard.org/plan-for-college/college-search",
						},
					],
				},
				{
					title: "Take AP or honors courses if available",
					description: "",
					links: [
						{
							label: "Benefits of AP Courses",
							url: "https://apstudents.collegeboard.org/what-is-ap",
						},
					],
				},
				{
					title: "Continue involvement in extracurricular activities",
					description: "",
					links: [
						{
							label: "Strengthen Your Activities List",
							url: "https://blog.collegevine.com/extracurricular-activities-list/",
						},
					],
				},
			];

		case "Junior (11th Grade)":
			return [
				{
					title: "Prepare for and take the SAT/ACT",
					description: "",
					links: [
						{ label: "SAT Info", url: "https://satsuite.collegeboard.org/sat" },
						{ label: "ACT Info", url: "https://www.act.org/" },
					],
				},
				{
					title: "Start building your college list",
					description: "",
					links: [
						{
							label: "College Search Tool",
							url: "https://bigfuture.collegeboard.org/college-search",
						},
						{
							label: "Niche College Finder",
							url: "https://www.niche.com/colleges/search/",
						},
					],
				},
				{
					title: "Talk to your counselor about college plans",
					description: "",
					links: [
						{
							label: "How to Talk to Your Counselor",
							url: "https://www.collegeboard.org/counselor-conversation",
						},
					],
				},
				{
					title: "Take leadership roles in activities",
					description: "",
					links: [
						{
							label: "Leadership Examples",
							url: "https://blog.collegevine.com/leadership-examples/",
						},
					],
				},
				{
					title: "Research scholarship opportunities",
					description: "",
					links: [
						{ label: "Fastweb Scholarships", url: "https://www.fastweb.com/" },
						{ label: "Scholarships.com", url: "https://www.scholarships.com/" },
					],
				},
			];

		case "Senior (12th Grade)":
			return [
				{
					title: "Complete college applications",
					description: "",
					links: [
						{ label: "Common App", url: "https://www.commonapp.org/" },
						{
							label: "Coalition App",
							url: "https://www.coalitionforcollegeaccess.org/",
						},
					],
				},
				{
					title: "Apply for financial aid and scholarships",
					description: "",
					links: [
						{ label: "FAFSA Website", url: "https://studentaid.gov/" },
						{
							label: "CSS Profile",
							url: "https://cssprofile.collegeboard.org/",
						},
					],
				},
				{
					title: "Confirm final high school transcript is sent to colleges",
					description: "",
					links: [
						{
							label: "Final Transcript Checklist",
							url: "https://bigfuture.collegeboard.org/plan-for-college/applications/final-transcript",
						},
					],
				},
				{
					title: "Make your college decision",
					description: "",
					links: [
						{
							label: "How to Choose a College",
							url: "https://bigfuture.collegeboard.org/plan-for-college/college-basics/deciding-where-to-go",
						},
					],
				},
				{
					title: "Prepare for the transition to college",
					description: "",
					links: [
						{
							label: "College Transition Guide",
							url: "https://www.nacacnet.org/news--publications/publications/step-by-step-college-transition/",
						},
					],
				},
			];

		case "Middle School":
			return [
				{
					title: "Focus on building strong academic foundations",
					description: "",
					links: [
						{
							label: "Middle School Academics",
							url: "https://kidshealth.org/en/kids/school.html",
						},
					],
				},
				{
					title: "Explore various interests through activities",
					description: "",
					links: [
						{
							label: "Middle School Clubs",
							url: "https://www.weareteachers.com/extracurricular-activities-middle-school/",
						},
					],
				},
				{
					title: "Develop good study habits",
					description: "",
					links: [
						{
							label: "Study Tips for Middle Schoolers",
							url: "https://www.greatschools.org/gk/articles/10-ways-to-help-your-child-succeed-in-middle-school/",
						},
					],
				},
				{
					title: "Read widely across subjects",
					description: "",
					links: [
						{
							label: "Reading Lists for Teens",
							url: "https://www.readbrightly.com/100-must-read-books-for-tweens-and-teens/",
						},
					],
				},
			];

		default:
			return [
				{
					title: "Continue your education journey",
					description: "",
					links: [
						{
							label: "Lifelong Learning Tips",
							url: "https://www.edutopia.org/lifelong-learning-tips",
						},
					],
				},
				{
					title: "Consider internship or job opportunities",
					description: "",
					links: [{ label: "Find Internships", url: "https://www.internships.com/" }],
				},
				{
					title: "Network with professionals in your field of interest",
					description: "",
					links: [
						{
							label: "Networking for Students",
							url: "https://www.themuse.com/advice/networking-tips-college-students",
						},
					],
				},
			];
	}
};

// Get recommended colleges based on interests and location
export const getCollegeRecommendations = (interests: string[], location: string, gradeLevel: string): any[] => {
	// Only show college recommendations for high school students
	if (!gradeLevel.includes("Grade")) {
		return [];
	}

	// This would typically connect to an API or database
	// For now, we'll return some sample data
	const sampleColleges = [
		{
			name: "Massachusetts Institute of Technology",
			location: "Cambridge, MA",
			strongPrograms: ["Computer Science", "Engineering", "Mathematics"],
			admissionRate: "4%",
			averageSAT: 1540,
		},
		{
			name: "Stanford University",
			location: "Stanford, CA",
			strongPrograms: ["Engineering", "Computer Science", "Business"],
			admissionRate: "4%",
			averageSAT: 1520,
		},
		{
			name: "Harvard University",
			location: "Cambridge, MA",
			strongPrograms: ["Social Sciences", "Biology", "Medicine"],
			admissionRate: "4%",
			averageSAT: 1520,
		},
		{
			name: "California Institute of Technology",
			location: "Pasadena, CA",
			strongPrograms: ["Engineering", "Technology", "Mathematics"],
			admissionRate: "6%",
			averageSAT: 1550,
		},
		{
			name: "University of California, Berkeley",
			location: "Berkeley, CA",
			strongPrograms: ["Computer Science", "Economics", "Engineering"],
			admissionRate: "11%",
			averageSAT: 1455,
		},
		{
			name: "University of Pennsylvania",
			location: "Philadelphia, PA",
			strongPrograms: ["Finance", "Business", "Economics"],
			admissionRate: "6%",
			averageSAT: 1500,
		},
		{
			name: "Princeton University",
			location: "Princeton, NJ",
			strongPrograms: ["Mathematics", "Humanities", "Engineering"],
			admissionRate: "4%",
			averageSAT: 1505,
		},
		{
			name: "Yale University",
			location: "New Haven, CT",
			strongPrograms: ["Social Sciences", "Humanities", "Arts"],
			admissionRate: "5%",
			averageSAT: 1500,
		},
		{
			name: "University of Michigan",
			location: "Ann Arbor, MI",
			strongPrograms: ["Engineering", "Business", "Health Sciences"],
			admissionRate: "20%",
			averageSAT: 1435,
		},
		{
			name: "Duke University",
			location: "Durham, NC",
			strongPrograms: ["Biology", "Medicine", "Social Sciences"],
			admissionRate: "6%",
			averageSAT: 1490,
		},
		{
			name: "Columbia University",
			location: "New York, NY",
			strongPrograms: ["Humanities", "Social Sciences", "Engineering"],
			admissionRate: "4%",
			averageSAT: 1505,
		},
		{
			name: "University of Chicago",
			location: "Chicago, IL",
			strongPrograms: ["Economics", "Social Sciences", "Mathematics"],
			admissionRate: "6%",
			averageSAT: 1530,
		},
		{
			name: "Northwestern University",
			location: "Evanston, IL",
			strongPrograms: ["Business", "Social Sciences", "Arts"],
			admissionRate: "7%",
			averageSAT: 1495,
		},
		{
			name: "Cornell University",
			location: "Ithaca, NY",
			strongPrograms: ["Engineering", "Biology", "Business"],
			admissionRate: "9%",
			averageSAT: 1480,
		},
		{
			name: "University of Southern California",
			location: "Los Angeles, CA",
			strongPrograms: ["Arts", "Business", "Technology"],
			admissionRate: "12%",
			averageSAT: 1450,
		},
		{
			name: "University of North Carolina at Chapel Hill",
			location: "Chapel Hill, NC",
			strongPrograms: ["Health Sciences", "Social Sciences", "Humanities"],
			admissionRate: "19%",
			averageSAT: 1395,
		},
		{
			name: "University of Texas at Austin",
			location: "Austin, TX",
			strongPrograms: ["Engineering", "Computer Science", "Business"],
			admissionRate: "29%",
			averageSAT: 1370,
		},
		{
			name: "Georgia Institute of Technology",
			location: "Atlanta, GA",
			strongPrograms: ["Computer Science", "Engineering", "Technology"],
			admissionRate: "17%",
			averageSAT: 1460,
		},
		{
			name: "New York University",
			location: "New York, NY",
			strongPrograms: ["Arts", "Business", "Social Sciences"],
			admissionRate: "13%",
			averageSAT: 1450,
		},
		{
			name: "Brown University",
			location: "Providence, RI",
			strongPrograms: ["Humanities", "Biology", "Social Sciences"],
			admissionRate: "5%",
			averageSAT: 1485,
		},
		{
			name: "University of Washington",
			location: "Seattle, WA",
			strongPrograms: ["Computer Science", "Health Sciences", "Engineering"],
			admissionRate: "48%",
			averageSAT: 1340,
		},
		{
			name: "University of Wisconsin-Madison",
			location: "Madison, WI",
			strongPrograms: ["Biology", "Engineering", "Mathematics"],
			admissionRate: "49%",
			averageSAT: 1345,
		},
		{
			name: "University of Florida",
			location: "Gainesville, FL",
			strongPrograms: ["Health Sciences", "Engineering", "Social Sciences"],
			admissionRate: "30%",
			averageSAT: 1375,
		},
		{
			name: "Boston University",
			location: "Boston, MA",
			strongPrograms: ["Business", "Health Sciences", "Social Sciences"],
			admissionRate: "19%",
			averageSAT: 1420,
		},
		{
			name: "Indiana University Bloomington",
			location: "Bloomington, IN",
			strongPrograms: ["Business", "Finance", "Social Sciences"],
			admissionRate: "80%",
			averageSAT: 1300,
		},
	];
	// Filter based on user interests
	return sampleColleges
		.filter(college => {
			return interests.some(
				interest => college.strongPrograms.includes(interest) || college.location.includes(location),
			);
		})
		.slice(0, 6); // Limit to 3 recommendations
};
