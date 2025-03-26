import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Card } from "./components/ui/Card";
import { CardContent } from "./components/ui/CardContent";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { Button } from "./components/ui/Button";

// Testimonials (Static example)
const testimonials = [
  { name: "Samantha", rating: 5, comment: "Paris is amazing! 💕" },
  { name: "Bella", rating: 4, comment: "Brows on point! 💖" },
  { name: "Aisha", rating: 5, comment: "Highly recommend! 💘" }
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <Input
                placeholder="Your name (optional)"
                className="w-full border px-3 py-2 rounded-md"
              />
              <div>
                <label className="text-sm font-medium mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Heart
                      key={star}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        (hover || rating) >= star ? "fill-pink-500 text-pink-500" : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Additional comments"
                rows="4"
                className="w-full border px-3 py-2 rounded-md"
              />
              <Button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
              >
                Submit Feedback
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Testimonials Viewer */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Client Testimonials 💕</h3>
        <div className="space-y-4">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-white border-pink-200 border shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-black">{t.name || "Anonymous"}</span>
                <span className="text-pink-500">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</span>
              </div>
              <p className="text-sm text-gray-700 italic">"{t.comment}"</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Before and After Gallery */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Before & After Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg text-center text-pink-600">Brows</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Add your before & after images here */}
              <img src="brow-before.jpg" alt="Before Brow" className="w-full h-56 object-cover" />
              <img src="brow-after.jpg" alt="After Brow" className="w-full h-56 object-cover" />
            </div>
          </div>
          <div>
            <h4 className="text-lg text-center text-pink-600">Lashes</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Add your before & after images here */}
              <img src="lash-before.jpg" alt="Before Lash" className="w-full h-56 object-cover" />
              <img src="lash-after.jpg" alt="After Lash" className="w-full h-56 object-cover" />
            </div>
          </div>
        </div>
      </div>

     {/* Instagram Grid */}
<div className="mt-10 w-full max-w-xl">
  <Card className="border-2 border-black shadow-xl rounded-2xl p-6">
    <CardContent>
      <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">
        Follow Us on Instagram 📷
      </h3>
      <div className="flex justify-center">
        <iframe 
          src="https://snapwidget.com/embed/1091548" 
          className="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{ border: "none", overflow: "hidden", width: "100%", height: "500px" }}
          title="Posts from Instagram"
        ></iframe>
      </div>
    </CardContent>
  </Card>
</div>
  );
}


