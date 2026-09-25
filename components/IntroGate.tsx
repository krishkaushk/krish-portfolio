"use client";

import { useCallback, useState } from "react";
import Intro from "@/components/Intro";
import { IntroCompleteProvider } from "@/components/IntroContext";

// IntroGate lives in the root layout, so it only mounts once per real page
// load/reload — it does not remount on in-app navigation between routes.
// That means playing the intro unconditionally on every mount already gives
// "every reload replays it, in-app navigation doesn't" for free.
export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <IntroCompleteProvider value={introComplete}>
      <Intro onComplete={handleIntroComplete} />
      {children}
    </IntroCompleteProvider>
  );
}
