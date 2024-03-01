import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../animations.css';

function Hero() {
    return (
        <section className="w-full lg:h-screen h-fit bg-whitesmoke relative px-[40px] py-10 max-xs:px-[20px]">
            <div className="max-w-7xl flex items-center justify-between h-full mx-auto max-md:flex-col max-md:gap-10 max-md:text-center">
                {/* 左 */}
                <div className="flex flex-col gap-5 z-40 max-md:order-2">
                    <div className="text-4xl lg:text-6xl">
                        <h1 className="font-medium">Leave system</h1>
                        <span className="font-bold text-cadetblue">Development</span>
                        <h2>to ORIGIN.Doc</h2>
                        <p className="mt-5 text-xl">
                            システム開発ならORIGIN.Docにお任せください！フルスタックエンジニアとして、幅広い技術スタックを駆使し、ソフトウェア開発のさまざまな側面に取り組んでいます。
                        </p>
                    </div>

                    <div className="flex gap-4 max-md:justify-center">
                        <Link href={'#projects'}>
                            <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
                                開発実績
                            </button>
                        </Link>
                        <Link href={'#contact'}>
                            <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
                                コンタクト
                            </button>
                        </Link>
                    </div>
                </div>

                {/* 右 */}
                <Image
                    src={'/assets/heroimage.png'}
                    width={400}
                    height={400}
                    alt="heroImage"
                    className="z-10 rounded-full"
                />
            </div>

            {/* animationcss */}
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    );
}

export default Hero;
