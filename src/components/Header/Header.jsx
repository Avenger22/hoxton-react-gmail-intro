import LeftHeaderMenu from "./LeftHeaderMenu";
import RightHeaderMenu from "./RightHeaderMenu";

function Header() {

    return (
        <header className="header"> 
            <LeftHeaderMenu />
            <RightHeaderMenu />
        </header>
    )

}

export default Header