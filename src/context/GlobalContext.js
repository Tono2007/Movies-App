import { createContext, useContext, useState, useMemo } from 'react';

import { getAccountDetails } from '../api/services/account';
import { getAllMovieGenres } from '../api/services/catalog';
import { deleteSession } from '../api/services/authentication';
import { getSessionId, deleteSessionId } from '../utils/helpers/helpers';

const GlobalContext = createContext();

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

function GlobalProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState('Dark');
  const [genres, setGenres] = useState([]);

  const deleteUserData = async () => {
    console.log('context delete user data');
    try {
      const response = await deleteSession(getSessionId());
      console.log(response);
      setUserData({});
      deleteSessionId();
      console.log('brrando');
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserData = async () => {
    console.log('context fetch user data');
    try {
      const response = await getAccountDetails();
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      console.log(error?.response);
    }
  };
  const fetchGenres = async () => {
    try {
      const response = await getAllMovieGenres();
      setGenres(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const values = useMemo(() => {
    return {
      userData,
      genres,
      setGenres,
      fetchUserData,
      fetchGenres,
      deleteUserData,
    };
  }, [userData, genres]);

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export { GlobalProvider, useGlobalContext, GlobalContext };
