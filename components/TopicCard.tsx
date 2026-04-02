import Link from "next/link";
import { Topic } from "@/lib/data";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`}>
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
  );
}
