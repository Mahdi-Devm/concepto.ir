import React from "react";
import Head from "next/head";
import Headermainpagetext from "@/components/main/Headermainpagetext";
import Introducingcompanies from "@/components/main/Introducingcompanies";
import Numbercontent from "@/components/main/Numbercontent";
import MainCommunication from "@/components/main/MainCommunication";
import Category from "@/components/main/Category";
async function getData() {
  return {
    investors: 200,
    activeCompanies: 120,
    investmentAmount: 5000,
  };
}
async function Home() {
  const data = await getData();
  return (
    <>
      <Head>
        <title>صفحه اصلی - سایت من</title>
        <meta name="description" content="خوش آمدید به صفحه اصلی سایت من!" />
        <meta name="keywords" content="سایت من, صفحه اصلی, خوش آمدید" />
      </Head>
      <Headermainpagetext />
      <Introducingcompanies />
      <Numbercontent data={data} />
      <MainCommunication />
      <Category />
    </>
  );
}

export default Home;
