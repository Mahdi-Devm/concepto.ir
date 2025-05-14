import React from "react";
import Head from "next/head";
import StorySection from "@/components/about/StorySection";
import Headerabotpagetext from "@/components/about/Headerabotpagetext";
import Memberaboutpage from "@/components/about/Memberaboutpage";
import BoxDetail from "@/components/about/BoxDetail";

function About() {
  return (
    <>
      <Head>
        <title>درباره ما - سایت من</title>
        <meta name="description" content="درباره تیم ما بیشتر بدانید." />
        <meta name="keywords" content="درباره ما, اطلاعات تیم, ما کی هستیم" />
      </Head>
      <section>
        <Headerabotpagetext />
        <BoxDetail />
        <StorySection />
        <Memberaboutpage />
      </section>
    </>
  );
}

export default About;
