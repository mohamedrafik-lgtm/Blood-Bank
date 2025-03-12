import ProtectionCard from '@/components/articles/ProtectionCard';
import SearchComponent from '@/components/articles/Search';

const Articles = ()=>{
    return (
        <div className="max-w-7/12 mx-auto pt-10">

           <div className=" mx-auto w-8/12 flex justify-between mb-10">
               <SearchComponent/>
            </div>
            <div className="grid grid-cols-2 gap-10 ">
                <ProtectionCard/>
                <ProtectionCard/>
                <ProtectionCard/>
                <ProtectionCard/>
                <ProtectionCard/>
                <ProtectionCard/>
                <ProtectionCard/>
            </div>
        </div>
    )
}
export default Articles;