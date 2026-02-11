import DgxCoe from "@/components/home/dgxcoe";
import PlacementOverview from "@/components/home/placement-overview";
import KeyHighlights from "@/components/home/key-highlight";
import Faculty from "@/components/home/faculty";
import ProgramDetails from "@/components/home/program-details";

export default function Home() {
  return (
    <>
      <DgxCoe />
      <PlacementOverview />
      <KeyHighlights />
      <Faculty />
      <ProgramDetails />
    </>
  );
}
