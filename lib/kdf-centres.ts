export interface KDFCentre {
  id: string
  name: string
  region: string
  areas: string[]
  lat: number
  lng: number
}

export const kdfCentres: KDFCentre[] = [
  {
    id: 'essex-1',
    name: 'Essex 1',
    region: 'Essex',
    areas: ['Basildon', 'Canvey Island', 'Benfleet'],
    lat: 51.5756,
    lng: 0.4613,
  },
  {
    id: 'essex-2',
    name: 'Essex 2',
    region: 'Essex',
    areas: ['Southend', 'Westcliff', 'Leigh on Sea'],
    lat: 51.5386,
    lng: 0.7147,
  },
  {
    id: 'essex-3',
    name: 'Essex 3',
    region: 'Essex',
    areas: ['Grays', 'South Ockendon', 'Thurrock'],
    lat: 51.4752,
    lng: 0.3230,
  },
  {
    id: 'essex-4',
    name: 'Essex 4',
    region: 'Essex',
    areas: ["Bishop's Stortford", 'Epping', 'Waltham Abbey'],
    lat: 51.730,
    lng: 0.090,
  },
  {
    id: 'essex-5',
    name: 'Essex 5',
    region: 'Essex',
    areas: ['Upminster', 'Romford', 'Hainault'],
    lat: 51.5752,
    lng: 0.1836,
  },
  {
    id: 'london',
    name: 'London',
    region: 'East London',
    areas: [
      'Stratford',
      'Leyton',
      'Mile End',
      'Leytonstone',
      'South Woodford',
      'Woodford',
      'Poplar',
      'Beckton',
      'Canning Town',
      'Custom House',
    ],
    lat: 51.519,
    lng: 0.019,
  },
  {
    id: 'harlow-1',
    name: 'Harlow 1',
    region: 'Harlow',
    areas: ['CM17'],
    lat: 51.7757,
    lng: 0.1308,
  },
  {
    id: 'harlow-2',
    name: 'Harlow 2',
    region: 'Harlow',
    areas: ['CM18'],
    lat: 51.7626,
    lng: 0.0932,
  },
  {
    id: 'harlow-3',
    name: 'Harlow 3',
    region: 'Harlow',
    areas: ['CM19'],
    lat: 51.7591,
    lng: 0.0580,
  },
  {
    id: 'harlow-4',
    name: 'Harlow 4',
    region: 'Harlow',
    areas: ['CM20'],
    lat: 51.7791,
    lng: 0.1032,
  },
  {
    id: 'kent',
    name: 'Kent',
    region: 'Kent',
    areas: ['Kent'],
    lat: 51.272,
    lng: 0.521,
  },
  {
    id: 'se-london',
    name: 'South East London',
    region: 'Greater London',
    areas: ['Woolwich', 'Plumstead', 'Abbey Wood', 'Peckham'],
    lat: 51.491,
    lng: 0.063,
  },
  {
    id: 'n-london',
    name: 'North London',
    region: 'Greater London',
    areas: ['Bounds Green', 'Wood Green', 'High Barnet', 'Friern Barnet'],
    lat: 51.598,
    lng: -0.110,
  },
  {
    id: 'sw-london',
    name: 'South West London',
    region: 'Greater London',
    areas: ['Croydon', 'Lewisham', 'Catford'],
    lat: 51.396,
    lng: -0.072,
  },
]
