import {
  createContext,
  createSignal,
  JSX,
  onMount,
  useContext,
  Accessor,
} from "solid-js";
import uniqid from "uniqid";
import { NewTechnology, Technology } from "~/types";

export type TechnologyContext = {
  technologies: Accessor<Technology[]>;
  add: (i: NewTechnology) => void;
  deleteOne: (id: string) => void;
  editOne: (id: string, updated: Technology) => void;
};

const TechnologiesContext = createContext<TechnologyContext>();

const LOCAL_STORAGE_KEYS = "technologies";

type TechnologyContextProviderProps = {
  children: JSX.Element;
};

export function TechnologyContextProvider(
  props: TechnologyContextProviderProps
) {
  const [savedItems, setSavedItems] = createSignal<Technology[]>([]);

  const overrideStorage = (technologies: Technology[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS, JSON.stringify(technologies));
  };

  const add = (newTechno: NewTechnology) => {
    const toStorageTechnology: Technology = {
      ...newTechno,
      id: uniqid(),
    };
    const newSavedItems = [...savedItems(), toStorageTechnology];
    setSavedItems(newSavedItems);
    overrideStorage(newSavedItems);
  };

  const deleteOne = (id: string) => {
    const updatedTechnologies = savedItems().filter((t) => t.id !== id);
    setSavedItems(updatedTechnologies);
    overrideStorage(updatedTechnologies);
  };

  const editOne = (id: string, newTechno: Technology) => {
    const updatedTechnologies = savedItems().map((t) =>
      t.id === id ? newTechno : t
    );
    setSavedItems(updatedTechnologies);
    overrideStorage(updatedTechnologies);
  };

  const getAll = () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS) || "[]");

  /**
   * Get all technologies from storage at startup
   */
  onMount(() => {
    setSavedItems(getAll());
  });

  return (
    <TechnologiesContext.Provider
      value={{ technologies: savedItems, add, deleteOne, editOne }}
    >
      {props.children}
    </TechnologiesContext.Provider>
  );
}

export function useTechnologyContext() {
  return useContext(TechnologiesContext)!!;
}
