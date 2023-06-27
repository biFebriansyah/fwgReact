import React from 'react'
import Header from '../../component/header'
import Hero from '../../assets/hero.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

function Home() {
    return (
        <>
            <header className="bg-white">
                <Header />
                <div className="hero mx-auto flex max-w-7xl sm:flex-row flex-col items-center justify-between p-5 lg:h-128">
                    <div className="flex-initial sm:text-left text-center">
                        <h3 className="lg:text-2xl font-normal leading-6 text-gray-400 md:pb-4">Nearest Cinema, Newst Movie</h3>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl font-medium text-primary">Find Out Now!</h1>
                    </div>
                    <div className="flex-initial">
                        <img className="lg:h-auto md:h-96 h-80 md:w-auto" src={Hero} alt="logo" />
                    </div>
                </div>
            </header>
            <main>
                <section className="bg-graysmoth">
                    <div className="mx-auto flex flex-col max-w-7xl items-center justify-between p-5 py-10">
                        <div className="flex justify-between w-full mb-10">
                            <p className="md:text-2xl xs:text-1xl font-medium text-primary">
                                <span className="bg-gradient-to-r from-primary via-primary to-primary bg-[length:50%_3px] bg-no-repeat bg-bottom pb-2">Now Showing</span>
                            </p>
                            <a href="/#" className="font-medium text-primary">
                                View all
                            </a>
                        </div>
                        <div className="flex lg:flex-nowrap flex-wrap justify-between w-full">
                            <a href="/#" className="cards p-8 border-2 border-white h-60 lg:h-auto hover:border-primary">
                                <img className="max-h-full" src={card1} alt="cards" />
                            </a>
                            <a href="/#" className="cards p-8 border-2 border-white h-60 lg:h-auto hover:border-primary">
                                <img className="max-h-full" src={card2} alt="cards" />
                            </a>
                            <a href="/#" className="cards p-8 border-2 border-white h-60 lg:h-auto hover:border-primary">
                                <img className="max-h-full" src={card3} alt="cards" />
                            </a>
                            <a href="/#" className="cards p-8 border-2 border-white h-60 lg:h-auto hover:border-primary">
                                <img className="max-h-full" src={card1} alt="cards" />
                            </a>
                            <a href="/#" className="cards p-8 border-2 border-white h-60 lg:h-auto hover:border-primary">
                                <img className="max-h-full" src={card2} alt="cards" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
