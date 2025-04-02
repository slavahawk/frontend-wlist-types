import { WineList } from "../wineList";
import { SugarTypeEnum, Wine, WineCategoryEnum, WineColourEnum } from "../wine";

export interface Shop {
  id: number;
  name: string;
  createdAt: string;
  paidTill: string;
}

export interface ActiveWineList {
  id: number;
  name: string;
  shop: Shop;
  isActive: boolean;
  wines: WineList[];
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface Item {
  id: number;
  wineListId: number;
  wine: Wine;
  pricePerBottle: number;
  pricePerGlass: number | null;
  links: string[];
}


interface DataWithItems {
  data: Item[];
  count: number;
}

type DataCategory = {
  [key: string]: DataWithItems;
};

export interface WineListActive {
  categories: DataCategory;
  countries: DataCategory;
  colours: DataCategory;
  sugarTypes: DataCategory;
  regions: DataCategory;
  grapes: DataCategory;
  bottleVolumes: DataCategory;
}

export interface ActiveListInfo {
  shopId: number;
  shopName: string;
  imagePath: string;
}
