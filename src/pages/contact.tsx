import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Hypescope News</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8 sm:p-16">
        <h1 className="text-4xl font-bold mb-6">Let’s Talk</h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          Got a tip? Wanna collab? Slide into our inbox and we’ll get back to you faster than a zero-day exploit.
        </p>

        <form className="max-w-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 p-4 rounded-lg placeholder-gray-500 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 p-4 rounded-lg placeholder-gray-500 text-white focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-gray-800 p-4 rounded-lg placeholder-gray-500 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
