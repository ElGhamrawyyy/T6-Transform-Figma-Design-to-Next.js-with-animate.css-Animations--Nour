import Layout from "@/components/layout";
import Company from "@/components/Company";
import Image from "next/image";
import Step from "@/components/step";
import Review from "@/components/review";
import 'animate.css';

export default function Home() {
    return (
        <Layout>
            <section className="hero animate__animated animate__slideInDown">
                <div className="text">
                    <div className="w-70p">
                        <h3 className="mb-4">
                            "Robabekia: Nourishing Moments, Savoring Life!"
                        </h3>
                        <p className="mb-4">Robabkia is a user friendly application to sell or buy all cinema and
                            filming
                            antiques or old pieces.</p>

                        <button className="bg-orange text-white font-bold px-5 py-3 text-center rounded-full mr-4">
                            Get Started
                        </button>
                        <button
                            className="border-orange bg-transparent text-white mr-2 font-bold px-5 py-3 text-center rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <hr className="orange"/>
            <section className="p-9 how-to">
                <div className="container">
                    <h3>
                        <Image src="/icon1.png" width={37} height={36}/>
                        How it works
                    </h3>
                    <p>
                        Curio, where the magic of cinema meets a global marketplace. Our user-friendly application
                        invites enthusiasts from every corner of the world to sell or acquire cinema and filming
                        antiques. Sellers confidently submit their pieces for approval, with our dedicated team
                        meticulously assessing and estimating their value. A specialized inspector ensures the
                        authenticity of each cinematic treasure, safeguarding the integrity of our marketplace.
                    </p>
                    <div className="grid grid-cols-12 gap-4">
                        <Step icon="/icon2.png"
                              title="Antique Valuation Assurance"
                              color="light"
                              description="1-  Online platform for buying or selling antiques."
                        />
                        <Step icon="/icon3.png"
                              title="Antique Valuation Assurance"
                              color="orange"
                              description="2- Secured transactions , meetings and consultants for pieces authentication."
                        />
                        <Step icon="/icon4.png"
                              title="Antique Valuation Assurance"
                              color="light"
                              description="3- Delivery worldwide with completable prices"
                        />
                    </div>
                </div>
            </section>
            <hr/>
            <section className="reviews p-12">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-7">
                            <h2>What they say about us</h2>
                        </div>
                        <div className="col-span-12 md:col-span-5 pt-10 text-right">
                            <button className="bg-white font-bold px-5 py-1 text-center rounded-full mr-4">
                                <img className="mr-1" src="/prev.png"/>
                                Prev
                            </button>
                            <button className="bg-white font-bold px-5 py-1 text-center rounded-full">
                                Next
                                <img className="ml-1" src="/next.png"/>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-4">
                        <div className="col-span-12 md:col-span-4">
                            <h3>We always provide the best service and always maintain the quality of
                                communication.</h3>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Review name="Omar Sameh"
                                        review="Product received, expected as described. Great service as well."
                                        image="/client-1.png"
                                        rate="4.5"
                                />
                                <Review name="Nada Hany"
                                        review="The best website to used !"
                                        image="/client-2.jpeg"
                                        rate="4.3"
                                />
                                <Review name="Wael Hossam"
                                        review="Great staff and trusted items."
                                        image="/client-3.jpeg"
                                        rate="4.3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="slider">

            </section>
            <section className="bg-orange p-9">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <Company image="/company-logo1.png" width={165}></Company>
                        <Company image="/company-logo2.png" width={169}></Company>
                        <Company image="/company-logo3.png" width={113}></Company>
                        <Company image="/company-logo4.png" width={153}></Company>
                        <Company image="/company-logo5.png" width={112}></Company>
                    </div>
                </div>
            </section>
            <section className="subscribe text-center p-12">
                <div className="container  w-70p">
                    <h2 className="mb-8">Subscribe and get exclusive deals & offer</h2>
                    <input
                        type="email"
                        required
                        className="rounded-md border-0 bg-white py-3 px-6"
                        placeholder="Enter your email"
                    />
                    <button className="bg-orange text-white font-bold mt-5 py-3 px-6 rounded">
                        Subscribe
                    </button>

                </div>
            </section>
            <section className="continue text-center p-12 w-70p">
                <div className="container">
                    <h2>It's A Store Selling Unique And Eclectic Items</h2>
                    <p>Unlock the mysteries of your antiques with our expert appraisal service. Discover the true value
                        and historical significance of your cherished items.</p>
                    <button className="bg-orange text-white font-bold mt-5 py-3 px-6 rounded-full">
                        Continue
                    </button>
                </div>
            </section>
        </Layout>
    );
}
