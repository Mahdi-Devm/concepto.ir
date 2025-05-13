import { companies } from "@/context/companies";

export default function CompaniesSEO() {
  return (
    <div className="sr-only" aria-hidden="true">
      {companies.map((company) => (
        <article
          key={company.name}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <h2 itemProp="name">{company.name}</h2>
          <img
            src={company.logo}
            alt={`لوگوی ${company.name}`}
            itemProp="logo"
          />
          <p itemProp="description">{company.description}</p>
          <p itemProp="address">{company.address}</p>
          <p>
            ⭐ {company.stars} | مشتریان جدید: {company.newClients} |
            سرمایه‌گذاران جدید: {company.newInvestors}
          </p>
          <img
            src={company.image}
            alt={`تصویر ${company.name}`}
            itemProp="image"
          />
        </article>
      ))}
    </div>
  );
}
