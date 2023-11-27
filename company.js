import Image from "next/image";
import 'animate.css';

export default function Company({image, width}) {
    // Company Logo Component using fadeIn animation
    return (
        <div className="col-span-6 md:col-span-2 text-center animate__animated animate__fadeIn">
            <Image src={image} width={width} height={48}/>
        </div>
    );
}