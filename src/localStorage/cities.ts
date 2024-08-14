import { ICity } from "src/types/city";

const SAVE_KEY = "cities";

class Data {
  private items: ICity[];

  constructor() {
    this.items = this.load();
  }

  private load(): ICity[] {
    try {
      const items = localStorage.getItem(SAVE_KEY);
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      return [];
    }
  }

  private save(): void {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.items));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  }

  public getAll(): ICity[] {
    return this.items;
  }

  public add(item: ICity) {
    const newItems = [...this.items];

    newItems.push(item);

    this.items = newItems;
    this.save();
  }

  public remove(itemName: string) {
    const newItems = this.items.filter((item) => item.name !== itemName);

    this.items = newItems;
    this.save();
  }

  public clear(): void {
    this.items = [];
    this.save();
  }
}

export const localStorageCities = new Data();

// localStorageCities.clear();
