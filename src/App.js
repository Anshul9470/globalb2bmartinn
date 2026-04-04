



// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header';
// import Topbar from './Components/Topbar';
// import Home from './Components/Home';
// import Footer from './Components/Footer';
// import { Routes, Route, Router } from 'react-router-dom';
// import Registration from './Pages/Registration';
// import Login from './Pages/Signup';
// import CompanyRegi from './Pages/CompanyRegi';
// import Dashbord from './Pages/Dashbord';
// import PrivacyPolicy from './Pages/PrivacyPolicy';
// import TermsCondition from './Pages/TermsCondition';
// import AboutUs from './Pages/AboutUs';
// import Prices from './Pages/Prices';
// import ScrollToTop from './Components/ScrollToTop';
// import Contact from './Pages/Contact';
// import Agriculture from './Pages/Agriculture';
// import Fashion from './Categoriess/Fashion';
// import Chemicals from './Categoriess/Chemicals';
// import Gifts from './Categoriess/Gifts';
// import MainRice from './Categoriess/MainOnion';
// import OnionComp from './Companies/OnionComp';
// import OnionBuy from './Buyers/OnionBuy';
// import Furniture from './Categoriess/Furniture';
// import FoodPro from './Categoriess/FoodPro';
// import Jwellery from './Categoriess/Jwellery';
// import { AuthProvider } from './Buyers/AuthContext';

// function App() {
//   return (
//     <div className="App">
//       <Topbar />
//       <Header />
//       <ScrollToTop />
//       <Router>
//         <AuthProvider>
//           <Routes>

//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register-buyer" element={<Registration />} />
//             <Route path="/register-company" element={<CompanyRegi />} />
//             <Route path="/dashboard" element={<Dashbord />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-condition" element={<TermsCondition />} />
//             <Route path="/aboutUs" element={<AboutUs />} />
//             <Route path="/packages" element={<Prices />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/agriculture" element={<Agriculture />} />
//             <Route path="/fashion/apprarels" element={<Fashion />} />
//             <Route path="/chemicals" element={<Chemicals />} />
//             <Route path="/gifts-items" element={<Gifts />} />
//             <Route path="/furnitures" element={<Furniture />} />
//             <Route path="/foodsProdcts" element={<FoodPro />} />
//             <Route path="/jewellery-necklaces-suppliers" element={<Jwellery />} />
//             <Route path="/farming/onions" element={<MainRice />} />
//             <Route path="/company/onions" element={<OnionComp />} />

//             <Route path="/buyer/onions" element={<OnionBuy />} />

//           </Routes>
//         </AuthProvider>
//       </Router>

//       <Footer />

//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
// import UnderMentanceLanding from "./Pages/UnderMentanceLanding";
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Signup";
import CompanyRegi from "./Pages/CompanyRegi";
import Dashbord from "./Pages/Dashbord";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import AboutUs from "./Pages/AboutUs";
import Prices from "./Pages/Prices";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import Agriculture from "./Pages/Agriculture";
import Fashion from "./Categoriess/Fashion";
import Chemicals from "./Categoriess/Chemicals";
import Gifts from "./Categoriess/Gifts";
import MainRice from "./Categoriess/MainOnion";
import OnionComp from "./Companies/OnionComp";
import OnionBuy from "./Buyers/OnionBuy";
import Furniture from "./Categoriess/Furniture";
import FoodPro from "./Categoriess/FoodPro";
import Jwellery from "./Categoriess/Jwellery";
import { AuthProvider } from "./Buyers/AuthContext";
import NotFound from "./Components/NotFound";
import PotatoBuy from "./Buyers/PotatoBuy";
import MainPlastic from "./Products/Plastic";
import PlasticComp from "./Companies/Plasticcomp";
import HomeDecor from "./Products/HomeDecor";
import SteelUtensils from "./Products/StealUtensils";
import SeatCovers from "./Products/Seatcovers";
import Salt from "./Products/Salt";
import Arts from "./Products/Arts";
import PowerTools from "./Products/Powertoo";
import PoojaArticles from "./Products/PoojaArticles";
import DecorativeItems from "./Products/DecorativeItems";
import SportsAccessories from "./Products/SportsAccessories";
import MoneyExchange from "./Products/MoneyExchange";
import HealthAndBeauty from "./Categoriess/Health&Beauty";
import HomeDecorCompany from "./Companies/Homedecor";
import SteelCompany from "./Companies/Stellcomp";
import HerbalComp from "./Companies/HerbalComp";
import SeatCoverComp from "./Companies/Searcomp";
import SaltComp from "./Companies/SaltComp";
import ArtsComp from "./Companies/Artscomp";
import PoojaArticlesComp from "./Companies/PoojaAricle";
import SportsAccessoriesComp from "./Companies/SportsAssecComp";
import EveyElectricBikeComp from "./Companies/ElectBikeComp";
import MoneyExchangeComp from "./Companies/MoneyexchComp";
import HomeSupplies from "./Categoriess/HomeSupplies";
import IndustrialSupplies from "./Categoriess/IndustrialSupplies";
import ToolsAndEquipment from "./Categoriess/ToolsandEqip";
import WheatBuy from "./Buyers/WheatBuy";
import HandicraftItems from "./Products/Handicraft";
import TextileDealers from "./Products/Texttiledealer";
import GarmentDealers from "./Products/GarmentDealer";
import EntertainmentEvents from "./Products/EntertainmentEvents";
import ElectronicsGoods from "./Products/Electronicgoods";
import BathwareSupplier from "./Products/Bathware";
import ValveSupplier from "./Products/valvedealer";
import WheatSupplier from "./Products/Wheatsupplier";
import GymEquipmentsSupplier from "./Products/Gymequipment";
import AgroProductsSupplier from "./Products/AgroProducts";
import CopperSupplier from "./Products/Cooperdealer";
import EvBikesSupplier from "./Products/Evbikes";
import BagsAndBeltsSupplier from "./Products/BagsSupplier";
import LaserProductsSupplier from "./Products/Laserproduct";
import CeramicTilesSupplier from "./Products/Tiles";
import RugsManufacturer from "./Products/Rugs&Carpet";
import LeatherProductsManufacturer from "./Products/LeatherProducts";
import DryFruitBuy from "./Buyers/DryFruitBuy";
import DecorativeItemBuy from "./Buyers/DecorativeBuy";
import CoconutOilBuy from "./Buyers/CoconutoilBuy";
import TomatoBuy from "./Buyers/TomatoBuy";
import HandicraftComp from "./Companies/HandicraftComp";
import TextileComp from "./Companies/TextileComp";
import SharmaPlasticComp from "./Companies/SharmaplasComp";
import MKHandicomp from "./Companies/MkhandComp";
import JRCraftComp from "./Companies/JrcraftComp";
import MilanEntertainmentComp from "./Companies/MilanEntertainmentComp";
import KhushiElectronicsComp from "./Companies/KhushiElectronicsComp";
import MarvelEnterpriseComp from "./Companies/MarvelEnterpriseComp";
import IEEngineeringWorksComp from "./Companies/Ieengineering";
import JayantipurFlourMillComp from "./Companies/JayantipurFlourMillComp";
import SinghSportsComp from "./Companies/SinghSportsComp";
import BharatTradingComp from "./Companies/BharatTradingComp";
import PlasticContainerBuy from "./Buyers/PlasticContainerBuy";
import GarlicBuy from "./Buyers/GarlicBuy";
import RiceBuy from "./Buyers/RiceBuy";
import MaizeBuy from "./Buyers/MaizeBuy";
import PalmOilBuy from "./Buyers/PalmoilBuy";
import Disclaimer from "./Pages/Disclamer";
import Complaint from "./Pages/Complaint";
import Refund from "./Pages/Refund";
import WaterTank from "./Products/WaterTank";
import Clothing from "./Products/Clothes";
import BusinessLicense from "./Products/Businesslisence";
import BrassComponents from "./Products/BrassComponent";
import Fabric from "./Products/Febrics";
import Detergent from "./Products/Detergent";
import HingsAndNipple from "./Products/Hings&nipple";
import JuteBags from "./Products/Jutebags";
import Scrap from "./Products/Scrap";
import PeanutBuy from "./Buyers/PeanutBuy";
import EyeDropsBuy from "./Buyers/EyeDrop";
import CeramicFloorTilesBuy from "./Buyers/CeramicFloorTilesBuys";
import PolyresinBearBuy from "./Buyers/Statue";
import SurgicalGlovesBuy from "./Buyers/Gloves";
import FreshGreenChilliBuy from "./Buyers/Greenchili";
import RccCompoundWallBuy from "./Buyers/RccMount";
import PulsesBuy from "./Buyers/PulsesBuy";
import CorianderLeavesBuy from "./Buyers/CoorianderBuy";
import TobaccoLeavesBuy from "./Buyers/TombacoBuy";
import BayLeavesBuy from "./Buyers/Bayleaves";
import MoringaDryLeavesBuy from "./Buyers/MoringaBuy";
import GroundnutBuy from "./Buyers/GroundnutBuy";
import BhadohiArtsWeaveComp from "./Companies/Bhadoicom";
import FaizanAndSonsCarpetsComp from "./Companies/FaizanComp";
import WoltzEnergyComp from "./Companies/WoltzEnergyComp";
import DivineCeramicaComp from "./Companies/DivineCeramicaComp";
import SabitRugsComp from "./Companies/SabitRugsComp";
import FortuneSteelComp from "./Companies/FortuneSteelComp";
import NidaTannersComp from "./Companies/NidaTannersComp";
import SantoshTradingComp from "./Companies/SantoshTradingComp";
import JaipurArtRugsComp from "./Companies/JaipurArtRugsComp";
import RugBeautyComp from "./Companies/RugsBeauty";
import KingPureComp from "./Companies/KingPureComp";
import SMFashionsComp from "./Companies/SmFashion";
import RuhaanEnterprisesComp from "./Companies/RuhaanEnterprisesComp";
import VijendraComp from "./Companies/VijendraComp";
import BusinessLicenceComp from "./Companies/BussinessLicence";
import JaiAmbeEnterprisesComp from "./Companies/JaiAmbeEnterprisesComp";
import ChamundaBrassComp from "./Companies/ChamundaBrass";
import PlastoTechContainersComp from "./Companies/PlastoComp";
import JayDevGarmentsComp from "./Companies/JaidevGarment";
import AmorraEnterpriseComp from "./Companies/AmorraEnterpriseComp";
import VishwakarmaEnterprisesComp from "./Companies/VishwakarmaEnterprisesComp";
import JeevanSecurityCompanyComp from "./Companies/JeevanSecurity";
import RahulEnterprisesComp from "./Companies/RahulEnterComp";
import SheemoAgroComp from "./Companies/SheemaComp";
import ShivShaktiLoomtexComp from "./Companies/ShivshaktiComp";
import RadiantStarVenturesComp from "./Companies/PulsesComp";
import BhushanPolymersComp from "./Companies/BhushanPolymersComp";
import YugPlasticComp from "./Companies/YugPlasticComp";
import FullAndFinalComp from "./Companies/FullAndFinalComp";
import JaiMaaLaxmiTradersComp from "./Companies/JaiMaaLakshmi";
import SriBalajiIndustriesComp from "./Companies/SriBalajiIndustriesComp";
import HariOmIndustriesComp from "./Companies/Haricomp";
import VighneshEnterprisesComp from "./Companies/VighneshEnterprisesComp";
import PulsesDealer from "./Products/Pulses";
import SpicesFoodProducts from "./Products/SpicesProduct";
import IronHammer from "./Products/IronHammer";
import Rocks from "./Products/Rockts";
import SanitaryHardware from "./Products/SanitaryHardware";
import RainCoutComponent from "./Products/RainCout";
import PlantComponent from "./Products/PlantsComp";
import CarAccessoriesComponent from "./Products/CarAccessories";
import PackingClipsComponent from "./Products/PackingClip";
import InteriorDesignerComponent from "./Products/InteriorDesigner";
import Labequipment from "./Products/Labequipment";
import MdNurseryComp from "./Companies/MdNurseryComp";
import TheWhiteLabelingComp from "./Companies/TheWhiteLabelingComp";
import ModiCareComp from "./Companies/ModiCareComp";
import JaipurPrimeComp from "./Companies/JaipurPrimeComp";
import SabyaCollectionComp from "./Companies/SabyaCollectionComp";
import JaipurHastkarComp from "./Companies/JaipurHastkarComp";
import SunitaEnterprisesComp from "./Companies/sunitaEnterprises";
import PihuAutomotiveComp from "./Companies/PihuAutomotiveComp";
import CrodniksComp from "./Companies/CrodniksComp";
import RozeeTechnistComp from "./Companies/RozeeTechnistComp";
import SaqibComp from "./Companies/SaqibComp";
import SterlingManufacturingCoComp from "./Companies/Sterlingcomp";
import JeeraBuy from "./Buyers/JeeraBuys";
import CloveBuy from "./Buyers/CloveBuy";
import FennelSeedsBuy from "./Buyers/FennelSeedsBuys";
import MachineManufacturer from "./Products/MachineManufacturer";
import PotatoSuppliers from "./Products/PotatoSuppliers";
import MarineItems from "./Products/MarineItems";
import WireSuppliers from "./Products/WireSuppliers";
import GranulesSuppliers from "./Products/GranulesSuppliers";
import GemstonesSuppliers from "./Products/GemstonesSuppliers";
import BananaPowderSuppliers from "./Products/BananaPowderSuppliers";
import SesameSeedsSuppliers from "./Products/SesameSeedsSuppliers";
import KrishnaEnterprisesComp from "./Companies/KrishnaEnterprisesComp";
import PandeyGarmentComp from "./Companies/PandeyGarmentComp";
import RudraAgroFoodComp from "./Companies/RudraAgroFoodComp";
import TabassumAutomationsComp from "./Companies/TabassumAutomationsComp";
import CrystalCreationComp from "./Companies/CrystalCreationComp";
import WellcabWindingWireComp from "./Companies/WellcabWindingWireComp";
import SuratEngineeringPlasticComp from "./Companies/suratEngineeringPlastic";
import TrishulaGlobalShippingComp from "./Companies/TrishulaGlobalShippingComp";
import ShyamTradingComp from "./Companies/ShyamTradingComp";
import MedicineStore from "./Products/Medicines";
import Footwear from "./Categoriess/Footwear";
import ElectricProducts from "./Categoriess/ElectricProducts";
import BlackPepperBuy from "./Buyers/Blackpaperbuy";
import RedChilliBuy from "./Buyers/RedChilliBuy";
import MustardBuy from "./Buyers/MustardBuy";
import DoorMateStore from "./Products/DoorMateStore";
import HardwareStore from "./Products/HardwareStore";
import PVCResinStore from "./Products/PVCResinStore";
import SakthiTexComp from "./Companies/SakthiTexComp";
import ToursAndTravel from "./Products/ToursAndTravel";
import SaffronManufacturerStore from "./Products/Saffron";
import YellowMaizeManufacturerStore from "./Products/YellowMaize";
import WireMeshManufacturerStore from "./Products/WireMesh";
import SuitcaseManufacturerStore from "./Products/SuitcaseManufacturer";
import DryFruitsManufacturerStore from "./Products/Dryfruits";
import RccCoverBlocksManufacturerStore from "./Products/RccCoverBlock";
import BuckleManufacturerStore from "./Products/BuckleManufacturer";
import TalukdarStoreComp from "./Companies/TalukdarStore";
import EarthsNatureComp from "./Companies/EarthNatureComp";
import KhodalEnterprisesComp from "./Companies/KhodalEnterprisesComp";
import RatanHandloomComp from "./Companies/RatanHandloom";
import AshaPureHardwareComp from "./Companies/AshaPureHardware";
import RupaliBengalTextileComp from "./Companies/rupaliBengalTextile";
import ManglamPlastComp from "./Companies/ManglamComp";
import AdvancePolyPackComp from "./Companies/AdvancePolyPackComp";
import MSHalaiComp from "./Companies/MSHalaiComp";
import BrindaImpexComp from "./Companies/BrindaImpexComp";
import AromaSpiceComp from "./Companies/AromaSpiceComp";
import VibrantColortechComp from "./Companies/VibrantColortechComp";
import SarikGarmentsComp from "./Companies/SarikComp";
import SwanTextilesComp from "./Companies/SwanTextilesComp";
import BlacksmithMetalCraftsComp from "./Companies/Blacksmith";
import SidhhiVinayakMetalComp from "./Companies/Shidhivinayak";
import MizaanTheTripHouseComp from "./Companies/MizaanTheTripHouseComp";
import JKGroupComp from "./Companies/JKGroupComp";
import SandeshDurgawaleComp from "./Companies/SandeshDurgawale";
import RiyonPumpComp from "./Companies/RiyonPumpComp";
import VmBlissComp from "./Companies/VmBlissComp";
import LaxminarainAndCompanyComp from "./Companies/Laxmicomp";
import VijayaIndustriesComp from "./Companies/VijayaIndustriesComp";
import JindalPlasticIndustriesComp from "./Companies/JindalPlasticIndustries";
import LidderEnterprisesComp from "./Companies/LidderEnterprisesComp";
import JayDadaEnterpriseComp from "./Companies/JayDadaEnterpriseComp";
import HvEnterprisesComp from "./Companies/HvEnterprisesComp";
import RnMarketingComp from "./Companies/RnMarketingComp";
import ShreeShivShaktiComp from "./Companies/shreeshivcomp";
import ExportPalletizationComp from "./Companies/ExportpallComp";
import OceanVidyaComp from "./Companies/OceanVidyaComp";
import NobleFashionComp from "./Companies/NoblefashionComp";
import RamcharanEnterprisesComp from "./Companies/RamcharanEnterprisesComp";
import HariTextileComp from "./Companies/HariTextil";
import MauliAgroFarmComp from "./Companies/MauliAgroFarmComp";
import GasControlStore from "./Products/GascontrolStore";
import PoultryFarmStore from "./Products/PoultryFarmStore";
import HumicFertilizersStore from "./Products/FertilizersManufac";
import LubricantSupplier from "./Products/LubricantSupplier";
import ToysSupplier from "./Products/ToysSupplier";
import SiddhiCollectionComp from "./Companies/SiddhiCollectionComp";
import FusionGlassConceptComp from "./Companies/FusionGlassConceptComp";
import NiwarCornerComp from "./Companies/NiwarCornerComp";
import BkAgriculturalComp from "./Companies/BkAgriculturalComp";
import MagnaMaterComp from "./Companies/MagnaMater";
import AmbikaBiochemComp from "./Companies/Ambikacomp";
import KunalEngineeringWorksComp from "./Companies/kunalEngineeringcomp";
import CredoExportsComp from "./Companies/CredoExportsComp";
import BhugraInteriorComp from "./Companies/BhugraInteriorComp";
import RichDecorComp from "./Companies/RichDecorComp";
import SaifuddinEnterpriseComp from "./Companies/Safrudincomp";
import JaiBabaMetalComp from "./Companies/JaiBabaMetalComp";
import SilverFastenersComp from "./Companies/Silverfastcomp";
import RaviFastenersComp from "./Companies/Ravifastner";
import FlonexLubricantComp from "./Companies/flonexLubricant";
import StarBrassIndustriesComp from "./Companies/StarBrassIndustriesComp";
import PKSportsComp from "./Companies/PKSportsComp";
import SRMSportsComp from "./Companies/SRMSportsComp";
import ShadabCricketSportComp from "./Companies/ShadabCricketSportComp";
import KhanBarrelSuppliersComp from "./Companies/KhanBarrelSuppliersComp";
import ComputerAccessoriesComp from "./Companies/ComputerAssessories";
import BedsheetBuy from "./Buyers/BedsheetBuy";
import TurmericBuy from "./Buyers/TurmericBuy";
import ComputerStore from "./Products/ComputerStores";
import BeautyDealer from "./Products/BeautyDealer";
import FootwearDealers from "./Products/FootwearDealers";
import CandleDealers from "./Products/CandleDealers";
import FurnitureDealers from "./Products/Furnituredealers";
import GasLighterBuy from "./Buyers/GasLighterBuy";
import ForeverGreenNurseryComp from "./Companies/ForeverGreenNurseryComp";
import MAAPadmawatiEnterprisesComp from "./Companies/MAAPadmawatiEnterprisesComp";
import StarTradersComp from "./Companies/Startradercomp";
import TrnatvaBeautyComp from "./Companies/Trnvbeautycomp";
import ShreeGaneshFootWearComp from "./Companies/ShreeGaneshFootWearComp";
import MilapCosmeticsComp from "./Companies/MilapcosmenticComp";
import AmodaCandlesComp from "./Companies/AmodaCandlesComp";
import PinkRootComp from "./Companies/PinkRootComp";
import KANAcreationsComp from "./Companies/Kanacomp";
import PositiveAngleComp from "./Companies/PositiveangleComp";
import AmmaEnterprisesComp from "./Companies/AmmaEnterprisesComp";
import SlipoverPvtLtdComp from "./Companies/SlipoverPvtLtdComp";
import ShoeArtIndiaComp from "./Companies/ShoeArtIndiaComp";
import ColorsQueenComp from "./Companies/ColorsQueenComp";
import AshimaFootwearComp from "./Companies/AshimaFootwearComp";
import RUInnovationComp from "./Companies/RUInnovationComp";
import TribalikaLifestyleComp from "./Companies/TriablelifeComp";
import SBJInternationalComp from "./Companies/SBJInternationalComp";
import HariTradingCompanyComp from "./Companies/HariTradingCompanyComp";
import BajrangStoneArtsComp from "./Companies/BajrangStoneArtsComp";
import FlorishProfessionalComp from "./Companies/FlorishProfessionalComp";
import MacroFootwearComp from "./Companies/MacroFootwearComp";
import NaturalAromaComp from "./Companies/NaturalAromaComp";
import RBTPPrivateLimitedComp from "./Companies/RBTPPrivateLimitedComp";
import ViraniRadiantComp from "./Companies/ViraniRadiantComp";
import MHHandicraftsComp from "./Companies/MHHandicraftsComp";
import DhramaGoodsExportsComp from "./Companies/DhramaGoodsExportsComp";
import WalavalkarMasaleComp from "./Companies/WalavalkarMasaleComp";
import NoxbeatComp from "./Companies/NoxbeatComp";
import InanulEnterprisesComp from "./Companies/InanulEnterprisesComp";
import VarshaFabricationComp from "./Companies/VarshaFabricationComp";
import PlazaChemicalComp from "./Companies/PlazaChemicalComp";
import JBOverseasComp from "./Companies/JBOverseasComp";
import RJOldIronAndOldTayerComp from "./Companies/RJOldIronAndOldTayerComp";
import PerfectMechanicalFabComp from "./Companies/PerfectMechanicalFabComp";
import MarcosRecyclingComp from "./Companies/MarcosRecyclingComp";
import HeeraCollectionsComp from "./Companies/HeeraCollectionsComp";
import NarmadaShivlingStoneComp from "./Companies/NarmadaShivlingStoneComp";
import NewjenFabricsComp from "./Companies/NewjenFabricsComp";
import MSBasuTextileComp from "./Companies/MSBasuTextileComp";
import PharmaCityComp from "./Companies/PharmaCityComp";
import MAndSonsComp from "./Companies/MAndSonsComp";
import EagleExportsComp from "./Companies/EagleExportsComp";
import WinnerNipponComp from "./Companies/WinnerNipponComp";
import TadikondaExportsComp from "./Companies/TadikondaExportsComp";
import JoyaInternationalComp from "./Companies/JoyaInternationalComp";
import GlamstoneCeramicComp from "./Companies/GlamstoneCeramicComp";
import ProtectiveLeatherComp from "./Companies/ProtectiveLeatherComp";
import AZFlowerComp from "./Companies/AZFlowerComp";
import JhankarBangelsComp from "./Companies/Janakbanglescomp";
import SlotanSolutionsComp from "./Companies/SlotanSolutionsComp";
import CorporateGiftsStore from "./Products/GiftsStore";
import FoodProductsStore from "./Products/FoodProductsStore";
import Testing from "./Pages/Testing";
import MasumanEnviroEngineeringComp from "./Companies/MasumEnviron";
import MRTradingComp from "./Companies/MRTradingComp";
import PatniPumpsLLPComp from "./Companies/PatnipumpsLLp";
import AscentWaterPurificationComp from "./Companies/AscentWaterPuri";
import ShrihaanAgroEximComp from "./Companies/ShrihaanAgroEximComp";
import BharatProcessEquipmentComp from "./Companies/BharatProcessEquipmentComp";
import CalcuttaTradingCentreComp from "./Companies/CalcuttaTradingCentreComp";
import AlphaPipingSystemComp from "./Companies/AlphaPipingSystemComp";
import SrinivasaAgenciesComp from "./Companies/SrinivasaAgenciesCom";
import OzoneStudioComp from "./Companies/OzoneStudioComp";
import GopiMetalicComp from "./Companies/GopimetalicComp";
import JaiShreeRamRubberComp from "./Companies/JaiShreeRamRubberComp";
import SudarshanAndCompanyComp from "./Companies/SudarshanAndCompanyComp";
import NewIndiaGlobalEnterprisesComp from "./Companies/NewIndiaGlobalEnterprisesComp";
import SHameemMartGalleryComp from "./Companies/SheemComp";
import ManufactureTrophyCorporateGiftsComp from "./Companies/ManufactureTrophyCorporateGiftsComp";
import GuruAlankarEngineeringComp from "./Companies/GuruAlankarEngineeringComp";
import KarthikeyaWaterComp from "./Companies/KarthikeyaWaterComp";
import QudratGemsMineralsComp from "./Companies/QudratGemsMineralsComp";
import Tubelights from "./Products/Tubelights";
import Paints from "./Products/Paints";
import AgmecoFaucetsComp from "./Companies/AgemefacutesComp";
import PatraFashionComp from "./Companies/PatraFashionComp";
import PrajwalPolyplastComp from "./Companies/Prajwatcomp";
import YSEnterprisesComp from "./Companies/YSenterprisesComp";
import MohanjaliHerbalTradingComp from "./Companies/MohanjaliHerbalTradingComp";
import NeoPolyplastComp from "./Companies/Neoplatcomp";
import RajyogPaintsComp from "./Companies/RajyogPaintsComp";
import MaxifloJayHydraulicComp from "./Companies/MaxihydrolixComp";
import VardhmanEnterprisesComp from "./Companies/VardhmanEnterprisesComp";
import Usacountry from "./Countries/Usa";
import SaraswatiEnterprisesComp from "./Companies/SaraswatiEnterprisesComp";
import SVPowerSystemComp from "./Companies/SVpowerComp";
import KKEnterpriseComp from "./Companies/KKenterprises";
import DubaiCountry from "./Countries/DubaiCountry";
import AustraliaCountry from "./Countries/AustrlisCountry";
import GermanyCountry from "./Countries/GermanyCountry";
import ChinaCountry from "./Countries/ChinaCountry";
import BapasitaramPolymerComp from "./Companies/Bapsitaramcomp";
import LivTechnologyComp from "./Companies/LivtechnologyComp";
import UkCountry from "./Countries/UkCountry";
import CanadaCountry from "./Countries/CanadaCoutry";
import SaudiCountry from "./Countries/SaudiCountry";
import OmanCountry from "./Countries/OmanCountry";
import SingaporeCountry from "./Countries/SingaporeCountry";
import NetherlandCountry from "./Countries/NetherlandContry";
import AllCountries from "./Countries/AllCountries";
import DoorHandleComp from "./Products/DoorHandlecomp";
import TeaSupplierComp from "./Products/TeaSupplier";
import RaaveEnterprisesComp from "./Companies/RaviEnterprisesComp";
import MahadevEnterprisesComp from "./Companies/MahadevEnterprisesComp";
import JoinMDAtPragjyotishTeaComp from "./Companies/JoinMDAtPragjyotishTeaComp";
import BhagyalaxmiProductsComp from "./Companies/BhagyalaxmiComp";
import SumerClothCompanyComp from "./Companies/SumerClothCompanyComp";
import UmangBadiFactoryTextileComp from "./Companies/UmangBadiFactoryTextileComp";
import PrakashHardwareComp from "./Companies/PrakashHardwareComp";
import VerticalSupportsComp from "./Companies/VerticalSupportsComp";
import KaivalyaOrganicsComp from "./Companies/KavylanOrgaincomp";
import CoffeeBeansBuy from "./Buyers/CoffeeBeansBuy";
import LiftComponents from "./Products/LiftsComponent";
import SunrisePolymersComp from "./Companies/SunrisePolymerComp";
import PolyanaPipesComp from "./Companies/PolyanaPipesComp";
import PortableOfficeCabin from "./Products/PortableOfficeCabin";
import FruitComponents from "./Products/FruitComponents";
import TrothExportsComp from "./Companies/TrothExportsComp";
import BikeshAgarbattiComp from "./Companies/BikeshagarbatiComp";
import FlourMillComponents from "./Products/FlourMillComponents";
import FlourBuy from "./Buyers/FlourBuy";
import AgarbattiMachineBuy from "./Buyers/AgarbattiMachineBuys";
import PastaMachineBuy from "./Buyers/PastaMachineBuys";
import NoodleMachineBuy from "./Buyers/NoodleMachineBuy";
import MachineBuy from "./Buyers/BuyMachine";
import FreightForwardingComponent from "./Products/FreightForwarding";
import CoffeeComponent from "./Products/CoffeeComponent";
import MDSuhanExportsComp from "./Companies/SubhanExportsComp";
import SaiSamarthLogisticsComp from "./Companies/SaiSamarthLogisticsComp";
import AshifaNurseryComp from "./Companies/AshifaNurseryComp";
import VeerAndCompanyComp from "./Companies/VeerandComp";

import StationeryComponent from "./Products/StaionaryComp";
import CardamomManufactureComp from "./Companies/CardamomManufactureComp";
import LakshyaTradingCompanyComp from "./Companies/LakshayTradingComp";
import MohhaMadMonisComp from "./Companies/Mmcomp";
import ShreeBalajiDhoopTradersComp from "./Companies/BalajiDhoopComp";
import NisaFebricComp from "./Companies/Nisafabcomp";
import FirstBlog from "./Blogs/firstBlog";
import FirstCatlog from "./Catalog/FirstCatalog";
import SanidhyaInternationalComp from "./Companies/Groundnutcomp";
import FillerMasterbatchBuy from "./Buyers/FillerMasterbatchBuys";
import VishalEnterprisesComp from "./Companies/VishalEnterprisesComp";
import WeldtechCorporationComp from "./Companies/WeldingComp";
import EventPlanner from "./Products/EventOrganiser";
import BKEngineersChapatiMakingComp from "./Companies/Chappatimaking";
import PerfumePhafciallyComp from "./Companies/PerfumePhafciallyComp";
import RajeshBulbComp from "./Companies/RajeshBuld";
import RoyalEnterprisesComp from "./Companies/RoyalEnterprisesComp";
import AmbitionWeldIndustriesComp from "./Companies/AmbitionWeldIndustriesComp";
import AOneFiberMartComp from "./Companies/AOneFiberMartComp";
import RajasthanPlasticSyndicateComp from "./Companies/RajasthanPlasticSyndicateComp";
import NewEraAppliancesComp from "./Companies/NewEraAppliancesComp";
import SteviaDealer from "./Products/SteviaDealer";
import DakshAndCompanyComp from "./Companies/DakshAndComp";
import SMIndustriesComp from "./Companies/SMIndustriesComp";
import SecondCatalog from "./Catalog/SecondCatalog";
import GarlicSupplierStore from "./Products/GarlicStore";
import FreshhlyPickedComp from "./Companies/FreshhlyPickedComp";
import NavkarForgeIndustriesComp from "./Companies/NavkarForgeIndustriesComp";
import TriratnanavyanIntlEximComp from "./Companies/TriratnanavyanIntlEximComp";
import BilqeesRugsComp from "./Companies/BilqeesRugsComp";
import Navkar from "./Companies/NavkarForgeIndustriesComp";
import MetalFabricationStore from "./Products/MetalFabricationStore";
import MustardOilStore from "./Products/MustardOilStore";
import SomoSoftLuggageComp from "./Companies/SomoSoftLuggageComp";
import UmboodeepAdventuresComp from "./Companies/UmboodeepAdventuresComp";
import ShreeHiralalTelUdyogComp from "./Companies/ShreeHiralalTelUdyogComp";
import SujangarhTarpaulinTraderComp from "./Companies/SujangarhTarpaulinTraderComp";
import DhamaniEnterprisesComp from "./Companies/DhamaniEnterprisesComp";
import ShidhaTechnologiesComp from "./Companies/ShidhaTechnologiesComp";
import ABInternationalComp from "./Companies/ABInternationalComp";
import LuckyEnterprisesComp from "./Companies/LuckyEnterprisesComp";
import OmWoodsComp from "./Companies/OmWoodsComp";
import ThirdCatalog from "./Catalog/ThirdCatalog";
import FourthCatalog from "./Catalog/FourthCatalog";
import FifthCatalog from "./Catalog/Fifthcatalog";
import SixthCatalog from "./Catalog/SixthCatalog";
import SeventhCatalog from "./Catalog/SeventhCatalog";
import RidhiEnterprisesComp from "./Companies/RidhiEnterprisesComp";
import JaiMaaKaliElectricalsComp from "./Companies/JaiMaaKaliElectricalsComp";
import TempoInstrumentsComp from "./Companies/TempoInstrumentsComp";
import ZionIndustriesComp from "./Companies/ZionIndustriesComp";
import EightCatalog from "./Catalog/EightCatalog";
import HussainEnterprisesComp from "./Companies/HussainEnterprisesComp";
import ShreeVishwakarmaHandicraftsComp from "./Companies/ShreeVishwakarmaHandicraftsComp";
import HammercoalComp from "./Companies/HammercoalComp";
import ShamaliPolymatsComp from "./Companies/ShamaliPolymatsComp";
import AmolHydroEngineersComp from "./Companies/AmolHydroEngineersComp";
import VSHandicraftsComp from "./Companies/VSHandicraftsComp";
import NineCatalog from "./Catalog/NineCatalog";
import JaiShreeKrishnaDecorationComp from "./Companies/JaiShreeKrishnaDecorationComp";
import TenthCatalog from "./Catalog/TenthCatalog";
import EleventhCatalog from "./Catalog/EleventhCatalog";
import TwelthCatalog from "./Catalog/TwelveCatalog";
import DiaperSeller from "./Products/DiaperSaler";
import Pad from "./Products/PadSupplier";
import Handloom from "./Products/Handloom";
import SolarPanels from "./Products/SolarPanels";
import SecondBlog from "./Blogs/B2b-marketplace";
import FebrolElevatorEscalatorComp from "./Companies/FebrolElevatorEscalatorComp";
import RotechHealthcareComp from "./Companies/RotechHealthcareComp";
import EaseplusHealthcareComp from "./Companies/EaseplusHealthcareComp";
import AMSonsComp from "./Companies/AMSonsComp";
import LavishGanwaniComp from "./Companies/LavishGanwaniComp";
import MokshitDrapesComp from "./Companies/MokshitDrapesComp";
import ManishTradingCoComp from "./Companies/ManishTradingCoComp ";
import GeetaTextilesComp from "./Companies/GeetaTextilesComp";
import DaduDayalHosieryComp from "./Companies/DaduDayalHosieryComp";
import PurvanshElectricalComp from "./Companies/PurvanshElectricalComp";
import AnokhiTextileComp from "./Companies/AnokhiTextileComp";
import DSKDecorComp from "./Companies/DSKDecorComp";
import DoorLockAndTradingComp from "./Companies/Doorlokand handle";
import AsSportsCompanyComp from "./Companies/AsSportsCompanyComp";
import SsFabricatorsComp from "./Companies/SsFabricatorsComp";
import MahaveerGlassAndAluminiumWorksComp from "./Companies/MahaveerGlassAndAluminiumWorksComp";
import Sarees from "./Products/SareesDealer";
import Pipes from "./Products/Pipes";
import Pumpsupplier from "./Products/pumpSupplier";
import TShirts from "./Products/tshirtSupplier";
import Undergarments from "./Products/Undergarment";
import RiceDealers from "./Products/RiceDealer";
import JewelryDealers from "./Products/JewelryDealers";
import MBArtificialComp from "./Companies/MBArtificialComp";
import FilosInternationalComp from "./Companies/FilosInternationalComp";
import ISBBagsComp from "./Companies/ISBBagsComp";
import SunAgencyComp from "./Companies/SunAgencyComp";
import ThesisComp from "./Companies/ThesisComp";
import ThirteenCatalog from "./Catalog/ThirteenCatalog";
import FourteenCatalog from "./Catalog/FourteenCatalog";
import FifteenCatalog from "./Catalog/FifteenCatalog";
import SixteenCatalog from "./Catalog/SixteenCatalog";
import CurtainDealers from "./Products/CurtainDealers";
import ZipperDealers from "./Products/ZipperDealers";
import FaizanZippersComp from "./Companies/FaizanZippersComp";
import KanakdharaEnterprisComp from "./Companies/KanakdharaEnterprisComp";
import RavanMeerutComp from "./Companies/RavanMeerutComp";
import DollarEquipmentsComp from "./Companies/DollarEquipmentsComp";
import MittiwareIndiaComp from "./Companies/MittiwareIndiaComp";
import Utensils from "./Products/Utensils";
import RobustechAlloysStore from "./Products/RobustechAlloysStore";
import Sugarcane from "./Products/Suragcane";
import Groceries from "./Products/GroceseryStore";
import Multanimiiti from "./Products/Multanimitti";
import AkashEnterpriseComp from "./Companies/AkashEnterpriseComp";
import RobustechAlloysComp from "./Companies/RobustechAlloysComp";
import AbhinavHodlaComp from "./Companies/AbhinavHodlaComp";
import ABKGlobalImpexComp from "./Companies/ABKGlobalImpexComp";
import OptimalSurgicalsComp from "./Companies/OptimalSurgicalsComp";
import AmirajMetalcraftComp from "./Companies/AmirajMetalcraftComp";
import OmEximTradersComp from "./Companies/OmEximTradersComponent";
import MuruganEnterprisesComp from "./Companies/MuruganEnterprisesComp";
import ShriNathDistributorsComp from "./Companies/ShriNathDistributorsComp";
import ShardaIndustriesComp from "./Companies/ShardaIndustriesComp";
import LaborateTechnocracyComp from "./Companies/LaborateTechnocracyComp";
import AppleBuy from "./Buyers/AppleBuy";
import GheeBuy from "./Buyers/GheeBuy";
import BananaBuy from "./Buyers/BananaBuys";
import ThirdBlog from "./Blogs/Unveiling-top-b2B";
import VegetableSupplier from "./Products/VegetableSupplier";
import DairyProductsSupplier from "./Products/DaityProducts";
import InsuranceServicesProvider from "./Products/InsuranceServicesProvider";
import SpiritualProductsProvider from "./Products/SpiritualProductsProvider";
import Rudrakhsh from "./Products/SpiritualProductsProvider";
import AditaPackagingsComp from "./Companies/Adityacomp";
import RadhePackagingComp from "./Companies/RadhePackagingComp";
import OnionBlogs from "./Blogs/Onion-blog";
import WallpapersProviders from "./Products/WallpapersProvider";
import ISIndianTradersComp from "./Companies/ISIndianTradersComp";
import SedsTradersComp from "./Companies/SedsTradersComp";
import JKWallpaperStudioComp from "./Companies/JKWallpaperStudioComp";
import WuhanMZElectronicComp from "./Companies/WuhanMZElectronicComp";
import MyStyleLookComp from "./Companies/MyStyleLookComps";
import YashEnterprisesComp from "./Companies/YashEnterprisesComp";
import ArtiqueCraftComp from "./Companies/ArtiqueCraftComp";
import InterfaceTechnologiesComp from "./Companies/InterfaceTechnologiesComp";
import ValuePlusInternationalComp from "./Companies/ValuePlusInternationalComp";
import SSPackagingComp from "./Companies/SSPackagingComp";
import SeventeenCatalog from "./Catalog/SeventeenCatalog";
import EighteenCatalogs from "./Catalog/EighteenCatalog";
import SofaProvider from "./Products/Sofadealer";
import AMFurnitureComp from "./Companies/AMFurnitureComp";
import AVABioSolutionsComp from "./Companies/AVABioSolutionsComp";
import MosaicArtCraftComp from "./Companies/MosaicArtCraftComp";
import BalajiPackagingComp from "./Companies/BalajiPackagingComp";
import MurariSnacksComp from "./Companies/MurariSnacksComp";
import TijTextileComps from "./Companies/TijTextileComp";
import ProbechoEnterpriseComp from "./Companies/ProbechoEnterpriseComp";
import JaggeryProviders from "./Products/JaggeryProvider";
import HerbalPowderProvider from "./Products/HerbalPowders";
import DisplaySweetCounterProvider from "./Products/DisplaySweetCounter";
import GreenChilliesProvider from "./Products/GreenChilli";
import GheeProvider from "./Products/GheeSeller";
import FourthBlogs from "./Blogs/AgricultureBlog";
import ShreeVaradVinayakComp from "./Companies/ShreeVaradVinayakComp";
import BalkrushnaBiotechComp from "./Companies/BalkrushnaBiotechComp";
import Sugar from "./Products/SugarSupplier";
import GandhiEnterprisesComp from "./Companies/GandhiEnterprisesComp";
import RudraEnterprisesComp from "./Companies/RudraComp";
import NineteenCatalogs from "./Catalog/NinteenCatalog";
import FifthhBlogs from "./Blogs/FashionBlog";
import AppleComponent from "./Products/Apple";
import BananaComponent from "./Products/Banana";
import TermericProducts from "./Products/Turmeric";
import Cardamom from "./Products/Cardamom";
import Plates from "./Products/Plates";
import Kidwear from "./Products/KidsWear";
import MarbleSupplier from "./Products/Marble";
import SixthBlogs from "./Blogs/ChemicalBlog";
import SeventhBlog from "./Blogs/SeventhBlog";
import BusinessConsultancyComp from "./Companies/BusinessConsultcomp";
import JiyanshInternationalComp from "./Companies/JiyanshInternationalComp ";
import EighthBlog from "./Blogs/FurnitureSuppliers";
import AshwinInternationalsComp from "./Companies/AshwinInternationalsComp";
import JhaveriOrganicFarmsComp from "./Companies/JhaveriOrganicFarmsComp";
import VyankateshMarketingComp from "./Companies/VyankateshMarketingComp ";
import DVPGroupsComp from "./Companies/DVPGroupsComp";
import DipakVishwasDhangarComp from "./Companies/DipakVishwasDhangarComp";
import GirjeLubricantComp from "./Companies/GirjeLubricantComp";
import IkEnterpriseComp from "./Companies/IkEnterpriseComp";
import JaiShriKrishnaGlassComp from "./Companies/JaiShriKrishnaGlassComp";
import KKGroupComp from "./Companies/KKGroupComp";
import TwentyCatalogs from "./Catalog/TwentyCatalog";
import RoyalServicesComp from "./Companies/RoyalServicesComp";
import RaaveeEnterpriseComp from "./Companies/RaaveeEnterpriseCom";
import AKTravels from "./Products/TaxiComp";
import HenanLangruiChemicalComp from "./Companies/HenanLangruiChemicalComp ";
import Toothpaste from "./Products/Toothpastes";
import TshirtBuy from "./Buyers/tshirtBuy";
import LeggingsBuy from "./Buyers/LeggingsBuy";
import ShortsBuy from "./Buyers/ShortsBuy";
import ShreeMahalakshmiProductsComp from "./Companies/ShreeMahaGhee";
import ShriSairamTexComp from "./Companies/ShriSairamTexComp";
import VdEnterpriseComp from "./Companies/VdEnterprises";
import DaVinciComp from "./Companies/DaVinciComp";
import HanumanTransportComp from "./Companies/HanumanTransportComp ";
import AJRIndustriesComp from "./Companies/AJRIndustriesComp ";
import FoodBlogs from "./Blogs/FoodBlog";
import MushroomComponent from "./Products/MushroomComponent";
import EggComponent from "./Products/EggComponent";
import IndustrialMachinery from "./Categoriess/IndustrialMachinery";
import JewelleryBlogs from "./Blogs/JewelleryBlog";
import HariniPetBottlesComponent from "./Products/BottlesComponent";
import PickleComponent from "./Products/Pickle";
import HoneyComponent from "./Products/Honeycomp";
import MeghaManufactureComp from "./Companies/MeghaManufactureComp";
import MahirSanitationComp from "./Companies/MahirSanitationComp";
import ViraniEnterprisesComp from "./Companies/Viranicamp";
import AnitaTextileComp from "./Companies/AnitaTextileComps";
import KingwoodHandicraftsComp from "./Companies/KingwoodHandicraftsComp";
import EthenticCraftComp from "./Companies/EthenticCraftCo";
import ADSPlayersComp from "./Companies/ADSPlayersComp";
import HealthcareBlogs from "./Blogs/HealthcareBlog";
import KrishnaPackagingComp from "./Companies/Krishnapacking";
import TwentyoneCatalogs from "./Catalog/TwentyoneBlog";
import LockComponent from "./Products/LockComponent";
import EscoLocksComp from "./Companies/EscoLocksComp";
import BrindavanUdyogIndiaComp from "./Companies/BrindaComp";
import GoldRingBuy from "./Buyers/GoldRingBuys";
import ElevatorServiceBuy from "./Buyers/ElevatorServiceBuys";
import NeelkanthExportAndImportComp from "./Companies/NeelkanthExportAndImportComp";
import ArishfaSilkComp from "./Companies/Ashrifacomp";
import YasaGeyserComp from "./Companies/YasaGeyserComp";
import ShubhClayArtComp from "./Companies/ShubhClayArtComp";
import CoconutPlantBuy from "./Buyers/PLantBuyer";
import LandingPages from "./Pages/LandingPage";
import BrassCoilsBuys from "./Buyers/BrasscomponentBuyer";
import CardamomBuy from "./Buyers/CardamomBuy";
import FabricBuy from "./Buyers/FabricBuy";
import ElectronicBuy from "./Buyers/ElectronicBuys";
import SareeBuy from "./Buyers/SareeBuy.jsx";
import GarmentBuy from "./Buyers/GarmentBuy.jsx";
import JaiBalajiIndustriesComp from "./Companies/JaiBalajiIndustriesComp.jsx";
import WireBuyes from "./Buyers/WireBuy.jsx";
import BagsBuy from "./Buyers/BagsBuy.jsx";
import SanitaryWareBuyer from "./Buyers/SanitaryWareBuyer.jsx";
import ClothesBuy from "./Buyers/ClothesBuy.jsx";
import ScrapBuy from "./Buyers/Scrapbuyer.jsx";
import TapeBuy from "./Buyers/TapeBuy.jsx";
import SagarTradingCompanyComp from "./Companies/SagarTradingcomp.jsx";
import MainBlogs from "./Blogs/MainBlog.jsx";
import BroomComponent from "./Products/BroomComponent.jsx";
import BanarasiSuitCollectionComponent from "./Products/BanarasiSuit.jsx";
import GuizhouSinodrillsComp from "./Companies/GuizhouSinodrillsCom.jsx";
import ArtfulEndeavorComp from "./Companies/ArtfulEndeavorCom.jsx";
import HandicraftBuy from "./Buyers/HandicraftBuy.jsx";
import TshirtBuyer from "./Buyers/TshirtBuyer.jsx";
import PerfumeBuyer from "./Buyers/PerfumeBuyer.jsx";
import ToyBuy from "./Buyers/ToyBuy.jsx";
import TrophyBuy from "./Buyers/TrophyBuyer.jsx";
import BatBuy from "./Buyers/BatBuyer.jsx";
import Bottlebuy from "./Buyers/BottleBuyer.jsx";
import Pharmabuyer from "./Buyers/Pharmabuyer.jsx";
import SolarEnergyBuy from "./Buyers/SolarEnergyBuyer.jsx";
import PicklesBuy from "./Buyers/PickleBuyer.jsx";
import TwentytwoCatalogs from "./Catalog/TwentyTwoCatalog.jsx";
import TwentythreeCatalog from "./Catalog/TwentythreeCatalog.jsx";
import UniformDealer from "./Products/Uniforms.jsx";
import TwentyfoutCatalog from "./Catalog/TwentyFourCatalog.jsx";
import Twentyfivecatalog from "./Catalog/TwentyFiveCatalog.jsx";
import AloeVeraComponent from "./Products/AloeveraComponent.jsx";
import TwentySixcatalog from "./Catalog/TwentySixCatalog.jsx";
import CocoPowderComponent from "./Products/Cocopowdercomp.jsx";
import NecklaseComponent from "./Products/NecklesProduct.jsx";
import CocoBuy from "./Buyers/CocoBuyer.jsx";
import MaskComponent from "./Products/Maskcomp.jsx";
import ShoesBuy from "./Buyers/ShoesBuyers.jsx";
import BeautyProductsBuy from "./Buyers/BeautyProductsBuys.jsx";
import TeaBuy from "./Buyers/Teabuyer.jsx";
import CusionComponent from "./Products/Cusion.jsx";
import CashewBuyer from "./Buyers/CashewBuyer.jsx";
import CushionBuyer from "./Buyers/CushionBuyer.jsx";
import ChairBuyer from "./Buyers/ChairBuyer.jsx";
import MobileAccessoriesBuyer from "./Buyers/MobileAccessoriesBuyers.jsx";
import ShirtBuyer from "./Buyers/ShirtBuyer.jsx";
import GranulesBuyer from "./Buyers/GranulesBuyer.jsx";
import TerracotaComponent from "./Products/TerracotaComp.jsx";
import MangoBuy from "./Buyers/MangoBuyer.jsx";
import CoconutBuy from "./Buyers/CoconutBuyer.jsx";
import TerracottaBuy from "./Buyers/TerracotaBuyers.jsx";
import DyeSellers from "./Products/DyeSeller.jsx";
import CowDungs from "./Products/CowDung.jsx";
import DyeBuy from "./Buyers/DyeProducts.jsx";
import HealthcareBuy from "./Buyers/HealthcareBuyers.jsx";
import AlarmProducts from "./Products/AlarmProducts.jsx";
import PoultryFarmBuyers from "./Buyers/PolutryFarm.jsx";
import IncenseDhoopConeBuy from "./Buyers/IncenseDhoopConeBuy.jsx";
import PumpBuy from "./Buyers/PumpBuyers.jsx";
import FurnitureBuy from "./Buyers/FurnitureBuy.jsx";
import SportsEquipmentBuy from "./Buyers/SportsBuyers.jsx";
import PipeBuy from "./Buyers/PipeBuyers.jsx";
import PaintBuy from "./Buyers/PaintBuyers.jsx";
import SpiceBuy from "./Buyers/SpiceBuy.jsx";
import CarpetBuy from "./Buyers/CarpetBuy.jsx";
import SnacksFoodBuy from "./Buyers/SnacksFoodBuy.jsx";
import DetergentBuy from "./Buyers/DetergentPowderBuy.jsx";
import HerbalProductsBuy from "./Buyers/HerbalProducts.jsx";
import FruitPowderBuy from "./Buyers/FruitPowderBuy.jsx";
import VegetablePowderBuy from "./Buyers/VegetablePowderBuy.jsx";
import DoorHandleBuy from "./Buyers/DoorhandleBuy.jsx";
import DoorLockBuy from "./Buyers/DoorLockBuy.jsx";
import Globalb2bPricess from "./Pages/GlobalPackage.jsx";

import VideoPopup from "./Components/popup.jsx";

function App() {
  return (
    // <UnderMentanceLanding />
    <div className="App">
      <Topbar />
      <Header />
      <ScrollToTop />
      <div className="mainContent">
        <AuthProvider>
          {/* <VideoPopup /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing-page" element={<LandingPages />} />
            <Route path="/post-requirement" element={<LandingPages />} />
            <Route path="/register-buyer" element={<Registration />} />
            <Route path="/register-company" element={<CompanyRegi />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/packages" element={<Prices />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/refund" element={<Refund />} />
            <Route
              path="/agriculture-farm-tools-suppliers"
              element={<Agriculture />}
            />
            <Route path="/testing" element={<Testing />} />

            {/* Buyers */}
            <Route path="/wheat/buyers" element={<WheatBuy />} />
            <Route path="/dryfruit/buyers" element={<DryFruitBuy />} />
            <Route
              path="/decorativeitem/buyers"
              element={<DecorativeItemBuy />}
            />
            <Route path="/coconutoil/buyers" element={<CoconutOilBuy />} />
            <Route path="/tomato/buyers" element={<TomatoBuy />} />
            <Route path="/garlic/buyers" element={<GarlicBuy />} />
            <Route path="/rice/buyers" element={<RiceBuy />} />
            <Route path="/maize/buyers" element={<MaizeBuy />} />
            <Route path="/palmoil/buyers" element={<PalmOilBuy />} />

            <Route path="/peanut/buyers" element={<PeanutBuy />} />
            <Route path="/statue/buyers" element={<PolyresinBearBuy />} />
            <Route path="/eyedrop/buyers" element={<EyeDropsBuy />} />
            <Route path="/gloves/buyers" element={<SurgicalGlovesBuy />} />
            <Route path="/pulses/buyers" element={<PulsesBuy />} />
            <Route
              path="/green/chilli/buyers"
              element={<FreshGreenChilliBuy />}
            />
            <Route
              path="/rcc/compounds/buyers"
              element={<RccCompoundWallBuy />}
            />
            <Route
              path="/ceramicftile/buyers"
              element={<CeramicFloorTilesBuy />}
            />

            <Route path="/coriander/buyers" element={<CorianderLeavesBuy />} />
            <Route path="/elevator-buyer" element={<ElevatorServiceBuy />} />
            <Route path="/tshirt" element={<TshirtBuyer />} />
            <Route path="/toy-buyer" element={<ToyBuy />} />
            <Route path="/trophy-buyer" element={<TrophyBuy />} />
            <Route path="/bat-buyer" element={<BatBuy />} />
            <Route path="/bottle-buyer" element={<Bottlebuy />} />
            <Route path="/pharma-buyer" element={<Pharmabuyer />} />
            <Route path="/perfume" element={<PerfumeBuyer />} />
            <Route path="/bayleaves/buyers" element={<BayLeavesBuy />} />
            <Route path="/moringa/buyers" element={<MoringaDryLeavesBuy />} />
            <Route path="/groundnut/buyers" element={<GroundnutBuy />} />
            <Route path="/TobaccoLeaves/buyers" element={<TobaccoLeavesBuy />} />

            <Route
              path="/plastic-container/buyers"
              element={<PlasticContainerBuy />}
            />
            <Route path="/Jeerabuy/buyers" element={<JeeraBuy />} />
            <Route path="/wirebuyer" element={<WireBuyes />} />
            <Route path="/clothes-buyer" element={<ClothesBuy />} />
            <Route path="/scrap-buyer" element={<ScrapBuy />} />
            <Route path="/tape-buyer" element={<TapeBuy />} />
            <Route path="/sanitary-buyer" element={<SanitaryWareBuyer />} />
            <Route path="/basgsbuyer" element={<BagsBuy />} />
            <Route path="/clovebuy/buyers" element={<CloveBuy />} />
            <Route path="/fennelseeds/buyers" element={<FennelSeedsBuy />} />
            <Route path="/blackpaper/buyers" element={<BlackPepperBuy />} />
            <Route path="/redchilli/buyers" element={<RedChilliBuy />} />
            <Route path="/mustured/buyers" element={<MustardBuy />} />
            <Route path="/bedsheet/buyers" element={<BedsheetBuy />} />
            <Route path="/turmeric/buyers" element={<TurmericBuy />} />
            <Route path="/plant-buyers" element={<CoconutPlantBuy />} />
            <Route path="/gaslighter/buyers" element={<GasLighterBuy />} />
            <Route path="/coffeebeanbuyer" element={<CoffeeBeansBuy />} />
            <Route path="/flourbuyers" element={<FlourBuy />} />
            <Route path="/agarbatimachine" element={<AgarbattiMachineBuy />} />
            <Route path="/pastamakingmachine" element={<PastaMachineBuy />} />
            <Route path="/noodlemachine" element={<NoodleMachineBuy />} />
            <Route path="/buymachines" element={<MachineBuy />} />
            <Route path="/fillermachine" element={<FillerMasterbatchBuy />} />
            <Route path="/applebuy" element={<AppleBuy />} />
            <Route path="/gheebuy" element={<GheeBuy />} />
            <Route path="/bananabuy" element={<BananaBuy />} />
            <Route path="/tshirtbuy" element={<TshirtBuy />} />
            <Route path="/leggingbuy" element={<LeggingsBuy />} />
            <Route path="/shortsbuyer" element={<ShortsBuy />} />
            <Route path="/brasscompobuyer" element={<BrassCoilsBuys />} />
            <Route path="/cardamombuy" element={<CardamomBuy />} />
            <Route path="/fabric-buyers" element={<FabricBuy />} />
            <Route path="/electronic-buyers" element={<ElectronicBuy />} />
            <Route path="/saree-buyers" element={<SareeBuy />} />
            <Route path="/garment-buyers" element={<GarmentBuy />} />

            {/* Categories */}
            <Route path="/health-beauty" element={<HealthAndBeauty />} />
            <Route path="/clothing-apparel-suppliers" element={<Fashion />} />
            <Route
              path="/industrial-chemicals-cleaning-chemicals"
              element={<Chemicals />}
            />
            <Route path="/gifts-items" element={<Gifts />} />
            <Route
              path="/industrial-machinery"
              element={<IndustrialMachinery />}
            />
            <Route
              path="/best-furnitures-supplier-in-india"
              element={<Furniture />}
            />
            <Route
              path="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
              element={<FoodPro />}
            />
            <Route path="/jewellery-necklaces-suppliers" element={<Jwellery />} />
            <Route
              path="/onion-seeds-dehydrated-onions-white"
              element={<MainRice />}
            />
            <Route path="/company/onions" element={<OnionComp />} />
            <Route path="/gold-ornaments-buyers" element={<GoldRingBuy />} />
            <Route path="/buyer/onions" element={<OnionBuy />} />
            <Route path="/buyer/potato" element={<PotatoBuy />} />
            <Route path="/handicraft-buyer" element={<HandicraftBuy />} />
            <Route path="/homeSupplies" element={<HomeSupplies />} />
            <Route path="/footwear" element={<Footwear />} />
            <Route path="/granules-buyers" element={<GranulesBuyer />} />

            <Route path="/electricprodcuts" element={<ElectricProducts />} />
            <Route path="/industrySupplies" element={<IndustrialSupplies />} />
            <Route path="/toolsequipment" element={<ToolsAndEquipment />} />
            {/* Products */}
            <Route path="/plastic" element={<MainPlastic />} />
            <Route path="/mask-dealer" element={<MaskComponent />} />
            <Route path="/shoes-dealer" element={<ShoesBuy />} />
            <Route path="mobile/accessories" element={<HomeDecor />} />
            <Route path="steel/utensils" element={<SteelUtensils />} />
            <Route path="seat/covers" element={<SeatCovers />} />
            <Route path="salts" element={<Salt />} />
            <Route path="arts" element={<Arts />} />
            <Route path="powertools" element={<PowerTools />} />
            <Route path="pooja/articles" element={<PoojaArticles />} />
            <Route path="cushion-dealer" element={<CusionComponent />} />
            <Route path="decorativeItems" element={<DecorativeItems />} />
            <Route path="sports/accessories" element={<SportsAccessories />} />
            <Route path="moneyexchange" element={<MoneyExchange />} />
            <Route path="handicraftItems" element={<HandicraftItems />} />
            <Route path="texttiledealer" element={<TextileDealers />} />
            <Route path="garmentdedealer" element={<GarmentDealers />} />
            <Route path="nacklesdedealer" element={<NecklaseComponent />} />
            <Route path="coco-powder-dealer" element={<CocoPowderComponent />} />
            <Route path="entertainmentevents" element={<EntertainmentEvents />} />
            <Route path="electronicgoods" element={<ElectronicsGoods />} />
            <Route path="alarm-dealers" element={<AlarmProducts />} />
            <Route path="bathwaredealers" element={<BathwareSupplier />} />
            <Route path="valveSupplier" element={<ValveSupplier />} />
            <Route path="whearsupplier" element={<WheatSupplier />} />
            <Route
              path="gymequipmentsupplier"
              element={<GymEquipmentsSupplier />}
            />
            <Route path="agroproducts" element={<AgroProductsSupplier />} />
            <Route path="copperproducts" element={<CopperSupplier />} />
            <Route path="eveyelctricbike" element={<EvBikesSupplier />} />
            <Route path="bagsandbeltdealer" element={<BagsAndBeltsSupplier />} />
            <Route path="laserproducts" element={<LaserProductsSupplier />} />
            <Route path="texttlie" element={<CeramicTilesSupplier />} />

            <Route path="watertank" element={<WaterTank />} />
            <Route path="clothes" element={<Clothing />} />
            <Route path="fabrics" element={<Fabric />} />
            <Route path="detergent" element={<Detergent />} />
            <Route path="jutebags" element={<JuteBags />} />
            <Route path="scrap" element={<Scrap />} />
            <Route path="hings&nipple" element={<HingsAndNipple />} />
            <Route path="brasscomponents" element={<BrassComponents />} />
            <Route path="businesslicense" element={<BusinessLicense />} />
            <Route path="rugsandcarpets" element={<RugsManufacturer />} />
            <Route
              path="leatherproducts"
              element={<LeatherProductsManufacturer />}
            />
            <Route path="pulses" element={<PulsesDealer />} />
            <Route path="spices-dealers" element={<SpicesFoodProducts />} />
            <Route path="ironhammer" element={<IronHammer />} />
            <Route path="rocks/dealer" element={<Rocks />} />
            <Route path="sanitary/hardware" element={<SanitaryHardware />} />
            <Route path="raincout/dealer" element={<RainCoutComponent />} />
            <Route path="plants/dealer" element={<PlantComponent />} />
            <Route path="caraccessories" element={<CarAccessoriesComponent />} />
            <Route path="packingclips" element={<PackingClipsComponent />} />
            <Route path="terracota-comp" element={<TerracotaComponent />} />
            <Route
              path="interior/designer"
              element={<InteriorDesignerComponent />}
            />
            <Route path="labequipments" element={<Labequipment />} />

            <Route path="machinemanufacturer" element={<MachineManufacturer />} />
            <Route path="potatosupplier" element={<PotatoSuppliers />} />
            <Route path="marineitems" element={<MarineItems />} />
            <Route path="wiresuppliers" element={<WireSuppliers />} />
            <Route path="granuless" element={<GranulesSuppliers />} />
            <Route path="gemstones" element={<GemstonesSuppliers />} />
            <Route path="bananapowder" element={<BananaPowderSuppliers />} />
            <Route path="sesameseeds" element={<SesameSeedsSuppliers />} />
            <Route path="medicinestore" element={<MedicineStore />} />
            <Route path="doormatestore" element={<DoorMateStore />} />
            <Route path="hardwarestore" element={<HardwareStore />} />
            <Route path="pvcrresins" element={<PVCResinStore />} />

            <Route path="tourandtravel" element={<ToursAndTravel />} />
            <Route path="detergent-buy" element={<DetergentBuy />} />
            <Route path="herbal-products-buy" element={<HerbalProductsBuy />} />
            <Route path="maizemanu" element={<YellowMaizeManufacturerStore />} />
            <Route path="wiremesh" element={<WireMeshManufacturerStore />} />
            <Route
              path="suitcasemanufacturer"
              element={<SuitcaseManufacturerStore />}
            />
            <Route
              path="saffron-manufacturer"
              element={<SaffronManufacturerStore />}
            />
            <Route
              path="dryfruitsmanu"
              element={<DryFruitsManufacturerStore />}
            />
            <Route
              path="rcccoverblocks"
              element={<RccCoverBlocksManufacturerStore />}
            />
            <Route
              path="bucklemanufacturer"
              element={<BuckleManufacturerStore />}
            />
            <Route path="gascontrolstore" element={<GasControlStore />} />
            <Route path="poulitryfarmstore" element={<PoultryFarmStore />} />
            <Route
              path="fertilizermanufacturer"
              element={<HumicFertilizersStore />}
            />

            <Route path="lubricantsupplier" element={<LubricantSupplier />} />
            <Route path="toysupplier" element={<ToysSupplier />} />
            <Route path="computerssupllier" element={<ComputerStore />} />
            <Route path="beautyproductsdealer" element={<BeautyDealer />} />
            <Route path="footweardealers" element={<FootwearDealers />} />
            <Route path="candledealers" element={<CandleDealers />} />
            <Route path="uniform-dealers" element={<UniformDealer />} />
            <Route path="alovera-dealers" element={<AloeVeraComponent />} />
            <Route
              path="best-furniture-suppliers-in-india"
              element={<FurnitureDealers />}
            />
            <Route path="giftsstore" element={<CorporateGiftsStore />} />
            <Route path="foodproductstore" element={<FoodProductsStore />} />
            <Route path="tubelights" element={<Tubelights />} />
            <Route path="teasupplier" element={<TeaSupplierComp />} />

            <Route path="paints" element={<Paints />} />
            <Route path="doors" element={<DoorHandleComp />} />
            <Route path="lifts" element={<LiftComponents />} />
            <Route path="portableofficecabin" element={<PortableOfficeCabin />} />
            <Route path="fruitscomponent" element={<FruitComponents />} />
            <Route path="flourmils" element={<FlourMillComponents />} />
            <Route
              path="freightforward"
              element={<FreightForwardingComponent />}
            />
            <Route path="coffee" element={<CoffeeComponent />} />
            <Route path="dye-seller" element={<DyeSellers />} />
            <Route path="cow-dung-seller" element={<CowDungs />} />
            <Route path="stationery" element={<StationeryComponent />} />
            <Route path="eventplanner" element={<EventPlanner />} />
            <Route path="stevia-dealer" element={<SteviaDealer />} />
            <Route path="gaslics" element={<GarlicSupplierStore />} />
            <Route path="metals-store" element={<MetalFabricationStore />} />
            <Route path="mustard-oil" element={<MustardOilStore />} />
            <Route path="diaper-seller" element={<DiaperSeller />} />
            <Route path="pad-seller" element={<Pad />} />
            <Route path="handloom" element={<Handloom />} />
            <Route path="solarpanel" element={<SolarPanels />} />
            <Route path="sareesdealer" element={<Sarees />} />
            <Route path="pipeseller" element={<Pipes />} />
            <Route path="pumpsupplier" element={<Pumpsupplier />} />
            <Route path="tshirt-seller" element={<TShirts />} />
            <Route path="undergarment-seller" element={<Undergarments />} />
            <Route path="rice-seller" element={<RiceDealers />} />
            <Route path="jewellery-seller" element={<JewelryDealers />} />
            <Route path="curtains-seller" element={<CurtainDealers />} />
            <Route path="zipper-seller" element={<ZipperDealers />} />
            <Route path="utensils-seller" element={<Utensils />} />
            <Route path="bushes-seller" element={<RobustechAlloysStore />} />
            <Route path="sugarcane-seller" element={<Sugarcane />} />
            <Route path="groceries-seller" element={<Groceries />} />
            <Route path="multanimitti-seller" element={<Multanimiiti />} />
            <Route path="rudrakh-seller" element={<Rudrakhsh />} />
            <Route path="wallpapers-seller" element={<WallpapersProviders />} />
            <Route path="sofa-seller" element={<SofaProvider />} />
            <Route path="jaggery-seller" element={<JaggeryProviders />} />
            <Route path="hearbal-seller" element={<HerbalPowderProvider />} />
            <Route
              path="greenchilli-seller"
              element={<GreenChilliesProvider />}
            />
            <Route path="ghee-seller" element={<GheeProvider />} />

            <Route
              path="sweetcounter-seller"
              element={<DisplaySweetCounterProvider />}
            />
            <Route path="sugar-seller" element={<Sugar />} />

            <Route path="apple-seller" element={<AppleComponent />} />
            <Route path="banana-seller" element={<BananaComponent />} />
            <Route path="termeric-seller" element={<TermericProducts />} />
            <Route path="cardamom-seller" element={<Cardamom />} />
            <Route path="plate-seller" element={<Plates />} />
            <Route path="kids-dress-seller" element={<Kidwear />} />
            <Route path="marble-seller" element={<MarbleSupplier />} />
            <Route path="rental-taxi" element={<AKTravels />} />
            <Route path="pickle-supplier" element={<PickleComponent />} />
            <Route path="honey-supplier" element={<HoneyComponent />} />
            <Route path="lock" element={<LockComponent />} />
            <Route path="broom" element={<BroomComponent />} />
            <Route
              path="suit-collection"
              element={<BanarasiSuitCollectionComponent />}
            />
            <Route
              path="bottles-supplier"
              element={<HariniPetBottlesComponent />}
            />
            <Route path="solar-energy" element={<SolarEnergyBuy />} />
            <Route path="pickle-buyer" element={<PicklesBuy />} />
            <Route path="coco-powder-buyer" element={<CocoBuy />} />
            <Route path="Beauty-products-buyer" element={<BeautyProductsBuy />} />
            <Route path="tea-buyer" element={<TeaBuy />} />
            <Route path="cashew-buyer" element={<CashewBuyer />} />
            <Route path="cushion-buyer" element={<CushionBuyer />} />
            <Route path="chair-buyer" element={<ChairBuyer />} />
            <Route
              path="mobile-accessories-buyer"
              element={<MobileAccessoriesBuyer />}
            />
            <Route path="shirt-buyer" element={<ShirtBuyer />} />
            <Route path="pipe-buyer" element={<PipeBuy />} />
            <Route path="spices-buyer" element={<SpiceBuy />} />
            <Route path="carpet-buyer" element={<CarpetBuy />} />
            <Route path="snacks-buyer" element={<SnacksFoodBuy />} />
            <Route path="paints-buyer" element={<PaintBuy />} />
            <Route path="sports-buyer" element={<SportsEquipmentBuy />} />
            <Route path="mango-buyer" element={<MangoBuy />} />
            <Route path="coconut-buyer" element={<CoconutBuy />} />
            <Route path="coconut-buyer" element={<CoconutBuy />} />
            <Route path="terracotta-buyer" element={<TerracottaBuy />} />
            <Route path="dye-buyer" element={<DyeBuy />} />
            <Route path="healthcare-products-buyer" element={<HealthcareBuy />} />
            <Route path="polutary-buyer" element={<PoultryFarmBuyers />} />
            <Route path="dhoop-buyer" element={<IncenseDhoopConeBuy />} />
            <Route path="pump-buyer" element={<PumpBuy />} />
            <Route path="furniture-buyer" element={<FurnitureBuy />} />
            <Route path="fruit-powder-buyer" element={<FruitPowderBuy />} />
            <Route path="door-handle-buyer" element={<DoorHandleBuy />} />
            <Route path="door-locks-buyer" element={<DoorLockBuy />} />
            <Route
              path="vegetable-powder-buyer"
              element={<VegetablePowderBuy />}
            />
            {/* Comapnies  here*/}
            <Route path="/guizhousindor" element={<GuizhouSinodrillsComp />} />
            <Route
              path="/megha-manufacturer"
              element={<MeghaManufactureComp />}
            />
            <Route path="/mahir-saniation" element={<MahirSanitationComp />} />
            <Route
              path="/balaji-industry"
              element={<JaiBalajiIndustriesComp />}
            />
            <Route path="/esco-lock-comp" element={<EscoLocksComp />} />
            <Route path="/arshifa-silk" element={<ArishfaSilkComp />} />
            <Route path="/yasageyser-comp" element={<YasaGeyserComp />} />
            <Route path="/subhclay-art" element={<ShubhClayArtComp />} />
            <Route
              path="/neelkanthexport"
              element={<NeelkanthExportAndImportComp />}
            />
            <Route
              path="/brindavan-comop"
              element={<BrindavanUdyogIndiaComp />}
            />
            <Route path="/krishna-packcomp" element={<KrishnaPackagingComp />} />
            <Route
              path="/sagartrading-comp"
              element={<SagarTradingCompanyComp />}
            />
            <Route path="/etheniccraft-comp" element={<EthenticCraftComp />} />
            <Route path="/adsplayer-comp" element={<ADSPlayersComp />} />
            <Route path="/anita-textile" element={<AnitaTextileComp />} />
            <Route
              path="/kingwood-handicraft"
              element={<KingwoodHandicraftsComp />}
            />
            <Route
              path="/virani-enterprises"
              element={<ViraniEnterprisesComp />}
            />
            <Route path="/plastic/company" element={<PlasticComp />} />
            <Route
              path="/homedecoration/company"
              element={<HomeDecorCompany />}
            />
            <Route path="/steel/company" element={<SteelCompany />} />
            <Route path="/herbal/company" element={<HerbalComp />} />
            <Route path="/seatcovers/company" element={<SeatCoverComp />} />
            <Route path="/salt/company" element={<SaltComp />} />
            <Route path="/arts/company" element={<ArtsComp />} />
            <Route
              path="/poojaArticles/company"
              element={<PoojaArticlesComp />}
            />
            <Route
              path="/sportsAccessories/company"
              element={<SportsAccessoriesComp />}
            />
            <Route
              path="/electribike/company"
              element={<EveyElectricBikeComp />}
            />
            <Route path="/moneyexhange/company" element={<MoneyExchangeComp />} />
            <Route path="/handicraft/company" element={<HandicraftComp />} />
            <Route path="/textile/company" element={<TextileComp />} />

            <Route
              path="/sharmaplasticcomp/company"
              element={<SharmaPlasticComp />}
            />
            <Route path="/mkhandi/company" element={<MKHandicomp />} />
            <Route path="/jrcraftcomp/company" element={<JRCraftComp />} />
            <Route
              path="/milanentertainmentcomp/company"
              element={<MilanEntertainmentComp />}
            />
            <Route
              path="/khushielectriccomp/company"
              element={<KhushiElectronicsComp />}
            />
            <Route
              path="/marvelenterpriceccomp/company"
              element={<MarvelEnterpriseComp />}
            />
            <Route
              path="/ieengineeringWorksComp/company"
              element={<IEEngineeringWorksComp />}
            />
            <Route
              path="/jayantipurFlourMillComp/company"
              element={<JayantipurFlourMillComp />}
            />
            <Route
              path="/singhsportscomp/company"
              element={<SinghSportsComp />}
            />
            <Route
              path="/bharattradingcomp/company"
              element={<BharatTradingComp />}
            />

            <Route path="/bhadoi/company" element={<BhadohiArtsWeaveComp />} />
            <Route path="/woltenergy/company" element={<WoltzEnergyComp />} />
            <Route path="/divne/company" element={<DivineCeramicaComp />} />
            <Route path="/fortunesteel/company" element={<FortuneSteelComp />} />
            <Route
              path="/nidatannersComp/company"
              element={<NidaTannersComp />}
            />
            <Route path="/sabitrugs/company" element={<SabitRugsComp />} />
            <Route
              path="/santoshtrading/company"
              element={<SantoshTradingComp />}
            />
            <Route
              path="/jaipurartrugs/company"
              element={<JaipurArtRugsComp />}
            />
            <Route path="/rungbeauty/company" element={<RugBeautyComp />} />
            <Route path="/kingPure/company" element={<KingPureComp />} />
            <Route path="/smfashion/company" element={<SMFashionsComp />} />
            <Route
              path="/ruhanenterprices/company"
              element={<RuhaanEnterprisesComp />}
            />
            <Route path="/vijendercomp/company" element={<VijendraComp />} />

            <Route
              path="/faizanCarpetComp/company"
              element={<FaizanAndSonsCarpetsComp />}
            />
            <Route
              path="/businesslicence/company"
              element={<BusinessLicenceComp />}
            />
            <Route
              path="/jaiambeenterprises/company"
              element={<JaiAmbeEnterprisesComp />}
            />
            <Route
              path="/chamundabrass/company"
              element={<ChamundaBrassComp />}
            />
            <Route
              path="/plastocomp/company"
              element={<PlastoTechContainersComp />}
            />
            <Route
              path="/jaidevgarment/company"
              element={<JayDevGarmentsComp />}
            />
            <Route
              path="/amoraenterprises/company"
              element={<AmorraEnterpriseComp />}
            />
            <Route
              path="/vishwakarma/company"
              element={<VishwakarmaEnterprisesComp />}
            />
            <Route
              path="/jeevans/company"
              element={<JeevanSecurityCompanyComp />}
            />
            <Route
              path="/rahulentercomp/company"
              element={<RahulEnterprisesComp />}
            />
            <Route path="/shemoagro/company" element={<SheemoAgroComp />} />
            <Route
              path="/shivshakti/company"
              element={<ShivShaktiLoomtexComp />}
            />
            <Route
              path="/radiantstar/company"
              element={<RadiantStarVenturesComp />}
            />
            <Route
              path="/bhushanpoly/company"
              element={<BhushanPolymersComp />}
            />
            <Route path="/yugplastic/company" element={<YugPlasticComp />} />
            <Route path="/fullandfinal/company" element={<FullAndFinalComp />} />
            <Route
              path="/jaimaalakhsmi/company"
              element={<JaiMaaLaxmiTradersComp />}
            />
            <Route
              path="/sribalaji/company"
              element={<SriBalajiIndustriesComp />}
            />
            <Route
              path="/hariomindustries/company"
              element={<HariOmIndustriesComp />}
            />
            <Route
              path="/vigneshenterprises/company"
              element={<VighneshEnterprisesComp />}
            />

            <Route path="/mdnusery/company" element={<MdNurseryComp />} />
            <Route
              path="/whitelabeling/company"
              element={<TheWhiteLabelingComp />}
            />
            <Route path="/modicare/company" element={<ModiCareComp />} />
            <Route path="/jaipurprime/company" element={<JaipurPrimeComp />} />
            <Route
              path="/sabacollection/company"
              element={<SabyaCollectionComp />}
            />
            <Route path="/jaipurhast/company" element={<JaipurHastkarComp />} />
            <Route
              path="/sunitaenterprises/company"
              element={<SunitaEnterprisesComp />}
            />
            <Route
              path="/pihuautomative/company"
              element={<PihuAutomotiveComp />}
            />
            <Route path="/cordniks/company" element={<CrodniksComp />} />
            <Route
              path="/rozeetechnistcomp/company"
              element={<RozeeTechnistComp />}
            />
            <Route path="/saquib/company" element={<SaqibComp />} />
            <Route
              path="/sterling/company"
              element={<SterlingManufacturingCoComp />}
            />
            <Route
              path="/krishnaenterprises/company"
              element={<KrishnaEnterprisesComp />}
            />
            <Route
              path="/pandeygarment/company"
              element={<PandeyGarmentComp />}
            />
            <Route path="/rudraagro/company" element={<RudraAgroFoodComp />} />
            <Route
              path="/tabassum/company"
              element={<TabassumAutomationsComp />}
            />
            <Route
              path="/crystalcreation/company"
              element={<CrystalCreationComp />}
            />
            <Route
              path="/wellcabling/company"
              element={<WellcabWindingWireComp />}
            />
            <Route
              path="/suratengineering/company"
              element={<SuratEngineeringPlasticComp />}
            />
            <Route
              path="/trishula/company"
              element={<TrishulaGlobalShippingComp />}
            />

            <Route path="/shyamtrade/company" element={<ShyamTradingComp />} />

            <Route path="/sakhthitex/company" element={<SakthiTexComp />} />
            <Route
              path="/talukdarstore/company"
              element={<TalukdarStoreComp />}
            />
            <Route path="/earthnature/company" element={<EarthsNatureComp />} />
            <Route path="/ratanhand/company" element={<RatanHandloomComp />} />
            <Route path="/asha/company" element={<AshaPureHardwareComp />} />
            <Route path="/rupali/company" element={<RupaliBengalTextileComp />} />
            <Route path="/manglam/company" element={<ManglamPlastComp />} />
            <Route path="/mshalai/company" element={<MSHalaiComp />} />
            <Route path="/vibrant/company" element={<VibrantColortechComp />} />
            <Route path="/sarikcomp/company" element={<SarikGarmentsComp />} />
            <Route path="/brindaimapex/company" element={<BrindaImpexComp />} />

            <Route path="/swantextile/company" element={<SwanTextilesComp />} />
            <Route
              path="/shidhivinayak/company"
              element={<SidhhiVinayakMetalComp />}
            />
            <Route
              path="/blacksmith/company"
              element={<BlacksmithMetalCraftsComp />}
            />
            <Route path="/aromaspices/company" element={<AromaSpiceComp />} />
            <Route
              path="/advancepoly/company"
              element={<AdvancePolyPackComp />}
            />
            <Route
              path="/khodalenterprises/company"
              element={<KhodalEnterprisesComp />}
            />
            <Route path="/mizaan/company" element={<MizaanTheTripHouseComp />} />
            <Route
              path="/sandeshdurgesh/company"
              element={<SandeshDurgawaleComp />}
            />
            <Route path="/riyancomp/company" element={<RiyonPumpComp />} />
            <Route path="/vmbliss/company" element={<VmBlissComp />} />
            <Route
              path="/laxmi/company"
              element={<LaxminarainAndCompanyComp />}
            />
            <Route
              path="/jindal/company"
              element={<JindalPlasticIndustriesComp />}
            />
            <Route
              path="/lidderenterpri/company"
              element={<LidderEnterprisesComp />}
            />
            <Route path="/jaydada/company" element={<JayDadaEnterpriseComp />} />
            <Route
              path="/hventerprises/company"
              element={<HvEnterprisesComp />}
            />
            <Route
              path="/vijayindustrial/company"
              element={<VijayaIndustriesComp />}
            />
            <Route path="/rnmarketing/company" element={<RnMarketingComp />} />
            <Route path="/shreeshiv/company" element={<ShreeShivShaktiComp />} />
            <Route
              path="/exportpalle/company"
              element={<ExportPalletizationComp />}
            />
            <Route path="/oceanvidya/company" element={<OceanVidyaComp />} />
            <Route path="/noblefashion/company" element={<NobleFashionComp />} />
            <Route
              path="/ramcharan/company"
              element={<RamcharanEnterprisesComp />}
            />
            <Route path="/haritext/company" element={<HariTextileComp />} />
            <Route path="/mauli/company" element={<MauliAgroFarmComp />} />
            <Route
              path="/siddhicollec/company"
              element={<SiddhiCollectionComp />}
            />

            <Route path="/jkgroup/company" element={<JKGroupComp />} />
            <Route
              path="/niwarcornercomp/company"
              element={<NiwarCornerComp />}
            />

            <Route
              path="/fusionglass/company"
              element={<FusionGlassConceptComp />}
            />
            <Route
              path="/bkaggriculture/company"
              element={<BkAgriculturalComp />}
            />
            <Route path="/maganmater/company" element={<MagnaMaterComp />} />
            <Route path="/ambikabio/company" element={<AmbikaBiochemComp />} />
            <Route
              path="/kunalworkeng/company"
              element={<KunalEngineeringWorksComp />}
            />
            <Route path="/credoexport/company" element={<CredoExportsComp />} />
            <Route
              path="/bhugrainterior/company"
              element={<BhugraInteriorComp />}
            />
            <Route path="/richdecor/company" element={<RichDecorComp />} />
            <Route
              path="/saifrudhin/company"
              element={<SaifuddinEnterpriseComp />}
            />
            <Route path="/jaibabametal/company" element={<JaiBabaMetalComp />} />
            <Route path="/silverfast/company" element={<SilverFastenersComp />} />
            <Route path="/ravi/company" element={<RaviFastenersComp />} />
            <Route
              path="/flonexlubricant/company"
              element={<FlonexLubricantComp />}
            />
            <Route
              path="/starbrass/company"
              element={<StarBrassIndustriesComp />}
            />
            <Route path="/pksprts/company" element={<PKSportsComp />} />
            <Route path="/srmsports/company" element={<SRMSportsComp />} />
            <Route
              path="/khanbarrel/company"
              element={<KhanBarrelSuppliersComp />}
            />
            <Route
              path="/shadabcricket/company"
              element={<ShadabCricketSportComp />}
            />
            <Route
              path="/computeraccessories/company"
              element={<ComputerAccessoriesComp />}
            />

            <Route
              path="/forevergreen/company"
              element={<ForeverGreenNurseryComp />}
            />
            <Route
              path="/maapadmawati/company"
              element={<MAAPadmawatiEnterprisesComp />}
            />
            <Route path="/startrader/company" element={<StarTradersComp />} />
            <Route path="/trnatvbeauty/company" element={<TrnatvaBeautyComp />} />
            <Route
              path="/shreeganeshwear/company"
              element={<ShreeGaneshFootWearComp />}
            />
            <Route
              path="/milapcosmetics/company"
              element={<MilapCosmeticsComp />}
            />
            <Route path="/amodalcandle/company" element={<AmodaCandlesComp />} />
            <Route path="/pinkroot/company" element={<PinkRootComp />} />
            <Route path="/kanacomp/company" element={<KANAcreationsComp />} />
            <Route
              path="/positiveangle/company"
              element={<PositiveAngleComp />}
            />
            <Route
              path="/ammaenterprises/company"
              element={<AmmaEnterprisesComp />}
            />
            <Route
              path="/Slipoverpvtltd/company"
              element={<SlipoverPvtLtdComp />}
            />
            <Route path="/Shoeartindia/company" element={<ShoeArtIndiaComp />} />
            <Route path="/ColorsQueen/company" element={<ColorsQueenComp />} />
            <Route
              path="/ashimafootwear/company"
              element={<AshimaFootwearComp />}
            />
            <Route path="/ruiinovation/company" element={<RUInnovationComp />} />
            <Route
              path="/sbjinternational/company"
              element={<SBJInternationalComp />}
            />
            <Route
              path="/triblelifestyle/company"
              element={<TribalikaLifestyleComp />}
            />

            <Route
              path="/haritrading/company"
              element={<HariTradingCompanyComp />}
            />
            <Route
              path="/bajrangstoneart/company"
              element={<BajrangStoneArtsComp />}
            />
            <Route
              path="/florishprofessional/company"
              element={<FlorishProfessionalComp />}
            />
            <Route
              path="/macronfootwear/company"
              element={<MacroFootwearComp />}
            />
            <Route path="/naturalaroma/company" element={<NaturalAromaComp />} />
            <Route
              path="/rbtprivate/company"
              element={<RBTPPrivateLimitedComp />}
            />
            <Route path="/viraniradi/company" element={<ViraniRadiantComp />} />
            <Route path="/mhhandicraft/company" element={<MHHandicraftsComp />} />
            <Route
              path="/walavalkarmasale/company"
              element={<WalavalkarMasaleComp />}
            />
            <Route path="/noxbeat/company" element={<NoxbeatComp />} />
            <Route
              path="/inaulenterprises/company"
              element={<InanulEnterprisesComp />}
            />
            <Route
              path="/varshafabrication/company"
              element={<VarshaFabricationComp />}
            />
            <Route
              path="/plazachemical/company"
              element={<PlazaChemicalComp />}
            />
            <Route path="/jboverseas/company" element={<JBOverseasComp />} />
            <Route
              path="/rjoldiron/company"
              element={<RJOldIronAndOldTayerComp />}
            />
            <Route
              path="/perfectmech/company"
              element={<PerfectMechanicalFabComp />}
            />
            <Route
              path="/narmadashiv/company"
              element={<NarmadaShivlingStoneComp />}
            />
            <Route
              path="/marcorecycling/company"
              element={<MarcosRecyclingComp />}
            />
            <Route path="/newjenfabric/company" element={<NewjenFabricsComp />} />
            <Route
              path="/msbasutextile/company"
              element={<MSBasuTextileComp />}
            />
            <Route path="/pharmacity/company" element={<PharmaCityComp />} />
            <Route path="/mandsons/company" element={<MAndSonsComp />} />
            <Route
              path="/tadikondol/company"
              element={<TadikondaExportsComp />}
            />
            <Route
              path="/joyinternational/company"
              element={<JoyaInternationalComp />}
            />
            <Route path="/winnernippons/company" element={<WinnerNipponComp />} />
            <Route path="/eagleexports/company" element={<EagleExportsComp />} />
            <Route
              path="/heeracollaction/company"
              element={<HeeraCollectionsComp />}
            />
            <Route path="/glamatone/company" element={<GlamstoneCeramicComp />} />
            <Route
              path="/protecttiveleather/company"
              element={<ProtectiveLeatherComp />}
            />
            <Route path="/azflowers/company" element={<AZFlowerComp />} />
            <Route path="/ibsafety/company" element={<AZFlowerComp />} />
            <Route
              path="/janakbangles/company"
              element={<JhankarBangelsComp />}
            />
            <Route path="/slothan/company" element={<SlotanSolutionsComp />} />
            <Route
              path="/dharmagoodsexports/company"
              element={<DhramaGoodsExportsComp />}
            />
            <Route path="/mrtrading/company" element={<MRTradingComp />} />
            <Route path="/patnipumps/company" element={<PatniPumpsLLPComp />} />
            <Route
              path="/ascentwater/company"
              element={<AscentWaterPurificationComp />}
            />
            <Route
              path="/shrihaanagroeximxomp/company"
              element={<ShrihaanAgroEximComp />}
            />
            <Route
              path="/masumenviro/company"
              element={<MasumanEnviroEngineeringComp />}
            />
            <Route
              path="/bharatprocess/company"
              element={<BharatProcessEquipmentComp />}
            />
            <Route
              path="/calcuttatrading/company"
              element={<CalcuttaTradingCentreComp />}
            />
            <Route
              path="/alphapiping/company"
              element={<AlphaPipingSystemComp />}
            />
            <Route path="/srinivas/company" element={<SrinivasaAgenciesComp />} />
            <Route path="/ozonestudio/company" element={<OzoneStudioComp />} />
            <Route path="/gopimetali/company" element={<GopiMetalicComp />} />
            <Route
              path="/sudhanshu/company"
              element={<SudarshanAndCompanyComp />}
            />
            <Route
              path="/newindiaglobal/company"
              element={<NewIndiaGlobalEnterprisesComp />}
            />
            <Route
              path="/jaishreeramrubber/company"
              element={<JaiShreeRamRubberComp />}
            />

            <Route
              path="/SHameeMart/company"
              element={<SHameemMartGalleryComp />}
            />
            <Route path="/kartikay/company" element={<KarthikeyaWaterComp />} />
            <Route
              path="/quardgems/company"
              element={<QudratGemsMineralsComp />}
            />

            <Route
              path="/giftscompany/company"
              element={<ManufactureTrophyCorporateGiftsComp />}
            />
            <Route
              path="/gurualankarengineering/company"
              element={<GuruAlankarEngineeringComp />}
            />
            <Route path="/agmecofaucet/company" element={<AgmecoFaucetsComp />} />
            <Route path="/patrafasion/company" element={<PatraFashionComp />} />
            <Route path="/prajwal/company" element={<PrajwalPolyplastComp />} />
            <Route
              path="/ysenterprises/company"
              element={<YSEnterprisesComp />}
            />
            <Route
              path="/ysenterprises/company"
              element={<YSEnterprisesComp />}
            />
            <Route path="/neopoly/company" element={<NeoPolyplastComp />} />
            <Route path="/rajpaint/company" element={<RajyogPaintsComp />} />
            <Route
              path="/mohanjalherbal/company"
              element={<MohanjaliHerbalTradingComp />}
            />
            <Route
              path="/maxifli/company"
              element={<MaxifloJayHydraulicComp />}
            />
            <Route
              path="/vardhmna/company"
              element={<VardhmanEnterprisesComp />}
            />
            <Route
              path="/saraswatienterprises/company"
              element={<SaraswatiEnterprisesComp />}
            />
            <Route path="/svpowersys/company" element={<SVPowerSystemComp />} />
            <Route path="/kkenterprises/company" element={<KKEnterpriseComp />} />
            <Route
              path="/bapsitaracomp/company"
              element={<BapasitaramPolymerComp />}
            />
            <Route
              path="/livtechnology/company"
              element={<LivTechnologyComp />}
            />
            <Route
              path="/raaveenterprises/company"
              element={<RaaveEnterprisesComp />}
            />
            <Route
              path="/mahadeventerprisescomp"
              element={<MahadevEnterprisesComp />}
            />
            <Route
              path="/joinmdatpragjyotitea"
              element={<JoinMDAtPragjyotishTeaComp />}
            />
            <Route
              path="/bhagyalaxmicomp"
              element={<BhagyalaxmiProductsComp />}
            />
            <Route path="/summerclothcomp" element={<SumerClothCompanyComp />} />
            <Route
              path="/umangbadifactory"
              element={<UmangBadiFactoryTextileComp />}
            />
            <Route
              path="/vardhmanaenterprises"
              element={<VardhmanEnterprisesComp />}
            />
            <Route path="/prakashharwarecomp" element={<PrakashHardwareComp />} />
            <Route
              path="/verticalSupportcomp"
              element={<VerticalSupportsComp />}
            />
            <Route
              path="/kaivalyanorgaincComp"
              element={<KaivalyaOrganicsComp />}
            />
            <Route path="/sunrisePolymercomp" element={<SunrisePolymersComp />} />
            <Route path="/polyanapipescomp" element={<PolyanaPipesComp />} />
            <Route
              path="/kaivalyaorgaincomp"
              element={<KaivalyaOrganicsComp />}
            />
            <Route path="/trothexportscomp" element={<TrothExportsComp />} />
            <Route path="/bikeshagarbati" element={<BikeshAgarbattiComp />} />
            <Route path="/mdsuhancompany" element={<MDSuhanExportsComp />} />
            <Route path="/saisamarthcomp" element={<SaiSamarthLogisticsComp />} />
            <Route path="/ashifnursery" element={<AshifaNurseryComp />} />
            <Route path="/veerandcomp" element={<VeerAndCompanyComp />} />
            <Route path="/cardamonmanu" element={<CardamomManufactureComp />} />
            <Route
              path="/lakshaytrading"
              element={<LakshyaTradingCompanyComp />}
            />
            <Route path="/mohamd-comp" element={<MohhaMadMonisComp />} />
            <Route
              path="/balajidhoop"
              element={<ShreeBalajiDhoopTradersComp />}
            />
            <Route path="/nisafabcomp" element={<NisaFebricComp />} />
            <Route
              path="/groundnutcomp"
              element={<SanidhyaInternationalComp />}
            />
            <Route path="/vishalenter" element={<VishalEnterprisesComp />} />
            <Route path="/welding" element={<WeldtechCorporationComp />} />
            <Route
              path="/chappati-making"
              element={<BKEngineersChapatiMakingComp />}
            />
            <Route path="/perfumes-mech" element={<PerfumePhafciallyComp />} />
            <Route path="/rajesh-bulb" element={<RajeshBulbComp />} />
            <Route
              path="/royal-eneterprises"
              element={<RoyalEnterprisesComp />}
            />
            <Route
              path="/ambition-indus"
              element={<AmbitionWeldIndustriesComp />}
            />
            <Route path="/aonefiber-comp" element={<AOneFiberMartComp />} />
            <Route
              path="/rajasthan-plastic-comp"
              element={<RajasthanPlasticSyndicateComp />}
            />
            <Route path="/newera-comp" element={<NewEraAppliancesComp />} />
            <Route path="/dakshandcompany" element={<DakshAndCompanyComp />} />
            <Route path="/smindustrycomp" element={<SMIndustriesComp />} />
            <Route path="/freshlypicked" element={<FreshhlyPickedComp />} />
            <Route path="/navkargo" element={<NavkarForgeIndustriesComp />} />
            <Route
              path="/triratancomp"
              element={<TriratnanavyanIntlEximComp />}
            />
            <Route path="/bliqesrugs" element={<BilqeesRugsComp />} />
            <Route path="/navkarcomp" element={<Navkar />} />
            <Route path="/somosoftluggae" element={<SomoSoftLuggageComp />} />
            <Route
              path="/umboodeepadventure"
              element={<UmboodeepAdventuresComp />}
            />
            <Route
              path="/shreehiralcomp"
              element={<ShreeHiralalTelUdyogComp />}
            />
            <Route
              path="/sujangracomp"
              element={<SujangarhTarpaulinTraderComp />}
            />
            <Route
              path="/dhamanienterprises"
              element={<DhamaniEnterprisesComp />}
            />
            <Route
              path="/shidhatechnology"
              element={<ShidhaTechnologiesComp />}
            />
            <Route path="/abinternational" element={<ABInternationalComp />} />
            <Route path="/luckeyenterprises" element={<LuckyEnterprisesComp />} />
            <Route path="/omwoodcomp" element={<OmWoodsComp />} />
            <Route path="/ridhienterprises" element={<RidhiEnterprisesComp />} />
            <Route
              path="/jaimaakalienterprises"
              element={<JaiMaaKaliElectricalsComp />}
            />
            <Route path="/tempoinstru" element={<TempoInstrumentsComp />} />
            <Route path="/zioninduscomp" element={<ZionIndustriesComp />} />
            <Route path="/hussaiancomp" element={<HussainEnterprisesComp />} />
            <Route
              path="/vishwakrmahandi"
              element={<ShreeVishwakarmaHandicraftsComp />}
            />
            <Route path="/hammercoal" element={<HammercoalComp />} />
            <Route path="/sharmilapolycomp" element={<ShamaliPolymatsComp />} />
            <Route path="/hydrocomp" element={<AmolHydroEngineersComp />} />
            <Route path="/vshandicomp" element={<VSHandicraftsComp />} />
            <Route
              path="/jaishreekrishna"
              element={<JaiShreeKrishnaDecorationComp />}
            />
            <Route
              path="/febrolelevevator"
              element={<FebrolElevatorEscalatorComp />}
            />
            <Route path="/rotechhealth" element={<RotechHealthcareComp />} />
            <Route path="/easeplushealth" element={<EaseplusHealthcareComp />} />
            <Route path="/amsons" element={<AMSonsComp />} />
            <Route path="/lavish" element={<LavishGanwaniComp />} />
            <Route path="/mokshit" element={<MokshitDrapesComp />} />
            <Route path="/manishtrading" element={<ManishTradingCoComp />} />
            <Route path="/geetatextile" element={<GeetaTextilesComp />} />
            <Route path="/dadudayahosiery" element={<DaduDayalHosieryComp />} />
            <Route
              path="/purbaelectriccomp"
              element={<PurvanshElectricalComp />}
            />
            <Route path="/anokhitextile" element={<AnokhiTextileComp />} />
            <Route path="/dskcomp" element={<DSKDecorComp />} />
            <Route path="/doorlock" element={<DoorLockAndTradingComp />} />
            <Route path="/assports" element={<AsSportsCompanyComp />} />
            <Route path="/ssfabricators" element={<SsFabricatorsComp />} />
            <Route path="/mbartificial" element={<MBArtificialComp />} />
            <Route path="/filoscomp" element={<FilosInternationalComp />} />
            <Route path="/isbbags" element={<ISBBagsComp />} />
            <Route path="/sunagensy" element={<SunAgencyComp />} />
            <Route path="/thesescomp" element={<ThesisComp />} />
            <Route path="/vegetable-supplier" element={<VegetableSupplier />} />
            <Route path="/mushroom-supplier" element={<MushroomComponent />} />
            <Route path="/egg-supplier" element={<EggComponent />} />

            <Route
              path="/mahaveerglassand-almunium"
              element={<MahaveerGlassAndAluminiumWorksComp />}
            />
            <Route path="/faizan-comp" element={<FaizanZippersComp />} />
            <Route
              path="/kanakdhara-comp"
              element={<KanakdharaEnterprisComp />}
            />
            <Route
              path="/faizanandcarpet"
              element={<FaizanAndSonsCarpetsComp />}
            />
            <Route path="/ravanmeerut" element={<RavanMeerutComp />} />
            <Route path="/dollarequipment" element={<DollarEquipmentsComp />} />
            <Route path="/mittiwarecomp" element={<MittiwareIndiaComp />} />
            <Route path="/akashenterprises" element={<AkashEnterpriseComp />} />
            <Route path="/robustechalloy" element={<RobustechAlloysComp />} />
            <Route path="/abhinavhodal" element={<AbhinavHodlaComp />} />
            <Route path="/abkglobal" element={<ABKGlobalImpexComp />} />
            <Route path="/optical" element={<OptimalSurgicalsComp />} />
            <Route path="/amira-metal-comp" element={<AmirajMetalcraftComp />} />
            <Route path="/omexime" element={<OmEximTradersComp />} />
            <Route
              path="/murgun-enterprises"
              element={<MuruganEnterprisesComp />}
            />
            <Route
              path="/shrinathdistributors"
              element={<ShriNathDistributorsComp />}
            />
            <Route path="/sharda-comp" element={<ShardaIndustriesComp />} />
            <Route path="/aditya-comp" element={<AditaPackagingsComp />} />
            <Route path="/radhe-comp" element={<RadhePackagingComp />} />
            <Route
              path="isindian-trader-comp"
              element={<ISIndianTradersComp />}
            />
            <Route path="seds-trader-comp" element={<SedsTradersComp />} />
            <Route
              path="jk-wallpaper-studio"
              element={<JKWallpaperStudioComp />}
            />
            <Route
              path="wuhanmzelectronics"
              element={<WuhanMZElectronicComp />}
            />
            <Route path="mystylelookcomp" element={<MyStyleLookComp />} />
            <Route path="yashenterprisescomp" element={<YashEnterprisesComp />} />
            <Route path="artiquecraft" element={<ArtiqueCraftComp />} />
            <Route
              path="interfacetechnology"
              element={<InterfaceTechnologiesComp />}
            />
            <Route
              path="valuesplusinternational"
              element={<ValuePlusInternationalComp />}
            />
            <Route path="sspacking" element={<SSPackagingComp />} />
            <Route path="amfurniturecomp" element={<AMFurnitureComp />} />
            <Route path="avabiosolution" element={<AVABioSolutionsComp />} />
            <Route path="mosaicraftcomp" element={<MosaicArtCraftComp />} />
            <Route path="balajipackingcomp" element={<BalajiPackagingComp />} />
            <Route path="murarisnackscomp" element={<MurariSnacksComp />} />
            <Route path="tijtextilecomp" element={<TijTextileComps />} />
            <Route
              path="probechoenterprisescomp"
              element={<ProbechoEnterpriseComp />}
            />
            <Route
              path="shreevaradhavvinayak"
              element={<ShreeVaradVinayakComp />}
            />
            <Route path="balkrushnabiotech" element={<BalkrushnaBiotechComp />} />
            <Route path="sugagrcomp" element={<GandhiEnterprisesComp />} />
            <Route path="rudracomp" element={<RudraEnterprisesComp />} />
            <Route
              path="businessconsultantcomp"
              element={<BusinessConsultancyComp />}
            />
            <Route
              path="jiyanshinternational"
              element={<JiyanshInternationalComp />}
            />
            <Route
              path="ashwani-international"
              element={<AshwinInternationalsComp />}
            />
            <Route path="jhaveri-organic" element={<JhaveriOrganicFarmsComp />} />
            <Route
              path="vyankatesh-marketing"
              element={<VyankateshMarketingComp />}
            />
            <Route path="dvp-groups" element={<DVPGroupsComp />} />
            <Route
              path="dipakvishwas-dhanger"
              element={<DipakVishwasDhangarComp />}
            />
            <Route path="giriraj-lubricant" element={<GirjeLubricantComp />} />
            <Route path="ik-enterprises" element={<IkEnterpriseComp />} />
            <Route
              path="jai-shree-krishna-glass"
              element={<JaiShriKrishnaGlassComp />}
            />
            <Route path="kk-group" element={<KKGroupComp />} />
            <Route path="artful-endearous" element={<ArtfulEndeavorComp />} />
            <Route path="royal-services" element={<RoyalServicesComp />} />
            <Route path="raveeEnterprises" element={<RaaveeEnterpriseComp />} />
            <Route path="henanLanguri" element={<HenanLangruiChemicalComp />} />
            <Route path="toothpaste-supplier" element={<Toothpaste />} />
            <Route
              path="shreemahalaxmi-ghee-supplier"
              element={<ShreeMahalakshmiProductsComp />}
            />
            <Route path="shrisairam-supplier" element={<ShriSairamTexComp />} />
            <Route path="vdenterprises" element={<VdEnterpriseComp />} />
            <Route path="davi-cmp" element={<DaVinciComp />} />
            <Route path="hanuman-transport" element={<HanumanTransportComp />} />
            <Route path="ajindustries" element={<AJRIndustriesComp />} />

            <Route
              path="/laborate-technocracy"
              element={<LaborateTechnocracyComp />}
            />
            <Route
              path="/dairyprocts-supplier"
              element={<DairyProductsSupplier />}
            />
            <Route
              path="/insurance-provider"
              element={<InsuranceServicesProvider />}
            />
            <Route
              path="/rudrakhs-sellers"
              element={<SpiritualProductsProvider />}
            />

            {/* Country */}
            <Route path="usa" element={<Usacountry />} />
            <Route path="dubai" element={<DubaiCountry />} />
            <Route path="australia" element={<AustraliaCountry />} />
            <Route path="germany" element={<GermanyCountry />} />
            <Route path="china" element={<ChinaCountry />} />
            <Route path="uk" element={<UkCountry />} />
            <Route path="canada" element={<CanadaCountry />} />
            <Route path="saudiarabia" element={<SaudiCountry />} />
            <Route path="oman" element={<OmanCountry />} />
            <Route path="singapore" element={<SingaporeCountry />} />
            <Route path="all/country" element={<AllCountries />} />
            <Route path="netherland" element={<NetherlandCountry />} />

            <Route path="globalb2b-prices" element={<Globalb2bPricess />} />
            {/* Catalog */}
            <Route path="shoolini-saffron-pvt-ltd" element={<FirstCatlog />} />
            <Route path="azoliya-cable-tie" element={<SecondCatalog />} />
            <Route path="new-era-appliances" element={<ThirdCatalog />} />
            <Route path="sakthi-tex" element={<FourthCatalog />} />
            <Route path="vikas-sports" element={<FifthCatalog />} />
            <Route path="abhitech-lift" element={<SixthCatalog />} />
            <Route path="daksh-and-company" element={<SeventhCatalog />} />
            <Route path="mahir-sanitation" element={<EightCatalog />} />
            <Route
              path="new-jai-shree-krishna-glass-decorators"
              element={<NineCatalog />}
            />
            <Route path="ashifa-nursery" element={<TenthCatalog />} />
            <Route path="hv-enterprises" element={<EleventhCatalog />} />
            <Route path="sunrise-tank" element={<TwelthCatalog />} />
            <Route path="mm-overseas" element={<ThirteenCatalog />} />
            <Route path="kalptaru-tractor-agro" element={<FourteenCatalog />} />
            <Route path="Prince-industry" element={<FifteenCatalog />} />
            <Route
              path="Om-Enterprises-Painting-Service"
              element={<SixteenCatalog />}
            />
            <Route path="sitaram-enterprise" element={<SeventeenCatalog />} />
            <Route path="nobaraa-fashion" element={<EighteenCatalogs />} />
            <Route path="celebria" element={<NineteenCatalogs />} />
            <Route path="crafter-tapes" element={<TwentyCatalogs />} />
            <Route path="krishna-packing" element={<TwentyoneCatalogs />} />
            <Route path="gehena-kitchen" element={<TwentytwoCatalogs />} />
            <Route path="cleef-empire" element={<TwentythreeCatalog />} />
            <Route path="samriddh-construction" element={<TwentyfoutCatalog />} />
            <Route path="pooja-agri-products" element={<Twentyfivecatalog />} />
            <Route path="divine-manufacturer" element={<TwentySixcatalog />} />
            {/* Blogs */}
            {/* <Route
            path="indulge-in-luxury-baby-care-bath"
            element={<HealthcareBlogs />}
          />
          <Route path="what-is-B2B-business" element={<FirstBlog />} />
          <Route
            path="/exploring-world-of-food-from-herbal"
            element={<FoodBlogs />}
          />
          <Route
            path="all-you-ever-wanted-to-know-about-seeds-powders-and-variants"
            element={<OnionBlogs />}
          />
          <Route path="b2b-marketplace-blog" element={<SecondBlog />} />
          <Route path="unveiling-the-top-b2b-Service" element={<ThirdBlog />} />
          <Route
            path="revolutionizing-farming-through-modern-tool-and-techniques"
            element={<FourthBlogs />}
          />
          <Route
            path="role-of-clothing-suppliers-in-the-fashion-industry"
            element={<FifthhBlogs />}
          />
          <Route
            path="common-chemicals-in-daily-life-and-industry"
            element={<SixthBlogs />}
          />
          <Route path="celebrate-artistry" element={<SeventhBlog />} />
          <Route
            path="the-world-of-jewelry-from-gemstones"
            element={<JewelleryBlogs />}
          />
          <Route
            path="best-options-for-office-home-customized-outdoor-and-kid-furniture-needs"
            element={<EighthBlog />}
          />
          <Route
            // path="what-is-b2b-online-marketplace"
            path="blog-best-b2b-portal-in-india-best-b2b-website-in-india"
            element={<MainBlogs />}
          /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
