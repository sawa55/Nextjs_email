import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

function About() {
    return (
        <section
            className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
            id="about"
        >
            <div className=" max-w-7xl mx-auto">
                {/* セクションタイトル */}
                <div className="inline-block">
                    <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
                        <span className="">
                            <AiFillBulb className="w-4 h-4" />
                        </span>
                        自己紹介
                    </p>
                </div>
                {/* メイン文 */}
                <div className="mt-7">
                    <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
                        バックエンド開発においては、データベース設計、API開発、サーバーサイドプログラミングなどを得意としています。
                        <br />
                        フロントエンド開発では、ユーザビリティとユーザーエクスペリエンスに焦点を当て、モダンなフロントエンドフレームワークを使用して使いやすく美しいウェブアプリケーションを構築します。モバイルフレンドリーなデザインやリアルタイム対応など、モダンなウェブアプリケーションの要件を満たします。
                        <br />
                        また、コンテナ化、デプロイメント、CI/CDパイプラインの設計と実装にも熟練しており、クラウドプラットフォームでのアプリケーションの運用にも精通しています。
                    </p>
                </div>

                {/* 軽い実績 */}
                <div className="mt-10">
                    <div className="w-full">
                        <ul className="flex justify-between gap-10 flex-col md:flex-row">
                            <li className="w-full shadow-sm">
                                <div className="w-full text-center  py-[30px] md:py-[60px] rounded-md bg-whitesmoke ">
                                    <h3 className="text-4xl mb-1 text-darkblue font-bold">
                                        900+
                                    </h3>
                                    <span>YOUTUBE</span>
                                </div>
                            </li>
                            <li className="w-full shadow-sm">
                                <div className="w-full text-center  py-[30px] md:py-[60px] rounded-md bg-whitesmoke ">
                                    <h3 className="text-4xl mb-1 text-darkblue font-bold">40+</h3>
                                    <span>PROJECT</span>
                                </div>
                            </li>
                            <li className="w-full shadow-sm">
                                <div className="w-full text-center  py-[30px] md:py-[60px] rounded-md bg-whitesmoke ">
                                    <h3 className="text-4xl mb-1 text-darkblue font-bold">3+</h3>
                                    <span>YEARS</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;