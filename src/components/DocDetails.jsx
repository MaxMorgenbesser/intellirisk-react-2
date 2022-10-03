// import { data } from "../App";
// import { useContext, useState } from "react";
// import { json, useNavigate } from "react-router-dom";
// import { Button, CircularProgress } from "@mui/material";
// import "./DocDetails.css";

// import { useEffect } from "react";
// import Logout from "./Logout";
// export default function DocDetails() {
//   const navigate = useNavigate();
//   const { userToken } = useContext(data);
//   const [docID, setDocID] = useState(localStorage.getItem("docid"));
//   const [docData, setDocData] = useState();
//   const [updateVal, setUpdateVal] = useState();

//   useEffect(() => {
//     if (updateVal) {
//       update();
//     }
//   }, [setUpdateVal, updateVal]);

//   const update = () => {
//     fetch("https://intellirisk-api.web.app/updatefile", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: userToken,
//       },
//       body: JSON.stringify({
//         id: docID,
//         types: {
//           [Object.keys(updateVal).toString()]: Number(
//             Object.values(updateVal).toString()
//           ),
//         },
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setDocData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetch(`https://intellirisk-api.web.app/files/${docID}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: userToken,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setDocData(data);
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div id="header">
//         <Button
//           onClick={() => {
//             navigate("/");
//             localStorage.removeItem("docid");
//             localStorage.removeItem("docdeets");
//           }}
//         >
//           Go back
//         </Button>
//         <Logout />
//       </div>

    

//       {docData && <h1>{docData.file.name}</h1>}
//       <br/>
//       <div id="update-container">
//         {docData ? <>
//             <div className="txt-container">
//         <h2>These types are somewhat true</h2>
//         <ul>
//         {docData.insuranceTypes.BuildersRisk === .5 ? (
//                   <>
//                     <>
//                       <li>Builders Risk</li>
//                       <Button
//                         onClick={() => {
//                           setUpdateVal({ BuildersRisk: 0 });
//                         }}
//                       >
//                         Remove Insurance type
//                       </Button>
//                       <Button
//                         onClick={() => {
//                           setUpdateVal({ BuildersRisk: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                     </>
//                   </>
//                 ) : (
//                   <></>
//                 )}

//                 {docData.insuranceTypes.AircraftLiability === .5 ? (
//                   <>
//                     <li>Aircraft Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AircraftLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({AircraftLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.AircraftPhysicalDamage === .5 ? (
//                   <>
//                     <li>Aircraft Physical Damage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AircraftPhysicalDamage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ AircraftPhysicalDamage: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.CommercialAutomobile === .5 ? (
//                   <>
//                     <li>Commercial Automobile</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({CommercialAutomobile:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ CommercialAutomobile: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.GarageLiability === .5 ? (
//                   <>
//                     <li>Garage Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({GarageLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ GarageLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.TransitTransportation === .5 ? (
//                   <>
//                     <li>Transit and Transportation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({TransitTransportation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ TransitTransportation: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.GarageKeepers === .5 ? 
//                   <>
//                     <li>Garage Keepers</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({GarageKeepers:0})
//     }}>Remove Insurance type</Button>
//     <Button onClick={()=> 
//     {   setUpdateVal({GarageKeepers:1})
//     }}>Add this type</Button>
    
//                   </>:<></>}
//                   {docData.insuranceTypes.Crime === .5 ? (
//                   <>
//                     <li>Crime</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({Crime:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ Crime: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.KidnapRansom === .5 ? (
//                   <>
//                     <li>Kidnap and Ransom</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({KidnapRansom:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ KidnapRansom: .5 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BaileeCoverage === .5 ? (
//                   <>
//                     <li>Bailee Coverage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BaileeCoverage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BaileeCoverage: 1 });
//                         }}
//                       >
//                        Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ContractorsEquipment === .5 ? (
//                   <>
//                     <li>Contractors Equipment</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ContractorsEquipment:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ContractorsEquipment: .5 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>

//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.InstallationFloater === .5 ? (
//                   <>
//                     <li>Installation Floater</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({InstallationFloater:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ InstallationFloater: .5 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.OceanCargo === .5 ? (
//                   <>
//                     <li>Ocean Cargo</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({OceanCargo:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ OceanCargo: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )} 
                
//                 {docData.insuranceTypes.TravelAccident === .5 ? (
//                   <>
//                     <li>Travel Accident</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({TravelAccident:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ TravelAccident: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.AbuseMolestation === .5 ? (
//                   <>
//                     <li>Abuse and Molestation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AbuseMolestation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ AbuseMolestation: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.CyberLiability === .5 ? (
//                   <>
//                     <li>Cyber Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({CyberLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ CyberLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.DirectorsOfficers === .5 ? (
//                   <>
//                     <li>Directors and Officers</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({DirectorsOfficers:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ DirectorsOfficers: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.EmployeeBenefitsLiability === .5 ? (
//                   <>
//                     <li>Employee Benefits Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({EmployeeBenefitsLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ EmployeeBenefitsLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.EmploymentPracticesLiability === .5 ? (
//                   <>
//                     <li>Employment Practices Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({EmploymentPracticesLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ EmploymentPracticesLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.FiduciaryLiability === .5 ? (
//                   <>
//                     <li>Fiduciary Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({FiduciaryLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ FiduciaryLiability: 1});
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.IntellectualPropertyLiability === .5 ? (
//                   <>
//                     <li>Intellectual Property Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({IntellectualPropertyLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ IntellectualPropertyLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ProductRecallLiability === .5 ? (
//                   <>
//                     <li>Product Recall Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ProductRecallLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ProductRecallLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ProfessionalLiability === .5 ? (
//                   <>
//                     <li>Professional Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ProfessionalLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ProfessionalLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ErrorsOmmissions === .5 ? (
//                   <>
//                     <li>Errors Ommissions</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ErrorsOmmissions:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ErrorsOmmissions: 1});
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.WarehouseLegalLiability === .5 ? (
//                   <>
//                     <li>Warehouse Legal Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({WarehouseLegalLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ WarehouseLegalLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BusinessIncome === .5 ? (
//                   <>
//                     <li>Business Income</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BusinessIncome:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BusinessIncome: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BusinessPersonalProperty === .5 ? (
//                   <>
//                     <li>Business Personal Property</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BusinessPersonalProperty:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BusinessPersonalProperty: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.Spoilage === .5 ? (
//                   <>
//                     <li>Spoilage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({Spoilage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ Spoilage: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.WorkersCompensation === .5 ? (
//                   <>
//                     <li>Workers Compensation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({WorkersCompensation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ WorkersCompensation: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.VoluntaryCompensation === .5 ? (
//                   <>
//                     <li>Voluntary Compensation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({VoluntaryCompensation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ VoluntaryCompensation: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.PollutionLiability === .5 ? (
//                   <>
//                     <li>Pollution Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({PollutionLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ PollutionLiability: 1 });
//                         }}
//                       >
//                         Add this type
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
                  
//  </ul>










//         </div>
//         </>:<></>}
        
//         {docData ? (
            
//           <div id="docdata-container">
           
//             <div className="txt-container">
//             <h2>Suggested Insurance needs</h2>
              
//               <ul>
//                 {/* <button onClick={()=>{setUpdateVal({BuildersRisk:0}) */}

//                 {docData.insuranceTypes.BuildersRisk === 1 ? (
//                   <>
//                     <>
//                       <li>Builders Risk</li>
//                       <Button
//                         onClick={() => {
//                           setUpdateVal({ BuildersRisk: 0 });
//                         }}
//                       >
//                         Remove Insurance type
//                       </Button>
//                       <Button
//                         onClick={() => {
//                           setUpdateVal({ BuildersRisk: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                     </>
//                   </>
//                 ) : (
//                   <></>
//                 )}

//                 {docData.insuranceTypes.AircraftLiability === 1 ? (
//                   <>
//                     <li>Aircraft Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AircraftLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({AircraftLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.AircraftPhysicalDamage === 1 ? (
//                   <>
//                     <li>Aircraft Physical Damage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AircraftPhysicalDamage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ AircraftPhysicalDamage: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.TransitTransportation === 1 ? (
//                   <>
//                     <li>Transit and Transportation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({TransitTransportation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ TransitTransportation: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.CommercialAutomobile === 1 ? (
//                   <>
//                     <li>Commercial Automobile</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({CommercialAutomobile:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ CommercialAutomobile: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.GarageLiability === 1 ? (
//                   <>
//                     <li>Garage Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({GarageLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ GarageLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.GarageKeepers === 1 ? (
//                   <>
//                     <li>Garage Keepers</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({GarageKeepers:0})
//     }}>Remove Insurance type</Button>
//     <Button onClick={()=> 
//     {   setUpdateVal({GarageKeepers:.5})
//     }}>Set somewhat true</Button>
    
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.Crime === 1 ? (
//                   <>
//                     <li>Crime</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({Crime:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ Crime: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.KidnapRansom === 1 ? (
//                   <>
//                     <li>Kidnap and Ransom</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({KidnapRansom:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ KidnapRansom: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BaileeCoverage === 1 ? (
//                   <>
//                     <li>Bailee Coverage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BaileeCoverage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BaileeCoverage: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ContractorsEquipment === 1 ? (
//                   <>
//                     <li>Contractors Equipment</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ContractorsEquipment:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ContractorsEquipment: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>

//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.InstallationFloater === 1 ? (
//                   <>
//                     <li>Installation Floater</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({InstallationFloater:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ InstallationFloater: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.OceanCargo === 1 ? (
//                   <>
//                     <li>Ocean Cargo</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({OceanCargo:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ OceanCargo: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )} 
//                 {docData.insuranceTypes.TransitTransportation === 1 ? (
//                   <>
//                     <li>Credit Insurance</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({TransitTransportation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ TransitTransportation: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.TravelAccident === 1 ? (
//                   <>
//                     <li>Travel Accident</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({TravelAccident:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ TravelAccident: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.AbuseMolestation === 1 ? (
//                   <>
//                     <li>Abuse and Molestation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({AbuseMolestation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ AbuseMolestation: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.CyberLiability === 1 ? (
//                   <>
//                     <li>Cyber Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({CyberLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ CyberLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.DirectorsOfficers === 1 ? (
//                   <>
//                     <li>Directors and Officers</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({DirectorsOfficers:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ DirectorsOfficers: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.EmployeeBenefitsLiability === 1 ? (
//                   <>
//                     <li>Employee Benefits Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({EmployeeBenefitsLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ EmployeeBenefitsLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.EmploymentPracticesLiability === 1 ? (
//                   <>
//                     <li>Employment Practices Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({EmploymentPracticesLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ EmploymentPracticesLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.FiduciaryLiability === 1 ? (
//                   <>
//                     <li>Fiduciary Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({FiduciaryLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ FiduciaryLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.IntellectualPropertyLiability === 1 ? (
//                   <>
//                     <li>Intellectual Property Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({IntellectualPropertyLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ IntellectualPropertyLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ProductRecallLiability === 1 ? (
//                   <>
//                     <li>Product Recall Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ProductRecallLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ProductRecallLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ProfessionalLiability === 1 ? (
//                   <>
//                     <li>Professional Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ProfessionalLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ProfessionalLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.ErrorsOmmissions === 1 ? (
//                   <>
//                     <li>Errors Ommissions</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({ErrorsOmmissions:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ ErrorsOmmissions: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.WarehouseLegalLiability === 1 ? (
//                   <>
//                     <li>Warehouse Legal Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({WarehouseLegalLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ WarehouseLegalLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BusinessIncome === 1 ? (
//                   <>
//                     <li>Business Income</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BusinessIncome:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BusinessIncome: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.BusinessPersonalProperty === 1 ? (
//                   <>
//                     <li>Business Personal Property</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({BusinessPersonalProperty:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ BusinessPersonalProperty: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.Spoilage === 1 ? (
//                   <>
//                     <li>Spoilage</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({Spoilage:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ Spoilage: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.WorkersCompensation === 1 ? (
//                   <>
//                     <li>Workers Compensation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({WorkersCompensation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ WorkersCompensation: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.VoluntaryCompensation === 1 ? (
//                   <>
//                     <li>Voluntary Compensation</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({VoluntaryCompensation:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ VoluntaryCompensation: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//                 {docData.insuranceTypes.PollutionLiability === 1 ? (
//                   <>
//                     <li>Pollution Liability</li>
//                     <Button onClick={()=> 
//     {   setUpdateVal({PollutionLiability:0})
//     }}>Remove Insurance type</Button>
//     <Button
//                         onClick={() => {
//                           setUpdateVal({ PollutionLiability: .5 });
//                         }}
//                       >
//                         Set somewhat true
//                       </Button>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//               </ul>
//             </div>
//           </div>
//         ) : (
//        <></>
//         )}
//         {docData && (
//           <>
//             <div className="txt-container">
//               <div>
//                 <ul>
                 
//                   <h2>add an insurance type that may not have been caught by the algorithms</h2>
//                   <div id="add">
//                   {!docData.insuranceTypes.BuildersRisk ? (
//                     <>
//                       <Button
//                         onClick={() => {
//                           setUpdateVal({ BuildersRisk: 1});
//                         }}
//                       >
//                         Builders Risk
//                       </Button>
//                       <>
//                       </>
//                     </>
//                   ) : (
//                     <></>
//                   )}
                    
//                     {!docData.insuranceTypes.AircraftLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ AircraftLiability: 0 })
//                             }
//                           >
//                             Aircraft Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.AircraftPhysicalDamage ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ AircraftPhysicalDamage: 1 })
//                             }
//                           >
//                             Aircraft Physical Damage
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.CommercialAutomobile ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ CommercialAutomobile: 1 })
//                             }
//                           >
//                             Commercial Automobile
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.GarageLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ GarageLiability: 1 })}
//                           >
//                             Garage Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.GarageKeepers ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ GarageKeepers: 1 })}
//                           >
//                             Garage Keepers
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.Crime ? (
//                       <>
//                         <li>
//                           <Button onClick={() => setUpdateVal({ Crime: 1 })}>
//                             Crime
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.KidnapRansom ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ KidnapRansom: 1 })}
//                           >
//                             Kidnap and Ransom
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.BaileeCoverage ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ BaileeCoverage: 1 })}
//                           >
//                             Bailee Coverage
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.ContractorsEquipment ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ ContractorsEquipment: 1 })
//                             }
//                           >
//                             Contractors Equipment
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.InstallationFloater ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ InstallationFloater: 1 })
//                             }
//                           >
//                             Installation Floater
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.OceanCargo ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ OceanCargo: 1 })}
//                           >
//                             Ocean Cargo
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.TransitTransportation ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ TransitTransportation: 1 })
//                             }
//                           >
//                             Transit and Transportation
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.CreditInsurance ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ CreditInsurance: 1 })}
//                           >
//                             Credit Insurance
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.TravelAccident ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ TravelAccident: 1 })}
//                           >
//                             Travel Accident
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.AbuseMolestation ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ AbuseMolestation: 1 })
//                             }
//                           >
//                             Abuse and Molestation
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.CyberLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ CyberLiability: 1 })}
//                           >
//                             Cyber Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.DirectorsOfficers ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ DirectorsOfficers: 1 })
//                             }
//                           >
//                             Directors and Officers
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.EmployeeBenefitsLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ EmployeeBenefitsLiability: 1 })
//                             }
//                           >
//                             Employee Benefits Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.EmploymentPracticesLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ EmploymentPracticesLiability: 1 })
//                             }
//                           >
//                             Employment Practices Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.FiduciaryLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ FiduciaryLiability: 1 })
//                             }
//                           >
//                             Fiduciary Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.IntellectualPropertyLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ IntellectualPropertyLiability: 1 })
//                             }
//                           >
//                             Intellectual Property Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.ProductRecallLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ ProductRecallLiability: 1 })
//                             }
//                           >
//                             Product Recall Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.ProfessionalLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ ProfessionalLiability: 1 })
//                             }
//                           >
//                             Professional Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.ErrorsOmmissions ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ ErrorsOmmissions: 1 })
//                             }
//                           >
//                             Errors Ommissions
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.WarehouseLegalLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ WarehouseLegalLiability: 1 })
//                             }
//                           >
//                             Warehouse Legal Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.BusinessIncome ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() => setUpdateVal({ BusinessIncome: 1 })}
//                           >
//                             Business Income
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.BusinessPersonalProperty ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ BusinessPersonalProperty: 1 })
//                             }
//                           >
//                             Business Personal Property
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.Spoilage ? (
//                       <>
//                         <li>
//                           <Button onClick={() => setUpdateVal({ Spoilage: 1 })}>
//                             Spoilage
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.WorkersCompensation ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ WorkersCompensation: 1 })
//                             }
//                           >
//                             Workers Compensation
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.VoluntaryCompensation ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ VoluntaryCompensation: 1 })
//                             }
//                           >
//                             Voluntary Compensation
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {!docData.insuranceTypes.PollutionLiability ? (
//                       <>
//                         <li>
//                           <Button
//                             onClick={() =>
//                               setUpdateVal({ PollutionLiability: 1 })
//                             }
//                           >
//                             Pollution Liability
//                           </Button>
//                         </li>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       {docData && (
//         <embed src={docData.file.base64} width="1000px" height="1000px" />
//       )}

//       {!docData&&    <div id="spinners">
//             <CircularProgress color="secondary" />
//             <CircularProgress color="success" />
//             <CircularProgress color="inherit" />
//           </div>}
//     </>
//   );
// }
