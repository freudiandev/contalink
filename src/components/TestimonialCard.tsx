import { Quote } from "lucide-react";

export function TestimonialCard({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="testimonial-card">
      <Quote size={24} aria-hidden="true" />
      <p>“{children}”</p>
      <footer>Testimonio editable · Cliente ContaLink</footer>
    </blockquote>
  );
}
