export interface IPokemonStats {
  base_stat: number
  effort: number
  stat: Stat
}

export interface Stat {
  name: string
  url: string
}

export interface IPokemonAbility {
  ability: Ability
  is_hidden: boolean
  slot: number
}

export interface Ability {
  name: string
  url: string
}
