import Image from 'next/image';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const plans = {
  express: {
    name: "Express",
    price: "1000",
    description: "A great starting point for individuals.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Basic analytics",
      "24-hour support response time",
    ],
    preferred: false,
  },
  standard: {
    name: "Standard",
    price: "3000",
    description: "Perfect for growing businesses.",
    features: [
      "100 products",
      "Up to 50,000 subscribers",
      "Advanced analytics",
      "12-hour support response time",
    ],
    preferred: false,
  },
  complete: {
    name: "Complete",
    price: "12000",
    description: "Best for businesses scaling up. Packed with premium features.",
    features: [
      "Unlimited products",
      "Up to 200,000 subscribers",
      "Advanced analytics & reporting",
      "6-hour priority support",
      "Marketing automation",
      "Custom branding options",
    ],
    preferred: true, // Mark this plan as the highlighted one
  },
  premium: {
    name: "Premium",
    price: "25000",
    description: "Full control with premium support & integrations.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Custom analytics & reports",
      "24/7 dedicated support",
      "Custom integrations & automation",
    ],
    preferred: false,
  },
};

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "2020-03-16",
    category: "Marketing",
    categoryHref: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    imageUrl: "/images/fitness-6.jpg",
  },
  // More posts...
];

export default function Index() {
  return (
    <>
      <Navigation />
      <section className="relative isolate px-6 pt-8 lg:px-8 bg-gray-900 text-white">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 max-w-6xl mx-auto py-32 sm:py-48 lg:py-56">
          <div className="text-center lg:text-left">
            <p className="text-4xl font-bold md:text-6xl">Complete Daily <span className='text-lime-600'>Workouts</span> Anywhere</p>

            <p className="mt-2 text-sm md:text-base font-light text-gray-200 max-w-md mx-auto lg:mx-0">
              Guided workouts and clear exercise illustrations that are easy to follow with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
              <a href="#" className="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div>
            <Image
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-xl"
              src="/images/image_1.png"
              alt="Workout Illustration"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
      </section>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
              {/* <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Boost your productivity, Start Fitness today.</h2> */}
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">Fitness now fits into your life - you can do a workout anywhere, anytime, using no equipment. It&apos;s up to you...</p>

            </div>
            <div className="relative mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 ">
              <div className="my-10 flex items-center justify-center gap-x-6 lg:justify-end">
                <a href="#" className="text-sm/6 font-semibold text-white  border px-3.5 py-2.5 rounded-md">Get Started <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-4 lg:py-24 relative xl:mr-0 lg:mr-5 mr-0 md:mb-20 ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 ">
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div >

                <Image
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/images/fitness_5.png"
                  alt="Why Choose Us? image"
                  width={600}
                  height={319}
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:p-8 rounded-3xl">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3">
                    <h2 className="text-lime-500 text-2xl lg:text-4xl md:text-3xl font-bold font-manrope leading-normal lg:text-start text-start mb-2">
                      Why Choose us?
                    </h2>
                    <ul className="list-disc list-inside lg:list-none  leading-8">
                      <li>Flexible scheduling.</li>
                      <li>Guidance, support, accountability & motivation to help achieve your goals</li>
                      <li>Safe, effective and realistic workout routines</li>
                      <li>Consistent, engaging experience you will love</li>

                    </ul>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-lime-600 leading-7">Pricing</h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(plans).map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 ring-1 ring-gray-300/60 shadow-lg transition-all duration-300 ${plan.preferred
                ? "bg-gray-900 text-white scale-105 ring-indigo-700 shadow-2xl"
                : index === 3
                  ? "bg-white text-gray-900"
                  : "bg-white text-gray-900"
                }`}
            >
              {plan.preferred && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-base font-semibold leading-7">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-base align-text-top">{plan.preferred ? "KES" : "KES"}</span>
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-base">{plan.preferred ? "/month " : "/month"}</span>
              </p>
              <p className="mt-6 leading-7 sr-only">{plan.description}</p>

              <ul className="mt-8 space-y-3 text-sm leading-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-x-3">
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 ${plan.preferred
                  ? "bg-yellow-400 text-black shadow-lg hover:bg-yellow-300"
                  : index === 3
                    ? "text-lime-600 ring-1 ring-lime-600 hover:bg-lime-600 hover:text-white"
                    : "text-lime-600 ring-1 ring-lime-600 hover:bg-lime-600 hover:text-white"
                  }`}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 lg:py-24 relative xl:mr-0 lg:mr-5 mr-0 md:mb-20 ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 ">
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div >

                <Image
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/images/fitness-4.jpg"
                  alt="about Us image"
                  width={499}
                  height={499}
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:p-12 rounded-3xl">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-lime-600 text-2xl lg:text-4xl md:text-3xl font-bold font-manrope leading-normal lg:text-start text-start">
                      Cutting Edge
                      Online Personal Training
                    </h2>
                    <p>
                      Offer a cocktail of traditional personal training and modern day technology to experience a personal touch online
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

      {/* Articles section */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-lg text-bold text-lime-600 uppercase">
              Latest Articles.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

                <div className="group relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="flex items-center gap-x-4 text-xs pt-3">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.categoryHref}
                      className="relative z-10 rounded-lg bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category}
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mt-5 text-sm text-gray-600 line-clamp-3">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
