import Link from "next/link";
import Head from "next/head";

const articles = [
  {
    id: 1,
    title: "AI’s Role in Modern Cyber Defense",
    excerpt:
      "Explore how artificial intelligence is transforming the cybersecurity landscape with smarter threat detection and faster response systems.",
    author: "Qoin.py",
    date: "May 18, 2025",
  },
  {
    id: 2,
    title: "Quantum Computing: The Next Threat Vector?",
    excerpt:
      "Quantum tech isn’t just cool — it could break modern encryption. Here’s what you need to know and how to prep.",
    author: "Ian Koina",
    date: "May 16, 2025",
  },
  {
    id: 3,
    title: "Inside the Deep Trace Project",
    excerpt:
      "Get an exclusive look at how Deep Trace is redefining digital forensics with predictive AI and real-time evidence analysis.",
    author: "Hypescope Team",
    date: "May 10, 2025",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>Articles | Hypescope News</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8 sm:p-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Latest Articles</h1>
          <p className="text-gray-400 text-lg">
            Dive into curated insights on tech, security, and the future.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-indigo-700 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
              <div className="text-xs text-gray-500 mb-4">
                By {article.author} — {article.date}
              </div>
              <Link
                href={`/articles/${article.id}`}
                className="text-indigo-400 hover:underline font-medium text-sm"
              >
                Read more →
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
