import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';

function ColorPage() {
  const { id } = useParams();

  return (
    <div className="color-page" style={{background: id}}>
    {id} 배경 페이지입니다
    </div>
  );
}

export default ColorPage;
