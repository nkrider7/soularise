
// import FloatBar from "@/components/FloatNav";
import Footer from "@/components/Footer";
// import Best from "@/components/Landing/Best";
// import DreamPricing from "@/components/Landing/DreamPricing";
import Expand from "@/components/Landing/Expand";
import HeroNeu from "@/components/Landing/HeroNeu";
// import Hero from "@/components/Landing/Hero";
// import HeroSection from "@/components/Landing/HeroZero";
// import { MarqueeDemo } from "@/components/Landing/Marque";
// import ScrollVelocity from "@/components/magicui/markeuptext";
// import { HoverImageLinks } from "@/components/services";
// import { EmailTemp } from "@/lib/waitlist";
// import { MacbookScroll } from "@/components/ui/macbook-scroll";
// import dynamic from 'next/dynamic'


// const Hero = dynamic(() => import('@/components/Landing/Hero'))

export default function Home() {
  return (
    <div className="max-w-screen-5xl">
      {/* <div className="flex justify-center">
        <FloatBar />
      </div> */}
      <HeroNeu />
      {/* <Hero /> */}
      {/* <MarqueeDemo /> */}

        <div className="h-fit">
       
        </div>
      <Expand />
      {/* <section>
        <div className="mt-10">
          <ScrollVelocity
            texts={["UI/UX Design * Web Development *  App Development * E-commerce * CMS *  SaaS Solutions","Digital Marketing * SEO * Social Media *  Branding *  Content Marketing"
              ]}
            velocity={4.5}
            className="font-guzan text-4xl md:text-7xl "
          />
        </div>
      </section> */}
        {/* <DreamPricing /> */}
      {/* <HeroSection /> */}
      {/* <HoverImageLinks /> */}
      {/* <Best /> */}
      {/* <div className=' h-[170vh] md:h-[400vh] ' >
        <MacbookScroll
          src={`/win.webp`}
          showGradient={true}
        />
      </div> */}

      <Footer />
    </div>
  );
}
