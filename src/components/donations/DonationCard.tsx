export const DonationCard = ()=>{

    return (
        <div className="px-5 py-3 border rounded-lg space-y-3">
        <div className=" flex justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Donor name :<span className="text-lg"> mohamed</span></h3>
                <h3 className="text-2xl font-semibold">hospital :<span className="text-lg"> mansoura hospital</span></h3>
                <h3 className="text-2xl font-semibold">city :<span className="text-lg"> mansoura</span></h3>
              </div>
              <div className="flex flex-col justify-between items-center">
                 <span className="text-red-500 text-4xl font-semibold">B+</span>
                 <div className="flex justify-between items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="size-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span className="text-4xl text-center text-red-500  px-1 rounded-xl">i</span>
                 </div>
              </div>
        </div>
        <div>
            <button className="w-full py-2 border rounded-lg font-semibold text-xl hover:text-white hover:bg-red-600 transition duration-300">
                View Detail
            </button>
        </div>
        </div>
    )
}