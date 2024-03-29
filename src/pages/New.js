import DiaryEditor from "../components/DiaryEditor";
import { useEffect } from 'react';

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `JJ DIARY - 작성페이지`;
  });

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
