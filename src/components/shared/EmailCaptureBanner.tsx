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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={handleDismiss} />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-border/60 bg-slate-950/95 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Stay in the loop</h3>
            <p className="text-sm text-slate-400">
              Share your name and email for updates. You can skip this anytime.
            </p>
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

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
        </div>
        <div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Button
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800"
            onClick={handleDismiss}
          >
            Skip
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {isSubmitting ? "Saving..." : "Submit"}
          </Button>
        </div>

        {error && (
          <p className="mt-3 text-xs text-red-400">{error}</p>
        )}
      </div>
    </div>
  );
}
