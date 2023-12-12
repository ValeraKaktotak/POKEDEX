export interface IPokemonEncounter {
  location_area: LocationArea
  version_details: VersionDetail[]
}

export interface LocationArea {
  name: string
  url: string
}

export interface VersionDetail {
  max_chance: number
  encounter_details: EncounterDetail[]
  version: Version
}

export interface EncounterDetail {
  min_level: number
  max_level: number
  condition_values: ConditionValue[]
  chance: number
  method: Method
}

export interface ConditionValue {
  name: string
  url: string
}

export interface Method {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}
