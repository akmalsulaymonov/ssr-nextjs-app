import Link from 'next/link';
import Image from '../components/Image'

const About = () => (

    <div>
        <h1>About page</h1>
        <Image />
        <br />
        <Link href="/">
            <button>Back to home</button>
        </Link>
    </div>

)

export default About;