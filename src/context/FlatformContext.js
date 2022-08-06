import React, {
  createContext,
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { storeFlatform } from 'src/utils/flatform';

const FlatformContext = createContext();

const defaultFlatform= {
  flatformIndex: {
    id: "e3f7cf22-2a15-4ee1-b93c-41e1fb3184ae",
    key: "centralweb",
    name: "Central Web"
  },
};

export function FlatformProvider({ flatform, children }) {
  const [currentFlatform, setCurrentFlatform] = useState(flatform || defaultFlatform);

  const handleSaveFlatform = (updatedFlatform = {}) => {
    const mergedFlatform = _.merge({}, currentFlatform, updatedFlatform);

    setCurrentFlatform(mergedFlatform);
    storeFlatform(mergedFlatform);
  };

  useEffect(() => {
    document.dir = currentFlatform.direction;
  }, [currentFlatform]);

  return (
    <FlatformContext.Provider
      value={{
        flatform: currentFlatform,
        saveFlatform: handleSaveFlatform
      }}
    >
      {children}
    </FlatformContext.Provider>
  );
}

FlatformProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object
};

export const FlatformConsumer = FlatformContext.Consumer;

export default FlatformContext;
