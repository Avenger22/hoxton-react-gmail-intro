import RibbonMain1 from "./RibbonMain1"
import RibbonMain2 from "./RibbonMain2"
import RibbonMain3 from "./RibbonMain3"
import RibbonMain4 from "./RibbonMain4"
import ImageMain from './ImageMain'

function Main() {

    return (
        <main className="email-view">

            <RibbonMain1 />

            <article className="email-content">

                <RibbonMain2 />

                <RibbonMain3 />
                
                <ImageMain />

                <RibbonMain4 />

            </article>

        </main>
    )

}

export default Main