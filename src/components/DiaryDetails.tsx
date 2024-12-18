import { useLocation } from "react-router-dom";
const DiaryDetails = () => {
  const location = useLocation();
  const { entry } = location.state;

  return (
    <section>
      <h3>{entry.date}</h3>
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
    </section>
  );
};
export default DiaryDetails;
