import React from "react";
import Head from "next/head";

import Headermainpagetext from "@/components/main/Headermainpagetext";
import Introducingcompanies from "@/components/main/Introducingcompanies";
import Numbercontent from "@/components/main/Numbercontent";

function Home() {
  return (
    <>
      <Head>
        <title>صفحه اصلی - سایت من</title>
        <meta name="description" content="خوش آمدید به صفحه اصلی سایت من!" />
        <meta name="keywords" content="سایت من, صفحه اصلی, خوش آمدید" />
      </Head>
      <Headermainpagetext />
      <Introducingcompanies />
      <Numbercontent />
    </>
  );
}

export default Home;
