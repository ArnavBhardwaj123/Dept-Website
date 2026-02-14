import DgxCoe from "@/components/home/dgxcoe";
import ClubSection from "@/components/home/club-section";
import PlacementOverview from "@/components/home/placement-overview";
import PlacementRecord from "@/components/home/placement-record";
import Overview from "@/components/home/overview";
import DeanMessage from "@/components/home/dean-message";
import KeyHighlights from "@/components/home/key-highlight";
import Faculty from "@/components/home/faculty";
import ProgramDetails from "@/components/home/program-details";
import PublicationsResearch from "@/components/home/publications-research";
import HomeNav from "@/components/home/home-nav";

import FloatingAdmissionButton from "@/components/home/floating-admission-button";

export default function Home() {
  return (
    <>
      <HomeNav />
      <FloatingAdmissionButton />
      <main>
        <Overview />
        {/* <PlacementOverview /> */}
        <PlacementRecord />
        <DgxCoe />
        <ClubSection />
        <DeanMessage />
        <KeyHighlights />
        <Faculty />
        <PublicationsResearch />
        <ProgramDetails />
      </main>
    </>
  );
}
