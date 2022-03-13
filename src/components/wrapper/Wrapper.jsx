import Header from "../header/Header";
import PersonalIntro from "../personal-intro/PersonalIntro";
import PersonalSkill from "../personal-skill/PersonalSkill";
import {useState} from "react";

function Wrapper() {
    const [activeMenu, setActiveMenu] = useState('PersonalIntro');
    function selectMenuItem(menuItem){
        setActiveMenu(menuItem);
    }
    return (
        <>
            <Header selectMenuItem={selectMenuItem}/>
            <div id="content" className="content">
                <div className="homepage-personal a-pagepiling">
                    {activeMenu === 'PersonalIntro' && <PersonalIntro/>}
                    {activeMenu === 'PersonalSkill' && <PersonalSkill/>}
                </div>
            </div>
        </>
    )
}
export default Wrapper;