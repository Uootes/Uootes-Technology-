import React from 'react';
import Btn from './Btn'

const ServiceSection = ({ title, description }) => (
    <div className="my-5">
        <div className="flex mb-2">
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded"></div>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 ml-5 text-gray-200">{description}</p>
    </div>
);

const Services = () => {
    const services = [
        {
            title: 'Products',
            description: 'We develop secure, user-friendly financial products that leverage the power of blockchain technology to offer decentralized finance (DeFi) solutions, digital asset management, and more.'
        },
        {
            title: 'Education',
            description: 'We are committed to enhancing financial literacy by providing comprehensive educational resources, helping individuals understand and navigate the complexities of the modern financial world.'
        },
        {
            title: 'Decentralized Finance (DeFi)',
            description: 'Our DeFi solutions are at the heart of our mission to revolutionize the financial landscape, making it more accessible, transparent, and efficient.'
        },
        {
            title: 'Easy Earning',
            description: 'Our platform provides access to diverse income streams, enabling individuals to earn money effortlessly.'
        },
        {
            title: 'Blockchain Services',
            description: 'At Utooes Technology, our Blockchain Development Services are at the forefront of innovation, designed to empower businesses with cutting-edge solutions in the decentralized economy.'
        },
        {
            title: 'Borderless Payments',
            description: 'We facilitate seamless cross-border transactions, breaking geographical barriers.'
        }
    ];

    return (
        <div id='services'>

            <div className="p-4 md:p-12 rounded-lg  bg-[#0a2540] text-white" >
                <div >
                    {/* Heading */}
                    <div className="md:flex justify-between items-center">
                        <div className="md:w-3/10">
                            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded"></div>
                            <h1 className="text-2xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">Our Services</h1>
                        </div>
                        <p className="md:w-7/10 text-gray-200">
                            At Uootes Technologies, we offer a comprehensive suite of services designed to empower individuals and businesses in the decentralized financial landscape. Our innovative solutions harness the power of blockchain and web3 technologies, providing the tools and resources needed to thrive in the global economy.
                        </p>
                    </div>

                    <div className="md:flex justify-between mt-5 md:mt-20">
                        <h1 className="text-2xl md:text-4xl font-bold md:w-5/10 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent md:py-2">
                            The possibilities are beyond your imagination
                        </h1>
                        <a href="/" className="text-[#ff7f50] md:py-2">Explore Our Innovation</a>
                    </div>
                </div>

                {/* Services Details */}
                <div className="md:grid md:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <ServiceSection key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
            <div className="mt-7">
                <Btn />
            </div>
        </div>
    );
};

export default Services;