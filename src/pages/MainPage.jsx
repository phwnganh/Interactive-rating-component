import StartIcon from '../assets/icon-star.svg'
import MainLayout from "../layouts/MainLayout.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const MainPage = () => {
    const [selectedRating, setSelectedRating] = useState(0)
    const navigate = useNavigate()
    const handleSelectedRating = (rating) => {
        setSelectedRating(rating)
        console.log("rating", rating)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/thank-you`, {state: selectedRating})
    }
    return (
        <MainLayout>
            <div className={"py-6 sm:py-8 px-6"}>
                        <div className={"flex flex-col gap-6 sm:gap-8"}>
                            <div className={"flex justify-center items-center bg-grey-900 rounded-3xl w-10 h-10 sm:w-12 sm:h-12"}>
                                <img src={StartIcon} alt={"start-icon"}/>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <h1 className={"text-white text-preset-2 sm:text-preset-1 font-preset-2 sm:font-preset-1 leading-preset-2 sm:leading-preset-1"}>How did we do?</h1>
                                <p className={"text-grey-500 text-preset-5 sm:text-preset-4 leading-preset-5-regular sm:leading-preset-4-regular"}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                                <div className={"flex items-center gap-4 sm:gap-6"}>
                                    {[1,2,3,4,5].map((item, index) => (
                                        <div key={index} role={"button"} onClick={() => handleSelectedRating(item)} className={`flex justify-center items-center bg-grey-900 rounded-3xl w-10.5 h-10.5 sm:w-13 sm:h-13 group hover:bg-white ${(selectedRating === item) ? "bg-orange-500" : ""}`}>
                                            <p className={`text-grey-500 text-preset-5 sm:text-preset-3 font-preset-5-bold sm:font-preset-3 leading-preset-5-bold sm:leading-preset-3 tracking-preset-5-bold sm:tracking-preset-3 group-hover:text-grey-900 ${(selectedRating === item) ? "text-grey-900" : ""}`}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type={"submit"} onClick={handleSubmit} disabled={selectedRating === 0} className={`text-center bg-orange-500 uppercase text-grey-950 py-4 sm:py-1.5 text-preset-5 font-preset-5-bold sm:font-preset-5-semibold leading-preset-5-semibold sm:leading-preset-5-semibold tracking-preset-5-semibold sm:tracking-preset-5-semibold rounded-3xl hover:bg-white ${selectedRating === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}>submit</button>
                        </div>

                    </div>
        </MainLayout>
    );
};

export default MainPage;