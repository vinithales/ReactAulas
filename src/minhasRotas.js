import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Semana01 from './Semana01'; 
import Atv01 from './Atv01';
import Atv02 from './Atv02';
import Semana02 from './Semana02';
import Semana03 from './Semana03';
import Semana04 from './Semana04';



import Toolbar from './Components/Toolbar';
import Gallery2 from './Components/Gallery2';
import Counter from './Components/Counter';
import Form from './Components/Form';
import MovingDot from './Components/MovingDot';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';
import List from './Components/List';
import List2 from './Components/List2';
import ShapeEditor from './Components/ShapeEditor';
import CounterList from './Components/CounterList';
import List3 from './Components/List3';
import List4 from './Components/List4';
import BucketList from './Components/BucketList';



export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semana01" element={<Semana01 />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/semana02" element={<Semana02 />} />
        <Route path="/semana03" element={<Semana03 />} />
        <Route path="/semana04" element={<Semana04 />} />

          
        <Route path="/semana04/toolbar" element={<Toolbar />} />
        <Route path="/semana04/gallery2" element={<Gallery2 />} />
        <Route path="/semana04/counter" element={<Counter />} />
        <Route path="/semana04/form" element={<Form />} />
        <Route path="/semana04/moving-dot" element={<MovingDot />} />
        <Route path="/semana04/form2" element={<Form2 />} />
        <Route path="/semana04/form3" element={<Form3 />} />
        <Route path="/semana04/list" element={<List />} />
        <Route path="/semana04/list2" element={<List2 />} />
        <Route path="/semana04/shape-editor" element={<ShapeEditor />} />
        <Route path="/semana04/counter-list" element={<CounterList />} />
        <Route path="/semana04/list3" element={<List3 />} />
        <Route path="/semana04/list4" element={<List4 />} />
        <Route path="/semana04/bucket-list" element={<BucketList />} />



      </Routes>
    </BrowserRouter>
  );
}
