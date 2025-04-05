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
					title: "Get adjusted to high school",
					description:
						"High school is vastly different from middle school, so it’s important to get acquainted with where you’ll be spending the next four years.",
					links: [
						{
							label: "Middle School to High School Transition",
							url: "https://summitlearningcharter.org/about-us/blog/middle-school-to-high-school-transition/",
						},
					],
				},
				{
					title: "Find extracurriculars",
					description:
						"Though you’re early in the process, begin exploring extracurriculars that interest you. Whether it’s Debate or Yearbook Club, find something you’re passionate about — it’ll help you go further and possibly lead to future leadership roles.",
					links: [
						{
							label: "Why Extracurriculars Matter",
							url: "https://bigfuture.collegeboard.org/plan-for-college/stand-out-in-high-school/extracurriculars-matter-to-you-and-to-colleges",
						},
					],
				},
				{
					title: "Take honors courses",
					description:
						"It’s never too early to challenge yourself academically. Enroll in a few honors classes to gain early exposure to more rigorous coursework.",
					links: [],
				},
				{
					title: "Take the PSAT",
					description:
						"The PSAT offers a preview of the SAT and an opportunity to qualify for the National Merit Scholarship. If your school offers it, take advantage of this valuable practice.",
					links: [
						{
							label: "Why Take the PSAT/NMSQT",
							url: "https://satsuite.collegeboard.org/sat-suite-benefits-students-parents/why-take-psat/why-take-psat-nmsqt",
						},
					],
				},
				{
					title: "Consider college-level courses",
					description:
						"If you feel ready, look into college-level coursework. You’ll not only challenge yourself but may also earn college credit early. Options include Advanced Placement (AP) or dual-enrollment courses.",
					links: [
						{
							label: "Benefits of Earning College Credits in High School",
							url: "https://www.cvtc.edu/news-events/blog/benefits-of-earning-college-credits-in-high-school",
						},
						{
							label: "What is AP?",
							url: "https://apstudents.collegeboard.org/what-is-ap",
						},
						{
							label: "Dual Enrollment FAQs",
							url: "https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/dual-enrollment-faqs.html",
						},
					],
				},
				{
					title: "Volunteer in the community",
					description:
						"Volunteering is a great way to explore your interests, build leadership skills, and show colleges your commitment to making a difference. Find opportunities through nonprofits, school clubs, and other local organizations.",
					links: [
						{
							label: "Why Volunteering Is Important for High School Students",
							url: "https://www.medlifemovement.org/medlife-stories/students/why-is-volunteering-important-for-high-school-students/",
						},
					],
				},
				{
					title: "Research summer programs",
					description:
						"Summer programs allow you to explore college life, meet new people, and deepen your academic interests. From pre-college courses to research and enrichment programs, there’s something for everyone.",
					links: [
						{
							label: "Guide to Summer Programs",
							url: "https://www.highschoolguidereclaimfee.org/summer-programs-1",
						},
					],
				},
			];

		case "Sophomore (10th Grade)":
			return [
				{
					title: "Take honors courses",
					description:
						"Now that you’re more adjusted to high school, continue challenging yourself academically with honors classes. These courses will help you build a strong foundation for advanced coursework later on.",
					links: [],
				},
				{
					title: "Take college-level courses",
					description:
						"If you're ready for a greater academic challenge, consider enrolling in Advanced Placement (AP) or dual-enrollment courses. These not only strengthen your college application, but may also earn you college credit — saving time and money.",
					links: [
						{
							label: "What is AP?",
							url: "https://apstudents.collegeboard.org/what-is-ap",
						},
						{
							label: "Dual Enrollment FAQs",
							url: "https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/dual-enrollment-faqs.html",
						},
					],
				},
				{
					title: "Begin committing to extracurriculars",
					description:
						"Colleges value consistent, long-term involvement. Sophomore year is a great time to start showing sustained commitment to activities you’re passionate about.",
					links: [],
				},
				{
					title: "Consider founding a club",
					description:
						"If you don’t see a club that reflects your interests, create one. Founding a club demonstrates leadership, initiative, and innovation — traits that stand out to colleges.",
					links: [
						{
							label: "How to Start a Club in High School",
							url: "https://blog.prepscholar.com/how-to-start-a-club-in-high-school",
						},
					],
				},
				{
					title: "Take the PSAT",
					description:
						"The PSAT is a preview of the SAT and can qualify you for the National Merit Scholarship in your junior year. Use your sophomore year to get comfortable with the test format and content.",
					links: [],
				},
				{
					title: "Volunteer in the community",
					description:
						"Continue engaging with your community through volunteering. It demonstrates empathy, leadership, and social responsibility — all important qualities for college and beyond.",
					links: [
						{
							label: "Why Volunteering Is Important for High School Students",
							url: "https://www.medlifemovement.org/medlife-stories/students/why-is-volunteering-important-for-high-school-students/",
						},
					],
				},
				{
					title: "College visits (if possible)",
					description:
						"If feasible, begin visiting college campuses. Campus visits provide valuable insight into a school’s environment and culture, helping you determine where you feel most comfortable.",
					links: [],
				},
				{
					title: "Research summer programs",
					description:
						"Explore summer programs that align with your interests. These programs offer enrichment, exposure to college life, and opportunities to connect with peers from diverse backgrounds.",
					links: [
						{
							label: "Guide to Summer Programs",
							url: "https://www.highschoolguidereclaimfee.org/summer-programs-1",
						},
					],
				},
				{
					title: "Plan for SAT/ACT timing",
					description:
						"Start thinking about when you’ll take the SAT or ACT — most students sit for these exams during junior year. Early planning allows time for preparation and retakes if necessary.",
					links: [
						{
							label: "When Should You Take the SAT?",
							url: "https://blog.collegeboard.org/when-should-you-take-the-sat",
						},
						{
							label: "When to Take the ACT",
							url: "https://www.act.org/content/act/en/products-and-services/the-act/scores/when-to-take-the-act.html",
						},
					],
				},
			];

		case "Junior (11th Grade)":
			return [
				{
					title: "Take honors courses",
					description:
						"Continue challenging yourself with honors-level classes. Maintaining a rigorous course load demonstrates academic dedication and strengthens your college application profile.",
					links: [],
				},
				{
					title: "Take college-level courses",
					description:
						"Enroll in Advanced Placement (AP) or Dual Enrollment classes to gain exposure to college-level work and potentially earn college credit. These programs highlight your readiness for advanced academic challenges and may reduce future college costs.",
					links: [
						{
							label: "What is AP?",
							url: "https://apstudents.collegeboard.org/what-is-ap",
						},
						{
							label: "Dual Enrollment FAQs",
							url: "https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/dual-enrollment-faqs.html",
						},
					],
				},
				{
					title: "Consider letters of recommendation",
					description:
						"Identify teachers who know you well and can speak to your strengths. Most colleges require at least one letter from a current or recent teacher, so begin cultivating those relationships now.",
					links: [
						{
							label: "How to Get a Great Letter of Recommendation",
							url: "https://bigfuture.collegeboard.org/plan-for-college/apply-to-college/application-process/how-to-get-a-great-letter-of-recommendation",
						},
					],
				},
				{
					title: "Volunteer in the community",
					description:
						"Continue to deepen your engagement with your community. Colleges appreciate students who contribute to society and grow their leadership and interpersonal skills through meaningful service.",
					links: [
						{
							label: "Why Volunteering Is Important for High School Students",
							url: "https://www.medlifemovement.org/medlife-stories/students/why-is-volunteering-important-for-high-school-students/",
						},
					],
				},
				{
					title: "Take the PSAT",
					description:
						"This is the most critical year to take the PSAT, as it can qualify you for the National Merit Scholarship. Your performance can open the door to scholarships and recognition nationwide.",
					links: [],
				},
				{
					title: "Take the SAT or ACT",
					description:
						"Junior year is the ideal time to take your first official SAT or ACT. Early testing gives you flexibility to retake the exam for a better score before application deadlines.",
					links: [],
				},
				{
					title: "Consider founding a club",
					description:
						"If a club aligning with your passions doesn’t yet exist, take initiative and start one. Founding a club reflects leadership, creativity, and commitment—qualities that colleges value highly.",
					links: [],
				},
				{
					title: "Research colleges",
					description:
						"Start researching colleges that align with your interests. Evaluate academics, campus culture, financial aid, and location to build a strong, balanced college list.",
					links: [
						{
							label: "How to Research a College Effectively",
							url: "https://www.ivywise.com/ivywise-knowledgebase/how-to-research-a-college-effectively/",
						},
					],
				},
				{
					title: "Tour colleges",
					description:
						"Spring of junior year is the ideal time for campus tours. Visiting in person helps you get a sense of the environment and assess if a school aligns with your goals and personality.",
					links: [],
				},
				{
					title: "Begin to apply for scholarships",
					description:
						"Start searching and applying for scholarships, especially during the summer before senior year. Programs like QuestBridge can provide full-ride opportunities for eligible students. Don’t miss early deadlines!",
					links: [
						{
							label: "Types of Scholarships",
							url: "https://studentaid.gov/understand-aid/types/scholarships",
						},
						{
							label: "Scholarships.com",
							url: "https://www.scholarships.com/",
						},
						{
							label: "QuestBridge",
							url: "https://www.questbridge.org/",
						},
					],
				},
			];

		case "Senior (12th Grade)":
			return [
				{
					title: "Take honors courses",
					description:
						"Continue to enroll in honors-level courses to maintain a strong academic record. These courses demonstrate your commitment to academic excellence and prepare you for the rigors of higher education.",
					links: [],
				},
				{
					title: "Take college-level courses",
					description:
						"Continue taking Advanced Placement (AP) or Dual Enrollment courses. These classes provide opportunities to earn college credit while still in high school, demonstrating your preparedness for higher education and potentially reducing your future college expenses.",
					links: [
						{
							label: "What is AP?",
							url: "https://apstudents.collegeboard.org/what-is-ap",
						},
						{
							label: "Dual Enrollment FAQs",
							url: "https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/dual-enrollment-faqs.html",
						},
					],
				},
				{
					title: "Obtain letters of recommendation",
					description:
						"Reach out to your selected teachers to request letters of recommendation. This process may feel intimidating, but providing ample time (at least a month) and asking early ensures that your recommenders can write strong and thoughtful letters.",
					links: [
						{
							label: "How to Get a Great Letter of Recommendation",
							url: "https://bigfuture.collegeboard.org/plan-for-college/apply-to-college/application-process/how-to-get-a-great-letter-of-recommendation",
						},
					],
				},
				{
					title: "Apply for scholarships",
					description:
						"Search for and apply to a variety of scholarships, including those based on academic achievement, extracurricular involvement, and financial need. Start early to maximize opportunities and reduce the financial burden of college.",
					links: [
						{
							label: "Types of Scholarships",
							url: "https://studentaid.gov/understand-aid/types/scholarships",
						},
					],
				},
				{
					title: "College visit (Part Two)",
					description:
						"Now is the time to revisit the colleges on your shortlist. Participate in campus tours, attend classes, and talk with current students to gauge if a school is the right fit for you.",
					links: [],
				},
				{
					title: "Fill out Common App",
					description:
						"The Common Application allows you to apply to multiple colleges with one streamlined process. Complete your personal information, list extracurricular activities, write your personal statement, and add colleges to your list. Be sure to stay organized and meet all application deadlines.",
					links: [
						{
							label: "Common App Website",
							url: "https://www.commonapp.org/",
						},
						{
							label: "Common App for First-Year Students",
							url: "https://www.commonapp.org/apply/first-year-students",
						},
					],
				},
				{
					title: "Fill out FAFSA",
					description:
						"Complete the Free Application for Federal Student Aid (FAFSA) as early as possible to be considered for federal aid, including grants, scholarships, and work-study programs. Be sure to have your family's financial details ready.",
					links: [
						{
							label: "FAFSA Information",
							url: "https://studentaid.gov/",
						},
						{
							label: "How to Fill Out FAFSA",
							url: "https://studentaid.gov/apply-for-aid/fafsa/filling-out",
						},
					],
				},
				{
					title: "Submit applications (by November, ideally)",
					description:
						"Submit your college applications well in advance of their deadlines. Early Decision (ED) and Early Action (EA) applications are typically due in November, while Regular Decision deadlines generally fall in January. Be mindful of the deadlines for each school on your list.",
					links: [],
				},
			];

		case "Middle School":
			return [
				{
					title: "Enjoy life",
					description: "Enjoy your life as a middle schooler! Don’t stress about college just yet.",
					links: [],
				},
				{
					title: "Explore interests",
					description:
						"Join clubs or extracurriculars that speak to you. There’s no harm in trying new things out! If you find something you enjoy, you could continue into high school.",
					links: [],
				},
				{
					title: "Hone academic skills",
					description:
						"Although colleges don’t take middle school grades into account, it’s important to set a good foundation for high school. Being in more advanced classes in middle school can also allow you to take advanced classes from the start in high school.",
					links: [],
				},
				{
					title: "Take a foreign language, if possible",
					description:
						"Many colleges have high school foreign language credit requirements. Beginning in middle school can help you meet those expectations and set you up to take AP or dual-enrollment courses in high school.",
					links: [],
				},
				{
					title: "Consider high school classes",
					description:
						"Try challenging yourself with high-school level courses! It’s great preparation as you’ll get early exposure to the rigor of high school academics.",
					links: [],
				},
				{
					title: "Consider dual-enrollment",
					description:
						"Though not required, if you're looking for an additional challenge, consider dual enrollment at your local community college.",
					links: [],
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
