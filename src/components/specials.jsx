import ImgGreekSalad from '../assets/greek-salad.svg';
import ImgBruschetta from '../assets/bruschetta.svg';
import ImgLemonDessert from '../assets/lemon-dessert.jpg';

import Button from './button';
import Special from './special';

const greekSalad = {
  image: ImgGreekSalad,
  alt: "An image of a Greek salad",
  title: "Greek Salad",
  desc: "Our Greek Salad is a refreshing and satisfying combination of crisp lettuce, juicy tomatoes, cucumbers, briny olives, tangy feta cheese, and a zesty vinaigrette dressing. Enjoy a taste of the Mediterranean!",
  price: "$12.99",
};
const bruschetta = {
  image: ImgBruschetta,
  alt: "An image of bruschetta",
  title: "Bruschetta",
  desc: "Experience the fresh and vibrant flavors of Italy with our classic bruschetta. Toasted rustic bread topped with ripe tomatoes, basil, garlic, and olive oil. A perfect appetizer to start your meal. Buon appetito!",
  price: "$5.99",
};
const lemonDessert = {
  image: ImgLemonDessert,
  alt: "An image of a lemon cake",
  title: "Lemon Dessert",
  desc: "Indulge in our refreshing Lemon Dessert, bursting with zesty citrus flavor. Made with freshly squeezed lemons and topped with a tangy lemon glaze, it's the perfect way to end your meal on a sweet note.",
  price: "$4.99",
};

const Specials = () => {
  return (
    <section id="specials">
      <h1 className="color-green" style={{gridColumn:"1 / span 2"}}>Specials</h1>
      <Button isCTA={true}>Online menu</Button>
      <Special {...greekSalad} />
      <Special {...bruschetta} />
      <Special {...lemonDessert} />
    </section>
  );
}

export default Specials;