import { jobs } from "@/context/jobs";

export default function JobOpportunitiesSEO() {
  return (
    <div className="sr-only" aria-hidden="true">
      {jobs.map((job) => (
        <article
          key={job.id}
          itemScope
          itemType="https://schema.org/JobPosting"
        >
          <h2 itemProp="title">{job.title}</h2>
          <p itemProp="hiringOrganization">{job.company}</p>
          <img src={job.image} alt={job.title} itemProp="image" />
          <ul>
            {job.stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
