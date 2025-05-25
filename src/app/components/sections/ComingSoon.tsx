import React from 'react';

const ComingSoon = () => {
    return (
        <>
            <div className={'hidden bg-black h-screen md:grid grid-cols-2 relative'}>
                <div className={'absolute top-0 p-4 z-50 flex justify-between items-center w-full'}>
                    <p className={' text-[11px] text-neutral-400 '}>@invow.me</p>
                    <p className={' text-[11px] text-neutral-300 '}>Built under the Moroccan sun 🇲🇦</p>
                </div>
                <div className={'absolute bottom-0 p-4 z-50 flex justify-center w-full'}>
                    <p className={' text-[11px] text-neutral-400 '}>SAY HELLO — contact@invow.me</p>
                </div>
                <div
                    className={'w-full flex flex-col justify-center items-center relative z-50 max-w-xl mx-auto text-center'}>
                    <h1 className={'text-3xl font-bold text-white'}>We’re cooking up something so easy,<br/> even your invoices
                        will laugh. 🔥 </h1>
                    <p className={'text-xs mt-4 text-neutral-400'}>Say goodbye to messy spreadsheets and awkward
                        follow-ups.
                        InvowMe is designed to make billing feel effortless — fast, clean, and maybe even fun.
                        Stay tuned, the recipe’s almost ready. 🍳📄
                    </p>
                    <a
                        href={'mailto:contact@invow.me'}
                        className={'w-full p-2 rounded-lg bg-[#2869FE] mt-8 select-none cursor-pointer transation-all duration-500 hover:opacity-80'}>
                        <p className={' text-xs font-bold text-white'}>Slide into our inbox — we promise not to invoice you
                            (yet).</p>
                    </a>

                </div>
                <div className={'w-full h-full overflow-hidden relative'}>
                    <div className={'absolute w-full h-full top-0 flex justify-center items-center z-50'}>
                        <img src={'/logo.svg'} alt={'invowMe logo'}/>
                    </div>
                    <img src={'/bg-coming-soon.jpeg'} alt={'background'} className={'w-full h-full object-cover'}/>
                </div>
                <div
                    className={'absolute h-screen w-full top-0 left-0 z-10 bg-gradient-to-l from-black/40  via-black to-black'}>
                </div>

            </div>
            <div className={'md:hidden bg-black h-screen relative p-4'}>
                <div className={'bg-black/60 z-20 absolute w-full h-screen top-0 left-0'}>
                </div>
                <img src={'/bg-coming-soon.jpeg'} alt={'background'} className={'absolute top-0 left-0 w-full h-screen object-cover'}/>

                <div className={'absolute top-0 p-4 z-50 flex justify-center items-center w-full'}>
                    <p className={' text-[11px] text-neutral-300 '}>Built under the Moroccan sun 🇲🇦</p>
                </div>
                <div className={'absolute bottom-0 p-4 z-50 flex justify-center w-full'}>
                    <p className={' text-[11px] text-neutral-400 '}>SAY HELLO — contact@invow.me</p>
                </div>
                <div
                    className={'w-full h-screen flex flex-col justify-center items-center relative z-50  text-center'}>
                    <img src={'/logo.svg'} alt={'invowMe logo'} className={'w-16'}/>
                    <h1 className={'text-2xl font-bold mt-8'}>We’re cooking up something so easy,<br/> even your invoices
                        will laugh. 🔥 </h1>
                    <p className={'text-xs mt-4 text-neutral-300'}>Say goodbye to messy spreadsheets and awkward
                        follow-ups.
                        InvowMe is designed to make billing feel effortless — fast, clean, and maybe even fun.
                        Stay tuned, the recipe’s almost ready. 🍳📄
                    </p>
                    <div
                        className={'w-full p-2 rounded-lg bg-[#2869FE] mt-8 select-none cursor-pointer transation-all duration-500 hover:opacity-80'}>
                        <a href={'mailto:contact@invow.me'} className={' text-xs font-bold '}>Slide into our inbox — we promise not to invoice you
                            (yet).</a>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ComingSoon;