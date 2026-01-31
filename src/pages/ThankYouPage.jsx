import MainLayout from "../layouts/MainLayout.jsx";
import IllustrationThankYou from '../assets/illustration-thank-you.svg'
import {useLocation} from "react-router-dom";
const ThankYouPage = () => {
    const location = useLocation()
    return (
        <MainLayout>
            <div className={"py-10 px-8"}>
                <div className={"flex flex-col gap-6 sm:gap-8"}>
                    <div className={"flex justify-center items-center"}>
                        <img src={IllustrationThankYou} alt={"illustration-thankYou"}/>
                    </div>
                    <div className={"rounded-3xl py-1.5 px-4  bg-grey-900 max-w-48.25 mx-auto flex justify-center items-center"}>
                        <p className={"text-orange-500 text-preset-5 sm:text-preset-4 leading-preset-5-regular sm:leading-preset-4-regular"}>You selected {location.state} out of 5</p>
                    </div>
                    <div className={"flex flex-col gap-4 text-center"}>
                        <h1 className={"text-white text-preset-2 sm:text-preset-1 font-preset-1 leading-preset-2 sm:leading-preset-1 text-center"}>Thank you!</h1>
                        <p className={"text-grey-500 text-preset-5 sm:text-preset-4 leading-preset-5-regular sm:leading-preset-4-regular"}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
};

export default ThankYouPage;