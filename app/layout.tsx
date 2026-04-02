import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizMind - Learn Through Quizzes",
  description: "Test and expand your knowledge across 10 topics with interactive quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                <span>🧠</span>
                <span>QuizMind</span>
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                All Topics
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-sm text-gray-500">
              © 2024 QuizMind. Learn something new every day.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
