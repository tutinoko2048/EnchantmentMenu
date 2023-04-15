import { MinecraftEnchantmentTypes as Types } from '@minecraft/server';

export const enchantLang = {
  [Types.power.id]: 'enchantment.arrowDamage',
  [Types.flame.id]: 'enchantment.arrowFire',
  [Types.infinity.id]: 'enchantment.arrowInfinite',
  [Types.punch.id]: 'enchantment.arrowKnockback',
  [Types.multishot.id]: 'enchantment.crossbowMultishot',
  [Types.piercing.id]: 'enchantment.crossbowPiercing',
  [Types.quickCharge.id]: 'enchantment.crossbowQuickCharge',
  [Types.binding.id]: 'enchantment.curse.binding',
  [Types.vanishing.id]: 'enchantment.curse.vanishing',
  [Types.sharpness.id]: 'enchantment.damage.all',
  [Types.baneOfArthropods.id]: 'enchantment.damage.arthropods',
  [Types.smite.id]: 'enchantment.damage.undead',
  [Types.efficiency.id]: 'enchantment.digging',
  [Types.unbreaking.id]: 'enchantment.durability',
  [Types.fireAspect.id]: 'enchantment.fire',
  [Types.lure.id]: 'enchantment.fishingSpeed',
  [Types.frostWalker.id]: 'enchantment.frostwalker',
  [Types.knockback.id]: 'enchantment.knockback',
  [Types.looting.id]: 'enchantment.lootBonus',
  [Types.fortune.id]: 'enchantment.lootBonusDigger',
  [Types.luckOfTheSea.id]: 'enchantment.lootBonusFishing',
  [Types.mending.id]: 'enchantment.mending',
  [Types.respiration.id]: 'enchantment.oxygen',
  [Types.protection.id]: 'enchantment.protect.all',
  [Types.blastProtection.id]: 'enchantment.protect.explosion',
  [Types.featherFalling.id]: 'enchantment.protect.fall',
  [Types.fireProtection.id]: 'enchantment.protect.fire',
  [Types.projectileProtection.id]: 'enchantment.protect.projectile',
  [Types.soulSpeed.id]: 'enchantment.soul_speed',
  [Types.swiftSneak.id]: 'enchantment.swift_sneak',
  [Types.thorns.id]: 'enchantment.thorns',
  [Types.silkTouch.id]: 'enchantment.untouching',
  [Types.depthStrider.id]: 'enchantment.waterWalker',
  [Types.aquaAffinity.id]: 'enchantment.waterWorker',
  [Types.channeling.id]: 'enchantment.tridentChanneling',
  [Types.loyalty.id]: 'enchantment.tridentLoyalty',
  [Types.riptide.id]: 'enchantment.tridentRiptide',
  [Types.impaling.id]: 'enchantment.tridentImpaling',
}

export const enchantLevels = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'Ⅶ',
  8: 'Ⅷ',
  9: 'Ⅸ',
  10: 'X',
}

export const getEnchantLang = (enchantType) => enchantLang[enchantType.id] ?? enchantType.id;

export const getLevelLang = (level) => (1 <= level && level <= 10) ? enchantLevels[level] : level;