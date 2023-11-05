import './MenuPage.css'
import { basketballico, gameico } from '../assets';
let flag = true;
function anim(){
    if (flag){
        document.querySelector('.basketballico').classList.add('basketballicoanim');
        document.querySelector('.basketballico').classList.remove('basketballicoanimback');
        document.querySelector('.gameico').classList.add('gameicoanim');
        document.querySelector('.gameico').classList.remove('gameicoanimback');
        flag = false;
    }
    else{
        document.querySelector('.basketballico').classList.add('basketballicoanimback');
        document.querySelector('.basketballico').classList.remove('basketballicoanim');
        document.querySelector('.gameico').classList.add('gameicoanimback');
        document.querySelector('.gameico').classList.remove('gameicoanim');
        flag = true;
    }
}

function MenuPage() {
    return (
        <div>
            <div className="mainPage">
                <div className="filters">
                    <p className='filter'>Баскетбол</p>
                    <p className='filter'>Футбол</p>
                    <p className='filter'>Теннис</p>
                    <p className='filter'>Гандбол</p>
                </div>
                <div className="applic">
                    <div className='grey-rect'>
                        <div className='black-rect'>
                            <div className='white-rect' onClick={() => (document.querySelector('.white-rect').classList.toggle('white-rect1'), anim())}>
                                <img src={basketballico} alt="" className='basketballico' />
                                <img src={gameico} alt="" className='gameico' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;