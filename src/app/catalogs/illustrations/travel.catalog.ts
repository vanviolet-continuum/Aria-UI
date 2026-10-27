import { AirplaneIllustration } from '../../../template/ui/illustrations/travel/airplane.illustration'
import { AirportTerminalIllustration } from '../../../template/ui/illustrations/travel/airport.terminal.illustration'
import { BicycleIllustration } from '../../../template/ui/illustrations/travel/bicycle.illustration'
import { BusStopIllustration } from '../../../template/ui/illustrations/travel/bus.stop.illustration'
import { CableCarIllustration } from '../../../template/ui/illustrations/travel/cable.car.illustration'
import { CampingBackpackIllustration } from '../../../template/ui/illustrations/travel/camping.backpack.illustration'
import { CampingChairIllustration } from '../../../template/ui/illustrations/travel/camping.chair.illustration'
import { CampingStoveIllustration } from '../../../template/ui/illustrations/travel/camping.stove.illustration'
import { CampingTableIllustration } from '../../../template/ui/illustrations/travel/camping.table.illustration'
import { CampingTentIllustration } from '../../../template/ui/illustrations/travel/camping.tent.illustration'
import { CarabinerIllustration } from '../../../template/ui/illustrations/travel/carabiner.illustration'
import { CargoShipIllustration } from '../../../template/ui/illustrations/travel/cargo.ship.illustration'
import { CityscapeIllustration } from '../../../template/ui/illustrations/travel/cityscape.illustration'
import { ClimbingRopeIllustration } from '../../../template/ui/illustrations/travel/climbing.rope.illustration'
import { DryBagIllustration } from '../../../template/ui/illustrations/travel/dry.bag.illustration'
import { EnamelMugIllustration } from '../../../template/ui/illustrations/travel/enamel.mug.illustration'
import { FerryBoatIllustration } from '../../../template/ui/illustrations/travel/ferry.boat.illustration'
import { FlashlightIllustration } from '../../../template/ui/illustrations/travel/flashlight.illustration'
import { HarborIllustration } from '../../../template/ui/illustrations/travel/harbor.illustration'
import { HelicopterIllustration } from '../../../template/ui/illustrations/travel/helicopter.illustration'
import { HikingBootIllustration } from '../../../template/ui/illustrations/travel/hiking.boot.illustration'
import { HikingPolesIllustration } from '../../../template/ui/illustrations/travel/hiking.poles.illustration'
import { HotAirBalloonIllustration } from '../../../template/ui/illustrations/travel/hot.air.balloon.illustration'
import { IslandIllustration } from '../../../template/ui/illustrations/travel/island.illustration'
import { LighthouseIllustration } from '../../../template/ui/illustrations/travel/lighthouse.illustration'
import { LuggageIllustration } from '../../../template/ui/illustrations/travel/luggage.illustration'
import { MotorcycleIllustration } from '../../../template/ui/illustrations/travel/motorcycle.illustration'
import { MountainLakeIllustration } from '../../../template/ui/illustrations/travel/mountain.lake.illustration'
import { MuseumIllustration } from '../../../template/ui/illustrations/travel/museum.illustration'
import { PassportIllustration } from '../../../template/ui/illustrations/travel/passport.illustration'
import { PocketKnifeIllustration } from '../../../template/ui/illustrations/travel/pocket.knife.illustration'
import { PortableCoolerIllustration } from '../../../template/ui/illustrations/travel/portable.cooler.illustration'
import { PropellerPlaneIllustration } from '../../../template/ui/illustrations/travel/propeller.plane.illustration'
import { RoadTripIllustration } from '../../../template/ui/illustrations/travel/road.trip.illustration'
import { SailboatIllustration } from '../../../template/ui/illustrations/travel/sailboat.illustration'
import { ScooterIllustration } from '../../../template/ui/illustrations/travel/scooter.illustration'
import { SleepingBagIllustration } from '../../../template/ui/illustrations/travel/sleeping.bag.illustration'
import { StoneBridgeIllustration } from '../../../template/ui/illustrations/travel/stone.bridge.illustration'
import { SubmarineIllustration } from '../../../template/ui/illustrations/travel/submarine.illustration'
import { SuitcaseOrganizerIllustration } from '../../../template/ui/illustrations/travel/suitcase.organizer.illustration'
import { TentPegIllustration } from '../../../template/ui/illustrations/travel/tent.peg.illustration'
import { ThermosFlaskIllustration } from '../../../template/ui/illustrations/travel/thermos.flask.illustration'
import { TrailSignIllustration } from '../../../template/ui/illustrations/travel/trail.sign.illustration'
import { TrainIllustration } from '../../../template/ui/illustrations/travel/train.illustration'
import { TrainStationIllustration } from '../../../template/ui/illustrations/travel/train.station.illustration'
import { TramIllustration } from '../../../template/ui/illustrations/travel/tram.illustration'
import { TravelCompassIllustration } from '../../../template/ui/illustrations/travel/travel.compass.illustration'
import { TravelMapIllustration } from '../../../template/ui/illustrations/travel/travel.map.illustration'
import { TravelTrunkIllustration } from '../../../template/ui/illustrations/travel/travel.trunk.illustration'
import { VintageCarIllustration } from '../../../template/ui/illustrations/travel/vintage.car.illustration'
import { WatermillIllustration } from '../../../template/ui/illustrations/travel/watermill.illustration'
import { WindmillIllustration } from '../../../template/ui/illustrations/travel/windmill.illustration'
import type { IllustrationEntry } from './illustration.types'

export const travelIllustrations: IllustrationEntry[] = [
  {
    id: 'airplane',
    name: 'Airplane',
    componentName: 'AirplaneIllustration',
    description: 'A plane gliding toward the next destination.',
    category: 'travel',
    isNew: true,
    component: AirplaneIllustration,
  },
  {
    id: 'extended-airport-terminal',
    name: 'Airport terminal',
    componentName: 'AirportTerminalIllustration',
    description: 'A glazed terminal beside a simple airport control tower.',
    category: 'travel',
    isNew: true,
    component: AirportTerminalIllustration,
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    componentName: 'BicycleIllustration',
    description: 'Two wheels and a basket for a slow adventure.',
    category: 'travel',
    isNew: true,
    component: BicycleIllustration,
  },
  {
    id: 'extended-bus-stop',
    name: 'Bus stop',
    componentName: 'BusStopIllustration',
    description: 'A glass-sided bus shelter with a bench and route sign.',
    category: 'travel',
    isNew: true,
    component: BusStopIllustration,
  },
  {
    id: 'extended-cable-car',
    name: 'Cable car',
    componentName: 'CableCarIllustration',
    description: 'A glazed cabin hanging from a gently sloped cable.',
    category: 'travel',
    isNew: true,
    component: CableCarIllustration,
  },
  {
    id: 'extended-camping-backpack',
    name: 'Camping backpack',
    componentName: 'CampingBackpackIllustration',
    description: 'A hiking pack with rolled gear and balanced front pockets.',
    category: 'travel',
    isNew: true,
    component: CampingBackpackIllustration,
  },
  {
    id: 'extended-camping-chair',
    name: 'Camping chair',
    componentName: 'CampingChairIllustration',
    description: 'A folding fabric chair with a light crossed frame.',
    category: 'travel',
    isNew: true,
    component: CampingChairIllustration,
  },
  {
    id: 'extended-camping-stove',
    name: 'Camping stove',
    componentName: 'CampingStoveIllustration',
    description: 'A compact burner standing on three steady folding legs.',
    category: 'travel',
    isNew: true,
    component: CampingStoveIllustration,
  },
  {
    id: 'extended-camping-table',
    name: 'Camping table',
    componentName: 'CampingTableIllustration',
    description: 'A slatted folding table and a small warm drink.',
    category: 'travel',
    isNew: true,
    component: CampingTableIllustration,
  },
  {
    id: 'extended-camping-tent',
    name: 'Dome tent',
    componentName: 'CampingTentIllustration',
    description: 'A dome tent with a simple entrance and curved support poles.',
    category: 'travel',
    isNew: true,
    component: CampingTentIllustration,
  },
  {
    id: 'extended-carabiner',
    name: 'Carabiner',
    componentName: 'CarabinerIllustration',
    description: 'An outlined carabiner with a textured locking sleeve.',
    category: 'travel',
    isNew: true,
    component: CarabinerIllustration,
  },
  {
    id: 'extended-cargo-ship',
    name: 'Cargo ship',
    componentName: 'CargoShipIllustration',
    description: 'A low cargo vessel with stacked rectangular containers.',
    category: 'travel',
    isNew: true,
    component: CargoShipIllustration,
  },
  {
    id: 'cityscape',
    name: 'Cityscape',
    componentName: 'CityscapeIllustration',
    description: 'A skyline filled with places to explore.',
    category: 'travel',
    isNew: true,
    component: CityscapeIllustration,
  },
  {
    id: 'extended-climbing-rope',
    name: 'Climbing rope',
    componentName: 'ClimbingRopeIllustration',
    description: 'A neatly bundled rope with a short loose end.',
    category: 'travel',
    isNew: true,
    component: ClimbingRopeIllustration,
  },
  {
    id: 'extended-dry-bag',
    name: 'Dry bag',
    componentName: 'DryBagIllustration',
    description: 'A roll-top waterproof bag with a shoulder strap.',
    category: 'travel',
    isNew: true,
    component: DryBagIllustration,
  },
  {
    id: 'extended-enamel-mug',
    name: 'Enamel mug',
    componentName: 'EnamelMugIllustration',
    description: 'An enamel camping mug with a simple mountain emblem.',
    category: 'travel',
    isNew: true,
    component: EnamelMugIllustration,
  },
  {
    id: 'extended-ferry-boat',
    name: 'Ferry boat',
    componentName: 'FerryBoatIllustration',
    description: 'A two-deck ferry with orderly windows and short funnels.',
    category: 'travel',
    isNew: true,
    component: FerryBoatIllustration,
  },
  {
    id: 'extended-flashlight',
    name: 'Flashlight',
    componentName: 'FlashlightIllustration',
    description: 'A compact flashlight with a wide lens and ribbed grip.',
    category: 'travel',
    isNew: true,
    component: FlashlightIllustration,
  },
  {
    id: 'extended-harbor',
    name: 'Harbor',
    componentName: 'HarborIllustration',
    description: 'A small boat moored beside a simple wooden pier.',
    category: 'travel',
    isNew: true,
    component: HarborIllustration,
  },
  {
    id: 'extended-helicopter',
    name: 'Helicopter',
    componentName: 'HelicopterIllustration',
    description: 'A compact helicopter with clear glazing and simple landing skids.',
    category: 'travel',
    isNew: true,
    component: HelicopterIllustration,
  },
  {
    id: 'extended-hiking-boot',
    name: 'Hiking boot',
    componentName: 'HikingBootIllustration',
    description: 'A sturdy hiking boot with laces and a thick sole.',
    category: 'travel',
    isNew: true,
    component: HikingBootIllustration,
  },
  {
    id: 'extended-hiking-poles',
    name: 'Hiking poles',
    componentName: 'HikingPolesIllustration',
    description: 'A pair of walking poles with simple straps and grips.',
    category: 'travel',
    isNew: true,
    component: HikingPolesIllustration,
  },
  {
    id: 'hot-air-balloon',
    name: 'Hot air balloon',
    componentName: 'HotAirBalloonIllustration',
    description: 'A balloon drifting above the everyday rush.',
    category: 'travel',
    isNew: true,
    component: HotAirBalloonIllustration,
  },
  {
    id: 'island',
    name: 'Island',
    componentName: 'IslandIllustration',
    description: 'A small island with a shady palm and calm seas.',
    category: 'travel',
    isNew: true,
    component: IslandIllustration,
  },
  {
    id: 'extended-lighthouse',
    name: 'Lighthouse',
    componentName: 'LighthouseIllustration',
    description: 'A striped lighthouse with a small lantern room.',
    category: 'travel',
    isNew: true,
    component: LighthouseIllustration,
  },
  {
    id: 'luggage',
    name: 'Luggage',
    componentName: 'LuggageIllustration',
    description: 'A suitcase packed with stories yet to happen.',
    category: 'travel',
    isNew: true,
    component: LuggageIllustration,
  },
  {
    id: 'extended-motorcycle',
    name: 'Motorcycle',
    componentName: 'MotorcycleIllustration',
    description: 'A simple road motorcycle with a tank, engine, and spoke details.',
    category: 'travel',
    isNew: true,
    component: MotorcycleIllustration,
  },
  {
    id: 'extended-mountain-lake',
    name: 'Mountain lake',
    componentName: 'MountainLakeIllustration',
    description: 'Snow-tipped peaks reflected in a calm mountain lake.',
    category: 'travel',
    isNew: true,
    component: MountainLakeIllustration,
  },
  {
    id: 'extended-museum',
    name: 'Museum',
    componentName: 'MuseumIllustration',
    description: 'A classical museum facade with evenly spaced columns.',
    category: 'travel',
    isNew: true,
    component: MuseumIllustration,
  },
  {
    id: 'passport',
    name: 'Passport',
    componentName: 'PassportIllustration',
    description: 'A passport and travel stamp for new discoveries.',
    category: 'travel',
    isNew: true,
    component: PassportIllustration,
  },
  {
    id: 'extended-pocket-knife',
    name: 'Pocket knife',
    componentName: 'PocketKnifeIllustration',
    description: 'A folding tool with a clean blade and rounded handle.',
    category: 'travel',
    isNew: true,
    component: PocketKnifeIllustration,
  },
  {
    id: 'extended-portable-cooler',
    name: 'Portable cooler',
    componentName: 'PortableCoolerIllustration',
    description: 'A lidded cooler with a solid handle and a simple snowflake.',
    category: 'travel',
    isNew: true,
    component: PortableCoolerIllustration,
  },
  {
    id: 'extended-propeller-plane',
    name: 'Propeller plane',
    componentName: 'PropellerPlaneIllustration',
    description: 'A light propeller aircraft with a narrow wing and landing wheel.',
    category: 'travel',
    isNew: true,
    component: PropellerPlaneIllustration,
  },
  {
    id: 'road-trip',
    name: 'Road trip',
    componentName: 'RoadTripIllustration',
    description: 'A packed car following a road full of possibility.',
    category: 'travel',
    isNew: true,
    component: RoadTripIllustration,
  },
  {
    id: 'sailboat',
    name: 'Sailboat',
    componentName: 'SailboatIllustration',
    description: 'A sailboat catching the breeze on gentle waves.',
    category: 'travel',
    isNew: true,
    component: SailboatIllustration,
  },
  {
    id: 'extended-scooter',
    name: 'Scooter',
    componentName: 'ScooterIllustration',
    description: 'A classic scooter with rounded bodywork and two clear wheels.',
    category: 'travel',
    isNew: true,
    component: ScooterIllustration,
  },
  {
    id: 'extended-sleeping-bag',
    name: 'Sleeping bag',
    componentName: 'SleepingBagIllustration',
    description: 'A quilted sleeping bag with an open hood and side zipper.',
    category: 'travel',
    isNew: true,
    component: SleepingBagIllustration,
  },
  {
    id: 'extended-stone-bridge',
    name: 'Stone bridge',
    componentName: 'StoneBridgeIllustration',
    description: 'A stone arch bridge crossing a quiet stream.',
    category: 'travel',
    isNew: true,
    component: StoneBridgeIllustration,
  },
  {
    id: 'extended-submarine',
    name: 'Submarine',
    componentName: 'SubmarineIllustration',
    description: 'A rounded submarine with three portholes and a small periscope.',
    category: 'travel',
    isNew: true,
    component: SubmarineIllustration,
  },
  {
    id: 'extended-suitcase-organizer',
    name: 'Suitcase organizers',
    componentName: 'SuitcaseOrganizerIllustration',
    description: 'Two packing cubes with a mesh panel and zipper details.',
    category: 'travel',
    isNew: true,
    component: SuitcaseOrganizerIllustration,
  },
  {
    id: 'extended-tent-peg',
    name: 'Tent pegs',
    componentName: 'TentPegIllustration',
    description: 'Two tent stakes with a short loop of guy rope.',
    category: 'travel',
    isNew: true,
    component: TentPegIllustration,
  },
  {
    id: 'extended-thermos-flask',
    name: 'Thermos flask',
    componentName: 'ThermosFlaskIllustration',
    description: 'An insulated flask and a small matching cup.',
    category: 'travel',
    isNew: true,
    component: ThermosFlaskIllustration,
  },
  {
    id: 'extended-trail-sign',
    name: 'Trail sign',
    componentName: 'TrailSignIllustration',
    description: 'Two wooden direction signs on a narrow trail post.',
    category: 'travel',
    isNew: true,
    component: TrailSignIllustration,
  },
  {
    id: 'train',
    name: 'Train',
    componentName: 'TrainIllustration',
    description: 'A welcoming train ready for a new journey.',
    category: 'travel',
    isNew: true,
    component: TrainIllustration,
  },
  {
    id: 'extended-train-station',
    name: 'Train station',
    componentName: 'TrainStationIllustration',
    description: 'A station entrance with a central clock and short platform.',
    category: 'travel',
    isNew: true,
    component: TrainStationIllustration,
  },
  {
    id: 'extended-tram',
    name: 'Tram',
    componentName: 'TramIllustration',
    description: 'A side-view tram with overhead power and divided windows.',
    category: 'travel',
    isNew: true,
    component: TramIllustration,
  },
  {
    id: 'extended-travel-compass',
    name: 'Travel compass',
    componentName: 'TravelCompassIllustration',
    description: 'A round field compass with a clear directional needle.',
    category: 'travel',
    isNew: true,
    component: TravelCompassIllustration,
  },
  {
    id: 'extended-travel-map',
    name: 'Travel map',
    componentName: 'TravelMapIllustration',
    description: 'A folded route map with a trail and a destination pin.',
    category: 'travel',
    isNew: true,
    component: TravelMapIllustration,
  },
  {
    id: 'extended-travel-trunk',
    name: 'Travel trunk',
    componentName: 'TravelTrunkIllustration',
    description: 'A classic trunk with straps, corner guards, and a top handle.',
    category: 'travel',
    isNew: true,
    component: TravelTrunkIllustration,
  },
  {
    id: 'extended-vintage-car',
    name: 'Vintage car',
    componentName: 'VintageCarIllustration',
    description: 'A compact classic car with a split cabin and round wheels.',
    category: 'travel',
    isNew: true,
    component: VintageCarIllustration,
  },
  {
    id: 'extended-watermill',
    name: 'Watermill',
    componentName: 'WatermillIllustration',
    description: 'A mill house with a round wooden water wheel.',
    category: 'travel',
    isNew: true,
    component: WatermillIllustration,
  },
  {
    id: 'extended-windmill',
    name: 'Windmill',
    componentName: 'WindmillIllustration',
    description: 'A traditional windmill with four evenly arranged sails.',
    category: 'travel',
    isNew: true,
    component: WindmillIllustration,
  },
]
