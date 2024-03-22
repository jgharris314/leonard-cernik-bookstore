"use client"
import Nav from "./components/Nav"
import HomeSection from "./components/sections/Home"
import PaperbacksSection from "./components/sections/Paperbacks"
import HardcoverSection from "./components/sections/Hardcover"
import AdAdamsSection from "./components/sections/AdAdams"
import AudibleSection from "./components/sections/Audible"
import KindleSection from "./components/sections/Kindle"
import YoutubeSection from "./components/sections/Youtube"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full pb-[200px] bg-cernik-nav bg-gradient-to-t from-black/50 to-black/10">
      <Nav />
      <HomeSection />
      <AudibleSection />
      <YoutubeSection />
      <KindleSection />
      <PaperbacksSection />
      <HardcoverSection />
      <AdAdamsSection />
    </main>
  )
}
