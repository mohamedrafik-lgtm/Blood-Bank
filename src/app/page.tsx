import { DonationCard } from "@/components/home/DonationCard";
import ListBox from "@/components/shared/Listbox";
import { BloodType ,governorate} from "@/data";

export default function Home() {

  return (
     <div className="max-w-7/12 mx-auto pt-10">
          <div className=" mx-auto w-8/12 flex justify-between mb-10">
               <ListBox options={BloodType} label="Blood type"/>
               <ListBox options={governorate} label="governorate"/>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
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
  );
}
