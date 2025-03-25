import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Star, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';

const testimonials = [
  {
    name: "Samantha",
    rating: 5,
    comment: "Paris is amazing! My lashes have never looked better 💕",
  },
  {
    name: "Bella",
    rating: 4,
    comment: "Brows on point. Clean studio and lovely energy!",
  },
  {
    name: "Aisha",
    rating: 5,
    comment: "She made me feel super comfortable for my first wax. Highly recommend!",
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [localTestimonials, setLocalTestimonials] = useState(testimonials);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { name, rating, comment };
    setLocalTestimonials([newReview, ...localTestimonials]);

    const templateParams = { name, rating, comment };

    emailjs.send('service_a218vvi', 'template_aqcdo0s', templateParams, 'hMVLhmMgwhLWjydMW')
      .then(() => setSubmitted(true))
      .catch((error) => console.error('EmailJS Error:', error));
  };

  const handleDelete = (index) => {
    const filtered = localTestimonials.filter((_, i) => i !== index);
    setLocalTestimonials(filtered);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl border-2 border-black rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <img
                src="/lash-fluent-logo.png"
                alt="Lash Fluent and Brow Logo"
                className="w-48 mb-4 rounded shadow-lg"
              />
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
                Lash & Beauty Feedback 💖
              </h2>
            </div>

            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center text-green-600 font-semibold"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -30, opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    <motion.div
                      className="bg-pink-200 p-4 rounded-lg shadow-lg inline-block"
                      initial={{ scale: 0.8, rotate: 0 }}
                      animate={{ scale: 1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <div className="text-pink-600 text-lg font-bold">💌</div>
                      <div className="text-black">Sealed with love</div>
                    </motion.div>
                  </motion.div>
                  Thank you for your feedback!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">Name (optional)</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 cursor-pointer transition-colors ${
                            (hover || rating) >= star ? 'fill-pink-500 text-pink-500' : 'text-gray-300'
                          }`}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">Additional Comments (optional)</label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="We'd love to hear more about your experience!"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Submit Feedback
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Client Testimonials 💕</h3>
          <div className="space-y-4">
            {localTestimonials.map((t, idx) => (
              <Card key={idx} className="bg-white border-pink-200 border shadow-md p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-black">{t.name || "Anonymous"}</span>
                    <span className="text-pink-500">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</span>
                  </div>
                  <button onClick={() => handleDelete(idx)} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-700 italic">"{t.comment}"</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Recent Work 📸</h3>
          <div className="flex justify-center">
            <iframe
              src="https://snapwidget.com/embed/1091548"
              className="snapwidget-widget"
              allowTransparency={true}
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden', width: '100%', height: 520 }}
              title="Instagram Feed"
            ></iframe>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Before & After ✨</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-black">Lashes</h4>
              <img src="/before-after-lashes.jpg" alt="Lashes Before and After" className="rounded-xl shadow-md" />
            </div>
            <div>
              <h4 className="font-bold mb-2 text-black">Brows</h4>
              <img src="/before-after-brows.jpg" alt="Brows Before and After" className="rounded-xl shadow-md" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}