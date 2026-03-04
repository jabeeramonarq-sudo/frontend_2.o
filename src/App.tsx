import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { ScrollToTopOnNavigation } from "./components/shared/ScrollToTopOnNavigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const LifeEventsPage = lazy(() => import("./pages/LifeEventsPage"));
const ContinuityPage = lazy(() => import("./pages/ContinuityPage"));
const ConsentPage = lazy(() => import("./pages/ConsentPage"));
const ConsentApprovalPage = lazy(() => import("./pages/ConsentApprovalPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LoginPage = lazy(() => import("./pages/admin/LoginPage"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const InboxPage = lazy(() => import("./pages/admin/InboxPage"));
const SettingsPage = lazy(() => import("./pages/admin/SettingsPage"));
const UsersPage = lazy(() => import("./pages/admin/UsersPage"));
const CompleteInvitationPage = lazy(() => import("./pages/CompleteInvitationPage"));
const SetupPage = lazy(() => import("./pages/admin/SetupPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTopOnNavigation />
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center text-sm">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/life-events" element={<LifeEventsPage />} />
            <Route path="/continuity" element={<ContinuityPage />} />
            <Route path="/consent-overview" element={<ConsentPage />} />
            <Route path="/consent" element={<ConsentApprovalPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />

            {/* Invitation Route */}
            <Route path="/invite/:token" element={<CompleteInvitationPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/admin/inbox" element={<InboxPage />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            <Route path="/admin/users" element={<UsersPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
