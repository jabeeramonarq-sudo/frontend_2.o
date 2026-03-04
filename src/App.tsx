import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import LifeEventsPage from "./pages/LifeEventsPage";
import ContinuityPage from "./pages/ContinuityPage";
import ConsentPage from "./pages/ConsentPage";
import ConsentApprovalPage from "./pages/ConsentApprovalPage";
import SecurityPage from "./pages/SecurityPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ProductPage from "@/pages/ProductPage";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { ScrollToTopOnNavigation } from "./components/shared/ScrollToTopOnNavigation";
import LoginPage from "./pages/admin/LoginPage";
import AdminDashboard from "./pages/admin/Dashboard";
import InboxPage from "./pages/admin/InboxPage";
import SettingsPage from "./pages/admin/SettingsPage";
import UsersPage from "./pages/admin/UsersPage";
import CompleteInvitationPage from "./pages/CompleteInvitationPage";
import SetupPage from "./pages/admin/SetupPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTopOnNavigation />
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
