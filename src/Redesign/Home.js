import Header from './Header/Header'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects';
function Home() {


    return (
        <h1 className="text-3xl font-bold underline">
            <Header />
            <Projects />
            <Footer />
        </h1>
    )

}

export default Home;