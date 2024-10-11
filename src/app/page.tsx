"use client";

import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";

export default function Home() {
  const words: string[] = ["WEED", "ICE", "HEROIN", "ECSTASY", "ALCOHOL"];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <div
        className="bg-[url('/drugabusegif4.gif')] bg-cover bg-no-repeat h-screen flex items-center justify-center bg-fixed"
        aria-label="A visual representation related to drug abuse"
      >
        <div className="flex flex-col items-center">
          {/* First White Text Box */}
          <div className="text-center p-4 bg-white bg-opacity-80 rounded-md shadow-lg mb-4">
            <p className="font-bold text-8xl mb-4 text-black">
              <span>{isMounted ? <FlipWords words={words} /> : words[0]}</span>
            </p>
            <p className="font-bold text-2xl mb-2 text-black">Sounds Familiar?</p>
            <p className="text-lg text-black">
              These are some of the most commonly abused drugs in Singapore
            </p>
          </div>

          {/* New White Text Box Below */}
          <div className="text-center p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
            <p className="font-bold text-lg text-black">Building a Drug-Free Future</p>
            <p className="text-base text-black">
              In Singapore, substance abuse affects thousands each year. Awareness and prevention are key to tackling this issue.
              Educating ourselves and others about the dangers of drug use can help prevent addiction and save lives.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Section with Additional Text Boxes */}
      <div className="parallax relative h-screen" style={{ backgroundImage: "url('/drugabusegif5.gif')" }}>
        <div className="flex flex-col items-center justify-center h-full">
          {/* Title */}
          <h2 className="text-black text-4xl font-bold mb-8">Understanding the Dangers of Drug Use</h2>

          {/* Additional Text Boxes in the Parallax Section */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Row */}
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="text-black font-bold text-lg">Physical Health Risks</h3>
              <p className="text-base text-black">
                Drug use can lead to a range of serious health issues, such as organ damage, respiratory problems, and increased risk of infectious diseases.
                Understanding these dangers is crucial for making informed choices.
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="text-black font-bold text-lg">Mental Health Challenges</h3>
              <p className="text-base text-black">
                Substance abuse can trigger or worsen mental health disorders, including depression, anxiety, and paranoia.
                Awareness of these effects can encourage individuals to seek help and prioritize their mental well-being.
              </p>
            </div>

            {/* Second Row */}
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="text-black font-bold text-lg">Impact on Relationships</h3>
              <p className="text-base text-black">
                Drug use can strain relationships with family, friends, and colleagues, leading to isolation and conflict.
                Recognizing this impact is vital for fostering supportive environments that promote recovery.
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="text-black font-bold text-lg">Legal and Financial Consequences</h3>
              <p className="text-base text-black">
                Involvement with drugs can result in legal troubles, including arrests and fines, as well as financial instability due to treatment costs or loss of employment.
                Understanding these risks can help individuals make safer choices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Below */}
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-black">Getting Support</h2>
        <p className="mt-4 text-black">
          Whether it is binge drinking, smoking, drug or alcohol abuse, you do not need to be a lone ranger in the fight against addiction.
          Seek support and help from these organisations to come up with a good treatment plan. Remember, a good strategic plan is half the battle won.
        </p>
      </div>

      {/* Additional Text Boxes Below */}
      <div className="p-8 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Row */}
        <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
          <h3 className="font-bold text-lg text-black">Alcoholics Anonymous</h3>
          <p className="text-base text-black">
          Alcoholics Anonymous is a self-funded, worldwide organisation that provides a platform for alcoholics to support each other in achieving sobriety.
          </p>
        </div>
        <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
          <h3 className="font-bold text-lg text-black">Al-Anon Family Groups</h3>
          <p className="text-base text-black">
          The Al-Anon Family Groups offers help and support to families and friends of alcoholics.
          The Singapore Al-Anon website has details of the Al-Anon Program and meeting schedules and venues.
          </p>
        </div>

        {/* Second Row */}
        <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
          <h3 className="font-bold text-lg text-black">National Addictions Management Service (NAMS)</h3>
          <p className="text-base text-black">
          The National Addictions Management Service (NAMS) provides treatment for a broad range of addictions, including addiction to drugs, alcohol, gambling, gaming and others. 
          Managed by a multi-disciplinary team of specialists, patients will be thoroughly assessed to determine a treatment plan that best suits them. 
          </p>
        </div>
        <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
          <h3 className="font-bold text-lg text-black">WE CARE Community Services Limited</h3>
          <p className="text-base text-black">
          WE CARE Community Services is a non-profit organisation that provides treatment for individuals recovering from all kinds of addictions (such as drugs and alcohol) and compulsive behaviours like shoplifting, as well as their families. 
          We also host recovery support group meetings, run a drop-in centre where recovering persons can connect, and conduct outreach talks to schools and the community.
          </p>
        </div>
      </div>
    </div>
  );
}
