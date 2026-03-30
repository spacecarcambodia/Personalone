const data = [
  { VIN:"KL3-F4CKF-1EK000317", Type:"Truck", Axle:"4x2", Engine:"300hp"},
  { VIN:"KL3-C5AHF-18K000718 ", Type:"Truck", Axle:"6x2", Engine:"240hp"},
  { VIN:"KL3-G8CLF-1EK000066 ", Type:"Truck", Axle:"6x4", Engine:"320hp"},
  { VIN:"KLT-CH7C1-1EK000002 ", Type:"Truck", Axle:"4x2", Engine:"300hp"},
  { VIN:"KLT-CL8K2-1EK000002 ", Type:"Truck", Axle:"6x4", Engine:"380hp"},
  { VIN:"xxx-K7C6F-xxxxxxxxx ", Type:"Truck", Axle:"6x4", Engine:"340hp"},
  { VIN:"xxx-K7C6A-xxxxxxxxx ", Type:"Truck", Axle:"6x4", },
  { VIN:"xxx-K7CEF-xxxxxxxxx ", Type:"Truck", Axle:"6x4", Engine:"340hp"},
  { VIN:"xxx-K7CEA-xxxxxxxxx ", Type:"Truck", Axle:"6x4", },
  { VIN:"xxx-K8C6F-xxxxxxxxx ", Type:"Truck", Axle:"6x4", Engine:"340hp"},
  { VIN:"xxx-K8C6A-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K8CEA-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K8CEF-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9BEF-xxxxxxxxx ", Type:"Truck", Axle:"6x2",Engine:"340hp"},
  { VIN:"xxx-K9CEA-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9CEF-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9KEF-xxxxxxxxx ", Type:"Truck", Axle:"6x4",Engine:"14t"},
  { VIN:"xxx-K9A6A-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9A6F-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9AEA-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-K9AEF-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-M4A6F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-M4PEF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-M8AEF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9A6F-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9A8F-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-M9ASF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9AVF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9CSF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9CVF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",Engine:"420hp"},
  { VIN:"xxx-M9KEF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-M9LEF-xxxxxxxxx ", Type:"Truck", Axle:"8x4",},
  { VIN:"xxx-P9CNF-xxxxxxxxx ", Type:"Truck", Axle:"10x4",},
  { VIN:"xxx-P9CSF-xxxxxxxxx ", Type:"Truck", Axle:"10x4",},
  { VIN:"xxx-P9CVF-xxxxxxxxx ", Type:"Truck", Axle:"10x4",Engine:"420hp"},
  { VIN:"xxx-P9CDF-xxxxxxxxx ", Type:"Truck", Axle:"10x4",},
  { VIN:"xxx-V8AVF-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-V8P8F-xxxxxxxxx ", Type:"Truck", Axle:"6x4",},
  { VIN:"xxx-E5C4A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-E5C4F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-E6C4A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-E6C4F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-E8C4A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F3C5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F3C5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F3CBA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F3CBF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4C5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4C5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4CBA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4CBF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6C5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6C5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6CBA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4CBF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6C5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6C5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6CBA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F6CBF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8A5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8A5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8ABA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8ABF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8C5A-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8C5F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8CBA-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F8CBF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",},
  { VIN:"xxx-F4C4F-xxxxxxxxx ", Type:"Truck", Axle:"4x2",Engine:"215hp"},
  { VIN:"xxx-F4CEF-xxxxxxxxx ", Type:"Truck", Axle:"4x2",Engine:"320hp"},
  { VIN:"xxx-F8CEF-xxxxxxxxx  ", Type:"Truck", Axle:"4x2",Engine:"8,5t "},
  { VIN:"KP9-3JAMN-D5SB02004   ", Type:"Truck", Axle:"6x4",},
  { VIN:"KL3-MA45D-1TK001078    ", Type:"Dumper ", Axle:"6x2",},
  { VIN:"KL3-MD45D-1VK000401    ", Type:"Dumper ", Axle:"6x4",Engine:"12.000cc "},
  { VIN:"KL3RG58D34K000802    ", Type:"Dumper ", Axle:"8x4",},
  { VIN:"KLT-BR7EM-1AK000244   ", Type:"Dumper ", Axle:"6x4",Engine:"430HP "},
  { VIN:"KLT-BP5DM-19K000043   ", Type:"Dumper ", Axle:"10x4",Engine:"12.000cc "},
  { VIN:"KLT-BP5DC-1AK000062    ", Type:"Dumper ", Axle:"10x4",Engine:"12.000cc "},
  { VIN:"KLT-FR7FM-2BK000009     ", Type:"Dumper ", Axle:"8x4 ",Engine:"12.000cc "},
  { VIN:"KLG-YZ46R-DRB000204     ", Type:"Dumper ", Axle:"8x4 ",},
  { VIN:"xxx-F3DEF-xxxxxxxxx (8t)   ", Type:"Dumper ", Axle:" 4x2 ",Engine:"340HP "},
  { VIN:"xxx-K4DEF-xxxxxxxxx (15t)    ", Type:"Dumper ", Axle:" 6x4 ",Engine:"340HP "},
  { VIN:"xxx-F3D4F-xxxxxxxxx     ", Type:"Dumper ", Axle:" 4x2 ",Engine:"215hp "},
  { VIN:"xxx-F3D6F-xxxxxxxxx      ", Type:"Dumper ", Axle:" 4x2 ",Engine:"340hp"},
  { VIN:"xxx-K4D6F-xxxxxxxxx      ", Type:"Dumper ", Axle:" 6x4 ",Engine:"340hp"},
  { VIN:"xxx-K4D8F-xxxxxxxxx      ", Type:"Dumper ", Axle:" 6x4 ",Engine:"370hp"},
  { VIN:"xxx-K4D8A-xxxxxxxxx       ", Type:"Dumper ", Axle:" 6x4 "},
  { VIN:"xxx-K4D9F-xxxxxxxxx       ", Type:"Dumper ", Axle:" 6x4 ",Engine:"370hp"},
  { VIN:"xxx-K5DEF-xxxxxxxxx        ", Type:"Dumper ", Axle:" 6x4 "},
  { VIN:"xxx-K6D6F-xxxxxxxxx       ", Type:"Dumper ", Axle:" 8x4 ",Engine:"340hp"},
  { VIN:"xxx-K6D8F-xxxxxxxxx        ", Type:"Dumper ", Axle:" 8x4 ",Engine:"370hp"},
  { VIN:"xxx-M6D8F-xxxxxxxxx         ", Type:"Dumper ", Axle:" 8x4 ",Engine:"19T"},
  { VIN:"xxx-M6D9F-xxxxxxxxx          ", Type:"Dumper ", Axle:" 8x4 ",Engine:"19T"},
  { VIN:"xxx-M6DVF-xxxxxxxxx           ", Type:"Dumper ", Axle:" 8x4 ",Engine:"19T"},
  { VIN:"xxx-M8D9F-xxxxxxxxx            ", Type:"Dumper ", Axle:" 8x4 ",Engine:"19T"},
  { VIN:"xxx-M8DVF-xxxxxxxxx            ", Type:"Dumper ", Axle:" 8x4 ",Engine:"19T"},
  { VIN:"xxx-N7D9F-xxxxxxxxx            ", Type:"Dumper ", Axle:" 8x4 ",Engine:"24T"},
  { VIN:"xxx-N7DDF-xxxxxxxxx             ", Type:"Dumper ", Axle:" 8x4 ",Engine:"24T"},
  { VIN:"xxx-N7DVF-xxxxxxxxx              ", Type:"Dumper ", Axle:" 8x4 ",Engine:"420hp"},
  { VIN:"xxx-14D6A-xxxxxxxxx               ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"xxx-14D6F-xxxxxxxxx                ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"xxx-E3D4A-xxxxxxxxx                 ", Type:"Dumper ", Axle:"4x2 "},
  { VIN:"xxx-E3D4F-xxxxxxxxx                 ", Type:"Dumper ", Axle:"4x2 "},
  { VIN:"xxx-E3DBA-xxxxxxxxx                  ", Type:"Dumper ", Axle:"4x2 "},
  { VIN:"KL3N6DNF16K000151                   ", Type:"Dumper ", Axle:"8x4(2X6) "},
  { VIN:"KL3-E3DBA-1XC000817                    ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"KL3-K4DEF-1CK 001134                     ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"KL3-N8DNF-18K000505                  ", Type:"Dumper ", Axle:"8x4  "},
  { VIN:"KL3-N8DNF-18K000505                     ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"KL3-N7DVF-18K                      ", Type:"Dumper ", Axle:"6x4  "},
  { VIN:"KL3-RG58D-34K000802                      ", Type:"Dumper ", Axle:"8x4  "},
  { VIN:"KL3-N8ENF-17K000623                      ", Type:"Dumper ", Axle:"8x4  "},
  { VIN:"KLU-GH2TM-1EK000002                      ", Type:"Tractor Head  ", Axle:"4x2  "},
  { VIN:"EL4-V3TNF-36K000130                      ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"12.000cc "},
  { VIN:"KL4-YC44T-1TK000335                      ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL4-V3TVF-11K000073                       ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"xxx-V3TEF-xxxxxxxxx                        ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"360hp"},
  { VIN:"xxx-V3TXF-xxxxxxxxx                        ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"360hp"},
  { VIN:"xxx-KL3TX-xxxxxxxxx                        ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"xxx-M2S6F-xxxxxxxxx                        ", Type:"Tractor Head  ", Axle:"4x2 ",Engine:"340hp"},
  { VIN:"xxx-M2T6F-xxxxxxxxx                         ", Type:"Tractor Head  ", Axle:"4x2  ",Engine:"340hp"},
  { VIN:"xxx-M2SEF-xxxxxxxxx                          ", Type:"Tractor Head  ", Axle:"4x2  ",Engine:"340hp"},
  { VIN:"xxx-M2TEF-xxxxxxxxx                       ", Type:"Tractor Head  ", Axle:"4x2  ",Engine:"340hp"},
  { VIN:"xxx-M2S6F-xxxxxxxxx                     ", Type:"Tractor Head  ", Axle:"4x2 "},
  { VIN:"xxx-M2SVF-xxxxxxxxx                     ", Type:"Tractor Head  ", Axle:"4x2  ",Engine:"420hp"},
  { VIN:"xxx-V3T6F-xxxxxxxxx                     ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"340hp"},
  { VIN:"xxx-V3T8F-xxxxxxxxx                    ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"370hp"},
  { VIN:"xxx-V3T9F-xxxxxxxxx                  ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"xxx-V3TEF-xxxxxxxxx                  ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"xxx-V3TVF-xxxxxxxxx                   ", Type:"Tractor Head  ", Axle:"6x4  ",Engine:"420hp"},
  { VIN:"KL4-V3TNG-37K000113                    ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL4-YD44T-2YK000063                    ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL4-V3TDF-11K000084                    ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL4-YB44T-1YK000055                    ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL4-V3TNF-14K000105                  ", Type:"Tractor Head  ", Axle:"6x4  "},
  { VIN:"KL3-M9CVF-J3K000189                 ", Type:"Tank ", Axle:"8x4" ,Engine:"420hp"},
  { VIN:"KL3-P9CVF-13K003842                 ", Type:"Tank ", Axle:"10x4" ,Engine:"14.618cc"},
  { VIN:"KL3-PC77C-1VK000915                 ", Type:"Tank ", Axle:"8x4" },
  { VIN:"xxx-K4MVF-xxxxxxxxx                 ", Type:"Mixer ", Axle:"6x4" ,Engine:"390hp "},
  { VIN:"xxx-K5MVF-xxxxxxxxx                 ", Type:"Mixer ", Axle:"6x4" },
  { VIN:"xxx-K4M6F-xxxxxxxxx                ", Type:"Mixer ", Axle:"6x4" ,Engine:"340hp "},
  { VIN:"xxx-K4M7F-xxxxxxxxx               ", Type:"Mixer ", Axle:"6x4" ,Engine:"340hp "},
  { VIN:"xxx-K4MVF-xxxxxxxxx               ", Type:"Mixer ", Axle:"6x4" ,Engine:"390hp "},
  { VIN:"xxx-M9AVF-xxxxxxxxx               ", Type:"Mixer ", Axle:"6x4" ,Engine:"420hp "},
  { VIN:"FA-Box                ", Type:"Truck  ", Axle:"4x2" ,Engine:"9-16T "},
  { VIN:"FI-Box                ", Type:"Truck  ", Axle:"4x2" ,Engine:"9-16T "},
  { VIN:"FK-Box                 ", Type:"Truck  ", Axle:"4x2" ,Engine:"10-25T"},
  { VIN:"FM-Box                 ", Type:"Truck  ", Axle:"4x2" ,Engine:"10-25T"},
  { VIN:"FN-Box                ", Type:"Truck  ", Axle:"4x2" ,Engine:"10-25T"},
  { VIN:"FE              ", Type:"Truck  ", Axle:"4x2" ,Engine:"3.5-8.4T"},
  { VIN:"FG                ", Type:"Truck  ", Axle:"4x2" ,Engine:"3.5-8.4T "},
  { VIN:"FH               ", Type:"Truck  ", Axle:"4x2" ,Engine:"9.9T"},
  { VIN:"FK71F                ", Type:"Truck  ", Axle:"4x2" },
  { VIN:"FM             ", Type:"Truck  ", Axle:"4x2" ,Engine:"10-25T "},
  { VIN:"FP (super great)-Box ", Type:"Truck  ", Axle:"6x4" ,Engine:"15-34T "},
  { VIN:"FV (super great)-Box ", Type:"Truck  ", Axle:"6x4" ,Engine:"15-34T "},
  { VIN:"FU (super great)-Box ", Type:"Truck  ", Axle:"6x4" ,Engine:"15-34T "},
  { VIN:"FU54V ", Type:"Truck-Box   ", Axle:"6x4" },
  { VIN:"FS (super great)-Box ", Type:"Truck  ", Axle:"6x4" ,Engine:"15-34T "},
  { VIN:"FS54V-Box  ", Type:"Truck  ", Axle:"8x4" },
  { VIN:"FS74H-Box  ", Type:"Truck  ", Axle:"8x4" },
  { VIN:"FS70H  ", Type:"Truck-Crane  ", Axle:"6x4 " },
  { VIN:"FS54J   ", Type:"Truck  ", Axle:"6x4(8x4) " },
  { VIN:"FS50V  ", Type:"Truck-Crane   ", Axle:"8x4" },
  { VIN:"FS55J  ", Type:"Truck  ", Axle:"8x4" },
  { VIN:"FS60V  ", Type:"Truck-Crane  ", Axle:"8x4" },
  { VIN:"FJ  ", Type:"Truck  ", Axle:"6x4" ,Engine:"15-25T "},
  { VIN:"FP   ", Type:"Truck  ", Axle:"4x2" ,Engine:"15-27T "},
  { VIN:"FV   ", Type:"Truck  ", Axle:"4x2" ,Engine:"15-27T  "},
  { VIN:"FV50J    ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FV69V    ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FQ62F   ", Type:"Truck-Crane   ", Axle:"6x4"},
  { VIN:"FT50J (front double)    ", Type:"Truck  ", Axle:"6x2"},
  { VIN:"FT517 (front double)    ", Type:"Truck  ", Axle:"6x2"},
  { VIN:"FY54J    ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FY74H    ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FO    ", Type:"Dumper   ", Axle:"8x4",Engine:"31T "},
  { VIN:"FV411   ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FV50V  ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FV60V   ", Type:"Truck  ", Axle:"6x4"},
  { VIN:"FP50K  ", Type:"Truck  ", Axle:"4x2"},
  { VIN:"FV50K  ", Type:"Mixer   ", Axle:"6x4"},
  { VIN:"FV70G ", Type:"Mixer   ", Axle:"6x4"},
  { VIN:"FZ ", Type:"Tractor Head    ", Axle:"6x4",Engine:"40-49T  "},
  { VIN:"FV ", Type:"Tractor Head    ", Axle:"6x4",Engine:"49T  "},
   { VIN:"FV50L", Type:"Tractor Head   ", Axle:"6x4"},
   { VIN:"FP54J/55J/50J ", Type:"Tractor Head   ", Axle:"4x2"},
   { VIN:"FP64V  ", Type:"Tractor Head   ", Axle:"4x2"},
   { VIN:"FP74  ", Type:"Tractor Head   ", Axle:"4x2"},
   { VIN:"FH21G ", Type:"Tank    ", Axle:"4x2"},
   { VIN:"FP415 ", Type:"Tank    ", Axle:"4x2"},
   { VIN:"FT418 (front double)   ", Type:"Tank  ", Axle:"6x2"},
   { VIN:"FU50J   ", Type:"Tank   ", Axle:"6x4"},
   { VIN:"WU-300    ", Type:"Truck  ", Axle:"4x2",Engine:"6.5-7.15T"},
   { VIN:"FG-500   ", Type:"Truck  ", Axle:"4x2",Engine:"14-16T "},
   { VIN:"GH-500    ", Type:"Truck  ", Axle:"4x2",Engine:"16-19T"},
   { VIN:"FL-500    ", Type:"Truck  ", Axle:"6x2(3-1) ",Engine:"24-28T"},
   { VIN:"FM-500     ", Type:"Truck  ", Axle:"6x4 ",Engine:"24-28T"},
   { VIN:"FC-500   ", Type:"Truck  ", Axle:"4x2",Engine:"9.9-11T "},
   { VIN:"FC-500 (series 2836)    ", Type:"Truck  ", Axle:"6x4",Engine:"14T "},
   { VIN:"FC-LWB-500 (series 2829)    ", Type:"Truck  ", Axle:"6x4",Engine:"14T "},
   { VIN:"FC-SLWB-500 (series 2829)    ", Type:"Truck  ", Axle:"6x4",Engine:"14T "},
   { VIN:"FD-500   ", Type:"Truck  ", Axle:"4x2",Engine:"9.94-11T"},
   { VIN:"GD-500    ", Type:"Truck  ", Axle:"4x2",Engine:"11-12T "},
   { VIN:"FE-500    ", Type:"Truck  ", Axle:"4x2",Engine:"14T "},
   { VIN:"GT-500   ", Type:"Truck  ", Axle:"4x4",Engine:"13-14.5T "},
   { VIN:"FN (Double front axle)    ", Type:"Truck  ", Axle:"6x2"},
   { VIN:"FR-700 (Double rear axle)   ", Type:"Truck  ", Axle:"6x2",Engine:"26T  "},
   { VIN:"FS-700   ", Type:"Truck  ", Axle:"6x4",Engine:"28.3-32.3T"},
   { VIN:"ZS-700   ", Type:"Truck  ", Axle:"6x4",Engine:"41T  "},
   { VIN:"FY-700   ", Type:"Truck  ", Axle:"8x4",Engine:"32-39.7T"},
   { VIN:"ZY-700    ", Type:"Truck  ", Axle:"8x4",Engine:"48-50T"},
   { VIN:"FC-500 (series 2836)    ", Type:"Mixer  ", Axle:"6x4",Engine:"6m3"},
   { VIN:"FC-500 (series 2836)    ", Type:"Dumper   ", Axle:"6x4",Engine:"10m3 "},
   { VIN:"TH-500    ", Type:"Dumper  ", Axle:"6x4 "},
   { VIN:"SG-500     ", Type:"Tractor Head    ", Axle:"4x2 ",Engine:"32-40T "},
   { VIN:"FM-500      ", Type:"Tractor Head    ", Axle:"4x2 ",Engine:"32-40T "},
   { VIN:"SH-700   ", Type:"Tractor Head    ", Axle:"4x2 ",Engine:"32-40T "},
   { VIN:"SS-700 (series 2841)    ", Type:"Tractor Head    ", Axle:"6x4 ",Engine:"38-50.5T "},
   { VIN:"SR-700    ", Type:"Tractor Head    ", Axle:"6x2(3-1)  ",Engine:"43-47T  "},
   { VIN:"SV-700    ", Type:"Tractor Head    ", Axle:"6x4 ",Engine:"100T "},
   { VIN:"CD-11L-Box    ", Type:"Truck    ", Axle:"6x2(3-1) ",Engine:"360-420hp"},
   { VIN:"CD-8L-Box    ", Type:"Truck    ", Axle:"6x2(3-1) ",Engine:"357hp  "},
   { VIN:"CG-11L-Box    ", Type:"Truck    ", Axle:"8x4",Engine:"360-420hp  "},
   { VIN:"CG-8L-Box    ", Type:"Truck    ", Axle:"8x4  ",Engine:"357hp  "},
   { VIN:"CW-11L   ", Type:"Truck    ", Axle:"6x4  ",Engine:"360-420hp"},
   { VIN:"CX    ", Type:"Truck    ", Axle:"6x4 ",Engine:"360-390hp  "},
   { VIN:"CQE-Box    ", Type:"Truck    ", Axle:"8x2 ",Engine:"250-330hp  "},
   { VIN:"CKE-Box    ", Type:"Truck   ", Axle:"4x2 ",Engine:"250-330hp  "},
   { VIN:"CDE-Box   ", Type:"Truck    ", Axle:"6x2  ",Engine:"250-330hp  "},
   { VIN:"CWE    ", Type:"Truck   ", Axle:"6x4 ",Engine:"250-440hp  "},
   { VIN:"LK-Box    ", Type:"Truck  ", Axle:"4x2  ",Engine:"190-240hp"},
   { VIN:"PK   ", Type:"Truck  ", Axle:"4x2  ",Engine:"240hp "},
   { VIN:"PW    ", Type:"Truck  ", Axle:"6x4",Engine:"240-310hp  "},
   { VIN:"SK   ", Type:"Truck  ", Axle:"4x2",Engine:"130-175hp  "},
   { VIN:"SF  ", Type:"Truck  ", Axle:"4x4",Engine:"130-150hp  "},
   { VIN:"RK-Box ", Type:"Truck  ", Axle:"4x2",Engine:"175hp "},
   { VIN:"RKE-Box  ", Type:"Truck  ", Axle:"4x2",Engine:"150hp "},
   { VIN:"CW-8L  ", Type:"Mixer  ", Axle:"6x4",Engine:"357hp "},
   { VIN:"CGE  ", Type:"Dumper ", Axle:"8x4",Engine:"280-440hp"},
   { VIN:"MKE  ", Type:"Dumper ", Axle:"4x2",Engine:"180-240hp "},
   { VIN:"LKE ", Type:"Dumper ", Axle:"4x2",Engine:"180-240hp "},
   { VIN:"PKE  ", Type:"Dumper ", Axle:"4x2",Engine:"250-280hp "},
   { VIN:"GK  ", Type:"Tractor Head ", Axle:"4x2",Engine:"390-460hp "},
   { VIN:"GKE ", Type:"Tractor Head ", Axle:"4x2",Engine:"280-440hp  "},
   { VIN:"GDE  ", Type:"Tractor Head ", Axle:"6x2 ",Engine:"280-440hp "},
   { VIN:"GWE  ", Type:"Tractor Head ", Axle:"6x4",Engine:"280-440hp "},
   { VIN:"FL  ", Type:"Truck", Axle:"4x2",},
   { VIN:"FMX  ", Type:"Dumper ", Axle:"8x4",},
   { VIN:"FH16  ", Type:"Tractor Head  ", Axle:"4x2",},
   { VIN:"FH ", Type:"Tractor Head  ", Axle:"4x2",},
   { VIN:"FM ", Type:"Tractor Head  ", Axle:"4x2",},
   { VIN:"FE ", Type:"Tractor Head  ", Axle:"6x2(3-1)",},
   { VIN:"YV2-J4CFC-43A556795 ", Type:"Tractor Head  ", Axle:"6x2(3-1)",},
   { VIN:"YV2-J4CFC-43A562824 ", Type:"Tractor Head  ", Axle:"6x2(3-1)",},

  
 
];

// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("searchForm");
  const clearBtn = document.getElementById("clearBtn");

  // ENTER KEY + BUTTON CLICK
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    searchData();
  });

  clearBtn.addEventListener("click", function () {
    clearSearch();
  });

  // Show all on load          
  displayData(data);

});


function searchData() {
  const VINKey = document.getElementById("searchVIN").value.toLowerCase().trim();

  const filtered = data.filter(item => {
    const VINMatch = item.VIN.toLowerCase().includes(VINKey);
    return VINMatch 
  });

  displayData(filtered);
}


function displayData(array) {

  if(array.length === 0){
    document.getElementById("result").innerHTML = "<p>No data found</p>";
    return;
  }

  let table = `
  <table border="1" width="100%">
    <tr>
      <th>VIN</th>
      <th>Type</th>
      <th>Axle</th>
      <th>Engine</th>
    </tr>
  `;

  array.forEach(item => {
    table += `
      <tr>
        <td>${item.VIN}</td>
        <td>${item.Type}</td>
        <td>${item.Axle}</td>
        <td>${item.Engine}</td>
      </tr>
    `;
  });

  table += `</table>`;

  document.getElementById("result").innerHTML = table;
}


function clearSearch() {
  document.getElementById("searchVIN").value = "";
  displayData(data);
}
