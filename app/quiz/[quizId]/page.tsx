import { notFound } from "next/navigation";
import { getQuizById } from "@/lib/data";
import QuizClient from "./QuizClient";

interface QuizPageProps {
  params: Promise<{ quizId: string }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { quizId } = await params;
  const quiz = getQuizById(quizId);

  if (!quiz) {
    notFound();
  }

  return <QuizClient quiz={quiz} />;
}
