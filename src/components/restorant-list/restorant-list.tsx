import restorants from "../../const/mock";
import RestorantCard from "../restorant-card/restorant-card";
import "./restorant-list.css";

function RestorantsList() {
  console.log(restorants);

  return (
    <>
      <div className="container">
        {restorants.map((o) => (
          <RestorantCard {...o}></RestorantCard>
        ))}
      </div>
    </>
  );
}

export default RestorantsList;
