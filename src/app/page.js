import Body from './components/body'
import Hero from './components/hero'

export default function Home() {
  return (
    <main className='relative'>
      <img
        src="/mainbg.png"
        alt="main bg"
        className="w-screen bg-contain absolute top-0 -z-10 "
        priority
      />
      <div className='z-10 pt-5'>
        <div className=' px-28'>
          <Hero />
        </div>
       <Body />
      </div>
    </main>
  )
}
