import { useLocation } from "react-router-dom";

const DiaryDetails = () => {
  const location = useLocation();
  const { entry } = location.state;

  return (
    <section>
      <h3>{entry.date}</h3>
      <h4>{entry.title}</h4>
      <p>{entry.body}</p>
    </section>
  );
};
export default DiaryDetails;
