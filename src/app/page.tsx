import { DonationCard } from "@/components/home/DonationCard";
import ListBox from "@/components/shared/Listbox";
import Footer from "@/components/ui/Footer";
import { BloodType ,governorate} from "@/data";

export default function Home() {
 
  return (
    <>
     <div className="max-w-7xl mx-auto pt-10 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full md:w-8/12 flex flex-col md:flex-row justify-between gap-4 mb-10">
               <ListBox options={BloodType} label="Blood type"/>
               <ListBox options={governorate} label="governorate"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
          </div>
     </div>
     <Footer/>
    </>
  );
}