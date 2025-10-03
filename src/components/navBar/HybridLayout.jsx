import TopNavbar from './TopNavbar';
import Footer from '../footer/Footer';
import MobileTopBar from './MobileTopBar';
import BottomNavbar from './BottomNavbar';

export default function HybridLayout({ children }) {
  return (
    <div className="pt-16 pb-16">
      {/* Desktop */}
      <TopNavbar />
      <Footer />

      {/* Mobile */}
      <MobileTopBar />
      <BottomNavbar />

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 mt-4">
        {children}
      </main>
    </div>
  );
}