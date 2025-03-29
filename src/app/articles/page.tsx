import ProtectionCard from '@/components/articles/ProtectionCard';
import SearchComponent from '@/components/articles/Search';

const Articles = () => {
    return (
        <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">

            <div className="mx-auto w-full md:w-8/12 flex justify-center md:justify-between mb-10">
                <SearchComponent />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <ProtectionCard />
                <ProtectionCard />
                <ProtectionCard />
                <ProtectionCard />
                <ProtectionCard />
                <ProtectionCard />
                <ProtectionCard />
            </div>
        </div>
    );
};

export default Articles;
