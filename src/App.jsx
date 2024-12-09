import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Components/Preloader';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ResearchAndDevelopment from './pages/ResearchAndDevelopment';
import ClinicalDiagnostics from './pages/ClinicalDiagnostics';
import GenomicAnalysis from './pages/GenomicAnalysis';
import CellAnalysis from './pages/CellAnalysis';
import ResearchSolution from './pages/ResearchSolution';
import GenomicAnalysisSampleDisaggregation from './pages/GenomicAnalysisSampleDisaggregation';
import GenomicAnalysisNucleicAcidIsolation from './pages/GenomicAnalysisNucleicAcidIsolation';
import MultimodeNivo from './pages/MultimodeNivo';
import GenomicAnalysisMicrofluidic from './pages/GenomicAnalysisMicrofluidic';
import GenomicAnalysisLiquidHandlingWorkstations from './pages/GenomicAnalysisLiquidHandlingWorkstations';
import GenomicAnalysisFontus from './pages/GenomicAnalysisFontus';
import GenomicAnalysisJanus from './pages/GenomicAnalysisJanus';
import GenomicAnalysisSciclone from './pages/GenomicAnalysisSciclone';
import GenomicAnalysisBioqule from './pages/GenomicAnalysisBioqule';
import GenomicAnalysisMimix from './pages/GenomicAnalysisMimix';
import CellAnalysisCellHealthViability from './pages/CellAnalysisCellHealthViability';
import CellCounting from './pages/CellCounting';
import CellCountingBrightFieldCounting from './pages/CellCountingBrightFieldCounting';
import CellCountingCellometer2000 from './pages/CellCountingCellometer2000';
import CellCountingCellometerK2 from './pages/CellCountingCellometerK2';
import CellCountingCellometerX2 from './pages/CellCountingCellometerX2';
import CellCountingCellecaMx from './pages/CellCountingCellecaMx';
import CellCountingCellecaPlx from './pages/CellCountingCellecaPlx';
import CellCountingCeligo from './pages/CellCountingCeligo';
import MultimodePlateReader from './pages/MultimodePlateReader';
import MultimodeEnsight from './pages/MultimodeEnsight';
import MultimodeNexus from './pages/MultimodeNexus';
import CellImaging from './pages/CellImaging';
import CellImagingOperattaCls from './pages/CellImagingOperattaCls';
import CellImagingPhenixPlus from './pages/CellImagingPhenixPlus';
import CellImagingSoftware from './pages/CellImagingSoftware';
import Invivo from './pages/Invivo';
import InvivoSpectrum from './pages/InvivoSpectrum';
import InvivoLuminaX5 from './pages/InvivoLuminaX5';
import InvivoLuminaS5 from './pages/InvivoLuminaS5';
import InvivoLumina from './pages/InvivoLumina';
import InvivoLuminaBioluminescent from './pages/InvivoLuminaBioluminescent';
import InvivoLuminaContrast from './pages/InvivoLuminaContrast';
import InvivoLuminaFluorescent from './pages/InvivoLuminaFluorescent';
import InvivoLuminaRadionuclides from './pages/InvivoLuminaRadionuclides';
import InvivoQuantum from './pages/InvivoQuantum';
import InvivoVega from './pages/InvivoVega';
import CellGeneTheraphy from './pages/CellGeneTheraphy';
import Organoids from './pages/Organoids';
import DrugDevelopment from './pages/DrugDevelopment';
import DrugDevelopmentSelection from './pages/DrugDevelopmentSelection';
import ClinicalDiagnosticsBiochemicalPrenatalTesting from './pages/ClinicalDiagnosticsBiochemicalPrenatalTesting';
import ClinicalDiagnosticsNipt from './pages/ClinicalDiagnosticsNipt';
import ClinicalDiagnosticsPreeclampsiaTesting from './pages/ClinicalDiagnosticsPreeclampsiaTesting';
import ClinicalDiagnosticsDemo from './pages/NewbornScrrening';
import ClinicalDiagnosticsNewbornSampleCollection from './pages/ClinicalDiagnosticsNewbornSampleCollection';
import Punching from './pages/Punching';
import Platform from './pages/Platform';
import BiochemicalInstrumentsVictor from './pages/BiochemicalInstrumentsVictor';
import BiochemicalInstrumentsDelfiaXpress from './pages/BiochemicalInstrumentsDelfiaXpress';
import BiochemicalPrenatalTestingDelfiaAssays from './pages/BiochemicalPrenatalTestingDelfiaAssays';
import BiochemicalPrenatalTestingInstruments from './pages/BiochemicalPrenatalTestingInstruments';
import BiochemicalInstrumentsAutodelfia from './pages/BiochemicalInstrumentsAutodelfia';
import PlatformQsight from './pages/PlatformQsight';
import PlatformGSP from './pages/PlatformGsp';
import MigeleInstrument from './pages/PlatformMigele';
import Victor2DInstrument from './pages/PlatformVictor2';
import AutoDELFIA from './pages/BiochemicalInstrumentsDelfiatrio';
import EonisSystem from './pages/PlatformEonis';
import DBSPuncher from './pages/PunchingDbsPuncher';
import DBS_Panthera from './pages/PunchingQuater';

function App() {
  

  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ResearchAndDevelopment" element={<ResearchAndDevelopment />} />
        <Route path="/ClinicalDiagnostics" element={<ClinicalDiagnostics />} />
        <Route path="/GenomicAnalysis" element={<GenomicAnalysis />} />
        <Route path="/CellAnalysis" element={<CellAnalysis />} />
        <Route path="/ResearchSolution" element={<ResearchSolution />} />
{/* rishikesh new */}
<Route path="/GenomicAnalysisSampleDisaggregation" element={<GenomicAnalysisSampleDisaggregation />} />
        <Route path="/GenomicAnalysisNucleicAcidIsolation" element={<GenomicAnalysisNucleicAcidIsolation />} />
        <Route path="/MultimodeNivo" element={<MultimodeNivo />} />
        <Route path="/GenomicAnalysisMicrofluidic" element={<GenomicAnalysisMicrofluidic />} />
        <Route path="/GenomicAnalysisLiquidHandlingWorkstations" element={<GenomicAnalysisLiquidHandlingWorkstations />} />
        <Route path="/GenomicAnalysisFontus" element={<GenomicAnalysisFontus/>} />
        <Route path="/GenomicAnalysisJanus" element={<GenomicAnalysisJanus/>} />
        <Route path="/GenomicAnalysisSciclone" element={<GenomicAnalysisSciclone/>} />
        <Route path="/GenomicAnalysisBioqule" element={<GenomicAnalysisBioqule />} />
        <Route path="/GenomicAnalysisMimix" element={<GenomicAnalysisMimix />} />
        <Route path="/CellAnalysisCellHealthViability" element={<CellAnalysisCellHealthViability />} />
        <Route path="/CellCounting" element={<CellCounting />} />
        <Route path="/CellCountingBrightFieldCounting" element={<CellCountingBrightFieldCounting />} />
        <Route path="/CellCountingCellometer2000" element={<CellCountingCellometer2000 />} />
        <Route path="/CellCountingCellometerK2" element={<CellCountingCellometerK2 />} />
        <Route path="/CellCountingCellometerX2" element={<CellCountingCellometerX2 />} />
        <Route path="/CellCountingCellecaMx" element={<CellCountingCellecaMx />} />
        <Route path="/CellCountingCellecaPlx" element={<CellCountingCellecaPlx />} />
        <Route path="/CellCountingCeligo" element={<CellCountingCeligo/>} />
        <Route path="/MultimodePlateReader" element={<MultimodePlateReader/>} />
        <Route path="/MultimodeEnsight" element={<MultimodeEnsight/>} />
        <Route path="/MultimodeNexus" element={<MultimodeNexus/>} />
        <Route path="/CellImaging" element={<CellImaging/>} />
        <Route path="/CellImagingOperattaCls" element={<CellImagingOperattaCls/>} />
        <Route path="/CellImagingPhenixPlus" element={<CellImagingPhenixPlus/>} />
        <Route path="/CellImagingSoftware" element={<CellImagingSoftware/>} />
        <Route path="/invivo" element={<Invivo/>} />
        <Route path="/InvivoSpectrum" element={<InvivoSpectrum/>} />
        <Route path="/InvivoLuminaX5" element={<InvivoLuminaX5/>} />
        <Route path="/InvivoLuminaS5" element={<InvivoLuminaS5/>} />
        <Route path="/InvivoLumina" element={<InvivoLumina/>} />
        <Route path="/InvivoLuminaBioluminescent" element={<InvivoLuminaBioluminescent/>} />
        <Route path="/InvivoLuminaContrast" element={<InvivoLuminaContrast/>} />
        <Route path="/InvivoLuminaFluorescent" element={<InvivoLuminaFluorescent/>} />
        <Route path="/InvivoLuminaRadionuclides" element={<InvivoLuminaRadionuclides/>} />
        <Route path="/InvivoQuantum" element={<InvivoQuantum/>} />
        <Route path="/InvivoVega" element={<InvivoVega/>} />
        <Route path="/Organoids" element={<Organoids/>} />

        <Route path="/DrugDevelopment" element={<DrugDevelopment/>} />
        <Route path="/DrugDevelopmentSelection" element={<DrugDevelopmentSelection/>} />

        <Route path="/CellGeneTheraphy" element={<CellGeneTheraphy/>} />

        {/* reisheskes's new end here */}
        <Route path="/clinical-diagnostics-biochemical-prenatal-testing" element={<ClinicalDiagnosticsBiochemicalPrenatalTesting />} />
        <Route path="/clinical-diagnostics-nipt" element={<ClinicalDiagnosticsNipt/>} />
        <Route path="/clinical-diagnostics-preeclampsia-testing" element={<ClinicalDiagnosticsPreeclampsiaTesting/>} />
        <Route path="/clinical-diagnostics-newborn" element={<ClinicalDiagnosticsDemo/>} />
        <Route path="/clinical-diagnostics-newborn-sample-collection" element={<ClinicalDiagnosticsNewbornSampleCollection/>} />
        <Route path="/punching" element={<Punching/>} />
        <Route path="/platform" element={<Platform/>} />
        <Route path="/biochemical-instruments-victor" element={<BiochemicalInstrumentsVictor/>} />
        <Route path="/biochemical-instruments-delfia-xpress" element={<BiochemicalInstrumentsDelfiaXpress/>} />
        <Route path="/biochemical-prenatal-testing-delfia-assays" element={<BiochemicalPrenatalTestingDelfiaAssays/>} />
        <Route path="/biochemical-prenatal-testing-instruments" element={<BiochemicalPrenatalTestingInstruments/>} />
        <Route path="/biochemical-instruments-autodelfia" element={<BiochemicalInstrumentsAutodelfia/>} />
        {/* last day changes aman */}
        <Route path="/platform-qsight" element={<PlatformQsight/>} />
        <Route path="/platform-gsp" element={<PlatformGSP/>} />
        <Route path="/platform-migele" element={<MigeleInstrument/>} />
        <Route path="/platform-victor2" element={<Victor2DInstrument/>} />
        <Route path="/biochemical-instruments-delfiatrio" element={<AutoDELFIA/>} />
        <Route path="/platform-eonis" element={<EonisSystem/>} />
        <Route path="/Punching-dbs-puncher" element={<DBSPuncher/>} />
        <Route path="/punching-dbs-panthera" element={<DBS_Panthera/>} />

      </Routes>
      </BrowserRouter>  
  );
}

export default App;
