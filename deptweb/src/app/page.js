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
import Testimonial from "@/components/home/testimonial";

import FloatingAdmissionButton from "@/components/home/floating-admission-button";

export default function Home() {
  return (
    <>
      <HomeNav />
      <FloatingAdmissionButton />
      <main style={{ paddingTop: '80px' }}>
        <div id="overview">
          <Overview />
        </div>
        <div id="infrastructure">
          <KeyHighlights />
        </div>
        {/* <PlacementOverview /> */}
        <div id="placement">
          <PlacementRecord />
        </div>
        <div id="coe">
          <DgxCoe />
        </div>
        <div id="clubs">
          <ClubSection />
        </div>
        <div id="dean-message">
          <DeanMessage />
        </div>
        
        <div id="faculty">
          <Faculty />
        </div>
        <div id="testimonials">
          <Testimonial />
        </div>
        <div id="publications">
          <PublicationsResearch />
        </div>
        <div id="syllabus">
          <ProgramDetails />
        </div>
      </main>
    </>
  );
}
