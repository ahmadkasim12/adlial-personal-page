import { Icon } from "@iconify/react";
import Image from 'next/image';

const data = [
  {
    id: 1,
    name: "ProjectSynergy",
    alias: "Machinery Maintenance and Item Request Platform",
    description: "A 12th Grade final assignment developed specifically for Pabrik Gula Rendeng",
    link: "https://purrfectbites.rplrus.com/",
  },
  {
    id: 2,
    name: "quiqiNote.g",
    alias: "Personal Note-taking Application",
    description: "Flutter-based note-taking application",
    link: "https://purrfectbites.rplrus.com/",
  },
  {
    id: 3,
    name: "Music Player",
    alias: "Audio Player",
    description: "Flutter-based music player application with metadata fetching and customizations capabilities",
    link: "https://purrfectbites.rplrus.com/",
  },
  {
    id: 4,
    name: "Purrfectbites",
    alias: "PAS Web Dev",
    description: "10th Grade Final Semester Project for Web Development Course",
    link: "https://purrfectbites.rplrus.com/",
  }
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[1fr_20px] gap-6 items-center justify-items-center min-h-screen p-12 sm:p-20">
      <main className="max-w-[47em] max-h-[28em] overflow-y-scroll scrollbar-hidden gap-[32px] row-start-1 items-center sm:items-start">
        
        <div className="pointer-events-none absolute left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        
        <div className="grid grid-rows-[60px_1fr_60px] lg:grid-rows-[120px_1fr_120px]">
          <div className="row-start-2 grid grid-col items-center gap-6 sm:items-start">
          <div className="grid gap-6 items-center justify-items-center sm:grid-cols-[auto_1fr] sm:justify-items-start">
            {/* <img src={"https://i.pravatar.cc/300"} className="w-[80px] h-[80px] rounded-sm border border-white/50"></img> */}
            <Image src="/avatar.png" alt="Picture of the author" width={80} height={80} className="w-[80px] h-[80px] rounded-sm border border-white/50 object-cover"/>
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-bold text-center sm:text-left">
                Adlialfakhri Ziyadatulah
              </h1>
              <p className="text-md text-center sm:text-left text-white/60">
                An enthusiastic and passionate individual who is eager to learn and explore new things.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[302px_1fr] gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Projects</span>
              <span className="text-md text-white/60">This section resides for all projects that I've done throughout my journey.</span>
            </div>
            <div className="grid grid-cols-1 items-center lg:items-start rounded-sm border border-white/20">
              {data.map(item => (
                <div key={item.id} className="grid grid-rows-2 gap-1 px-8 py-6 text-white/60 border-b border-white/20 transition-colors">
                  <a
                    href={item.link}
                    className="flex justify-self-stretch items-center min-w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-bold shrink-0 hover:underline">{item.name}</span>
                    <span className="px-2">–</span>
                    <span className="relative block flex-1 min-w-0 overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:right-0 before:w-6 before:bg-gradient-to-l before:from-[#0a0a0a] before:to-transparent before:pointer-events-none">
                      <span className="inline-block whitespace-nowrap hover:animate-marquee">
                        {item.alias}
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z" />
                        <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
                      </g>
                    </svg>
                  </a>
                  <span className="text-sm bg-white/10 rounded-sm px-1 justify-self-start">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* <div className="pointer-events-none absolute bottom-47 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div> */}
      </main>
      <footer className="row-start-2 flex flex flex-col items-center justify-center">
        <div className="flex gap-4 items-center">
          <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/adlialfakhri-ziyadatullah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="ri:linkedin-fill" />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ahmadkasim12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="iconoir:github" />
          GitHub
        </a>
        </div>
        <span className="text-center text-white/30">Website are still in development so there will be more to come! (≧∀≦)ゞ</span>
      </footer>
    </div>
  );
}
