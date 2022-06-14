import type {NextPage} from 'next'
import {LayoutProvider} from "../components/layout";

const Home: NextPage & LayoutProvider = () => {
    return <h1>Hello</h1>
}

Home.getLayout = (page) => <main>{page}</main>

export default Home
