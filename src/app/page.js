import Header from "./componentss/header/Header";
import Search from "./containers/search/Search";
import Categories from "./containers/categories/Categories";
import NewArrival from "./containers/newArrival/NewArrival";
import Recommended from "./containers/recommended/Recommended";
import LocalServices from "./containers/localServicees/LocalServices";

export default function Home() {
  return (
    <div>
        <Header />
        <Search />
        <Categories />
        <NewArrival />
        <Recommended />
        <LocalServices />
    </div>
  );
}
