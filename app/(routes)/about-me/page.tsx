"use client"

import { Avatar } from "@/components/avatar.component";
import ContainerPage from "@/components/container-page.component";
import CounterServices from "@/components/counter-service.component";
import TimeLine from "@/components/time-line.component";
import TransitionPage from "@/components/transition-page.component";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;