import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const Mainpage = () => {
  const color = ['red', 'blue', 'yellow', 'pink', 'orange']
  const navigate = useNavigate();

  const moveColor = (color) => {
    navigate(`/color/${color}`);
  };
 
  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      {color.map((color) => (
        <button key={color} className="color-box" 
        style={{backgroundColor: color, border: 'none'}}
        onClick={()=> moveColor(color)}>{color}</button>
    ))}
      <hr />
    </div>
  );
};

export default Mainpage;