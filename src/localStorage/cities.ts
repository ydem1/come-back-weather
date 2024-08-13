import { CityWithWeatherData } from "src/types/cityWithWeatherData";

const SAVE_KEY = "cities";

class Data {
  private items: CityWithWeatherData[];

  constructor() {
    this.items = this.load();
  }

  private load(): CityWithWeatherData[] {
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

  public getAll(): CityWithWeatherData[] {
    return this.items;
  }

  public add(item: CityWithWeatherData) {
    const newItems = [...this.items];

    newItems.push(item);

    this.items = newItems;
    this.save();
  }

  public remove(itemId: number) {
    const newItems = this.items.filter((item) => item.id !== itemId);

    this.items = newItems;
    this.save();

    return itemId;
  }

  public clear(): void {
    this.items = [];
    this.save();
  }
}

export const localStorageCities = new Data();

// localStorageCities.clear();
