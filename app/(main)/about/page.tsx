import React from 'react';
import Image from "next/image";
import Link from "next/link";


const About: React.FC = () => {
    return (
        <>
            <section className="overflow-hidden pt-32 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between lg:-mx-4">
                        {/* Image Section */}
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src="/images/fitness-4.jpg"
                                            alt="Image 1"
                                            width={500}
                                            height={700}
                                            objectFit='cover'
                                            className="w-full rounded-2xl aspect-[27/32] object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src="/images/fitness-4.jpg"
                                            alt="Image 2"
                                            width={500}
                                            height={700}
                                            objectFit='cover'
                                            className="w-full rounded-2xl aspect-[27/32] object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src="/images/fitness-6.jpg"
                                            alt="Image 3"
                                            width={500}
                                            height={700}
                                            objectFit='cover'
                                            className="w-full rounded-2xl aspect-[27/40] object-cover"
                                            loading="lazy"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            {/* SVG moved to be optimized */}
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <circle cx="1.66667" cy={104} r="1.66667" fill="#3056D3" />
                                                {/* Additional circles can be added dynamically */}
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Shape N' Tone 360.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    Shape n Tone 360 is an industry leader in health and fitness with experienced professional personal trainers,nutritionists and health & wellness experts (boasting over 500,000 working hours)well-equipped with modern fitness training methods and nutritional knowledge to help you reach your goals and beyond.


                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are but would like a healthier lifestyle, Shape n Tone 360 is the right choice for you.
                                </p>
                                <div className="my-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <Link href="#" className="text-sm/6 font-semibold text-white  border px-3.5 py-2.5 rounded-md">
                                        Get Started<span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
                                <p className="mt-2 text-2xl font-bold tracking-tight text-lime-900 sm:text-3xl">Programs & Workouts</p>
                                <p className="mt-6 text-base leading-8 text-gray-600">
                                    Our programs and workouts are structured to fit into your lifestyle. Our Trainers are great listeners,analysts and motivators who put clients results first and foremost.
                                    They recognise and adapt to the needs of the client and are flexible and creative enough to deal with any goal, barrier, aspiration and dream. Our trainers not only offer
                                    a variety of workouts, which is essential to keep you interested-they are aware that-too much variety might inhibit your progress.They will help you stick with a training
                                    programme long enough, that you see real results.They will equip you with both the physical resources and mental tools to push your boundaries, escape your inertia, and
                                    get the body youdeserve.
                                </p>
                                <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 ">
                                    <p className="text-xl italic font-medium leading-relaxed text-gray-900">
                                        We transform every body for short term impact and real long term change.
                                    </p>
                                    <figcaption className="text-gray-500 my-4">
                                        <cite className="not-italic font-light">Victor Fitness</cite>
                                    </figcaption>

                                </blockquote>

                                <div className="mt-10 flex items-center gap-x-6">

                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                                        Start Today <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/images/fitness-6.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={1080}
                            height={720}
                        />
                    </div>
                </div>
            </section>
            
        </>
    );
};


export default About;