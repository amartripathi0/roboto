"use client";

import Image from "next/image";
import heroImg from '../public/assets/image.png'
import crossImg from '../public/assets/memberPage/cross.png'
import dotsImg from '../public/assets/memberPage/dots.png'
import plus from '../public/assets/memberPage/orbit/plus.png'
import analytics from '../public/assets/memberPage/orbit/analytics.png'
import blender from '../public/assets/memberPage/orbit/blender.png'
import random from '../public/assets/memberPage/orbit/random.png'
import vimeo from '../public/assets/memberPage/orbit/vimeo.png'
import Tab from "@/components/tab";
import { cardData } from "@/constants";
import Card from "@/components/Card";
import Button from "@/components/Button";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import HeadPara from "@/components/HeadPara";
import MainHeading from "@/components/MainHeading";
import PageHeading from "@/components/PageHeading";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('London')
  return (
    <main className="min-h-screen w-full bg-white">

      {/* Page-1 */}
      <div className="w-full h-[480px] relative">
        <div className="absolute top-[88px] left-32 w-2/5 flex flex-col gap-10 text-white pr-10">
          <MainHeading>
            Top insights from AI talks
          </MainHeading>
          <HeadPara>
            Get informed about the latest talks in artificial intelligence, all from the comfort of your front room
          </HeadPara>

          <div className="flex gap-3">
            <Link
              href={'/app'}>
              <Button
                additionalStyles="text-white bg-purple-500"
                whiteArrow={true}
                label="Get the app"
              />
            </Link>
            <Link
              href={'#footer'}
              scroll={true}
            >
              <Button
                additionalStyles="text-white border-white"
                label="Join a talk"
                whiteArrow={true}
              />
            </Link>
          </div>
        </div>
        <Image
          src={heroImg}
          alt="hero-image"
          priority={true}
          height={2000}
          width={2000}
          className="w-full h-full"
        />
      </div>

      {/* Page-2 */}
      <div className="w-full py-20 px-32 flex flex-col gap-10">
        <PageHeading>
          Find more talks
        </PageHeading>

        {/* Tabs */}
        <div className="flex gap-[6px] items-center justify-between w-[368px]">
          {
            cardData.map(eachCardTab => (
              <Tab
                key={eachCardTab.tabName}
                label={eachCardTab.tabName}
                setActiveTab={setActiveTab}
                isActive={activeTab === eachCardTab.tabName}
              />
            ))
          }
        </div>

        {/* Cards */}
        <div className="flex gap-10 h-[464px]">
          {cardData
            .filter(eachCardsTab => eachCardsTab.tabName === activeTab)
            .map(tab =>
              tab.data.map(eachCard => (
                <Card
                  key={eachCard.cardTitle}
                  cardTitle={eachCard.cardTitle}
                  cardImg={eachCard.cardImg}
                  cardDesc={eachCard.cardDescription}
                />
              ))
            )
          }
        </div>



        <Link
          href={'/app'}>
          <Button label="Listen to more" />
        </Link>
      </div>

      {/* 3rd page */}
      <div className="flex justify-between items-center gap-10 py-20 px-32  ">
        {/* Orbiting Logos */}
        <div className="relative rounded-[44px] w-[572px] h-[510px] bg-[#180020]">
          <Image
            src={crossImg}
            alt="cross-image"
            height={2000}
            width={2000}
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="h-full w-full rounded-full relative flex justify-center items-center">
            <Image
              src={dotsImg}
              alt="dots-image"
              height={2000}
              width={2000}
              className="w-4/5 h-4/5 rounded-full "
            />
            <OrbitingLogos />
          </div>
        </div>

        {/* Become a member */}
        <div className="w-[470px] flex flex-col gap-10">
          <PageHeading>
            Become a member
          </PageHeading>
          <HeadPara>
            Join our AI Talk platform for exclusive insights on AI&apos;s impact. Unlock membership for a deeper dive into the world of artificial intelligence.
          </HeadPara>

          <Link
            href={'/app'}
          >
            <Button
              label="Join now"
            />
          </Link>
        </div>
      </div>

      {/* 4th page */}
      <div id="footer" className="relative h-[492px] bg-[#190E26] flex justify-center items-center text-white text-center">
        <Image
          src={dotsImg}
          alt="dots-image"
          height={2000}
          width={2000}
          className="absolute w-3/5 h-3/5 top-1/4 rounded-full opacity-70 bg-gradient-radial from-[#190E26]/97 to-[#FFFFFF]/3"
        />
        <div className="flex flex-col gap-10 items-center w-2/5 z-20">
          <MainHeading>
            Want to talk at our event?
          </MainHeading>
          <p className="font-normal text-xl w-5/6 leading-7 -tracking-[2%]">
            Excited to have you speak at our event! Share your expertise and insights on AI&apos;s role in shaping the future. Let&apos;s make an impact together!</p>
          <Link
            href={'https://example.org'}
            target="_blank">
            <Button
              additionalStyles="bg-white border-white"
              label="Speak at our event"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

function OrbitingLogos() {
  return (
    <div className="absolute flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden">
      <div className="border-2 border-[#FF00A8] rounded-full p-8 border-opacity-[2%]">
        <div className="border-2 border-[#FF00A8] rounded-full p-8 border-opacity-[3%]">

          <div className="border-2 border-[#FF00A8] rounded-full p-8 border-opacity-5">

            <div className="border-2 border-[#FF00A8] rounded-full p-8 border-opacity-10">

              <div className="border-2 border-[#FF00A8] rounded-full p-8  border-opacity-20">

                <div className="border-2 border-[#FF00A8] rounded-full p-8 border-opacity-50">
                  <div
                    className="h-20 w-20 rounded-full p-3  bg-gradient-to-t from-[#663399] via-[#FF53F8] to-[#FF00A8] border-t-4 border-l-2 "
                  >
                    <Image
                      src={plus}
                      alt="plus-image"
                      height={2000}
                      width={2000}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrbitingCircles
        className="h-[60px] w-[60px] bg-[#190E26] bg-opacity-60 border-[#190E26] border-[1.5] p-3 rounded-full"
        radius={160}
        duration={20}
        delay={5}
      >

        <Image
          src={analytics}
          alt="plus-image"
          height={2000}
          width={2000}
          className="w-full h-full rounded-full"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] bg-[#190E26] bg-opacity-60 border-[#190E26] border-[1.5] p-3 rounded-full"
        radius={160}
        duration={20}
        delay={10}
      >
        <Image
          src={random}
          alt="plus-image"
          height={2000}
          width={2000}
          className="w-full h-full rounded-full"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[60px] w-[60px] bg-[#190E26] bg-opacity-60 border-[#190E26] border-[1.5] rounded-full"
        radius={160}
        duration={20}
        delay={15}

      >
        <Image
          src={vimeo}
          alt="plus-image"
          height={2000}
          width={2000}
          className="w-full h-full rounded-full"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[60px] w-[60px] bg-[#190E26] bg-opacity-60 border-[#190E26] border-[1.5] p-3 rounded-full"
        radius={160}
        duration={20}
        delay={20}

      >
        <Image
          src={blender}
          alt="plus-image"
          height={2000}
          width={2000}
          className="w-full h-full rounded-full"
        />
      </OrbitingCircles>
    </div>

  );
}
