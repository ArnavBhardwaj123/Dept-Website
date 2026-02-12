import DgxCoe from "@/components/home/dgxcoe";
import PlacementOverview from "@/components/home/placement-overview";
import PlacementRecord from "@/components/home/placement-record";
import Overview from "@/components/home/overview";
import Faculty from "@/components/home/faculty";
import ProgramDetails from "@/components/home/program-details";
import PublicationsResearch from "@/components/home/publications-research";
import HomeNav from "@/components/home/home-nav";
import KeyHighlights from "@/components/home/keyhighlights";
import FloatingAdmissionButton from "@/components/home/floating-admission-button";

export default function Home() {
  return (
    <>
      <HomeNav />
      <FloatingAdmissionButton />
      <Overview />
      <PlacementRecord />
      <DgxCoe />
      <PlacementOverview />
      <KeyHighlights />
      <Faculty />
      <ProgramDetails />
      <PublicationsResearch />
    </>
  );
}
