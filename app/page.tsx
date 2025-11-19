import { Dela_Gothic_One } from "next/font/google"
import Link from "next/link"

const app = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 p-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            AI Article
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Rater</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Analyze, Improve, and Perfect Your Writing with Artificial Intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality Scoring</h3>
            <p className="text-gray-600 text-sm">Get precise quality scores from 0-100 with detailed analysis</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart Summary</h3>
            <p className="text-gray-600 text-sm">AI-powered summarization to capture key points instantly</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Improvement Tips</h3>
            <p className="text-gray-600 text-sm">Actionable insights to enhance your writing skills</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-bounce-in">
          <Link
            href={'/ai'}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold text-lg px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </Link>
          <p className="text-gray-500 text-sm mt-4">No registration required • Analyze unlimited articles</p>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">1000+</div>
            <div className="text-sm">Articles Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">98%</div>
            <div className="text-sm">User Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">24/7</div>
            <div className="text-sm">AI Availability</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default app