import PFP1 from '../assets/profile-pic-marion-j.svg';
import PFP2 from '../assets/profile-pic-emily-t.svg';
import PFP3 from '../assets/profile-pic-daniel-r.svg';
import PFP4 from '../assets/profile-pic-alex-p.svg';

import Testimonial from './testimonial';

const users = [
  {name: "Marion J.", PFP: PFP1, rating: 10, review: "Fantastic food, friendly staff, and zero wait with our reservation. Loved it."},
  {name: "Emily T.", PFP: PFP2, rating: 9, review: "Great service and a relaxed vibe. Indoor seating was quiet and comfortable."},
  {name: "Daniel R.", PFP: PFP3, rating: 10, review: "Perfect spot for date night. Cozy atmosphere and everything we ordered was delicious."},
  {name: "Alex P.", PFP: PFP4, rating: 10, review: "Easy reservations, amazing flavors, and attentive service. We’ll be back."},
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <hr className="color-charcoal" />
      <div className="space-block-64" aria-hidden="true" />
      <div id="testimonials-display">
        <h1 className="color-charcoal" style={{textAlign: "center", gridColumn: "1 / -1"}}>Testimonials</h1>
        {users.map(user => <Testimonial {...user} />)}
      </div>
      <div className="space-block-64" aria-hidden="true" />
      <hr className="color-charcoal" />
    </section>
  );
}

export default Testimonials;