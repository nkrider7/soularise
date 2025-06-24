import Image from "next/image"
import { Button } from "@/components/ui/button"
// import RotatingText from "../magicui/TextColor"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-200  py-12 md:py-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-4 ml-10">
            
            <h1 className="text-4xl font-bold tracking-tighter text-black font-guzan w-80 sm:text-5xl md:text-6xl">
              {/* WE ARE WAITING FOR YOUR <RotatingText
              texts={['Growth!', 'Success!', 'Vision!', 'Brand!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-accentColor text-white overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            /> */}
            </h1>
            <p className="text-sm font-inter w-80 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptatibus. Optio, dolores.</p>
            <Button className="bg-white text-black hover:bg-gray-100 font-inter transition-colors" size="lg">
              Get Started
            </Button>
          </div>

          {/* Image Container */}
          <div className="relative h-[200px] w-full md:h-[400px] lg:h-[500px]">
            <Image
              src="/walk.webp"
              alt="Astronaut walking space dog"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent opacity-90"
        aria-hidden="true"
      />
    </section>
  )
}

