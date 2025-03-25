import React, { useState } from "react";
import { Card } from "./components/ui/Card";
import { CardContent } from "./components/ui/CardContent";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">
      <Card className="max-w-xl w-full border-2 border-black shadow-xl rounded-2xl p-6">
        <CardContent>
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">
            Lash Fluent Brow 💖
          </h1>
          {submitted ? (
            <div className="text-center text-green-600">Thank you for your feedback!</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <input placeholder="Your name (optional)" className="w-full border px-3 py-2 rounded-md" />
              <textarea placeholder="Additional comments" rows="4" className="w-full border px-3 py-2 rounded-md"></textarea>
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded">
                Submit Feedback
              </button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}