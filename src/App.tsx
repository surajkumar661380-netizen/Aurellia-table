import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from './data/menuData';
import { CartItem, MenuItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ChefSpecials } from './components/ChefSpecials';
import { PromoBanner } from './components/PromoBanner';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { StatsStrip } from './components/StatsStrip';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishModal } from './components/DishModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileStickyCartBar } from './components/MobileStickyCartBar';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cart Operations
  const handleAddToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: dish.id,
          name: dish.name,
          price: dish.price,
          category: dish.category,
          image: dish.image,
          veg: dish.veg,
          qty: 1,
        },
      ];
    });
  };

  const handleAddToCartWithQty = (dish: MenuItem, qty: number) => {
    if (qty <= 0) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: dish.id,
          name: dish.name,
          price: dish.price,
          category: dish.category,
          image: dish.image,
          veg: dish.veg,
          qty: qty,
        },
      ];
    });
  };

  const handleUpdateQty = (id: number, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-[#121413] text-[#e3e2e0] font-sans selection:bg-[#e0c298] selection:text-[#121413]">
      {/* Fixed Navigation Header with View Order button & live count */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={scrollToReservation}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        <Hero
          onExploreMenu={scrollToMenu}
          onReserveTable={scrollToReservation}
        />

        <TrustStrip />

        <AboutSection />

        <ChefSpecials
          items={MENU_ITEMS}
          cart={cart}
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        <PromoBanner onOrderNow={scrollToMenu} />

        <MenuSection
          items={MENU_ITEMS}
          cart={cart}
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        <ReservationSection />

        <GallerySection />

        <ReviewsSection />

        <StatsStrip />

        <ContactSection />
      </main>

      <Footer />

      {/* Desktop Floating Cart Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-30">
        <button
          id="floating-view-order-btn"
          onClick={() => setIsCartOpen(true)}
          className="bg-[#e0c298] text-[#402d0f] px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform border border-[#fedeb2]/40 cursor-pointer group"
          title="View Order"
        >
          <ShoppingBag className="w-5 h-5 text-[#402d0f]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'}
          </span>
          {cartSubtotal > 0 && (
            <span className="text-xs font-serif font-bold border-l border-[#402d0f]/30 pl-3">
              ₹{cartSubtotal}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Sticky Bottom View Order Bar */}
      <MobileStickyCartBar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Order Summary Drawer (CartDrawer) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        onExploreMenu={scrollToMenu}
      />

      {/* Dish Detail Inspection Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCartWithQty={handleAddToCartWithQty}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
}
