import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import img1 from "../images/havelock1-mob.png";

const Havelock22 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Header isOpen={isOpen} setOpen={setOpen} />
      <div
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="h-mob lg:h-tab" />
        <div className="grid grid-cols-4 grid-rows-1 h-[6.6875rem] lg:hidden">
          <p className="font-thunderhouse text-header-fluid-h1 text-[#0349F7] rotate-[-2.87deg] col-start-1 col-end-4 leading-none ml-[7.5vw]">
            HAVELOCK 22
          </p>
          <p className="font-thunderhouse text-[22.2222222222vw] col-start-1 col-end-5 leading-none ml-[15.2777777778vw]">
            SCUBA DIVING
          </p>
        </div>
        <div className="ml-[23.8888888889vw] lg:ml-[13.4837962963vw] font-brother mt-[2.5vh] lg:mt-[9.2211280215vh] mr-[9.1666666667vw]">
          <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
            WHY DIVE?
          </p>
          <p className="text-p-fluid leading-p-fluid mb-para-end">
            Plunging into the deep blue is one of the most surreal feelings
            you’ll ever have. It is a meditative experience. You’re weightless,
            there’s no gravity. You’re engulfed in the silent blue with only
            your breathing, bubbles, dive buddy(ies) and of course – the main
            thrill – bursts of marine life keeping you company.
          </p>
          <div className="ml-[9.1666666667vw]">
            <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
              PADI courses
            </p>
            <p className="text-p-fluid leading-p-fluid mb-para-end">
              The Professional Association of Diving Instructors (PADI) is a
              recreational diving membership and diver training organisation.
              PADI courses range from entry level to relatively advanced
              recreational diver certification, several specialized diving
              skills courses, usually connected with specific equipment or
              conditions, some diving related informational courses and a range
              of recreational diving instructor certifications. They also offer
              various technical diving courses. PADI is reported to have issued
              27 million scuba certifications. <br />
              <br /> The PADI Open Water Course is a certification that will
              last you a lifetime and will allow you to dive to 18 metres. You
              can choose to go further with the PADI Advanced Open Water Course
              and be able to dive with specialities to 30 metres while
              discovering the oceans at night, navigating through wrecks in the
              day and finding yourself in the wildest of places underwater. Not
              to mention the insane marine life to be seen in the waters of the
              Andamans. Your PADI Certificate allows you to dive anywhere in the
              world which is PADI affiliated. Why jump in a pool when 71% of the
              earth is covered in oceans? <br />
              <br /> There is no age limit! Anyone above the age of 10 who wants
              to change their perception of life is welcome! <br />
              <br />
              Open Water Course (Including theory)
              <br />
              <span className="text-[#00D4C5]"> 4 DAYS</span> <br />
              Advanced Open Water Course (Including theory)
              <br />
              <span className="text-[#00D4C5]">
                3 DAYS (This is an optional course)
              </span>
            </p>
          </div>
        </div>
        <div className="mb-para-end">
          <StaticImage src="../images/havelock1-mob.png" />
        </div>
        <div className="ml-[23.8888888889vw] lg:ml-[13.4837962963vw] font-brother mt-[2.5vh] lg:mt-[9.2211280215vh] mr-[9.1666666667vw]">
          <div className="ml-[9.1666666667vw]">
            <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
              DIVING IN HAVELOCK ISLAND
            </p>
            <p className="text-p-fluid leading-p-fluid mb-para-end">
              Swarms of Fusiliers, Fivelined Snappers, Jacks, Barracudas and
              Sergeant Majors bombard you at any given dive site in Havelock. A
              Pufferfish may glide lazily by as Clownfish hover above their
              anemones, giving you the stink-eye if you come too close.
              Bi-coloured Parrotfish with their iridescent bodies gleaming
              through shallow waters. Bumphead Parrotfish look like boulders of
              moss with humongous front teeth. Stingrays pop up from the seabed
              at their discretion. An angry Triggerfish is hilarious to watch.
              If you’re unbelievably lucky, you’ll be able to see the old
              Octopus who hangs out at The Wall, very shy and terribly handsome.
              Our kinda guy. When you’re out on a night dive be sure to put down
              your torch at some point so you can shake the water a bit and
              watch the bioluminescence shimmer before you.
              <br />
              <br />
              Deep sites like Johnny’s, Dickson’s and Jackson’s provide
              sightings of Leopard and Reef Sharks. Docile things – they aren’t
              interested in taking a bite of you. Your trip will be made if you
              spot a Turtle – those fellas are the most shy and our personal
              favourites. We don’t want to get your hopes high but there have
              been rare sightings of Dugongs as well. Gentle, friendly sea cows
              floating through. A friend of ours once backrolled onto a
              Whaleshark! The best news is that March is the time Dolphins come
              out to play. You won’t know what’s hit you when a pod of 200
              dolphins fly by you.
            </p>
          </div>
        </div>
        <div className="ml-[23.8888888889vw] lg:ml-[13.4837962963vw] font-brother mt-[2.5vh] lg:mt-[9.2211280215vh] mr-[9.1666666667vw]">
          <div className="ml-[9.1666666667vw]">
            <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
              LIFE IN HAVELOCK ISLAND
            </p>
            <p className="text-p-fluid leading-p-fluid mb-para-end">
              Havelock is part of the Andaman Islands archipelago in the Bay of
              Bengal. While coral reefs have been bleached because of the
              tsunami and the El Niño events, the fish life is blazing.
              Stretches of white sand beaches make your heart stop as the sun
              rises behind the rainforested hills and melts behind the vast
              blue. It’s a small island, only about 90 km long. The locals are
              generous and friendly, inviting you to their nook of the world.
              The food boasts of Bengali delicacies – fish is a hot favourite,
              it goes without saying. Cycling from the jetty towards Kala
              Patthar gives you time to stop and eat golgappas, get a massage if
              you like, sit at the Full Moon beach and pass Meetha Nala, a
              freshwater canal joining the sea.
              <br />
              <br />
              Life is slow. Change will be handed to you in a shop after a
              considerable amount of time – there’s no point being impatient.
              Ladies in freshly ironed saris take evening walks with their hair
              done up in flowers. They’re used to people from all over the world
              coming to dive and will extend their hospitality towards you. Open
              paddy fields sit galore at the far end of the island with a local
              bus tooting up once in a while.
              <br />
              <br />
              Our trip has been designed keeping the festival of Holi in mind.
              The whole island comes together and goes berserk with colour and
              music. Have you ever played Holi on a beach?
            </p>
          </div>
        </div>
        <div className="ml-[23.8888888889vw] lg:ml-[13.4837962963vw] font-brother mt-[2.5vh] lg:mt-[9.2211280215vh] mr-[9.1666666667vw]">
          <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
            COST
          </p>
          <p className="text-p-fluid leading-p-fluid mb-para-end">
            Our ten day adventure will cost the following. Please remember this
            does not include flights or meals.
            <br />
            <br />
            PADI Open Water Course
            <br />
            <span className="text-[#00D4C5]">
              Rs 27,000 (Exclusive of 18% GST)
            </span>
            <br />
            <br />
            ̦PADI Advanced Open Water Course (optional)
            <br />
            <span className="text-[#00D4C5]">
              Rs 24,000 (Exclusive of 18% GST)
            </span>
            <br />
            <br />
            Hotel in Port Blair (Double-room at Hotel Hilltop International)
            <br />
            <span className="text-[#00D4C5]">
              Rs 6,000 for 2 nights (Exclusive of 18% GST)
            </span>
            <br />
            <br />
            Hotel in Havelock (Double-room at Green Imperial Resort)
            <br />
            <span className="text-[#00D4C5]">
              Rs 24,000 for 8 nights (Exclusive of 18% GST)
            </span>
            <br />
            <br />
            Inter-island travel
            <br />
            <span className="text-[#00D4C5]">
              Ferry Rs 3,000 (return trip Port Blair-Havelock-Port Blair)
              <br />
              Cab Port Blair: Rs 2,000 (Airport-Hotel-Harbour-Hotel-Airport)
              <br />
              Cab Havelock: Rs 1,000 (Harbour-Hotel-Harbour)
            </span>
          </p>
          <div className="ml-[9.1666666667vw]">
            <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
              PRE-REQUISITES
            </p>
            <p className="text-p-fluid leading-p-fluid mb-para-end">
              1. You must know how to swim at least 200 metres or be able to
              float for 10 minutes or be able to snorkel for 400 metres.
              <br />
              <br />
              2. You must have no medical conditions. This is integral. If you
              do have any serious medical conditions you need to get a ‘Free to
              dive’ certificate from your doctor. No cert, no dive.
            </p>
          </div>
        </div>
        <div className="mb-para-end">
          <StaticImage
            src="../images/havelock2-mob.png"
            alt="Another Image of Havelock"
          />
        </div>
        <div className="ml-[23.8888888889vw] lg:ml-[13.4837962963vw] font-brother mt-[2.5vh] lg:mt-[9.2211280215vh] mr-[9.1666666667vw]">
          <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
            TRANSPORTATION
          </p>
          <p className="text-p-fluid leading-p-fluid mb-para-end">
            We will be traveling on a ferry from Port Blair to Havelock. It’s a
            lovely one-hour ride. Seasickness is very normal – we usually pop an
            Avomin before we start off to keep us sane.
            <br />
            <br />
            Once on Havelock, scooters, bikes and bicycles are up for grabs!
            Bicycles cost approximately Rs 100/day and scooters and bikes range
            from Rs 300 - 500 a day. There are no self-drive 4-wheeler rentals
            unfortunately.
            <br />
            <br />
            There’s only one petrol pump on the island which closes by sundown
            so make sure you're fueled up. Government services like buses are
            limited. Private cabs range from Rs 1,000 - 1,500/day.
          </p>
          <div className="ml-[9.1666666667vw]">
            <p className="text-[#0349F7] tracking-wider text-h3-fluid leading-h3-fluid mb-bottom-h3">
              WEATHER
            </p>
            <p className="text-p-fluid leading-p-fluid mb-para-end">
              In March, when the heat starts coming on, it’s humid as hell in
              the Andamans. Days go up to 35°C. Since it's a tropical region,
              expect a light drizzle at any time. Nights could go down to 23°C.
              <br />
              <br />
              March is prime-time to dive in the Andamans as cyclone season
              wanes and the sun stays sharp and brilliant. The wind has shifted
              at this time. Still, crystal clear waters – the greatest gift to a
              SCUBA diver. Underwater visibility can stretch up to 30 or 40
              metres on a grand day. Don’t hold us responsible if it’s shitty on
              a given day. That’s just nature.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 ml-[3.625rem] text-[#0349F7] font-brother text-[.625rem] leading-3 tracking-wider">
            THE PLAN
          </p>
        </div>
        <div className="h-[3.6rem] relative">
          <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            theory padi / ssi open water
          </p>
          <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            FEB 27 (SESSION 1)
          </p>
        </div>
        <div>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2.25rem] leading-3">
            The theory will be sent online in video format once you register for
            the trip. The instructor will be online from 7 PM – 9 PM to answer
            any doubts or questions.
          </p>
        </div>
        <div className="h-[3.6rem] relative">
          <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            theory padi / ssi open water
          </p>
          <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 06 (SESSION 2)
          </p>
        </div>
        <div>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2.25rem] leading-3">
            The theory will be sent online in video format once you register for
            the trip. The instructor will be online from 7 PM – 9 PM to answer
            any doubts or questions.
          </p>
        </div>
        <div className="h-[3.6rem] relative">
          <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 1
          </p>
          <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 10
          </p>
        </div>
        <div>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2rem] leading-3">
            The pick up will be waiting at the airport for a 15 minute drive to
            the heart of Port Blair to your accommodation.
          </p>
        </div>
        <div className="h-[3.6rem] relative">
          <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 2
          </p>
          <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 11
          </p>
        </div>
        <div>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            12.30 pm
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            Meet at <span className="text-[#00D4C5]">Haddo Jetty</span> to catch
            the <span className="text-[#00D4C5]">Makruzz</span> ferry from
            Portblair to Havelock.
          </p>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            3 pm
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            Check in to <span className="text-[#00D4C5]">Green Imperial.</span>{" "}
            Grab late lunch.
          </p>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            5 pm
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            Meet at <span className="text-[#00D4C5]">Scubalov</span> to get your
            gear sizing on point and fill up{" "}
            <span className="text-[#00D4C5]">medical</span> forms.
          </p>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            8 pm
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            <span className="text-[#FF4800]">BONFIYYYAAAHHH</span> at Beach No.
            3.
          </p>
        </div>
        <div className="h-[3.6rem] relative">
          <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 3
          </p>
          <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg] z-20">
            MAR 12
          </p>
          <p className="absolute ml-[7.875rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] top-[1.7rem] text-[#8BCEE3]">
            THE DIVING BEGINNNSSS!
          </p>
        </div>
        <div>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            6 am
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            Meet at Scubalov to begin your Confined Open Water 1.
          </p>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            12 noon
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
            Lunch.
          </p>
          <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
            5 pm
          </h3>
          <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[1.4375rem] leading-3">
            Breathing workshop at Something something.
          </p>
          <Link to="/putname">
            <div className="bg-[#FF4800] h-[1.3125rem] w-[3.875rem] flex items-center justify-center ml-[5.75rem] mb-[1.4375rem]">
              <p className="font-brother text-[0.5625rem] leading-[0.675rem] tracking-wider">
                I’M DOWN
              </p>
            </div>
          </Link>
        </div>
        <Footer text="skill trumps" />
      </div>
    </div>
  );
};

export default Havelock22;
