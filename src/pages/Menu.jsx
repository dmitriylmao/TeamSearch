import './Menu.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuPage from '../components/MenuPage';




function Menu() {
  return (
    <div className="mainpage">
            <div className='fon'>
            <Header></Header>
            <MenuPage></MenuPage>
            <Footer></Footer>
          </div>
    </div>
  );
}
export default Menu;