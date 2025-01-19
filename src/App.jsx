import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import ButtonPage from './pages/ButtonPage';
    import CheckboxPage from './pages/CheckboxPage';
    import EditablePage from './pages/EditablePage';
    import FormControlPage from './pages/FormControlPage';
    import IconButtonPage from './pages/IconButtonPage';
    import InputPage from './pages/InputPage';
    import NumberInputPage from './pages/NumberInputPage';
    import PinInputPage from './pages/PinInputPage';
    import RadioPage from './pages/RadioPage';
    import RangeSliderPage from './pages/RangeSliderPage';
    import SelectPage from './pages/SelectPage';
    import SliderPage from './pages/SliderPage';
    import SwitchPage from './pages/SwitchPage';
    import TextareaPage from './pages/TextareaPage';
    import BoxPage from './pages/BoxPage';
    import CenterPage from './pages/CenterPage';
    import ContainerPage from './pages/ContainerPage';
    import FlexPage from './pages/FlexPage';
    import GridPage from './pages/GridPage';
    import SimpleGridPage from './pages/SimpleGridPage';
    import StackPage from './pages/StackPage';
    import WrapPage from './pages/WrapPage';
    import TypographyPage from './pages/TypographyPage';
    import CloseButtonPage from './pages/CloseButtonPage';
    // import PortalPage from './pages/PortalPage';
    // import ShowHidePage from './pages/ShowHidePage';
    // import TransitionPage from './pages/TransitionPage';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/editable" element={<EditablePage />} />
          <Route path="/form-control" element={<FormControlPage />} />
          <Route path="/icon-button" element={<IconButtonPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/number-input" element={<NumberInputPage />} />
          <Route path="/pin-input" element={<PinInputPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/range-slider" element={<RangeSliderPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/textarea" element={<TextareaPage />} />
          <Route path="/box" element={<BoxPage />} />
          <Route path="/center" element={<CenterPage />} />
          <Route path="/container" element={<ContainerPage />} />
          <Route path="/flex" element={<FlexPage />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/simple-grid" element={<SimpleGridPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/wrap" element={<WrapPage />} />
          {/* <Route path="/typography" element={<TypographyPage />} />
          <Route path="/close-button" element={<CloseButtonPage />} />
         <Route path="/transition" element={<TransitionPage />} /> */}
        </Routes>
      );
    }

    export default App;
