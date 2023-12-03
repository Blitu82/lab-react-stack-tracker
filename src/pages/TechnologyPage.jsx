import { useParams } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  let { slug } = useParams();
  const technology = technologies.find(tech => tech.slug === slug);
  return (
    <div>
      <h1>Technology Details</h1>
      <img
        src={technology.image}
        alt={technology.name}
        width="50"
        height="50"
      />
      <h2>{technology.name}</h2>
      <p>
        <b>About: </b> {technology.description}
      </p>
    </div>
  );
}

export default TechnologyPage;
