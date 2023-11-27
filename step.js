import Image from "next/image";
import 'animate.css';

export default function Step({icon, title, description, color}) {
    // Step Component using bounceIn animation
    return (
        <div className={`col-span-12 md:col-span-4 step p-5 text-center animate__animated animate__bounceIn rounded ${color}`}>
            <Image src={icon} width={39} height={30}/>
            <h4 className="mb-10 mt-4">{title}</h4>
            <p>{description}</p>
        </div>
    );
}