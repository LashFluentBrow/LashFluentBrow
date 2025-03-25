
import React, { useState } from "react";
import { Card } from "./components/ui/Card";
import { CardContent } from "./components/ui/CardContent";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { Button } from "./components/ui/Button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <Card className="shadow-xl border-2 border-black rounded-2xl">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-pink-600">Lash Fluent Brow 💖</h2>
              <p className="text-gray-700">We'd love your feedback!</p>
            </div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-green-600 font-semibold"
              >
                Thank you for your feedback!
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <Input placeholder="Your name (optional)" />
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${
                          (hover || rating) >= star ? "fill-pink-500 text-pink-500" : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>
                <Textarea rows={4} placeholder="Your comments (optional)" />
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">Submit</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
