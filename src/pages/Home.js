import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";

const jobCategories = [
  "Software Development", "Data Science", "Cybersecurity", "Marketing", "Finance", "Graphic Design"
];

const sampleJobs = [
  { id: 1, title: "Frontend Developer", company_name: "Google", category: "Software Development", location: "Remote", description: "Looking for a React developer with 2+ years of experience." },
  { id: 2, title: "Data Analyst", company_name: "Microsoft", category: "Data Science", location: "New York", description: "Strong SQL and Python skills required." },
  { id: 3, title: "Cybersecurity Engineer", company_name: "Tesla", category: "Cybersecurity", location: "California", description: "Experience with penetration testing and network security." },
  { id: 4, title: "Digital Marketing Specialist", company_name: "Facebook", category: "Marketing", location: "Remote", description: "SEO and content marketing experience preferred." },
  { id: 5, title: "Financial Analyst", company_name: "Goldman Sachs", category: "Finance", location: "London", description: "Proficiency in financial modeling and forecasting." },
  { id: 6, title: "Graphic Designer", company_name: "Adobe", category: "Graphic Design", location: "Remote", description: "Experience with Photoshop and Illustrator is a must." },
];

function Home({ toggleSaveJob, savedJobs }) {
  const [jobs, setJobs] = useState(sampleJobs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 3;

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || job.category === category)
  );

  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Job Listings</h1>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {jobCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>
      </Form>

      {displayedJobs.length > 0 ? (
        displayedJobs.map((job) => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
              <Card.Text>
                <strong>Category:</strong> {job.category} <br />
                <strong>Location:</strong> {job.location} <br />
                {job.description}
              </Card.Text>
              <Link to={`/job/${job.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
              <Button
                variant={savedJobs.some((saved) => saved.id === job.id) ? "danger" : "success"}
                className="ms-2"
                onClick={() => toggleSaveJob(job)}
              >
                {savedJobs.some((saved) => saved.id === job.id) ? "Unsave" : "Save"}
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">No jobs found!</p>
      )}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </Container>
  );
}

export default Home;
