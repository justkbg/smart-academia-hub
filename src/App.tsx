
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AttendancePage from "./pages/AttendancePage";
import StudyAssistantPage from "./pages/StudyAssistantPage";
import EventsPage from "./pages/EventsPage";
import MarketplacePage from "./pages/MarketplacePage";
import PresentationsPage from "./pages/PresentationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/study-assistant" element={<StudyAssistantPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/presentations" element={<PresentationsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
