import React from 'react'

const Home = () => {
  return (
    <div className='w-11/12  mx-auto max-w-[1440px]'>
      <div className='flex justify-between mt-4 max-sm:text-sm'>
        <h1> NEXT DAY DELIVERY AVAILABLE </h1>
        <h1 className='hidden xl:flex'> DISCOVER THE LATEST IT GIRL FASHION TRENDS </h1>
        <h1> ANONYMOUS</h1>
      </div>

      <h1 className='xl:hidden text-center mt-4 text-sm'> DISCOVER THE LATEST IT GIRL FASHION TRENDS </h1>


      <div>
        <hr className='border-[1.5px] border-black' />
      </div>

      <div className='flex  justify-between items-center'>
        <img src='./images/hamburger.png' className='h-16' />
        <h1 className='font-bold xl:text-[3rem]  xl:-mr-[14rem]'> alice*tiwa </h1>

        <div className='flex items-center space-x-4 xl:w-[10rem]'>
          <h1 className='xl:border-b xl:w-28 xl:border-black hidden xl:flex'> SEARCH </h1>
          <img src='./images/cart.png' className='h-6' />
        </div>

       
      </div>

      <div className='flex items-center space-x-4 mb-4  xl:hidden w-fit mx-auto'>
          <h1 className='border-b xl:w-28 border-black '> SEARCH </h1>
          
        </div>

      <div>
        <hr className='border-[1.5px] border-black' />
      </div>

      <div className='mt-16 font-semibold'>
        <h1 className='text-center'> ORDER #0000006 </h1>
      </div>

      <div className='flex  justify-between w-[80%] mx-auto mt-10'>
        <div className='text-sm'>
          <p> DELIVERED </p>
          <p> Friday 12th May </p>
          <p> N14,599.98 </p>
        </div>

        <div>
          <h1 className='px-4 bg-black w-fit text-white text-sm'> EXCHANGE </h1>
        </div>
      </div>


     <div className='w-[80%] flex xl:justify-between mt-10  xl:flex-row flex-col  xl:mx-auto'>
     <div className='w-[20rem] '>
        <img src='./images/skirt.png' className='rounded-md' />
        <div className='text-sm mt-2'>
          <p> TEST ITEM 2 </p>

          <div className='flex justify-between'>
            <p> N6,499.99 </p>
            <p> M | WHITE </p>
          </div>
        </div>
        <div className='mt-4'>
          <hr className='border-[1px] border-black'/>
        </div>
      </div>

      <div className='w-[20rem] max-sm:mt-8'>
        <img src='./images/trouser.png' className='rounded-md' />
        <div className='text-sm mt-2'>
          <p> TEST ITEM 2 </p>

          <div className='flex justify-between'>
            <p> N6,499.99 </p>
            <p> M | WHITE </p>
          </div>
        </div>
        <div className=' mt-4'>
          <hr className='border-[1px] border-black'/>
        </div>
      </div>

      
     </div>

     <div className='w-[80%] mb-20 xl:mx-auto '>
     <div className='w-[20rem] mt-8'>
        <img src='./images/bag.png' className='rounded-md' />
        <div className='text-sm mt-2'>
          <p> TEST ITEM 2 </p>

          <div className='flex justify-between'>
            <p> N6,499.99 </p>
            <p> M | WHITE </p>
          </div>
        </div>
        <div className=' mt-4'>
          <hr className='border-[1px] border-black'/>
        </div>
      </div>
     </div>

      
    </div>
  )
}

export default Home
