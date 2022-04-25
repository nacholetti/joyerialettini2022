
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListConteiner from "./componentes/ItemListConteiner"
import Presentacional from "./ItemCount"
import ItemCount from "./ItemCount"


const App=()=>
{
    
    return (
        <>
        <Header/>
        <ItemCount/>
        <ItemListConteiner/>
        <Main/>
        <Footer/>
        
        </>
    )
    
}

export default App