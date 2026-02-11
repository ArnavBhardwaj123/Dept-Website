export default function Hero() {
  return (
    <section
      id="hero"
      className="py-5 text-light"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
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
          <a href="#programs" className="btn btn-light btn-lg">
            Explore Programs
          </a>

          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}