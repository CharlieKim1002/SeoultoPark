import "./pages.css";
import Weather from '../components/commons/Weather';


function Main() {

    return (
        <> 
            <div id="weather">
                <Weather/>
            </div>
            <div id="weiget-wrap">
                    <h3>동물 보유 현황(2022년 08월 기준)</h3>
                    <li>
                        
                        <img src="images/포유류.PNG"></img>
                        <p>포유류: 20</p>
                                            
                    </li>
                    <li>
                        
                        <img src="images/조류.PNG"></img>
                        <p>조류: 20</p>
                       
                    </li>
                    <li>
                        
                        <img src="images/파충류.PNG"></img>
                        <p>파충류: 20</p>
                       
                    </li>
                    <li>
                        
                        <img src="images/양서류.PNG"></img>
                        <p>양서류: 20</p>
                       
                    </li>
            </div>
        </>
    );
}

export default Main;