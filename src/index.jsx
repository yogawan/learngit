import HeaderAtoms from "./components/HeaderAtoms";
import FooterAtoms from "./components/FooterAtoms";
import NavigationAtoms from "./components/NavigationAtoms";

const HomePages = () => {
    return (
        <div>
            <p>{data}</p>
            <p>{dataUser}</p>
            <HeaderAtoms></HeaderAtoms>
            <NavigationAtoms></NavigationAtoms>
            <FooterAtoms></FooterAtoms>
        </div>
    );
};

export default HomePages;
