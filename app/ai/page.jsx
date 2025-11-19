'use client'

import React, { useState } from "react"

const App = () => {
    const [article, setArticle] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showImprovedVersion, setShowImprovedVersion] = useState(false);

    async function handleRate() {
        if (!article.trim()) return;

        setLoading(true);
        setResult(null);
        setShowImprovedVersion(false);

        try {
            const res = await fetch("/api/rate-article", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ article })
            });

            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Article Rater</h1>
                    <p className="text-gray-600 text-lg">Analyze and rate your articles with AI-powered insights</p>
                </header>

                <section className="flex flex-col lg:flex-row gap-8 mb-8">
                    {/* Input Section */}
                    <section className="flex-1">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[800px] flex flex-col">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-800">Your Article</h2>
                                <p className="text-gray-500 text-sm mt-1">Paste your article content below</p>
                            </div>

                            <div className="flex-1 p-1">
                                <textarea
                                    placeholder="Enter your article here... You can paste any article content you'd like to analyze. Our AI will evaluate its quality, provide a summary, and highlight strengths and weaknesses."
                                    className="w-full h-full resize-none p-6 text-gray-700 placeholder-gray-400 border-none focus:outline-none focus:ring-0 text-lg leading-relaxed"
                                    onChange={(e) => setArticle(e.target.value)}
                                    value={article}
                                    disabled={loading}
                                />
                            </div>

                            <button
                                onClick={handleRate}
                                disabled={loading || !article.trim()}
                                className="m-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Processing Article...
                                    </div>
                                ) : "Rate Article"}
                            </button>
                        </div>
                    </section>

                    {/* Result Section */}
                    <section className="flex-1">
                        <div className="bg-white rounded-2xl shadow-lg h-[800px] overflow-hidden flex flex-col">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-800">Rating Results</h2>
                                <p className="text-gray-500 text-sm mt-1">Comprehensive analysis of your article</p>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                {result ? (
                                    <div className="space-y-6">
                                        {/* Score Card */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-semibold text-gray-800 text-lg">Overall Score</h3>
                                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {result.score}/10
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${(result.score / 10) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Summary Card */}
                                        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
                                                <h3 className="font-semibold text-gray-800 text-lg">Summary</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{result.summary}</p>
                                        </div>

                                        {/* Strengths Card */}
                                        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                                                <h3 className="font-semibold text-gray-800 text-lg">Strengths</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{result.strength}</p>
                                        </div>

                                        {/* Weaknesses Card */}
                                        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-6 bg-orange-500 rounded-full"></div>
                                                <h3 className="font-semibold text-gray-800 text-lg">Areas for Improvement</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{result.weakness}</p>
                                        </div>

                                        {/* Improved Version Toggle */}
                                        {result["improved full version"] && (
                                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-6 bg-yellow-500 rounded-full"></div>
                                                        <h3 className="font-semibold text-gray-800 text-lg">AI-Improved Version</h3>
                                                    </div>
                                                    <button
                                                        onClick={() => setShowImprovedVersion(!showImprovedVersion)}
                                                        className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-all duration-200 flex items-center gap-2"
                                                    >
                                                        {showImprovedVersion ? (
                                                            <>
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                </svg>
                                                                Hide Version
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                                Show Improved Version
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-3">
                                                    AI-generated improved version of your article with enhanced structure, clarity, and engagement.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="h-full flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium mb-2">No Results Yet</p>
                                            <p className="text-sm">Submit an article to see the analysis results</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </section>

                {/* Improved Version Full Section */}
                {result && result["improved full version"] && showImprovedVersion && (
                    <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-yellow-400 to-orange-400">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">AI-Improved Article Version</h2>
                                    <p className="text-yellow-100 text-sm">Enhanced version with better structure, clarity, and engagement</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-8">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-yellow-800 mb-1">AI Improvements Applied</h4>
                                        <p className="text-yellow-700 text-sm">
                                            This version has been enhanced for better readability, structure, and impact while maintaining your original message.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="prose prose-lg max-w-none">
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-lg">
                                        {result["improved full version"]}
                                    </pre>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm">Generated just now</span>
                                </div>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(result["improved full version"]);
                                        // You can add a toast notification here
                                    }}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy Text
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}

export default App