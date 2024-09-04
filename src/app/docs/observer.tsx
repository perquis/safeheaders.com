"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type ObserverProps = { name: string; inView: boolean };

interface IObserverContext {
  obs: ObserverProps[];
  setFullObsList: (obs: ObserverProps[]) => void;
  updateObsList: (name: string, inView: boolean) => void;
}

const ObserverContext = createContext<IObserverContext>({
  obs: [],
  setFullObsList: () => {},
  updateObsList: () => {},
});

export const Observer = ({ children }: PropsWithChildren) => {
  const [obs, setObsList] = useState<ObserverProps[]>([]);

  const setFullObsList = (obsList: ObserverProps[]) => setObsList(obsList);
  const updateObsList = useCallback(
    (name: string, inView: boolean) => {
      const newArray = [...obs];

      const updatedList = newArray.map((obs) => {
        if (obs.name === name) return { ...obs, inView };
        return obs;
      });

      setObsList(updatedList);
    },
    [obs],
  );

  return (
    <ObserverContext.Provider value={{ obs, setFullObsList, updateObsList }}>
      {children}
    </ObserverContext.Provider>
  );
};

export const useObserver = () => useContext(ObserverContext);
