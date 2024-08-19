import HeaderAtoms from "./components/HeaderAtoms";
import FooterAtoms from "./components/FooterAtoms";
import NavigationAtoms from "./components/NavigationAtoms";

const HomePages = () => {
    const data = "Hello World";
    return (
        <div>
            <p>{data}</p>
            <HeaderAtoms></HeaderAtoms>
            <NavigationAtoms></NavigationAtoms>
            <FooterAtoms></FooterAtoms>
        </div>
    );
};

export default HomePages;
