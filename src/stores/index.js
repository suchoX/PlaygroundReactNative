import React from 'react';
import UiStore from './UiStore';
import QuotesStore from './QuotesStore';

const uiStoreContext = React.createContext(new UiStore());
const quotesStoreContext = React.createContext(new QuotesStore());

const useUiStore = () => React.useContext(uiStoreContext);
const useQuotesStore = () => React.useContext(quotesStoreContext);
export {useUiStore, useQuotesStore};
