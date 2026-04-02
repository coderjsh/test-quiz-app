import Link from "next/link";
import { topics } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Learn Anything, One Quiz at a Time
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Sharpen your knowledge across investing, psychology, science, history, and more with our interactive quizzes.
          </p>
          <Link
            href="#topics"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors text-lg"
          >
            Explore Topics
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">10</div>
              <div className="text-sm text-gray-500 mt-1">Topics</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">12+</div>
              <div className="text-sm text-gray-500 mt-1">Quizzes</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">100+</div>
              <div className="text-sm text-gray-500 mt-1">Questions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section id="topics" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose a Topic</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Pick any topic that interests you and start learning through interactive quizzes with instant feedback.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
                  <div className={`bg-gradient-to-br ${topic.gradient} p-6 text-white`}>
                    <div className="text-4xl mb-2">{topic.icon}</div>
                    <h3 className="text-xl font-bold">{topic.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{topic.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                        {topic.quizCount} {topic.quizCount === 1 ? "Quiz" : "Quizzes"}
                      </span>
                      <span className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Start →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
