import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CompanyPage({ companies }) {
  let { companySlug } = useParams();
  const company = companies.find(company => company.slug === companySlug);
  return (
    <div>
      <h1>Company Profile</h1>
      <h2>{company.name}</h2>
      <img src={company.logo} alt={company.name} width="100" height="100" />
      <p>
        <b>Website: </b>
        {company.website}
      </p>
      <p>
        <b>About: </b> {company.description}
      </p>

      <ul>
        {company.techStack.map(tech => (
          <li key={tech.slug}>
            <Link to={`/tech/${tech.slug}`}>
              {tech.name}
              <img src={tech.image} alt={tech.name} width="50" height="50" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
