import React from 'react';
import Logo from "@/app/components/Logo";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import LinkedinIcon from "@/app/components/icons/LinkedinIcon";
import Link from "next/link";

const Footer = () => {

    const date = new Date()
    return (
        <div className={'rounded-t-[100px] md:rounded-t-[150px] bg-secondary h-[80vh] px-8'}>
            <div className={'max-w-5xl grid md:grid-cols-3 gap-8 h-full mx-auto pt-20 md:pt-40 text-background relative'}>
                <Logo/>
                <div className={'flex flex-col gap-4'}>
                    <div className={'flex items-center gap-2'}>
                        <div className={'w-1 h-1 rounded-full bg-background'}>
                        </div>
                        <Link href={'/fonctionnalites'}>Fonctionnalités</Link>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'w-1 h-1 rounded-full bg-background'}>
                        </div>
                        <Link href={'/tarifs'}>Tarifs</Link>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'w-1 h-1 rounded-full bg-background'}>
                        </div>
                        <Link href={'/comment-ca-marche'}>Comment ça marche</Link>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'w-1 h-1 rounded-full bg-background'}>
                        </div>
                        <Link href={'/testimonials'}>Testimonials</Link>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'w-1 h-1 rounded-full bg-background'}>
                        </div>
                        <a target={'_blank'} href={"https://app.invow.me"} className={'cursor-pointer'}>Inscription
                            gratuite</a>
                    </div>
                    <div className={'flex justify-between md:block mt-8 text-xs space-y-2 '}>
                       <div className={'opacity-80'}>
                           <p>contact@invow.me</p>
                           <p>+212 693 484 092</p>
                       </div>
                        <div className={'flex md:hidden gap-2'}>
                            <a href={'https://www.instagram.com/invow.me/'} target={'_blank'}
                               className={'bg-background p-3 rounded-lg w-fit h-fit text-secondary'}>
                                <InstagramIcon/>
                            </a>
                            <a href={'https://www.linkedin.com/company/invowme'} target={'_blank'}
                               className={'bg-background p-3 rounded-lg w-fit h-fit text-secondary'}>
                                <LinkedinIcon/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className={'hidden md:flex justify-end gap-2'}>
                    <a href={'https://www.instagram.com/invow.me/'} target={'_blank'}
                       className={'bg-background p-3 rounded-lg w-fit h-fit text-secondary'}>
                        <InstagramIcon/>
                    </a>
                    <a href={'https://www.linkedin.com/company/invowme'} target={'_blank'}
                       className={'bg-background p-3 rounded-lg w-fit h-fit text-secondary'}>
                        <LinkedinIcon/>
                    </a>
                </div>
                <p className={'text-[10px] font-light absolute bottom-4'}>© {date.getFullYear()} InvowMe. Pas de
                    paperasse, pas de panique. Juste des factures.</p>
            </div>
        </div>
    );
};

export default Footer;