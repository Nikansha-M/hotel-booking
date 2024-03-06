import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// describe props this component expects
interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        // utilize flexbox to align elements in column
        // min h screen -- app takes up whole screen
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto py-10 flex-1">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;