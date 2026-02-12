import DgxCoe from "@/components/home/dgxcoe";
import PlacementOverview from "@/components/home/placement-overview";
import PlacementRecord from "@/components/home/placement-record";
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
      <KeyHighlights />
      <PlacementRecord />
      <DgxCoe />
      <PlacementOverview />
      <Faculty />
      <ProgramDetails />
      <PublicationsResearch />
    </>
  );
}
