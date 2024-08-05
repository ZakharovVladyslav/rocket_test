import { Divider } from '../divider';
import './rocket-card.scss';

export default function RocketCard({ info, title }) {
   return <section class>
      <div className='rocket-image' />

      <h1 className='title'></h1>

      <Divider />

      <p>Height: <span>{info.height}</span></p>
      <p>Diameter: <span>{info.height}</span></p>
      <p>Spacecraft volume: <span>{info.spacecraft}</span></p>
      <p>Trunk volume: <span>{info.trunk}</span></p>
      <p>Launch payload mass: <span>{info.launchMass}</span></p>
      <p>Return payload mass: <span>{info.returnMass}</span></p>
   </section>
}
