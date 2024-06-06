import About from "./About";
import Carousel from "./Carousel";
import Dishes from "./Dishes";
import Header from "./Header";
import Review from "./Review";
import SearchForm from "./SearchForm";

export default function Home() {
  return (
    <>
      <Header />
      <SearchForm />
      <Carousel />
      <Dishes />
      <Review />
      <About />
    </>
  );
}
