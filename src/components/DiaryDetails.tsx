import { useLocation } from "react-router-dom";

const DiaryDetails = () => {
  const location = useLocation();
  const { entry } = location.state;

  function htmlToText(html: string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  const entryBodyResult = htmlToText(entry.body);

  return (
    <section>
      <h3>{entry.date}</h3>
      <h3>{entry.title}</h3>
      <p>{entryBodyResult}</p>
    </section>
  );
};

export default DiaryDetails;


  
    
    
   