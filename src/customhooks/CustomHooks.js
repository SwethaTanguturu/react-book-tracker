import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';
import { LoggerContext } from '../context/LoggerContext';

export const useBookHook = () => useContext(BookContext);
export const useLoggerHook = () =>  useContext(LoggerContext);