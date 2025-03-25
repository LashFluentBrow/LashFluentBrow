import React from "react";
import { Card, CardContent } from "../components/ui/Card";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardContent className="text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">Lash Fluent Brow</h1>
          <p className="text-sm text-gray-600">We're coming soon with something beautiful ✨</p>
        </CardContent>
      </Card>
    </div>
  );
}
