import { ourvalues } from '../constants';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-2 px-6 mt-12 min-h-screen">

      {/* page heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About{" "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
          AgilityAI
        </span>
      </h2>


      {/* story */}

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://cdn.pixabay.com/photo/2024/01/24/15/04/ai-8529773_640.jpg"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover h-90"
                src="./story.jpg"
                alt="about Us image"
              />
            </div>

            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex flex-col justify-center items-start gap-8 ">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center mb-3">
                    The Agility AI Story
                  </h2>
                  <p className="text-gray-300 text-lg font-normal leading-relaxed lg:text-start text-center mb-2">
                  In a rapidly advancing technological landscape, a passionate team of innovators recognized a critical challenge.
                  </p>
                  <p className="text-gray-300 text-lg font-normal leading-relaxed lg:text-start text-center mb-2">
                  While AI was revolutionizing various industries, many businesses and individuals struggled to unlock its full potential.
                  </p>
                  <p className="text-gray-300 text-lg font-normal leading-relaxed lg:text-start text-center mb-2">
                  Our vision at Agility AI Pvt Ltd is to transform AI from a mere buzzword into a powerful force for progress that everyone can access.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text Section */}
            <div className="max-w-xl">
              <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-tight lg:text-start text-center">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg font-light mt-6 leading-relaxed lg:text-start text-center">
              Agility AI began as a bold idea and has since evolved into a movement dedicated to empowering businesses and individuals alike. We specialize in:
              </p>
              <ul className="text-gray-300 space-y-3 mt-4">
              <li><span className={`text-2xl`}>🔹</span><strong>Seamless AI Integration : </strong>Helping businesses automate processes and enhance efficiency with tailored AI solutions.</li>
              <li><span className={`text-2xl`}>🔹</span> <strong>Education and Skills Development : </strong>Offering comprehensive programs that equip students and professionals with practical AI skills for the real world.</li>
            </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://mycvcreator.com/administrator/postimages/65cbdec8afb9f9.81658669.jpeg"
                alt="AI Innovation"
                className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>


      {/* our core values */}
      <section className="text-white py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white mb-8">Our Core Values</h2>
          <div className="flex flex-wrap mx-4 justify-center">
            {ourvalues.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full">
                  <div className="flex h-12 w-12 mb-4 bg-blue-600 text-white justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How Will AI Redefine the Industries?  */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              How Will AI Redefine the Industries?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Artificial Intelligence is transforming industries by driving automation, enhancing decision-making, and unlocking new possibilities. From predictive analytics in healthcare to AI-powered personalization in retail, businesses are leveraging AI to boost efficiency and innovation. With machine learning, deep learning, and automation, AI is not just reshaping industries—it’s creating smarter, faster, and more adaptive solutions for a rapidly evolving world.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">$1.85 T</h4>
                <p className="text-gray-400">AI market(by 2030)</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">77% </h4>
                <p className="text-gray-400">Businesses exploring AI</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">97 M </h4>
                <p className="text-gray-400">New Job Roles</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">85 M</h4>
                <p className="text-gray-400">Job Losses</p>
              </div>
            </div>
          </div>

          {/*clickable Video Section */}
          <Link to="#" rel="noopener noreferrer" className="block">
            <video width="320" height="240" controls className="w-full rounded-lg border border-gray-700 shadow-lg">
              <source src="./transformation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </div>
      </section>




      {/* Future with Agility AI  */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="p-6 rounded-lg  ">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              The Future with Agility AI
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              AI is evolving rapidly, and at Agility AI, we are committed to staying ahead of the curve.
              Our goal is to push the boundaries of innovation, ensuring that businesses, professionals, and industries
              are prepared for an AI-driven future.
            </p>

            <ul className="text-gray-300 space-y-3 mt-4">
              <li><span className={`text-2xl`}>🔹</span> <strong>Smarter Businesses:</strong> AI-powered automation, data-driven insights, and intelligent decision-making.</li>
              <li><span className={`text-2xl`}>🔹</span> <strong>Empowered Workforce:</strong> Practical AI training that equips individuals with future-ready skills.</li>
              <li><span className={`text-2xl`}>🔹</span> <strong>Industry Transformation:</strong> AI solutions that drive efficiency, growth, and sustainability.</li>
            </ul>

          </div>

          {/* Video Section */}
          <div className="flex justify-center">
            <video
              className="w-full max-w-xl h-auto rounded-lg shadow-2xl shadow-gray-800 transition-shadow duration-500 ease-in-out"
              autoPlay
              loop
              muted
            >
              <source src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>


      {/* Our Commitment to Ethical AI */}
      <section className="py-16 text-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Media Section (New Image/Video) */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1494849084/photo/ai-ethics-or-ai-law-concept-developing-ai-codes-of-ethics-compliance-regulation-standard.webp?b=1&s=612x612&w=0&k=20&c=EGuSRObJacZfpSeTIWsEgGFN8_ZbMhnm3qBZ4l1LpAc="
              alt="Ethical AI"
              className="w-full max-w-xl rounded-lg border border-gray-700 shadow-2xl shadow-[#F5FCE1]/50 transition-shadow duration-500 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="p-6 rounded-lg ">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              Our Commitment to Ethical AI
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
            At Agility AI, we believe that technology should serve humanity. That's why we prioritize ethical AI practices, ensuring our innovations contribute positively to society. Our education initiatives have transformed countless curious minds into skilled professionals, fostering ambition and driving success.
            </p>

            <ul className="text-gray-300 space-y-3 mt-4">
              <li><span className={`text-2xl`}>🔹</span><strong>Fairness:</strong> AI that avoids biases and promotes inclusivity.</li>
              <li><span className={`text-2xl`}>🔹</span><strong>Transparency:</strong> Explainable AI models that build trust.</li>
              <li><span className={`text-2xl`}>🔹</span><strong>Accountability:</strong> Responsible development with human oversight.</li>
              <li><span className={`text-2xl`}>🔹</span><strong>Privacy & Security:</strong> Protecting user data with strict safeguards.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
