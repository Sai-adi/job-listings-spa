import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company_name: "Google",
    category: "Software Development",
    location: "Remote",
    description: "Looking for a React developer with 2+ years of experience.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company_name: "Microsoft",
    category: "Data Science",
    location: "New York",
    description: "Strong SQL and Python skills required.",
  },
  {
    id: 3,
    title: "Cybersecurity Engineer",
    company_name: "Tesla",
    category: "Cybersecurity",
    location: "California",
    description: "Experience with penetration testing and network security.",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    company_name: "Facebook",
    category: "Marketing",
    location: "Remote",
    description: "SEO and content marketing experience preferred.",
  },
  {
    id: 5,
    title: "Financial Analyst",
    company_name: "Goldman Sachs",
    category: "Finance",
    location: "London",
    description: "Proficiency in financial modeling and forecasting.",
  },
  {
    id: 6,
    title: "Graphic Designer",
    company_name: "Adobe",
    category: "Graphic Design",
    location: "Remote",
    description: "Experience with Photoshop and Illustrator is a must.",
  },
];

function JobDetails() {
  const { id } = useParams();
  const job = sampleJobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2 className="text-center mt-4">Job not found</h2>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
          <Card.Text>
            <strong>Category:</strong> {job.category} <br />
            <strong>Location:</strong> {job.location} <br />
            {job.description}
          </Card.Text>
          <Button variant="success">Apply Now</Button>
          <Link to="/" className="ms-3">
            <Button variant="secondary">Back to Jobs</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default JobDetails;
