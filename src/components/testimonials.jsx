

const Testimonials = () => {
  return (
    <section id="testimonials">
      <hr className="color-charcoal" />
      <div className="space-block-64" aria-hidden="true" />
      <div id="testimonials-display">
        <h1 className="color-charcoal" style={{textAlign: "center", gridColumn: "1 / -1"}}>Testimonials</h1>
        <div className="testimonial">testimonial 1</div>
        <div className="testimonial">testimonial 2</div>
        <div className="testimonial">testimonial 3</div>
        <div className="testimonial">testimonial 4</div>
      </div>
      <div className="space-block-64" aria-hidden="true" />
      <hr className="color-charcoal" />
    </section>
  );
}

export default Testimonials;