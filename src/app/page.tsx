import { DonationCard } from "@/components/donations/DonationCard";

export default function Home() {

  return (
     <div className="max-w-7/12 mx-auto grid grid-cols-2 gap-5 pt-10">
          <DonationCard/>
          <DonationCard/>
     </div>
  );
}
