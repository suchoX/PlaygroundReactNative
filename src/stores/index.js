import React from 'react';
import UiStore from './UiStore';

const StoresContext = React.createContext(new UiStore());

export const useUiStore = () => React.useContext(StoresContext);
