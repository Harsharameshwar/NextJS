import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';

const Navbar = () => {
  return (
    <nav>
    <Head>
       <link rel="icon" href="/logo.png"></link>
    </Head>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/clients/">Client Listing</Link>
    </nav>
  );
}
 
export default Navbar;