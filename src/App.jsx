import { Header } from './components/Header';
import { ProductsProvider } from './contexts/ProductsContext';
import { ProductsPage } from './pages/ProductsPage';
import { AlertProvider } from './contexts/AlertContext';
import { Footer } from './components/Footer/';
import { FilterProvider } from './contexts/FilterContext';
import { LoadingProvider } from './contexts/LoadingContext';

export function App() {
  return (
    <AlertProvider>
      <LoadingProvider>
        <ProductsProvider>
          <FilterProvider>
            <Header />
            <ProductsPage />
            <Footer />
          </FilterProvider>
        </ProductsProvider>
      </LoadingProvider>
    </AlertProvider>
  );
}
