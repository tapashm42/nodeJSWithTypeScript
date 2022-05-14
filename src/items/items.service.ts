// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
    1: {
        id: 1,
        name: 'Desi Cow Ghee 300 gms',
        price: 400,
        deliveryCharge: 50,
        description: 'Good quality',
        image: 'https://p4pasal.com/assets/images/desi_ghee_himalifresh.png'
    },
    2: {
        id: 2,
        name: 'Turmeric Powder 200 gms',
        price: 125,
        deliveryCharge: 50,
        description: 'Authentic',
        image: 'https://p4pasal.com/assets/images/haldi_power_himalifresh.png'
    },
    3: {
        id: 3,
        name: 'Himalayan Large Cardamom Dried (50 gms)',
        price: 78,
        deliveryCharge: 50,
        description: 'Very good',
        image: 'https://p4pasal.com/assets/images/himalayan_large_cardamo.png'
    },
    4: {
        id: 4,
        name: 'Fenugreek Sprout Pickel',
        price: 75,
        deliveryCharge: 50,
        description: 'High quality',
        image: 'https://p4pasal.com/assets/images/fenugreek_sprout_pickel.png'
    }
} 
/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem,
    };
    return items[id];
}

export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);
    if (!item) {
        return null;
    }

    items[id] = {id, ...itemUpdate};
    return items[id];
} 

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete items[id];
};