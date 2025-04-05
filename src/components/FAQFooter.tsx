import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

const FAQFooter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // To track which question is open

  // Toggle FAQ dropdown visibility
  const toggleDropdown = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index); // Close the question if it's already open
  };

  // Effect to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsAtBottom(isBottom);
      if (isBottom) {
        setIsOpen(true); // Automatically open FAQ when we reach the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-lg transition-transform ${
        isAtBottom ? 'transform-none' : 'transform translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Frequently Asked Questions
        </h2>
        {isOpen && (
          <div className="space-y-4">
            {/* Existing Questions */}
            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(0)} className="cursor-pointer hover:text-blue-500">
                What are AP courses?
              </CardTitle>
              {openQuestion === 0 && (
                <CardDescription className="mt-2">
                  Advanced Placement (AP) courses are college-level classes that you can take in high school. They provide the opportunity to earn college credit or advanced placement in college courses based on your AP exam scores.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(1)} className="cursor-pointer hover:text-blue-500">
                What is the SAT/ACT/PSAT?
              </CardTitle>
              {openQuestion === 1 && (
                <CardDescription className="mt-2">
                  The SAT, ACT, and PSAT are standardized tests used for college admissions in the United States. The SAT and ACT assess a student’s readiness for college, while the PSAT is a practice test for the SAT and is often used to qualify for National Merit Scholarships.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(2)} className="cursor-pointer hover:text-blue-500">
                Difference between SAT and ACT
              </CardTitle>
              {openQuestion === 2 && (
                <CardDescription className="mt-2">
                  The SAT focuses more on reasoning and problem-solving skills, while the ACT tests your knowledge in English, math, reading, and science. The SAT has no science section, and the ACT includes a science reasoning section.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(3)} className="cursor-pointer hover:text-blue-500">
                Safety, Match, and Reach Schools
              </CardTitle>
              {openQuestion === 3 && (
                <CardDescription className="mt-2">
                  Safety schools are colleges where your academic credentials are above the school's admission standards. Match schools are those where your academic qualifications align with the school's average admitted student. Reach schools are colleges where your credentials are below their average admitted student.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(4)} className="cursor-pointer hover:text-blue-500">
                Fee waivers for SAT/ACT/PSAT
              </CardTitle>
              {openQuestion === 4 && (
                <CardDescription className="mt-2">
                  Fee waivers are available for students who cannot afford the costs of the SAT, ACT, or PSAT. You can apply for a fee waiver through your high school counselor or directly through the testing organizations, based on your eligibility for financial assistance.
                </CardDescription>
              )}
            </div>

            {/* New Questions */}
            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(5)} className="cursor-pointer hover:text-blue-500">
                What is the Common App?
              </CardTitle>
              {openQuestion === 5 && (
                <CardDescription className="mt-2">
                  The Common Application (Common App) is a standardized college application platform that allows students to apply to multiple colleges and universities with one application. It streamlines the admissions process for both students and institutions.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(6)} className="cursor-pointer hover:text-blue-500">
                What types of scholarships can I apply for?
              </CardTitle>
              {openQuestion === 6 && (
                <CardDescription className="mt-2">
                  There are various types of scholarships available for college students, including merit-based scholarships, need-based scholarships, athletic scholarships, and scholarships based on specific criteria such as community service, leadership, or field of study.
                </CardDescription>
              )}
            </div>

            <div className="border p-4 shadow-sm">
              <CardTitle onClick={() => toggleDropdown(7)} className="cursor-pointer hover:text-blue-500">
                What’s the difference between early action, early decision, and restricted early action?
              </CardTitle>
              {openQuestion === 7 && (
                <CardDescription className="mt-2">
                  Early action allows you to apply early and receive a decision early, but you are not committed to attending. Early decision is binding, meaning you commit to attending the college if admitted. Restricted early action is similar to early action but with limitations on applying to other schools early.
                </CardDescription>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQFooter;