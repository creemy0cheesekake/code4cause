// Available academic interests
export const academicInterests = [
	"Arts",
	"Biology",
	"Business",
	"Computer Science",
	"Economics",
	"Engineering",
	"Finance",
	"Health Sciences",
	"Humanities",
	"Mathematics",
	"Medicine",
	"Social Sciences",
	"Technology",
];
// lib/data.ts

export const apClassesByInterest: Record<string, { name: string; url: string }[]> = {
	Arts: [
		{ name: "AP Art History", url: "https://apstudents.collegeboard.org/courses/ap-art-history" },
		{ name: "AP Music Theory", url: "https://apstudents.collegeboard.org/courses/ap-music-theory" },
		{ name: "AP 2-D Art and Design", url: "https://apstudents.collegeboard.org/courses/ap-2-d-art-and-design" },
	],
	Biology: [
		{ name: "AP Biology", url: "https://apstudents.collegeboard.org/courses/ap-biology" },
		{
			name: "AP Environmental Science",
			url: "https://apstudents.collegeboard.org/courses/ap-environmental-science",
		},
	],
	Business: [
		{ name: "AP Macroeconomics", url: "https://apstudents.collegeboard.org/courses/ap-macroeconomics" },
		{ name: "AP Microeconomics", url: "https://apstudents.collegeboard.org/courses/ap-microeconomics" },
		{ name: "AP Statistics", url: "https://apstudents.collegeboard.org/courses/ap-statistics" },
	],
	"Computer Science": [
		{ name: "AP Computer Science A", url: "https://apstudents.collegeboard.org/courses/ap-computer-science-a" },
		{
			name: "AP Computer Science Principles",
			url: "https://apstudents.collegeboard.org/courses/ap-computer-science-principles",
		},
	],
	Economics: [
		{ name: "AP Microeconomics", url: "https://apstudents.collegeboard.org/courses/ap-microeconomics" },
		{ name: "AP Macroeconomics", url: "https://apstudents.collegeboard.org/courses/ap-macroeconomics" },
	],
	Engineering: [
		{ name: "AP Physics C: Mechanics", url: "https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics" },
		{ name: "AP Calculus BC", url: "https://apstudents.collegeboard.org/courses/ap-calculus-bc" },
		{ name: "AP Computer Science A", url: "https://apstudents.collegeboard.org/courses/ap-computer-science-a" },
	],
	Finance: [
		{ name: "AP Statistics", url: "https://apstudents.collegeboard.org/courses/ap-statistics" },
		{ name: "AP Macroeconomics", url: "https://apstudents.collegeboard.org/courses/ap-macroeconomics" },
		{ name: "AP Microeconomics", url: "https://apstudents.collegeboard.org/courses/ap-microeconomics" },
	],
	"Health Sciences": [
		{ name: "AP Biology", url: "https://apstudents.collegeboard.org/courses/ap-biology" },
		{ name: "AP Psychology", url: "https://apstudents.collegeboard.org/courses/ap-psychology" },
		{ name: "AP Chemistry", url: "https://apstudents.collegeboard.org/courses/ap-chemistry" },
	],
	Humanities: [
		{
			name: "AP World History: Modern",
			url: "https://apstudents.collegeboard.org/courses/ap-world-history-modern",
		},
		{
			name: "AP United States History",
			url: "https://apstudents.collegeboard.org/courses/ap-united-states-history",
		},
		{ name: "AP Human Geography", url: "https://apstudents.collegeboard.org/courses/ap-human-geography" },
		{
			name: "AP English Literature and Composition",
			url: "https://apstudents.collegeboard.org/courses/ap-english-literature-and-composition",
		},
	],
	Mathematics: [
		{ name: "AP Calculus AB", url: "https://apstudents.collegeboard.org/courses/ap-calculus-ab" },
		{ name: "AP Calculus BC", url: "https://apstudents.collegeboard.org/courses/ap-calculus-bc" },
		{ name: "AP Statistics", url: "https://apstudents.collegeboard.org/courses/ap-statistics" },
	],
	Medicine: [
		{ name: "AP Biology", url: "https://apstudents.collegeboard.org/courses/ap-biology" },
		{ name: "AP Chemistry", url: "https://apstudents.collegeboard.org/courses/ap-chemistry" },
		{ name: "AP Psychology", url: "https://apstudents.collegeboard.org/courses/ap-psychology" },
	],
	"Social Sciences": [
		{ name: "AP Psychology", url: "https://apstudents.collegeboard.org/courses/ap-psychology" },
		{
			name: "AP United States Government and Politics",
			url: "https://apstudents.collegeboard.org/courses/ap-united-states-government-and-politics",
		},
		{
			name: "AP Comparative Government and Politics",
			url: "https://apstudents.collegeboard.org/courses/ap-comparative-government-and-politics",
		},
	],
	Technology: [
		{ name: "AP Computer Science A", url: "https://apstudents.collegeboard.org/courses/ap-computer-science-a" },
		{
			name: "AP Computer Science Principles",
			url: "https://apstudents.collegeboard.org/courses/ap-computer-science-principles",
		},
		{ name: "AP Physics C: Mechanics", url: "https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics" },
	],
};

// US Regions
export const regions = ["Northeast", "Southeast", "Midwest", "Southwest", "West Coast", "Northwest", "Other"];

// Available graduation years (current year + 1-4 years)
export const getGraduationYears = (): number[] => {
	const currentYear = new Date().getFullYear();
	return [
		currentYear,
		currentYear + 1,
		currentYear + 2,
		currentYear + 3,
		currentYear + 4,
		currentYear + 5,
		currentYear + 6,
		currentYear + 7,
	];
};

// Grade-specific milestone data
export const milestones = {
	"Freshman (9th Grade)": {
		academics: [
			"Take challenging core courses",
			"Identify subjects that interest you",
			"Develop good study habits",
			"Meet with your school counselor",
		],
		extracurricular: [
			"Explore clubs and activities",
			"Try different sports or arts programs",
			"Consider volunteer opportunities",
			"Start tracking your activities",
		],
		collegePrep: [
			"Start thinking about potential careers",
			"Talk to adults about their college experiences",
			"Research high school course requirements for college",
			"Create an academic four-year plan",
		],
	},
	"Sophomore (10th Grade)": {
		academics: [
			"Take the PSAT for practice",
			"Consider AP or honors courses",
			"Maintain a strong GPA",
			"Identify academic strengths",
		],
		extracurricular: [
			"Deepen involvement in activities",
			"Consider leadership opportunities",
			"Continue community service",
			"Participate in summer programs",
		],
		collegePrep: [
			"Research college types and majors",
			"Attend college fairs",
			"Visit nearby campuses if possible",
			"Start preparing for standardized tests",
		],
	},
	"Junior (11th Grade)": {
		academics: [
			"Take challenging courses relevant to your interests",
			"Prepare for and take the SAT/ACT",
			"Consider SAT Subject Tests",
			"Maintain strong academic performance",
		],
		extracurricular: [
			"Take on leadership roles",
			"Focus on meaningful involvement",
			"Seek internship opportunities",
			"Consider summer programs related to your interests",
		],
		collegePrep: [
			"Build your college list",
			"Research financial aid and scholarships",
			"Visit colleges",
			"Prepare for college essays",
			"Talk to teachers about recommendation letters",
		],
	},
	"Senior (12th Grade)": {
		academics: [
			"Maintain strong grades",
			"Take any remaining standardized tests",
			"Complete challenging courses",
			"Avoid senioritis",
		],
		extracurricular: [
			"Continue leadership positions",
			"Document achievements and hours",
			"Consider mentoring younger students",
			"Engage with your community",
		],
		collegePrep: [
			"Complete college applications",
			"Submit financial aid forms (FAFSA/CSS Profile)",
			"Apply for scholarships",
			"Consider early decision/action options",
			"Make final college decision",
			"Prepare for transition to college",
		],
	},
	"Middle School": {
		academics: [
			"Build strong academic foundations",
			"Develop good study habits",
			"Read widely across subjects",
			"Learn about different high school options",
		],
		extracurricular: [
			"Try different activities to discover interests",
			"Participate in school clubs",
			"Consider community activities",
			"Keep a log of activities",
		],
		collegePrep: [
			"Start thinking about potential interests",
			"Research high school course options",
			"Talk to parents and teachers about college planning",
			"Visit a local college campus for exposure",
		],
	},
	"College/Graduate": {
		academics: [
			"Focus on your studies or career",
			"Consider advanced degrees if relevant",
			"Maintain professional development",
			"Network in your field",
		],
		extracurricular: [
			"Engage in professional organizations",
			"Volunteer in your community",
			"Develop leadership skills",
			"Build your professional portfolio",
		],
		collegePrep: [
			"Explore career opportunities",
			"Research graduate programs if interested",
			"Connect with professionals in your field",
			"Develop job-seeking skills",
		],
	},
};

// lib/data.ts

export const competitionsData = [
	{
		title: "Science Olympiad",
		description:
			"A team-based competition in various science disciplines including engineering, biology, and social sciences.",
		tags: ["Engineering", "Computer Science", "Biology", "Mathematics", "Social Sciences"],
		organization: "National Science Olympiad Organization",
		registrationLink: "https://www.soinc.org/",
		infoLink: "https://www.soinc.org/",
	},
	{
		title: "Intel International Science and Engineering Fair (ISEF)",
		description:
			"A prestigious science fair for students to present independent research in areas like biology, medicine, and engineering.",
		tags: ["Biology", "Engineering", "Computer Science", "Medicine"],
		organization: "Intel Foundation",
		registrationLink: "https://www.societyforscience.org/isef/",
		infoLink: "https://www.societyforscience.org/isef/",
	},
	{
		title: "Business Professionals of America (BPA)",
		description: "A competition in business-related fields like finance, economics, and management.",
		tags: ["Business", "Finance", "Economics"],
		organization: "Business Professionals of America Organization",
		registrationLink: "https://www.bpa.org/",
		infoLink: "https://www.bpa.org/",
	},
	{
		title: "Google Code-In",
		description:
			"A global coding competition for pre-university students, where participants contribute to open source software.",
		tags: ["Computer Science", "Technology"],
		organization: "Google",
		registrationLink: "https://developers.google.com/open-source/gci",
		infoLink: "https://developers.google.com/open-source/gci",
	},
	{
		title: "Model United Nations (MUN)",
		description:
			"A simulation of the UN, where students debate global issues from political, economic, and social perspectives.",
		tags: ["Social Sciences", "Humanities", "Economics"],
		organization: "MUN International Organizations",
		registrationLink: "https://www.mun.org/",
		infoLink: "https://www.mun.org/",
	},
	{
		title: "HOSA-Future Health Professionals",
		description:
			"A competition for students interested in health professions, focusing on medical knowledge and healthcare-related skills.",
		tags: ["Health Sciences", "Medicine"],
		organization: "HOSA International",
		registrationLink: "https://www.hosa.org/",
		infoLink: "https://www.hosa.org/",
	},
	{
		title: "American Mathematics Competitions (AMC)",
		description:
			"A series of math competitions for high school students, focusing on problem-solving and mathematical theory.",
		tags: ["Mathematics"],
		organization: "Mathematical Association of America",
		registrationLink: "https://www.maa.org/math-competitions",
		infoLink: "https://www.maa.org/math-competitions",
	},
	{
		title: "The Economics Challenge",
		description:
			"A national competition where students demonstrate their knowledge of economics through various rounds of questions and challenges.",
		tags: ["Economics", "Business"],
		organization: "Council for Economic Education",
		registrationLink: "https://www.councilforeconed.org/",
		infoLink: "https://www.councilforeconed.org/",
	},
	{
		title: "FIRST Robotics",
		description:
			"An engineering competition where students design and build robots to compete in various challenges.",
		tags: ["Engineering", "Computer Science", "Technology"],
		organization: "FIRST Robotics",
		registrationLink: "https://www.firstinspires.org/robotics",
		infoLink: "https://www.firstinspires.org/robotics",
	},
	{
		title: "National History Day",
		description:
			"A history-based competition where students research and present historical topics through papers, exhibits, websites, and documentaries.",
		tags: ["Humanities", "Social Sciences"],
		organization: "National History Day Organization",
		registrationLink: "https://www.nhd.org/",
		infoLink: "https://www.nhd.org/",
	},
];
