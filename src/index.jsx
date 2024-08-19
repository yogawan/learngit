import HeaderAtoms from "./components/HeaderAtoms";
import FooterAtoms from "./components/FooterAtoms";
import NavigationAtoms from "./components/NavigationAtoms";

const HomePages = () => {
    const data = "Hello World";
    const username = "Yogawan";
    const password = "123";
    const dataUser = `${username}, ${password}`;
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
