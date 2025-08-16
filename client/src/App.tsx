import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Resources from "@/pages/Resources"; // Ensure this path is correct
//import Resources from "@/pages/Resources";
import { useHashLocation } from "wouter/use-hash-location";

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <div className="min-h-screen bg-portfolio-bg">
        <Navigation />
        <main className="pt-16">
          <Switch>
            <Route path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/blogs" component={Blogs} />
            <Route path='/resources'component={Resources} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
