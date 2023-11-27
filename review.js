import Image from "next/image";
import 'animate.css';

export default function Review({name, review, image, rate}) {
    // Review Component using fadeIn animation
    return (
        <div className="review-item animate__animated animate__fadeIn">
            <img src={image}/>
            <div className="info py-5 px-2">
                <h4>{name}</h4>
                <p>{review}</p>
                <span className="rate text-white">{rate}</span>
            </div>
        </div>
    );
}