import Container from "../../Shared/Container";
import Heading from "../../Shared/Heading";


const Featured = () => {
    return (
        <div>
        <Container>
         <Heading subHeading={'Featured'} Heading={'Our Featured'}></Heading> 
         <div className="text-center p-8">
         
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/pjXqzpg/s3.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#ea062b]">
                    Blood Bank
                </h3>
                <p className="sm:text-lg mt-6">
                Our Blood Bank feature is the heartbeat of hope. Access a reservoir of life-saving blood with just a click. Our comprehensive Blood Bank ensures a steady supply of various blood types, ready to meet any urgent need. From rare blood types to common ones, we've got you covered. With real-time updates and secure inventory management, our Blood Bank is a lifeline for those seeking the gift of life. Join us in building a community that cares – where every donation makes a difference, and every drop creates a ripple of hope. Donate with purpose, save with love.
                </p>
            </div>
        </div>
        
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/kMqQpv8/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg" alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#ea062b]">
                    Health Check
                </h3>
                <p className="sm:text-lg mt-6">
                Introducing our Health Check feature – a personalized journey to wellness. Take charge of your health with easy-to-use tools that empower you to monitor key health indicators. From tracking vital signs to assessing overall well-being, our Health Check ensures you stay on the path to a healthier life. Receive valuable insights, set health goals, and make informed decisions for a brighter, healthier future. Your well-being matters, and with Health Check, we're here to support you every step of the way. Start your journey to optimal health today!
                </p>
            </div>
        </div>
        
        <div className="flex flex-wrap items-center mt-20 text-left  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                <img src="https://i.ibb.co/wM7vWh5/luann-hunt-X20g2-GQs-Vd-A-unsplash.jpg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400"/>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#ea062b]">
                    Blood Donation
                </h3>
                <p className="sm:text-lg mt-6">
                Discover the power of giving. Our Blood Donation feature simplifies the process, making it quick and easy to donate. Join us in the mission to save lives – because a small act can make a monumental difference. Be a hero. Donate blood.
                </p>
            </div>
        </div>
        
        </div>
      </Container>
        
        </div>
    );
};

export default Featured;