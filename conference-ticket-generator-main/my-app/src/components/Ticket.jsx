import React from "react";
import squiggyTop from "../assets/pattern-squiggly-line-top.svg";
import squiggyBottom from "../assets/pattern-squiggly-line-bottom.svg";
import lines from "../assets/pattern-lines.svg";
import circle from "../assets/pattern-circle.svg";
import logo from "../assets/logo-full.svg";
import avatar from "../assets/image-avatar.jpg";
import githubIcon from "../assets/icon-github.svg";

const Ticket = ({ data }) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const monthName = today
    .toLocaleString("default", { month: "long" })
    .substring(0, 3);
  const year = today.getFullYear();
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-cover bg-fixed bg-no-repeat bg-center bg-[url(/background-mobile.png)] md:bg-[url(/background-desktop.png)] overflow-hidden">
      {/* Background overlay to ensure full coverage */}
      <div className="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url(/background-mobile.png)] md:bg-[url(/background-desktop.png)] -z-10"></div>

      {/* Decoration layer */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={lines}
          className="absolute top-0 right-0"
          alt=""
        />
        <img
          src={circle}
          className="absolute top-[535px] right-[285px]"
          alt=""
        />
        <img
          src={squiggyTop}
          className="absolute top-20 right-0"
          alt=""
        />
        <img
          src={squiggyBottom}
          className="absolute bottom-0"
          alt=""
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow text-neutral-0 pt-10 items-center font-inco mx-auto max-w-4xl px-2 text-center text-[20px] relative z-10">
        <img src={logo} alt="logo" />
        <h1 className="text-[58px] font-bold pt-[62px] leading-[64px]">
          Congrats, <span className='bg-gradient-to-r from-orange-500 to-neutral-0 inline-block text-transparent bg-clip-text'>{data.name}!</span>
          <br />
          Your ticket is ready.
        </h1>
        <p className="pt-5 text-[23px]">
          We&apos;ve emailed your ticket to <span className='text-orange-500'>{data.email}</span> and will send updates in the run up to the event.
        </p>
        {/* Ticket */}
        <div className='mt-12 p-6 bg-[url(/pattern-ticket.svg)] bg-no-repeat bg-center flex justify-between w-[600px] h-[280px] bg-cover'>
          {/* Left part */}
          <div className='w-full flex flex-col justify-between'>
            <div>
              <img src={logo} alt="logo" className='w-[300px]' />
              <p className='text-left pl-4 text-[1rem] text-neutral-300'>
                {monthName} {day}, {year}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={data.avatar?data.avatar:avatar} alt="avatar" className='rounded-xl w-20 object-cover aspect-square' />
              <div>
                <h3>{data.name}</h3>
                <p className='flex items-center gap-1.5'>
                  <img src={githubIcon} alt="GitHub" />
                  {data.githubUsername}
                </p>
              </div>
            </div>
          </div>
          {/* Right part */}
          <div className='flex items-center'>
            <p className='rotate-90'>#01609</p>
          </div>
        </div>

        {/* Add extra padding at the bottom to ensure content doesn't bump against the edge */}
        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default Ticket;
