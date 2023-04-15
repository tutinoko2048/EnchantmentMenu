import { system, Player } from '@minecraft/server';
import { EnchantMenu } from './EnchantMenu/main';

system.events.scriptEventReceive.subscribe(ev => {
  const { sourceEntity, id } = ev;
  if (id === 'enchant:show' && sourceEntity instanceof Player) {
    new EnchantMenu(sourceEntity);
  }
}, {
  namespaces: [ 'enchant' ]
});