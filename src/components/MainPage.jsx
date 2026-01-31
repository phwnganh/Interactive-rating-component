import StartIcon from '../assets/icon-star.svg'
const MainPage = () => {
    return (
        <main className={"bg-black"}>
            <section className={"min-h-screen flex justify-center items-center"}>
                <div className={"py-6 sm:py-8 px-6 max-w-103 w-full  bg-grey-950 rounded-lg"}>
                    <div className={"flex flex-col gap-6 sm:gap-8"}>
                        <div className={"flex justify-center items-center bg-grey-900 rounded-3xl w-10 h-10 sm:w-12 sm:h-12"}>
                            <img src={StartIcon} alt={"start-icon"}/>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <h1 className={"text-white text-preset-2 sm:text-preset-1 font-preset-2 sm:font-preset-1 leading-preset-2 sm:leading-preset-1"}>How did we do?</h1>
                            <p className={"text-grey-500 text-preset-5 sm:text-preset-4 leading-preset-5-regular sm:leading-preset-4-regular"}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                            <div className={"flex items-center gap-4 sm:gap-6"}>
                                {[1,2,3,4,5].map((item, index) => (
                                    <div key={index} className={"flex justify-center items-center bg-grey-900 rounded-3xl w-10.5 h-10.5 sm:w-13 sm:h-13"}>
                                        <p className={"text-grey-500 text-preset-5 sm:text-preset-3 font-preset-5-bold sm:font-preset-3 leading-preset-5-bold sm:leading-preset-3 tracking-preset-5-bold sm:tracking-preset-3"}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button type={"submit"} className={"text-center bg-orange-500 uppercase text-grey-950 py-4 sm:py-1.5 text-preset-5 font-preset-5-bold sm:font-preset-5-semibold leading-preset-5-semibold sm:leading-preset-5-semibold tracking-preset-5-semibold sm:tracking-preset-5-semibold rounded-3xl"}>submit</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;