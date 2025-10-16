"use client";

import React from "react";
import Image from "next/image";
import {Sora} from "next/font/google";

const sora = Sora({
    subsets: ["Regular"],
    weight: ["400", "600", "700"],
});

const EnquiryButton = ({ onClick, text = "Make an Enquiry", icon = "/assets/arrow_outward.svg", className = "" }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert("Thank you for your enquiry! We'll get back to you soon.");
    }
  };

  return (
    <>
      <button className={`enquiryBtn ${className}`} onClick={handleClick}>
        {text}
        <Image className="img" src={icon} alt="arrow icon" width={13} height={13} />
      </button>

      {/* Styled-JSX block (Next.js supports this out of the box) */}
      <style jsx global>{`
        .enquiryBtn {
          background-color: #27a9e1;
          color: #ffffff;
          font-weight: 600;
          padding: 14px 22px;
          border-radius: 100px;
          white-space: nowrap;
          align-items: center;
          transition: background-color 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
          font-size: 14px;
          justify-content: center;
          border: none;
          cursor: pointer;
          font-family: "Sora", sans-serif;
        }

        .enquiryBtn .img {
          margin-left: 20px;
          transition: transform 0.4s;
        }

        .enquiryBtn:hover .img {
          transform: rotate(45deg);
        }

        .enquiryBtn:hover {
          background-color: #134a8e;
        }
      `}</style>
    </>
  );
};

export default EnquiryButton;
