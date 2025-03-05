import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>
                <Navigation />
                <div className="flex flex-col ">
                    <div className="relative lg:mt-0 md:mt-28 sm:mt-32 mt-36">
                        {children}
                    </div>
                </div>
                <section className="py-4 lg:py-24 relative xl:mr-0 lg:mr-5 mr-0 md:mb-20 ">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 ">
                            <div className="w-full lg:justify-start justify-center items-start flex">
                                <div >

                                    <Image
                                        className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                        src="/images/fitness-6.jpg"
                                        alt="about Us image"
                                        width={499}
                                        height={333}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:p-12 rounded-3xl">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2 className="text-lime-600 text-2xl lg:text-4xl md:text-3xl font-bold font-manrope leading-normal lg:text-start text-start">
                                                Sign Up to unlock your full potential
                                            </h2>
                                            <p>
                                                We focus on your needs to create an all-round workout plan that naturally fits into your life. So you can get the body and health you want, at a pace that works for you.
                                            </p>

                                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                                <a href="#" className="text-sm/6 font-semibold text-white">Get started <span aria-hidden="true">→</span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>

    );
}
