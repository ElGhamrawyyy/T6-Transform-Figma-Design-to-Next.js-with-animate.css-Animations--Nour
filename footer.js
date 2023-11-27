import Image from "next/image";

export default function Footer() {
    return (
        <footer className="p-12 bg-orange">
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    {/* col-span-12 in all screens except large screen */}
                    <div className="col-span-12 md:col-span-4 copyrights">
                        <Image src="/logo-blue.png" width={86} height={43}/>
                        <div className="mt-2">
                            Copyright © 2023 Frapisky design.
                        </div>
                        <div>
                            All Rights reserved
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <ul>
                            <li><a href="#">Browse</a></li>
                            <li><a href="#">Clothings</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Books</a></li>
                            <li><a href="#">Furnitures</a></li>
                            <li><a href="#">Decorations</a></li>
                            <li><a href="#">Sports Equipment</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <ul>
                            <li><a href="#">General</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">support@ecoswap.co</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <ul>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Code of Conduct</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}