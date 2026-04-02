"use client";

import { useState } from "react";
import Link from "next/link";
import { Quiz } from "@/lib/data";

interface QuizClientProps {
  quiz: Quiz;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default function QuizClient({ quiz }: QuizClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion) / quiz.questions.length) * 100;

  function handleSelectAnswer(index: number) {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentQuestion + 1 >= quiz.questions.length) {
      setIsFinished(true);
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }

  function handleTryAgain() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  }

  const percentage = Math.round((score / quiz.questions.length) * 100);

  function getResultMessage() {
    if (percentage === 100) return "Perfect score! Outstanding! 🏆";
    if (percentage >= 80) return "Great job! You really know this topic! 🌟";
    if (percentage >= 60) return "Good effort! Keep practicing! 📚";
    if (percentage >= 40) return "Not bad! There is room to improve! 💪";
    return "Keep studying! You will get there! 🎯";
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage === 100 ? "🏆" : percentage >= 80 ? "🌟" : percentage >= 60 ? "📚" : "💪"}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 mb-6">{quiz.title}</p>

          <div className="bg-indigo-50 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-bold text-indigo-600 mb-1">
              {score}/{quiz.questions.length}
            </div>
            <div className="text-2xl font-semibold text-indigo-500 mb-2">{percentage}%</div>
            <p className="text-gray-700 font-medium">{getResultMessage()}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleTryAgain}
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
            <Link
              href={`/topics/${quiz.topicId}`}
              className="w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              Back to Topic
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            href={`/topics/${quiz.topicId}`}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
          >
            ← Back to Topic
          </Link>
          <div className="flex items-center gap-3 mt-3">
            <h1 className="text-xl font-bold text-gray-900">{quiz.title}</h1>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColors[quiz.difficulty]}`}>
              {quiz.difficulty}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <p className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
            {question.question}
          </p>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass =
                "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm ";

              if (!isAnswered) {
                buttonClass += "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-700 cursor-pointer";
              } else if (index === question.correctAnswer) {
                buttonClass += "border-green-500 bg-green-50 text-green-800";
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                buttonClass += "border-red-400 bg-red-50 text-red-700";
              } else {
                buttonClass += "border-gray-200 text-gray-400 cursor-default";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={buttonClass}
                  disabled={isAnswered}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                    {isAnswered && index === question.correctAnswer && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                    {isAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                      <span className="ml-auto text-red-500">✗</span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-lg flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-blue-800 mb-1">Explanation</div>
                <p className="text-blue-700 text-sm leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-xl hover:bg-indigo-700 transition-colors text-lg"
          >
            {currentQuestion + 1 >= quiz.questions.length ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
