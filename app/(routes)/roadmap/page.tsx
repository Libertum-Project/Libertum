import React from "react";
import { Hero } from "./hero/hero";
import { Feed } from "./feed/feed";

export default function Roadmap () {
  const items = [
    {
      title: "Q1",
      date: "- 2024",
      paragraphs: [
        "Libertum Market Launch",
        "Secondary Marketplace Launch v1.0",
        "Ambassador Program Begins",
        "Launch on Plume Test Net",
        "Introduce Social Login and Account Abstraction",
        "Regulatory Compliance",
        "$LBM Public Sale",
        " Solid Proof Audits"
      ]
    },
    {
      title: "Q2",
      date: "- 2024",
      paragraphs: [
        " 1st Tokenized Property and Rental Rewards Begins",
        "Expand Properties (Dubai, Mexico, Brazil & the EU) 10 -15",
        "Launch Secondary Marketplace ",
        "Launch “View” Libertums Token Analytics and Staking Poolsl",
        " Launch on CoinWeb Cross Chain Test  Infrastructure",
        "2xDEX listings",
        " Launch of “Get” Liquidity and Swap Tool"
      ]
    },
    {
      title: "Q3",
      date: "- 2024",
      paragraphs: [
        "Lending and Borrowing Protocol Launched",
        "Launch  “Choose” - our Governance and Voting Protocol",
        "Introduce a Second Tokenisation Methodology",
        "Secondary Market Supports 3rd Party Properties",
        " STO Licence x 2",
        "Tokenization of Parking Lots",
        " Introduction of “Stay” - On-chain AirBnB for Token Holders"
      ]
    },
    {
      title: "Q4",
      date: "- 2024",
      paragraphs: [
        "Global Expansion",
        "CEX Launches",
        " Community Owned Digital Nomad Properties ",
        "Expand Blockchain Networks",
        " Gamification of Marketplace",
        "White Labelled Solution for Real Estate Companies and RWA Partners"
      ]
    },
    {
      title: "2025",
      paragraphs: [
        "Libertums AI Property Valuation Tool",
        "Enhanced Token Utilities",
        "Launch Libertums Grant Scheme",
        "Dubai Property for Events and Remote Office for Token Holders",
        " Libertums AI investment Strategy Tool"
      ]
    }
  ];


  return(
    <div>
<Hero />
<div className="container  max-w-[75rem] m-auto flex flex-col justify-center items-center mt-12">
<p className="font-space_grotesk font-semibold text-4xl ">Roadmap</p>
aca va el video
</div>


<Feed  items={items}/>

    </div>
  )
}