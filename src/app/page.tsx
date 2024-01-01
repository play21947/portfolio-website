import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home = () => {

  const array = [
    {
      path: '/images/ts.png',
      name: 'works.ts'
    },
    {
      path: '/images/ts.png',
      name: 'education.ts'
    },
    {
      path: '/images/ts.png',
      name: 'profile.ts'
    },
    {
      path: '/images/ts.png',
      name: 'app.ts'
    },
    {
      path: '/images/node.png',
      name: 'package.json'
    },
    {
      path: '/images/node.png',
      name: 'package-lock.json'
    }
  ]


  const songs = [
    {
      name: 'Starlight (taeil)',
      lang: 'KOR'
    },
    {
      name: 'Future (red velvet)',
      lang: 'KOR'
    },
    {
      name: 'Carry (safeplanet)',
      lang: 'THA'
    },
    {
      name: 'The Maze (safeplanet)',
      lang: 'THA'
    },
    {
      name: 'Perfect (ed sheeran)',
      lang: 'ENG'
    },
  ]

  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  let weeks = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  let date = new Date()
  let day = date.getDay()
  let gmonth = date.getMonth()
  let us = date.toLocaleString('en-US').split(' ')[2]


  return (
    <main>

      {/* Headers */}
      <div className='w-[100%] h-[80px] flex justify-between items-center p-[10px] fixed bg-white z-[1]'>

        <div className='w-[140px] h-[70px] flex justify-center items-center gap-[10px]'>
          <Image className='rounded-full w-[50px] h-[50px] object-cover' src={'/images/cats.jpg'} width={100} height={100} alt='picture'></Image>
          <div>
            <p className='font-bold'>p1ay2.14</p>
            <p className='text-[12px]'>My Instagram</p>
          </div>
        </div>

        <div className='flex gap-[5px] justify-center items-center'>
          <div className='relative'>
            <div className='p-[10px] w-[190px] text-[12px] border-[1px] rounded-[8px] border-gray-300 z-[1] group flex items-center'><p className='text-gray-400 duration-75 transition group-hover:text-slate-900'>Search Documentation...</p></div>
            <div className='flex justify-center items-center absolute border-[1px] border-gray-300 top-[7px] right-[10px] h-[25px] w-[25px] rounded-[8px]'>
              <p className='text-[12px]'>/</p>
            </div>
          </div>
          {/* <div className='w-[60px] h-[40px] flex justify-center items-center border-[1px] rounded-[8px] border-gray-300'><p className='pointer-events-none text-[12px]'>Sign In</p></div>
          <div className='w-[60px] h-[40px] flex justify-center items-center rounded-[8px] bg-slate-900 text-white text-[12px] max-[665px]:hidden'><p className='pointer-events-none'>Sign Up</p></div> */}
        </div>


      </div>

      {/* Body */}



      {/* Left */}
      <div className='w-[200px] p-[10px] h-[80vh] fixed left-[20px] top-[100px] rounded-[8px] gap-[10px] flex-col flex iphone:hidden xl:flex'>
        <div className='flex items-center justify-between relative'>
          <div className='flex gap-[5px]'>
            <p className='text-[12px]'>My Portfolio</p>
            <p className='text-[12px] rotate-[90deg]'>-</p>
          </div>
          <p className='absolute right-[1px] bottom-[3px]'>...</p>
        </div>
        {array.map((item, index) => {
          return (
            <div key={index} className='flex gap-[10px] items-center'>
              <img src={item.path} className='w-[15px] rounded-[2px]'></img>
              <p className='text-[12px]'>{item.name}</p>
            </div>
          )
        })}
      </div>
      {/* Left */}



      <div className='pt-[100px] rounded-[8px] p-[10px] w-[100%] flex flex-col justify-center items-center'>

        {/* <div className='w-[100%]'>
          <p className='font-bold mb-[10px]'>GADGETS</p>
        </div> */}


        {/* Section 1 */}
        <div className='flex gap-[15px]'>

          <div className='w-[250px] h-[150px] 2xl:w-[450px] 2xl:h-[250px]'>
            <iframe className='rounded-[12px] w-[100%] h-[100%]' src="https://www.youtube.com/embed/sFT4kjrytW8?si=zFPte1oPQiBO90kz" title="YouTube video player"></iframe>
          </div>

          <div className='flex flex-col gap-[5px] w-[100px]'>
            <div className='w-[100px] h-[50px] rounded-[8px] 2xl:mb-[20px]'>
              <img src='/images/music.jpg' className='h-[100%] rounded-[8px]'></img>
            </div>

            <div className='w-[100px] p-[0px] h-[100px] rounded-[8px] relative 2xl:hidden'>
              <img src='/images/airpods.png' className='h-[100%] rounded-[8px]'></img>
            </div>

            <div className='gap-[10px] flex flex-col w-[250px]'>

              <div className='w-[100%] p-[0px] rounded-[8px] iphone:hidden xl:block'>
                <p className='text-slate-900 text-[14px] font-bold mb-[10px]'>Top 5 fav songs</p>
                {songs.map((item, index) => {
                  return (
                    <div key={index} className='flex justify-between'>
                      <p className='text-slate-900 text-[14px]'>{index + 1} . {item.name}</p>
                      <p className='text-[14px] text-gray-400'>{item.lang}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
        {/* Section 1 */}

        {/* <div className='w-[100%] h-[30px] flex relative'>

          <div className='flex relative w-[100px]'>
            <p className='mt-[20px] text-[14px] font-bold'>ABOUT ME</p>
            <img className='w-[20px] absolute right-[0px] top-[18px]' src='/images/link.png'></img>
          </div>
        </div> */}

        <div className='mt-[10px] flex gap-[10px] mb-[15px]'>

          <div className='flex gap-[10px] flex-col'>
            <div className='w-[160px] h-[95px] border-[1px] border-gray-300 rounded-[8px] relative 2xl:w-[350px]'>
              <img className='w-[100%] h-[100%] object-cover rounded-[8px]' src='/images/yt.png'></img>
            </div>

            <div className='w-[160px] p-[10px] h-[95px] border-[1px] border-gray-300 rounded-[8px] relative 2xl:w-[350px]'>
              <p className='text-[10px] whitespace-nowrap text-ellipsis overflow-hidden'>Youtube Channel : 2Strikeglobaloffensive</p>
              <p className='text-[10px]'>Discord : p1ay2.invokergod</p>
              <p className='text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>Facebook : Rattanon Boonmata</p>
              <p className='text-[10px]'>Instagram : p1ay2.14</p>
              <p className='text-[10px]'>Founder : wanfah.online</p>
            </div>

          </div>

          <div className='w-[200px] h-[200px] rounded-[8px] relative'>
            <img className='w-[100%] h-[100%] object-cover rounded-[8px]' src='/images/dis.png'></img>
          </div>
        </div>

        {/* Section1 */}


        {/* Section 2 */}

        <div className='flex justify-between gap-[10px]'>
          <div className='border-[1px]  border-gray-300 w-[70px] h-[70px] flex justify-center items-center flex-col rounded-[8px] cursor-pointer 2xl:w-[125px]'>
            <img className='w-[30px]' src='/heart.svg'></img>
            <p className='font-bold'>1</p>
          </div>
          <div className='border-[1px]  border-gray-300 w-[70px] h-[70px] rounded-[8px] flex justify-center items-center flex-col cursor-pointer 2xl:w-[125px]'>
            <img className='w-[30px]' src='/comment.svg'></img>
            <p className='font-bold'>1</p>
          </div>

          <div className='w-[200px] border-[1px] border-gray-300 rounded-[8px] flex justify-center items-center flex-col 2xl:w-[290px]'>
            <p className='font-bold'>{weeks[day - 1]} {month[gmonth]} {date.getFullYear()}</p>
            <p className='font-bold'>{date.getHours()}:{date.getMinutes()} {us}</p>
          </div>

        </div>

        <div className='mt-[15px] mb-[15px] w-[350px] 2xl:w-[550px] relative'>
          <p className='font-bold'>MY PORTFOLIO</p>
          <img className='w-[20px] absolute left-[130px] top-[3px]' src='/images/link.png'></img>
        </div>

        <div className='w-[360px] h-[200px] relative flex flex-warp overflow-x-scroll gap-[10px] no-scrollbar snap-y snap-proximity xl:w-[550px]'>
          {num.map((item, index) => {
            return (
              <Image key={index} className='w-[100%] h-[100%] rounded-[8px] scroll-smooth snap-center' loading='lazy' src={`/images/portfolio/${item}.png`} width={1000} height={100} alt='port'></Image>
            )
          })}
        </div>


      </div>

      {/* Body Middle */}

      {/* Right */}
      {/* <div className='border-[1px] border-gray-300 w-[15%] h-[80vh] rounded-[8px] fixed right-[20px] bottom-[40px]'>

      </div> */}

    </main>
  )
}

export default Home