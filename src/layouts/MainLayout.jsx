import React from 'react';

const MainLayout = ({children}) => {
    return (
        <main className="bg-black">
            <section className={"min-h-screen flex justify-center items-center"}>
                <div className={"max-w-103 w-full  bg-grey-950 rounded-3xl"}>
                    {children}
                </div>
            </section>
        </main>
    );
};

export default MainLayout;