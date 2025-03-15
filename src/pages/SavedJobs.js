import { Container, Card, Button } from "react-bootstrap";

const SavedJobs = ({ savedJobs }) => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <p className="text-center">No saved jobs yet.</p>
      ) : (
        savedJobs.map((job) => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
              <Card.Text>
                <strong>Category:</strong> {job.category} <br />
                <strong>Location:</strong> {job.location} <br />
                {job.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default SavedJobs;
