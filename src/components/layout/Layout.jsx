// Wraps Navbar + page content + Footer around every page.
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
