import { MinecraftEnchantmentTypes } from './lib/MinecraftEnchantmentTypes';

export const enchantCost = {
  item: 'minecraft:lapis_lazuli',
  1: {
    level: 2,
    amount: 2
  },
  2: {
    level: 4,
    amount: 4
  },
  3: {
    level: 8,
    amount: 8
  },
}

export const enchantLevelRate = {
  // レベル1の時
  1: {
    // [最大レベル*0.25が出る確率]: 45%
    [0.25]: 45,
    [0.5]: 50,
    [0.75]: 5,
    [1.0]: 0
  },
  2: {
    [0.25]: 10,
    [0.5]: 50,
    [0.75]: 35,
    [1.0]: 5
  },
  3: {
    [0.25]: 0,
    [0.5]: 15,
    [0.75]: 50,
    [1.0]: 35
  },
}

// 1-100
export const enchantAddRate = {
  // レベル1: 10%の確率でエンチャント追加
  1: 10,
  2: 20,
  3: 60
}

// 除外するエンチャント
export const ignores = [
  MinecraftEnchantmentTypes.Mending,
  MinecraftEnchantmentTypes.Binding,
  MinecraftEnchantmentTypes.Vanishing,
];