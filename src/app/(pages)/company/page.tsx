import React from "react";
import Hero from "@/components/company/Hero";
import SearchBar from "@/components/company/SearchBar";
import Categories from "@/components/company/Categories";
import CompanyCard from "@/components/company/CompanyCard";
import Newsletter from "@/components/company/Newsletter";
import About from "@/components/company/About";
import Achievements from "@/components/company/Achievements";
import Team from "@/components/company/Team";
import Contact from "@/components/company/Contact";
import { topCompanies } from "@/app/data/companies";

export default function Company() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchBar />
      <Categories />

      {/* Top Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            شرکت‌های برتر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCompanies.map((company, index) => (
              <CompanyCard key={index} {...company} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Achievements />
      <Team />
      <Contact />
      <Newsletter />
    </div>
  );
}
