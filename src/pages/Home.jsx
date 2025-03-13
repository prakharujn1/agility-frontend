import HeroSection from "../components/UI/HeroSection";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <HeroSection />
      {/* 1st section  */}
      <section className="py-24 text-white relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center gap-12">

            {/* Text Content */}
            <div className="w-full flex flex-col gap-8">
              <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal lg:text-start text-center">
                Who we are?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed lg:text-start text-center">
                At Agility AI Pvt Ltd, we integrate cutting-edge AI into real-world applications, empowering businesses and individuals to thrive in an AI-driven world. Our expert team bridges the gap between AI technology and its practical use, enabling smarter decision-making, automation, and innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed lg:text-start text-center">
                From startups to enterprises, we deliver AI solutions, research, and training programs that are accessible, ethical, and transformative. With Agility AI, you stay ahead in the future of intelligence.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[500px] sm:max-w-[550px] h-auto rounded-3xl border border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="./about.png"
                  alt="About Us"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* new */}
      <section className="py-16 text-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">



          {/* Video Section */}
          <div className="flex justify-center">
            <video
              className="w-full max-w-xl h-auto rounded-lg shadow-2xl  transition-shadow duration-500 ease-in-out"
              autoPlay
              loop
              muted
            >
              <source src="https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div className="p-6 rounded-lg  ">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
            Our Impact
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed text-lg">
            From startups to enterprises, our AI-powered solutions optimize operations, enhance decision-making, and drive scalable growth. Our training programs empower individuals with industry-ready AI skills for the future.
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed text-lg">
            At Agility AI, we don’t just create technology — we redefine intelligence. We are :
            </p>
          

            <ul className="text-gray-300 space-y-3 mt-4 text-lg">
              <li><span className={`text-2xl`}>🔹</span> <strong>Empowering Businesses : </strong>  Integrating AI for automation, efficiency, and innovation.</li>
              <li><span className={`text-2xl`}>🔹</span> <strong>Bridging the AI Skill Gap : </strong> Providing hands-on AI training for all expertise levels.</li>
              <li><span className={`text-2xl`}>🔹</span><strong>Shaping the Future : </strong> Developing ethical AI solutions that create positive societal change.</li>
            </ul>

          </div>

          
        </div>
      </section>




      {/* why agility ai */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">

            {/* Image Section (Always Below on Small Screens) */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661329955912-ebc4279f3b21?w=800&auto=format&fit=crop&q=60"
                alt="AI Innovation"
                className="w-full max-w-[600px] h-auto lg:h-[450px] object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Text Section (Always First) */}
            <div className="max-w-2xl lg:w-1/2">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                Why choose AgilityAI?
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed lg:text-start text-center">
                Empowering businesses with cutting-edge AI solutions, hands-on learning, and ethical innovation for a future-ready world.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { color: "text-green-400", text: " Industry-Specific AI Solutions : Tailored to your business needs." },
                  { color: "text-blue-400", text: " Practical AI Training : Real-world applications for skill development." },
                  { color: "text-yellow-400", text: " End-to-End AI Services : Strategy, development, consulting & education." },
                  { color: "text-purple-400", text: " Ethical & Transparent AI : Responsible, fair, and accountable AI practices." },
                  { color: "text-green-400", text: " Future-Ready Innovation : Stay ahead with continuous AI advancements." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <span className={`${item.color} text-3xl`}>🔹</span>
                    <p className="text-gray-300 text-lg">
                      <strong>{item.text.split(":")[0]}:</strong>{item.text.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="relative py-20 text-white text-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 opacity-10 blur-3xl"></div>

        <div className="relative container mx-auto px-6">
         

          <h2 className="text-4xl font-bold bg-clip-text text-white ">
            Join the AI Revolution
          </h2>

          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            AI is reshaping the future, be a part of it!
          </p>

          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            At{" "}
            <span className="text-blue-400 font-semibold">Agility AI Pvt Ltd</span>, we empower businesses and individuals with AI-driven solutions, hands-on learning, and futute-ready innovation.
            <br/>
            <br/>
            
            Optimize Operations with AI-powered efficiency.
            <br/>
            Gain AI expertise through real-world applications.
            <br/>
            Unlock New Opportunities in an AI-driven world.
                
            <span className="block mt-4 text-blue-400 font-semibold">
              Let's build the future together - connect with us today !
            </span>
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <Link
              to="/contact" onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

