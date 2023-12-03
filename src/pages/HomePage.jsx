import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <p>{company.name}</p>
              <img
                src={company.logo}
                alt={company.name}
                width="150"
                height="150"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
