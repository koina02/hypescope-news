import Head from "next/head";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | Hypescope News</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8 sm:p-16">
        <h1 className="text-4xl font-bold mb-6">Our Core Features</h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          At Hypescope, we're not just reporting the news — we're rethinking how you experience it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Content Curation",
              desc: "Smart algorithms bring you only the most relevant and credible news.",
            },
            {
              title: "Privacy-First Design",
              desc: "No creepy tracking, ever. Just clean, respectful journalism.",
            },
            {
              title: "Cybersecurity Focused",
              desc: "Security threats? We break them down before they break you.",
            },
            {
              title: "Open Source Tools",
              desc: "We build and share tech that powers the future. Yours and ours.",
            },
            {
              title: "Global Contributor Network",
              desc: "Voices from Nairobi to New York. The web is wide — so are we.",
            },
            {
              title: "Real-Time Threat Coverage",
              desc: "Track critical breaches and cyber incidents as they unfold.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-gray-800 p-6 rounded-xl hover:bg-indigo-700 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
