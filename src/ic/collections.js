import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as icpuppies from "./ICPuppies.js";
import * as pokedbots from "./PokedBots.js";

var collections = [
  {
    canister: "bzsui-sqaaa-aaaah-qce2a-cai",
    priority : 101,
    name: "Poked bots",
    brief : "10,000 generated mutant Robots",
    description : "500 years from now humans have left earth and only the Robots remain. Robots have managed to create new identities based on relics they have found from earths past",
    keywords : "pokedstudio robot NFT dfinty icp collectable Solana etherium trade crypto market ",
    banner : "/collections/poked/banner.jpg",
    avatar : "/collections/poked/avatar.jpg",
    collection : "/collections/poked/collection.jpg",
    discord : "https://discord.gg/PokedStudioNFT",
    twitter : "https://twitter.com/pokedstudiouk",
    web : "https://www.pokedstudiobotsnft.co.uk",
    data : pokedbots,
    route: "poked",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "ace16992dcde53c7c67b396b65924be0e19bed8704a2a68b9cc794d100c3cd17",
    blurb: (<><p>500 years from now humans have long left earth and only the Robots remain. Robots have managed to create new identities often based on relics they have found from earths past. This collection features 5 groups of Robots that exist in the eastern waste lands near former Delta city. The Battle bots, they are tough and are used to hard work, entertainment bots constructed from old video game and junk food toy parts found in the giant rubbish heaps of former Antarctica. Wild bots have become deranged after the giant solar flare of 2453AD. The god class has come to rule much of eastern earth, they have abilities beyond normal bots. The masters are a secret society of robots that have links to the off world colony of Europa base 7.</p></>),
  },
  {
    canister: "poyn6-dyaaa-aaaah-qcfzq-cai",
    priority : 10,
    name: "Blockchain Heroes",
    brief : "50 original heroes in 6 variations",
    description : "Be a part of blockchain history as the first ICP launch featuring packs of cards comes your way in the form of the best-selling Blockchain Heroes! Collect all 50 heroes in six unique variations!",
    keywords : "heroes cards collecting",
    banner : "/collections/bh/banner.png",
    avatar : "/collections/bh/avatar.png",
    collection : "/collections/bh/collection.jpg",
    discord : "https://discord.gg/herohq",
    twitter : "https://twitter.com/bc_heroes",
    web : "http://bcheroes.com",
    route: "blockchain-heroes",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "9e4c5a298aa65baf99cbf4056f443b2c499d4c6d07f4030c5474885f6803d9d0",
    blurb: (<><p>Entrepot is thrilled to welcome the best-selling Blockchain Heroes series to the Internet Computer! Originally presented on the WAX blockchain in Summer of 2020, Blockchain Heroes is a set of 50 super heroes inspired by real-world blockchain and crypto personalities. When the initial set was offered in August 2020, 12500 packs sold out in just 20 minutes! Since that time, the team has released two additional series, with the latter selling out in just 35 seconds.</p>
<p>Now we are pleased to issue the original 50 heroes on ICP with all NEW variations. 5000 packs are being made available, with each pack containing five (5) random hero cards from the set. Each of the fifty heroes is available in common, uncommon, rare, epic, legendary and mythic variations, with odds of getting variations decreasing as the rarity increases. Packs will be made available at 12 pm EST on November 12th for just 1.5 ICP! If previous sales of Blockchain Heroes are any indication, we expect this sale to go very fast. So be locked and loaded with your ICP to grab yours.</p>
<p>Will you get an epic Captain Crypto, a legendary Lady Lightning or the elusive mythic Genesis? Grab your packs and rip them open to find out!
</p></>),
  },
  {
    canister: "dylar-wyaaa-aaaah-qcexq-cai",
    priority : 10,
    name: "Flight",
    brief : "Wing takes flight",
    description : "Wing embodies the feeling of freedom",
    keywords : "#photography #movement # #dance #freedom #ICPhotographer",
    banner : "/collections/flight/banner.jpg",
    avatar : "/collections/flight/avatar.jpg",
    collection : "/collections/flight/collection.jpg",
    discord : "https://discord.com/invite/CSrZck25st",
    twitter : "https://twitter.com/olisav",
    web : "https://www.icphotographers.com/",
    route: "flight",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "4dbdfc6d6bdab7851bfc7839da5c3df06d10f89ab61cf0c136b70812da27d608",
    blurb: (<>Rare are the moments when technology so drastically emprove the lives of so many.
We are living through something profoundly special, and as an artist, I have never felt
so free. This piece is dedicated to all those that helped me find myself here.</>),
  },
  {
    canister: "ag2h7-riaaa-aaaah-qce6q-cai",
    priority : 10,
    name: "P2J",
    brief : "NFT by Canistore",
    description : "P2J NFT by Canistore",
    keywords : "bulls dfinity",
    banner : "/collections/p2j/banner.png",
    avatar : "/collections/p2j/avatar.png",
    collection : "/collections/p2j/collection.png",
    twitter : "https://twitter.com/canistore",
    //discord : "https://discord.gg/mA5cXdAtwe",
    //web : "https://www.infernalvampires.com",
    route: "p2j",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "1139e8bf919647a9e630f41982324ea535ccd67ac4b101644bb1dba8ecf155e3",
    blurb: (<><p>P2J NFT by Canistore</p></>),
  },
  {
    canister: "dknxi-2iaaa-aaaah-qceuq-cai",
    priority : 10,
    name: "Dfinity Bulls",
    brief : "8888 Dfinity Bulls of the IC",
    description : "The bulls of the IC - P2E game coming soon",
    keywords : "bulls dfinity",
    banner : "/collections/bulls/banner.png",
    avatar : "/collections/bulls/avatar.jpg",
    collection : "/collections/bulls/collection.png",
    //discord : "https://discord.gg/mA5cXdAtwe",
    //twitter : "https://twitter.com/IVCNFT",
    //web : "https://www.infernalvampires.com",
    route: "dfinitybulls",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "ae5cf8b282013bffd28908f1c4afad389a07e474a02f9a8e48bcc07cc63b05b4",
    blurb: (<><p>The bulls of the IC - P2E game coming soon</p><Button href="/sale/dfinitybulls" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Buy from Public Sale</Button></>),
  },
  {
    canister: "gyuaf-kqaaa-aaaah-qceka-cai",
    priority : 10,
    name: "Infernal Vampire Colony",
    brief : "666 Bloodthirsty Infernal Vampires",
    description : "Infernal Vampires had been in the lair for a long time. They finally managed to get out. Time for them to suck some blood!",
    keywords : "Vampire, Vampires, Infernal, Colony, Blood, Bloodthirsty, 666, Lair",
    banner : "/collections/ivc/banner.jpg",
    avatar : "/collections/ivc/avatar.png",
    collection : "/collections/ivc/collection.jpg",
    discord : "https://discord.gg/mA5cXdAtwe",
    twitter : "https://twitter.com/IVCNFT",
    web : "https://www.infernalvampires.com",
    route: "ivc",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "7243722b9db43a26170b2bbc065b02f5ca2d1836ddaaee5ef05fc043a01f9ed9",
    blurb: (<><p>Infernal Vampires had been in the lair for a long time. They finally managed to get out. Time for them to suck some blood!</p></>),
  },
  {
    canister: "oeee4-qaaaa-aaaak-qaaeq-cai",
    priority : 10000,
    brief : "10,000 Motokos dropped by DFINITY",
    name: "Motoko Day Drop",
    keywords : "",
    banner : "/banner/motoko2.jpg",
    discord : "https://t.co/fD0VHKGaFu?amp=1",
    twitter : "https://twitter.com/pokedstudiouk",
    route: "motoko",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "09b739076e074550862930ca17f662485076a6af60cc1b0e9a1f50b058d767c9",
    blurb: (<><p>On the Motoko programming language's 2nd birthday, the DFINITY Foundation distributed 10,000 Motoko ghosts designed by Jon Ball of Pokedstudios to the community.</p></>),
  },
  {
    canister: "er7d4-6iaaa-aaaaj-qac2q-cai",
    priority : 10,
    name: "MoonWalkers",
    brief : "9999 3D MoonWalkers by IC Gallery",
    route: "moonwalkers",
    keywords : "",
    banner : "/banner/icgallery2.jpg",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "2455059d792289741fb4c3128be9dfcf25474e161923c78c37bd53c457b24e60",
    blurb: (<><p>The MoonWalker's marketplace will open after the completion of the <a href="/sale/moonwalkers">public sale</a>.</p></>),
  },
  {
    canister: "e3izy-jiaaa-aaaah-qacbq-cai",
    priority : 1000,
    name: "Cronic Critters",
    brief : "The first IC NFT by Toniq",
    route: "cronics",
    banner:"https://cronic.toniqlabs.com/banner.png",
    twitter:"https://twitter.com/CronicsP2E",
    telegram:"https://t.me/cronic_talk",
    medium:"https://toniqlabs.medium.com/cronics-breeding-and-supply-604fa374776d",
    keywords : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:"c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: (<>Cronics is a Play-to-earn NFT game being developed by ToniqLabs for the Internet Computer. Cronics incorporates breeding mechanics, wearable NFTs and a p2e minigame ecosystem and more.</>),
  },

  {
    canister: "pnpu4-3aaaa-aaaah-qcceq-cai",
    priority : 10,
    name: "Infinite Chimps",
    brief : "A collaboration of goodness",
    route: "infinite-chimps",
    keywords : "",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "90d2fd9f8c4005da2ebf73579a4f571763d21ce35ed4c32e83b3158cb68c7c45",
    blurb: (<p>100% of initial sales proceeds and 3% of resales go to Chimpanzee Sanctuary Northwest. The sanctuary provides a 'forever home' for chimpanzees discarded from the entertainment and biomedical testing industries. Every Infinite Chimp in this NFT collection is a portrait of a rescued chimp that now lives peacefully at the sanctuary.</p>),
  },

  {
    canister: "bid2t-gyaaa-aaaah-qcdea-cai",
    priority : 10,
    name: "Haunted Hamsters",
    brief : "3333 Haunted Hamsters ready to spook",
    route: "hauntedhamsters",
    banner : "/collections/hh/banner.jpg",
    avatar : "/collections/hh/avatar.jpg",
    collection : "/collections/hh/collection.jpg",
    description : "Haunted Hamsters are 3333 hamsters, who have been haunted on the hill of Hamsterville. They come merged from 10 spooky themed traits, and are now living on the ICP blockchain.",
    keywords : "",
    web : "https://www.hauntedhamsters.io",
    telegram : "https://t.me/joinchat/3KX8XkSEcREzYTMx",
    medium : "https://medium.com/@hauntedhamsters",
    discord : "https://discord.com/invite/rngMQQxa",
    twitter : "https://twitter.com/hauntedhamsters",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "35b902472e845179b3d6ad9ff7079fee6bcadb4e0ca870230ba7a79757fa88fb",
    blurb: (<><p>Haunted Hamsters are 3333 hamsters, who have been haunted on the hill of Hamsterville. They come merged from 10 spooky themed traits, and are now living on the ICP blockchain.</p></>),
  },
  {
    canister: "ahl3d-xqaaa-aaaaj-qacca-cai",
    priority : 10,
    name: "ICTuTs",
    brief : "10,000 NFTs based on King TuT",
    route: "ictuts",
    banner : "/banner/ictuts.png",
    keywords : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:
      "b53a735c40994ddbc7bb4f6dbfbf9b2c67052842241f1c445f2255bdf4bd8982",
    blurb: false,
  },
  {
    canister: "sr4qi-vaaaa-aaaah-qcaaq-cai",
    priority : 10,
    name: "Internet Astronauts - IASC",
    brief : "10,000 Internet Astronauts given to top ICP users",
    description : "Internet Astronauts is a collection of 10,000 collectibles only found on the Internet Computer! Internet Astronauts can have small privileges on various dApps on ICP.",
    route: "interastrosc",
    keywords : "internet astronaut, astronaut nft, iasc, astronaut,",
    banner : "/collections/iasc/banner.jpg",
    avatar : "/collections/iasc/avatar.png",
    collection : "/collections/iasc/collection.jpg",
    discord : "https://discord.gg/cnEafbxb",
    twitter : "https://twitter.com/interastrosc",
    web : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "2be01f5e8f081c6e8784b087fb1a88dac92fdd29203c1e456a6e90950c6e6e21",
    blurb: (<>Internet Astronauts given to top active users of ICP for zero cost.<br /><br/>Various dApps on IC agreed to collab on IASC for future perks. NFT authenticators will lead willing dApps can accept pre-existing NFT's and offer some benefits. However, at this point, IASC is the first of its kind and third-generation NFT set and cannot sure on future so think IASC as collectible art pieces!
</>),
  },
  {
    canister: "nfvlz-jaaaa-aaaah-qcciq-cai",
    priority : 10,
    name: "IC3D",
    brief : "10,000 3D Scenes made of 60,000 NFTs",
    route: "ic3d",
    keywords : "",
    banner : "/banner/ic3d.jpg",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress: "b29f5dc935f0457df12c9f91a58d77e192a0acb00694ca473d342063d375656c",
    blurb: (<><p>The IC3D marketplace will open after the completion of the <a href="/sale/ic3d">public sale</a>.</p></>),
  },
  {
    canister: "nbg4r-saaaa-aaaah-qap7a-cai",
    priority : 10,
    name: "Starverse",
    brief : "The first free NFT airdrop",
    route: "starverse",
    keywords : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:
      "c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: false,
  },
  {
    canister: "njgly-uaaaa-aaaah-qb6pa-cai",
    priority : 10,
    name: "ICPuppies",
    brief : "10,000 unique randomly generated 8-bit puppies",
    description : "ICPuppies is a randomly generated 8-bit puppy NFT collection. Half of the initial sale profits will be directed towards charities as well as a portion of all resale volume.",
    route: "icpuppies",
    keywords : "puppies icpuppies nft charity 8-bit pixel dog doge puppy",
    banner : "/collections/icpuppy/banner.jpg",
    avatar : "/collections/icpuppy/avatar.jpg",
    //collection : "/collections/iasc/collection.jpg",
    discord : "https://discord.gg/A3rmDSjBaJ",
    twitter : "https://twitter.com/ICPuppies",
    medium : "https://medium.com/@ICPuppies",
    web : "https://icpuppies.io",
    data : icpuppies,
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "9f76290b181807c5fa3c7cfcfca2525d578a3770f40ae8b14a03a4a3530368e2",
    blurb: (
      <>ICPuppies was created with the idea of being a fun, easy-going collection that's very accessible to all newcomers to the Internet Computer NFT world. We're inspired by the retro 8-bit video game aesthetic as we feel it's appealing to people everywhere.<br /><br />Half of the initial launch profits are directed towards charities and on top of that, a portion of our resale volume goes to our partners at Infinite Charity Project, forever! 
</>
    ),
  },
  {
    canister: "ep54t-xiaaa-aaaah-qcdza-cai",
    priority : 10,
    name: "ICPuppies Wearables",
    brief : "Wearable collection for owners of ICPuppies",
    description : "ICPuppies Wearables are accessories for your favorite puppies on the Internet Computer. We will airdrop these during limited special events or holidays.",
    route: "icpuppies-wearables",
    keywords : "puppies icpuppies nft charity 8-bit pixel dog doge puppy wearable ",
    banner : "/collections/icpuppy/banner.jpg",
    avatar : "/collections/icpuppy/avatar2.jpg",
    //collection : "/collections/iasc/collection.jpg",
    discord : "https://discord.gg/A3rmDSjBaJ",
    twitter : "https://twitter.com/ICPuppies",
    medium : "https://medium.com/@ICPuppies",
    web : "https://icpuppies.io",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "9f76290b181807c5fa3c7cfcfca2525d578a3770f40ae8b14a03a4a3530368e2",
    blurb: (
      <>These wearables will be dropped to ICPuppies holders during special events, holidays or specific occasions. The first wearable collection was dropped during Halloween, with more to come in the future.</>
    ),
  },
  {
    canister: "bxdf4-baaaa-aaaah-qaruq-cai",
    priority : 100,
    name: "ICPunks",
    brief : "10,000 ICPunks - 2nd NFT on the IC",
    route: "icpunks",
    keywords : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "c47942416fa8e7151f679d57a6b2d2e01a92fecd5e6f9ac99f6db548ea4f37aa",
    blurb: (
      <>
        Are you down with the clown? Get your hands on the latest NFT to hit the
        Internet Computer! You can wrap and trade them on the Marketplace!{" "}
        <strong>
          Wrapped ICPunks are 1:1 wrapped versions of actual ICPunks
        </strong>{" "}
        - you can read more about how to wrap, unwrap, and how safe it is{" "}
        <a
          href="https://medium.com/@toniqlabs/wrapped-nfts-8c91fd3a4c1"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </>
    ),
  },
  {
    canister: "3db6u-aiaaa-aaaah-qbjbq-cai",
    priority : 10,
    name: "IC Drip",
    brief : "Drip on the IC",
    route: "icdrip",
    keywords : "",
    nftv : true,
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:
      "c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: (
      <>
        IC Drip are randomly generated meta-commerce shopping carts for outfits
        and personas stored on chain. Stats, images, and other functionality are
        intentionally omitted for others to interpret. Feel free to use IC Drip
        in any way you want.{" "}
        <a
          href="https://dvr6e-lqaaa-aaaai-qam5a-cai.raw.ic0.app/"
          target="_blank"
          rel="noreferrer"
        >
          IC Drip Website
        </a>
      </>
    ),
  },
  {
    canister: "b5el6-hqaaa-aaaah-qcdhq-cai",
    priority : 10,
    name: "Wild and West",
    brief : "Collection by the Wild and West team",
    route: "wildwest",
    banner:"/banner/ww.png",
    keywords : "",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "9616e04724bd990eda94a848cbfe0dab273d6d663dee7e40e6e314fb34395dcd",
    blurb: (
      <>
        <p>Wild and West: The Journey Begins. We're excited to have you! Here are some of the amazing perks you get for participating in our pre-sale: access to the "Maverick" role in Discord along with its very own exclusive channel, daily NFT updates, and the chance to help us decide rarity. You will also be granted access to Keak the moment it launches, the chance to learn how genesis works, and any first glimpses at all future projects (collaborations and other). For more information <a href="https://t.co/v7Gy1l1ILi" target="_blank">click here</a>. We can't thank you enough for all of your support. Welcome to the Wild and West!</p>
        <strong>Important: These NFTs are placeholder NFTs, holders will receive the real Minted NFTs on December 1st. All placeholders are equal.</strong>
      </>
    ),
  },
  {
    canister: "btggw-4aaaa-aaaah-qcdgq-cai",
    priority : 10,
    name: "IC Pumpkins",
    brief : "Halloween themed pumpkins",
    route: "icpumpkins",
    keywords : "",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "9616e04724bd990eda94a848cbfe0dab273d6d663dee7e40e6e314fb34395dcd",
    blurb: (
      <>
        <p>Halloween lovers only! ICPumpkin is 2222 unique pumpkins! The collection consists of 20 really different cool characters, each with their own mood and costume for this holiday. Halloween isn't just for candy anymore!
Specially for internet computer. Follow us on twitter: <a href="https://twitter.com/ICPumpkin" target="_blank">@ICPumpkin</a></p>
      </>
    ),
  },
  {
    canister: "73xld-saaaa-aaaah-qbjya-cai",
    priority : 10,
    name: "Wing",
    keywords : "",
    route: "wing",
    brief : "Photos by Oli and Wing",
    nftv : false,
    mature: true,
    market : true,
    commission: 0.025,
    comaddress:
      "1d978f4f38d19dca4218832e856c956678de0aa470cd492f5d8ac4377db6f2a2",
    blurb: (
      <>
        To escape from containment and restriction, releasing the stressors held
        so long in the body, Wings's ego is jettisoned as she explores a more
        fundamental form of existence, expressing her humanity in this elemental
        piece.
        <br />
        She is framed within the themes of air, water, to take flight on chalky
        cliff tops overlooking distant horizons, to express the existential
        freedom that lives within. No borders.
        <br />
        And so through this series I invite the viewer to celebrate their own
        sovereignty of consciousness; to be bold as we emerge from our cocoons
        and open ourselves up to the world and each other again.
      </>
    ),
  },
  {
    canister: "kss7i-hqaaa-aaaah-qbvmq-cai",
    priority : 10,
    name: "ICelebrity",
    brief : "100 Handrawn celeberities",
    route: "icelebrity",
    keywords : "",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.035,
    comaddress:
      "8b6840cb0e67738e69dbb6d79a3963f7bd93c35f593a393be5cc39cd59ed993e",
    blurb: false,
  },
  {
    canister: "k4qsa-4aaaa-aaaah-qbvnq-cai",
    priority : 10,
    name: "Faceted Meninas",
    brief : "Unique 3D Meninas",
    route: "faceted-meninas",
    keywords : "",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.02,
    comaddress:
      "12692014390fbdbb2f0a1ecd440f02d29962601a782553b45bb1a744f167f13b",
    blurb: (
      <>
        Faceted Meninas is a creature species that holds the power of the
        universe to act as a magic pillar giving their allies the essence of
        outer worlds to maximize their powers.
      </>
    ),
  },
  {
    canister: "uzhxd-ziaaa-aaaah-qanaq-cai",
    priority : 10,
    name: "ICP News",
    brief : "Art by ICP News",
    nftv : false,
    keywords : "",
    mature: false,
    market : true,
    route: "icp-news",
    commission: 0.02,
    comaddress:
      "c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: false,
  },
  {
    canister: "tde7l-3qaaa-aaaah-qansa-cai",
    priority : 10,
    name: "Cronic Wearables",
    brief : "Wearables for your Cronic",
    route: "wearables",
    nftv : false,
    keywords : "",
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:
      "c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: false,
  },
  {
    canister: "gevsk-tqaaa-aaaah-qaoca-cai",
    priority : 10,
    name: "ICmojis",
    route: "icmojis",
    keywords : "bulls dfinity",
    banner : "/collections/icmoji/banner.png",
    avatar : "/collections/icmoji/avatar.jpg",
    collection : "/collections/icmoji/collection.jpg",
    medium : "https://medium.com/@icmojis",
    telegram : "https://t.me/icmojis",
    discord : "https://discord.gg/mu2c6SG44E",
    twitter : "https://twitter.com/icmoji",
    web : "https://icmoji.com/",
    brief : "ICmojis are playable characters in ICmoji Origins",
    nftv : false,
    mature: false,
    market : true,
    keywords : "ICmoji, ICmojis, Origins, Game, Card, Emoji, Emote, Reaction",
    commission: 0.02,
    comaddress:
      "df13f7ef228d7213c452edc3e52854bc17dd4189dfc0468d8cb77403e52b5a69",
    blurb: (<>ICmojis are playable characters in ICmoji Origins - a multiplayer strategy game built on the Internet Computer. Learn more at our <a href="https://icmoji.com/" target="_blank">website</a></>),
  },
  {
    canister: "owuqd-dyaaa-aaaah-qapxq-cai",
    priority : 10,
    name: "ICPuzzle",
    brief : "Find where you fit in the puzzle",
    route: "icpuzzle",
    nftv : false,
    keywords : "",
    mature: true,
    market : true,
    commission: 0.02,
    comaddress:
      "12692014390fbdbb2f0a1ecd440f02d29962601a782553b45bb1a744f167f13b",
    blurb: false,
  },
  {
    canister: "q6hjz-kyaaa-aaaah-qcama-cai",
    priority : 10,
    name: "ICPBunny",
    brief : "10,000 ICBunnies on the IC",
    route: "icpbunny",
    nftv : false,
    mature: false,
    market : true,
    commission: 0.025,
    comaddress:
      "9f04077bd8ef834f7bcca5177f28fb655a7e68d8f2da9c1e6441c4f567f5dce7",
    blurb: false,
  },
  {
    canister: "eb7r3-myaaa-aaaah-qcdya-cai",
    priority : 10,
    name: "Iconic2021",
    brief : "The Iconic 2021 curated collection",
    route: "iconic2021",
    nftv : false,
    mature: false,
    market : true,
    keywords : "",
    commission: 0.035,
    comaddress:
      "c7e461041c0c5800a56b64bb7cefc247abc0bbbb99bd46ff71c64e92d9f5c2f9",
    blurb: false,
  },
  
  
  {
    canister: "dv6u3-vqaaa-aaaah-qcdlq-cai",
    priority : 10,
    name: "Tyler & Dakota",
    route: "tylerdakota",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    keywords : "",
    mature: false,
    market : true,
    commission: 0.1,
    comaddress:
      "f9deb8b1752f6230f1f86c9ca0b7c613120733acadd3a3279ea843523f22d974",
    blurb: (<>Tyler and Dakota are a writer / designer team interested in semiotics and altered states. This is a video series in which common phrases become hypnotic mantras.<br /><br /><Button data-paperform-id="inconic21tylerdak" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "crt3j-mqaaa-aaaah-qcdnq-cai",
    priority : 10,
    name: "Neil White",
    route: "neilwhite",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    keywords : "",
    mature: false,
    market : true,
    commission: 0.1,
    comaddress:
      "6d4aba3426e332add7b55d88a005805b436e98bec092f42e89510596a3ac8ee5",
    blurb: (<>Neil White is a Miami-based contemporary artist. His work focuses on ironic portraits of historical icons and social commentary in the form of robots. He employs both digital art and studio painting mediums in a hyperrealistic pop art style.<br /><br /><Button data-paperform-id="5bxwhthj" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "cnxby-3qaaa-aaaah-qcdpq-cai",
    priority : 10,
    name: "Andre Wee",
    route: "andrewee",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    keywords : "",
    mature: false,
    market : true,
    commission: 0.1,
    comaddress:
      "ccac00c36859008eb9d33597f2c51ff8778dc4d3146d992b453eb330dee3f41c",
    blurb: (<>André Wee, a newcomer to the NFT Art scene, is an experimental illustrator that jumps between both the virtual and physical world when he creates his craft. The works that he creates blend Technology with Art as André discovers newer ways of engaging with his viewers with creative storytelling and imagery. Aside from putting pencil to paper and pushing digital paint across a virtual canvas, André also works with animated layers hidden within the physical world through Augmented reality where he embeds narratives within his illustrations.<br /><br /><Button data-paperform-id="nunweq3r" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "ludo",
    priority : 10,
    name: "Ludo",
    route: "ludo",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    keywords : "",
    mature: false,
    market : false,
    commission: 0.1,
    comaddress:
      "60879ff49717bfef81b15288d6359a96b5705e2d3918d1f14bba1441ea84a539",
    blurb: (<>The work of Paris-based Ludo (Ludovic Vernhet) explores a world where biotechnological chimeras offer to merge plants and animals with our technological universe. Through his work, Ludo aims to reveal the opposites that cohabit our world, often taking unlikely pairings to absurd lengths. These dualities are reconciled by the artist through the creation of hybrid organisms.
Drawn with the precision of botanical illustrations, this new order of hybrid organisms is both elegant and ferocious, simple & sometimes caustic. Butterflies become brass knuckles; carnivorous plants bare rows of hunting-knife teeth; bees hover hidden behind gas masks and goggles; automatic weapons crown the head of sunflowers; human skulls cluster together like grapes.<br /><br /><strong>Art will be on sale after BTC integration</strong><br /><br /><Button data-paperform-id="iconic21ludo" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "ckwhm-wiaaa-aaaah-qcdpa-cai",
    priority : 10,
    name: "PatternBased",
    route: "patternbased",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    mature: false,
    market : true,
    keywords : "",
    commission: 0.1,
    comaddress:
      "fa603565b08636498f83d493c33b8cab22ddeb59eae7ffde782a5f3f35634c6d",
    blurb: (<>PatternBased is a boutique creative label at the intersection of art and technology. PatternBased is Siori Kitajima and Joseph Minadeo. Siori Kitajima is a multimedia visual artist who explores complexity and abstraction through a variety of mediums: from canvas painting to coding. Joseph Minadeo is a film composer and multimedia artist inspired by nature and technology. Both are the characters in a film that the protagonist visits to accomplish a technical task: the geek helpers. As technical artists, they celebrate the potential of generative / procedural art and are currently exploring the world of decentralization including NFTs.<br /><br /><Button data-paperform-id="iconic21pattern" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "cdvmq-aaaaa-aaaah-qcdoq-cai",
    priority : 10,
    name: "Selay Karasu",
    route: "selaykarasu",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    mature: false,
    market : true,
    keywords : "",
    commission: 0.1,
    comaddress:
      "b4e5130404276e730dbf04515621ccae616f6665a451c0ad57daa6d2c668b62e",
    blurb: (<>Selay Karasu is a multidisciplinary artist and creative director based in Istanbul.
10 years in the industry she did numerous projection mapping and public art installations. Her A/V performances were exhibited on substantial platforms around the globe such as CERN Particle Physics Laboratory, Society For Arts And Technology [SAT], MOMA NY, Burning Man Festival (USA), WIRED, Fubiz, Vimeo(Staff Pick), Prix Ars Electronica, Signal Light Festival (CZ), IX Immersion Experience Symposium (CAN).<br /><br /><Button data-paperform-id="inconic2021selay" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "ryanpgriffin",
    priority : 10,
    name: "Ryan P. Griffin",
    route: "ryanpgriffin",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    mature: false,
    market : false,
    keywords : "",
    commission: 0.1,
    comaddress:
      "3e3dc266e28772960518ceb5a263606e0d21a2fb5ec8c68c98740ca78b1bb60a",
    blurb: (<>Ryan P. Griffin is a visual artist based out of Los Angeles, CA. Griffin uses projected light as a vehicle to activate the environment in a poetic, performative and public way.  The artist's practice incorporates drawing, painting, photography, animation and video, while extending these traditions through contemporary digital media tools to share unique experiences. The artist organizes frequent happenings thru his ongoing project at Projected Visions, using projected light to radically repurpose place.<br /><br /><strong>Art will be ready soon for minting</strong><br /><br /><Button data-paperform-id="iconic21pattern" data-popup-button="1" variant="outlined" color={"primary"} style={{fontWeight:"bold", cursor:"pointer"}}>Subcribe for Updates!</Button></>),
  },
  
  {
    canister: "chloeyeemay",
    priority : 10,
    name: "Chloe Yee May",
    route: "chloeyeemay",
    brief : "An Iconic 2021 Collection",
    nftv : false,
    mature: false,
    market : false,
    keywords : "",
    commission: 0.1,
    comaddress:
      "ad7027bba25b9e97a865ead26d7367de958278a0ea758d5f80f75ecf6b185516",
    blurb: (<>An illustrator, artist currently based in New York City, Chloe tackles visual storytelling through illustration with experience in branding, concept art, character design, editorial, NFTs, as well as her own private practice. She graduated with a BFA from the Rhode Island School of Design and has since been honored most recently by the Art Directors Club with a Silver Cube in their 100th Annual Awards, one of the most prestigious design accolades. She also does collaborations overseas in Asia and has had solo shows in Shanghai and Wuhan.<br /><br /><strong>Art for display only</strong></>),
  },
];
export default collections;