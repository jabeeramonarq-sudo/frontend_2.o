import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DISMISS_KEY = "lead_capture_dismissed";
const CAPTURED_KEY = "lead_capture_submitted";

const getApiBase = () => {
  const envBase = import.meta.env.VITE_API_URL;
  if (envBase) return envBase;
  return import.meta.env.DEV ? "http://localhost:5000/api" : "https://api.amonarq.com/api";
};

export function EmailCaptureBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const apiBase = useMemo(() => getApiBase(), []);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    const submitted = localStorage.getItem(CAPTURED_KEY);
    if (!dismissed && !submitted) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, "true");
    setIsVisible(false);
  };

  const handleSubmit = async () => {
    setError("");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const emailValue = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiBase}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: emailValue,
          sourceUrl: window.location.href
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }

      localStorage.setItem(CAPTURED_KEY, "true");
      setIsVisible(false);
    } catch (err: any) {
      setError(err?.message || "Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 rounded-2xl border border-border/60 bg-slate-950/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
          <p className="text-xs text-slate-400">Share your name and email for updates. You can close this anytime.</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            placeholder="Full name"
            className="bg-slate-900 border-slate-800 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email address"
            type="email"
            className="bg-slate-900 border-slate-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {isSubmitting ? "Saving..." : "Submit"}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white"
          onClick={handleDismiss}
        >
          <X size={18} />
        </Button>
      </div>
      {error && (
        <p className="mx-auto mt-2 max-w-4xl text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}
