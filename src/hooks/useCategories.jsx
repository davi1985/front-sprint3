import { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';

export function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
