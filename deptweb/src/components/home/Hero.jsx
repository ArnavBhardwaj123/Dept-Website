export default function Hero() {
  return (
    <section
      id="hero"
      className="py-5 text-dark"
      style={{
        background: "#f8f9fa",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          Department of CSE – AI & AIML
        </h1>

        <p className="lead mb-4">
          Empowering future innovators through cutting-edge education, 
          advanced research, and industry-driven learning.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="#programs" className="btn btn-primary btn-lg">
            Explore Programs
          </a>

          <a href="#contact" className="btn btn-outline-primary btn-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}