import { useContext } from 'react';
import FlatformContext from 'src/context/FlatformContext';

export default function useFlatform() {
  const context = useContext(FlatformContext);

  return context;
}
