import React from "react";
import ShowList from "./showList";
import { useSelector } from "react-redux";
import FeaturedShows from "./featuredShows";
import Pages from "./Pages";

function Home() {
  const {
    showList,
    Action,
    Crime,
    Drama,
    Fantasy,
    Legal,
    Medical,
    Romance,
    SciFi,
    Thriller,
  } = useSelector((state) => state.show);

  // const { showList, Drama, Fantasy, Legal, Medical, Romance } = useSelector(
  //   (state) => state.show
  // );

  return (
    <>
      <FeaturedShows></FeaturedShows>
      <ShowList className="allShows" title="ALL" showList={showList}></ShowList>
      <ShowList title="Action" showList={Action}></ShowList>
      <ShowList title="Crime" showList={Crime}></ShowList>
      <ShowList title="Drama" showList={Drama}></ShowList>
      <ShowList title="Fantasy" showList={Fantasy}></ShowList>
      <ShowList title="Legal" showList={Legal}></ShowList>
      <ShowList title="Medical" showList={Medical}></ShowList>
      <ShowList title="Romance" showList={Romance}></ShowList>
      <ShowList title="Science-Fiction" showList={SciFi}></ShowList>
      <ShowList title="Thriller" showList={Thriller}></ShowList>
      <Pages></Pages>
    </>
  );
}
export default Home;
