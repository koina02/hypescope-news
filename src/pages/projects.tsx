import Head from "next/head";

const projects = [
  {
    name: "Deep Trace",
    desc: "A forensic AI tool built for modern investigation — from cybercrime to digital audits.",
    link: "https://github.com/koina02/deep-trace",
    status: "In Progress",
  },
  {
    name: "BulkPayX",
    desc: "Bulk payments, reimagined. Perfect for orgs, SMEs, and gov agencies.",
    link: "https://github.com/koina02/bulkpayx",
    status: "Beta Launch",
  },
  {
    name: "AI Marine Clean-Up",
    desc: "AI-powered marine pollution remediation and ecosystem restoration platform.",
    link: "https://github.com/koina02/ai-marine-cleanup",
    status: "Prototype Phase",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Hypescope News</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8 sm:p-16">
        <h1 className="text-4xl font-bold mb-6">Featured Projects</h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          These are more than side quests. These are tools pushing the edge of tech.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, desc, link, status }) => (
            <div
              key={name}
              className="bg-gray-800 p-6 rounded-xl hover:bg-indigo-700 transition"
            >
              <h2 className="text-xl font-semibold mb-1">{name}</h2>
              <p className="text-gray-400 text-sm mb-2">{desc}</p>
              <p className="text-xs text-gray-500 mb-3">Status: {status}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline text-sm"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
