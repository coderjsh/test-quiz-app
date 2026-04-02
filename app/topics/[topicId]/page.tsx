import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicById, getQuizzesByTopic } from "@/lib/data";

interface TopicPageProps {
  params: Promise<{ topicId: string }>;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { topicId } = await params;
  const topic = getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  const quizzes = getQuizzesByTopic(topicId);

  return (
    <div>
      {/* Topic Header */}
      <div className={`bg-gradient-to-br ${topic.gradient} text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
          >
            ← All Topics
          </Link>
          <div className="text-5xl mb-4">{topic.icon}</div>
          <h1 className="text-4xl font-bold mb-3">{topic.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{topic.description}</p>
          <div className="mt-4 text-white/80 text-sm">
            {quizzes.length} {quizzes.length === 1 ? "Quiz" : "Quizzes"} Available
          </div>
        </div>
      </div>

      {/* Quizzes List */}
      <section className="py-12 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Quizzes</h2>
          {quizzes.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-lg">No quizzes available yet for this topic.</p>
              <Link href="/" className="mt-4 inline-block text-indigo-600 hover:underline">
                ← Back to Topics
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{quiz.title}</h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColors[quiz.difficulty]}`}
                        >
                          {quiz.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{quiz.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <span>📋</span>
                          <span>{quiz.questions.length} Questions</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⏱️</span>
                          <span>~{quiz.questions.length * 2} min</span>
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/quiz/${quiz.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors whitespace-nowrap"
                    >
                      Take Quiz →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
