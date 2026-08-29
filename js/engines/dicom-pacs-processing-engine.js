/**
 * OmniHealth OS - High-Performance DICOM & Medical Imaging Processing Engine
 * Performs DICOM header parsing, window level LUT transformation, 2D convolution spatial filters, and ROI metrics.
 */

class DICOMProcessingEngine {
  constructor() {
    this.tagDictionary = new Map();
    this.initTagDictionary();
  }

  initTagDictionary() {
    // DICOM Tag (000a, 0014)
    this.tagDictionary.set("(000a,0014)", {
      tag: "(000a,0014)",
      name: "DicomElement_000a_0014",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 1",
      getter: function(dataset) { return dataset ? dataset["tag_1"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0018)
    this.tagDictionary.set("(000c,0018)", {
      tag: "(000c,0018)",
      name: "DicomElement_000c_0018",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 2",
      getter: function(dataset) { return dataset ? dataset["tag_2"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 001c)
    this.tagDictionary.set("(000e,001c)", {
      tag: "(000e,001c)",
      name: "DicomElement_000e_001c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 3",
      getter: function(dataset) { return dataset ? dataset["tag_3"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0020)
    this.tagDictionary.set("(0010,0020)", {
      tag: "(0010,0020)",
      name: "DicomElement_0010_0020",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 4",
      getter: function(dataset) { return dataset ? dataset["tag_4"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0024)
    this.tagDictionary.set("(0012,0024)", {
      tag: "(0012,0024)",
      name: "DicomElement_0012_0024",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 5",
      getter: function(dataset) { return dataset ? dataset["tag_5"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0028)
    this.tagDictionary.set("(0014,0028)", {
      tag: "(0014,0028)",
      name: "DicomElement_0014_0028",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 6",
      getter: function(dataset) { return dataset ? dataset["tag_6"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 002c)
    this.tagDictionary.set("(0016,002c)", {
      tag: "(0016,002c)",
      name: "DicomElement_0016_002c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 7",
      getter: function(dataset) { return dataset ? dataset["tag_7"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0030)
    this.tagDictionary.set("(0018,0030)", {
      tag: "(0018,0030)",
      name: "DicomElement_0018_0030",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 8",
      getter: function(dataset) { return dataset ? dataset["tag_8"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0034)
    this.tagDictionary.set("(001a,0034)", {
      tag: "(001a,0034)",
      name: "DicomElement_001a_0034",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 9",
      getter: function(dataset) { return dataset ? dataset["tag_9"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0038)
    this.tagDictionary.set("(001c,0038)", {
      tag: "(001c,0038)",
      name: "DicomElement_001c_0038",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 10",
      getter: function(dataset) { return dataset ? dataset["tag_10"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 003c)
    this.tagDictionary.set("(001e,003c)", {
      tag: "(001e,003c)",
      name: "DicomElement_001e_003c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 11",
      getter: function(dataset) { return dataset ? dataset["tag_11"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0040)
    this.tagDictionary.set("(0020,0040)", {
      tag: "(0020,0040)",
      name: "DicomElement_0020_0040",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 12",
      getter: function(dataset) { return dataset ? dataset["tag_12"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0044)
    this.tagDictionary.set("(0022,0044)", {
      tag: "(0022,0044)",
      name: "DicomElement_0022_0044",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 13",
      getter: function(dataset) { return dataset ? dataset["tag_13"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0048)
    this.tagDictionary.set("(0024,0048)", {
      tag: "(0024,0048)",
      name: "DicomElement_0024_0048",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 14",
      getter: function(dataset) { return dataset ? dataset["tag_14"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 004c)
    this.tagDictionary.set("(0026,004c)", {
      tag: "(0026,004c)",
      name: "DicomElement_0026_004c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 15",
      getter: function(dataset) { return dataset ? dataset["tag_15"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0050)
    this.tagDictionary.set("(0028,0050)", {
      tag: "(0028,0050)",
      name: "DicomElement_0028_0050",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 16",
      getter: function(dataset) { return dataset ? dataset["tag_16"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0054)
    this.tagDictionary.set("(002a,0054)", {
      tag: "(002a,0054)",
      name: "DicomElement_002a_0054",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 17",
      getter: function(dataset) { return dataset ? dataset["tag_17"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0058)
    this.tagDictionary.set("(002c,0058)", {
      tag: "(002c,0058)",
      name: "DicomElement_002c_0058",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 18",
      getter: function(dataset) { return dataset ? dataset["tag_18"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 005c)
    this.tagDictionary.set("(002e,005c)", {
      tag: "(002e,005c)",
      name: "DicomElement_002e_005c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 19",
      getter: function(dataset) { return dataset ? dataset["tag_19"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0060)
    this.tagDictionary.set("(0008,0060)", {
      tag: "(0008,0060)",
      name: "DicomElement_0008_0060",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 20",
      getter: function(dataset) { return dataset ? dataset["tag_20"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0064)
    this.tagDictionary.set("(000a,0064)", {
      tag: "(000a,0064)",
      name: "DicomElement_000a_0064",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 21",
      getter: function(dataset) { return dataset ? dataset["tag_21"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0068)
    this.tagDictionary.set("(000c,0068)", {
      tag: "(000c,0068)",
      name: "DicomElement_000c_0068",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 22",
      getter: function(dataset) { return dataset ? dataset["tag_22"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 006c)
    this.tagDictionary.set("(000e,006c)", {
      tag: "(000e,006c)",
      name: "DicomElement_000e_006c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 23",
      getter: function(dataset) { return dataset ? dataset["tag_23"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0070)
    this.tagDictionary.set("(0010,0070)", {
      tag: "(0010,0070)",
      name: "DicomElement_0010_0070",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 24",
      getter: function(dataset) { return dataset ? dataset["tag_24"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0074)
    this.tagDictionary.set("(0012,0074)", {
      tag: "(0012,0074)",
      name: "DicomElement_0012_0074",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 25",
      getter: function(dataset) { return dataset ? dataset["tag_25"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0078)
    this.tagDictionary.set("(0014,0078)", {
      tag: "(0014,0078)",
      name: "DicomElement_0014_0078",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 26",
      getter: function(dataset) { return dataset ? dataset["tag_26"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 007c)
    this.tagDictionary.set("(0016,007c)", {
      tag: "(0016,007c)",
      name: "DicomElement_0016_007c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 27",
      getter: function(dataset) { return dataset ? dataset["tag_27"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0080)
    this.tagDictionary.set("(0018,0080)", {
      tag: "(0018,0080)",
      name: "DicomElement_0018_0080",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 28",
      getter: function(dataset) { return dataset ? dataset["tag_28"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0084)
    this.tagDictionary.set("(001a,0084)", {
      tag: "(001a,0084)",
      name: "DicomElement_001a_0084",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 29",
      getter: function(dataset) { return dataset ? dataset["tag_29"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0088)
    this.tagDictionary.set("(001c,0088)", {
      tag: "(001c,0088)",
      name: "DicomElement_001c_0088",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 30",
      getter: function(dataset) { return dataset ? dataset["tag_30"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 008c)
    this.tagDictionary.set("(001e,008c)", {
      tag: "(001e,008c)",
      name: "DicomElement_001e_008c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 31",
      getter: function(dataset) { return dataset ? dataset["tag_31"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0090)
    this.tagDictionary.set("(0020,0090)", {
      tag: "(0020,0090)",
      name: "DicomElement_0020_0090",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 32",
      getter: function(dataset) { return dataset ? dataset["tag_32"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0094)
    this.tagDictionary.set("(0022,0094)", {
      tag: "(0022,0094)",
      name: "DicomElement_0022_0094",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 33",
      getter: function(dataset) { return dataset ? dataset["tag_33"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0098)
    this.tagDictionary.set("(0024,0098)", {
      tag: "(0024,0098)",
      name: "DicomElement_0024_0098",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 34",
      getter: function(dataset) { return dataset ? dataset["tag_34"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 009c)
    this.tagDictionary.set("(0026,009c)", {
      tag: "(0026,009c)",
      name: "DicomElement_0026_009c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 35",
      getter: function(dataset) { return dataset ? dataset["tag_35"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 00a0)
    this.tagDictionary.set("(0028,00a0)", {
      tag: "(0028,00a0)",
      name: "DicomElement_0028_00a0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 36",
      getter: function(dataset) { return dataset ? dataset["tag_36"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 00a4)
    this.tagDictionary.set("(002a,00a4)", {
      tag: "(002a,00a4)",
      name: "DicomElement_002a_00a4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 37",
      getter: function(dataset) { return dataset ? dataset["tag_37"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 00a8)
    this.tagDictionary.set("(002c,00a8)", {
      tag: "(002c,00a8)",
      name: "DicomElement_002c_00a8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 38",
      getter: function(dataset) { return dataset ? dataset["tag_38"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 00ac)
    this.tagDictionary.set("(002e,00ac)", {
      tag: "(002e,00ac)",
      name: "DicomElement_002e_00ac",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 39",
      getter: function(dataset) { return dataset ? dataset["tag_39"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 00b0)
    this.tagDictionary.set("(0008,00b0)", {
      tag: "(0008,00b0)",
      name: "DicomElement_0008_00b0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 40",
      getter: function(dataset) { return dataset ? dataset["tag_40"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 00b4)
    this.tagDictionary.set("(000a,00b4)", {
      tag: "(000a,00b4)",
      name: "DicomElement_000a_00b4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 41",
      getter: function(dataset) { return dataset ? dataset["tag_41"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 00b8)
    this.tagDictionary.set("(000c,00b8)", {
      tag: "(000c,00b8)",
      name: "DicomElement_000c_00b8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 42",
      getter: function(dataset) { return dataset ? dataset["tag_42"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 00bc)
    this.tagDictionary.set("(000e,00bc)", {
      tag: "(000e,00bc)",
      name: "DicomElement_000e_00bc",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 43",
      getter: function(dataset) { return dataset ? dataset["tag_43"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 00c0)
    this.tagDictionary.set("(0010,00c0)", {
      tag: "(0010,00c0)",
      name: "DicomElement_0010_00c0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 44",
      getter: function(dataset) { return dataset ? dataset["tag_44"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 00c4)
    this.tagDictionary.set("(0012,00c4)", {
      tag: "(0012,00c4)",
      name: "DicomElement_0012_00c4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 45",
      getter: function(dataset) { return dataset ? dataset["tag_45"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 00c8)
    this.tagDictionary.set("(0014,00c8)", {
      tag: "(0014,00c8)",
      name: "DicomElement_0014_00c8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 46",
      getter: function(dataset) { return dataset ? dataset["tag_46"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 00cc)
    this.tagDictionary.set("(0016,00cc)", {
      tag: "(0016,00cc)",
      name: "DicomElement_0016_00cc",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 47",
      getter: function(dataset) { return dataset ? dataset["tag_47"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 00d0)
    this.tagDictionary.set("(0018,00d0)", {
      tag: "(0018,00d0)",
      name: "DicomElement_0018_00d0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 48",
      getter: function(dataset) { return dataset ? dataset["tag_48"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 00d4)
    this.tagDictionary.set("(001a,00d4)", {
      tag: "(001a,00d4)",
      name: "DicomElement_001a_00d4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 49",
      getter: function(dataset) { return dataset ? dataset["tag_49"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 00d8)
    this.tagDictionary.set("(001c,00d8)", {
      tag: "(001c,00d8)",
      name: "DicomElement_001c_00d8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 50",
      getter: function(dataset) { return dataset ? dataset["tag_50"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 00dc)
    this.tagDictionary.set("(001e,00dc)", {
      tag: "(001e,00dc)",
      name: "DicomElement_001e_00dc",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 51",
      getter: function(dataset) { return dataset ? dataset["tag_51"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 00e0)
    this.tagDictionary.set("(0020,00e0)", {
      tag: "(0020,00e0)",
      name: "DicomElement_0020_00e0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 52",
      getter: function(dataset) { return dataset ? dataset["tag_52"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 00e4)
    this.tagDictionary.set("(0022,00e4)", {
      tag: "(0022,00e4)",
      name: "DicomElement_0022_00e4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 53",
      getter: function(dataset) { return dataset ? dataset["tag_53"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 00e8)
    this.tagDictionary.set("(0024,00e8)", {
      tag: "(0024,00e8)",
      name: "DicomElement_0024_00e8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 54",
      getter: function(dataset) { return dataset ? dataset["tag_54"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 00ec)
    this.tagDictionary.set("(0026,00ec)", {
      tag: "(0026,00ec)",
      name: "DicomElement_0026_00ec",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 55",
      getter: function(dataset) { return dataset ? dataset["tag_55"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 00f0)
    this.tagDictionary.set("(0028,00f0)", {
      tag: "(0028,00f0)",
      name: "DicomElement_0028_00f0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 56",
      getter: function(dataset) { return dataset ? dataset["tag_56"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 00f4)
    this.tagDictionary.set("(002a,00f4)", {
      tag: "(002a,00f4)",
      name: "DicomElement_002a_00f4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 57",
      getter: function(dataset) { return dataset ? dataset["tag_57"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 00f8)
    this.tagDictionary.set("(002c,00f8)", {
      tag: "(002c,00f8)",
      name: "DicomElement_002c_00f8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 58",
      getter: function(dataset) { return dataset ? dataset["tag_58"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 00fc)
    this.tagDictionary.set("(002e,00fc)", {
      tag: "(002e,00fc)",
      name: "DicomElement_002e_00fc",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 59",
      getter: function(dataset) { return dataset ? dataset["tag_59"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0100)
    this.tagDictionary.set("(0008,0100)", {
      tag: "(0008,0100)",
      name: "DicomElement_0008_0100",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 60",
      getter: function(dataset) { return dataset ? dataset["tag_60"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0104)
    this.tagDictionary.set("(000a,0104)", {
      tag: "(000a,0104)",
      name: "DicomElement_000a_0104",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 61",
      getter: function(dataset) { return dataset ? dataset["tag_61"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0108)
    this.tagDictionary.set("(000c,0108)", {
      tag: "(000c,0108)",
      name: "DicomElement_000c_0108",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 62",
      getter: function(dataset) { return dataset ? dataset["tag_62"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 010c)
    this.tagDictionary.set("(000e,010c)", {
      tag: "(000e,010c)",
      name: "DicomElement_000e_010c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 63",
      getter: function(dataset) { return dataset ? dataset["tag_63"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0110)
    this.tagDictionary.set("(0010,0110)", {
      tag: "(0010,0110)",
      name: "DicomElement_0010_0110",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 64",
      getter: function(dataset) { return dataset ? dataset["tag_64"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0114)
    this.tagDictionary.set("(0012,0114)", {
      tag: "(0012,0114)",
      name: "DicomElement_0012_0114",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 65",
      getter: function(dataset) { return dataset ? dataset["tag_65"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0118)
    this.tagDictionary.set("(0014,0118)", {
      tag: "(0014,0118)",
      name: "DicomElement_0014_0118",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 66",
      getter: function(dataset) { return dataset ? dataset["tag_66"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 011c)
    this.tagDictionary.set("(0016,011c)", {
      tag: "(0016,011c)",
      name: "DicomElement_0016_011c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 67",
      getter: function(dataset) { return dataset ? dataset["tag_67"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0120)
    this.tagDictionary.set("(0018,0120)", {
      tag: "(0018,0120)",
      name: "DicomElement_0018_0120",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 68",
      getter: function(dataset) { return dataset ? dataset["tag_68"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0124)
    this.tagDictionary.set("(001a,0124)", {
      tag: "(001a,0124)",
      name: "DicomElement_001a_0124",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 69",
      getter: function(dataset) { return dataset ? dataset["tag_69"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0128)
    this.tagDictionary.set("(001c,0128)", {
      tag: "(001c,0128)",
      name: "DicomElement_001c_0128",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 70",
      getter: function(dataset) { return dataset ? dataset["tag_70"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 012c)
    this.tagDictionary.set("(001e,012c)", {
      tag: "(001e,012c)",
      name: "DicomElement_001e_012c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 71",
      getter: function(dataset) { return dataset ? dataset["tag_71"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0130)
    this.tagDictionary.set("(0020,0130)", {
      tag: "(0020,0130)",
      name: "DicomElement_0020_0130",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 72",
      getter: function(dataset) { return dataset ? dataset["tag_72"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0134)
    this.tagDictionary.set("(0022,0134)", {
      tag: "(0022,0134)",
      name: "DicomElement_0022_0134",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 73",
      getter: function(dataset) { return dataset ? dataset["tag_73"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0138)
    this.tagDictionary.set("(0024,0138)", {
      tag: "(0024,0138)",
      name: "DicomElement_0024_0138",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 74",
      getter: function(dataset) { return dataset ? dataset["tag_74"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 013c)
    this.tagDictionary.set("(0026,013c)", {
      tag: "(0026,013c)",
      name: "DicomElement_0026_013c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 75",
      getter: function(dataset) { return dataset ? dataset["tag_75"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0140)
    this.tagDictionary.set("(0028,0140)", {
      tag: "(0028,0140)",
      name: "DicomElement_0028_0140",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 76",
      getter: function(dataset) { return dataset ? dataset["tag_76"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0144)
    this.tagDictionary.set("(002a,0144)", {
      tag: "(002a,0144)",
      name: "DicomElement_002a_0144",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 77",
      getter: function(dataset) { return dataset ? dataset["tag_77"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0148)
    this.tagDictionary.set("(002c,0148)", {
      tag: "(002c,0148)",
      name: "DicomElement_002c_0148",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 78",
      getter: function(dataset) { return dataset ? dataset["tag_78"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 014c)
    this.tagDictionary.set("(002e,014c)", {
      tag: "(002e,014c)",
      name: "DicomElement_002e_014c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 79",
      getter: function(dataset) { return dataset ? dataset["tag_79"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0150)
    this.tagDictionary.set("(0008,0150)", {
      tag: "(0008,0150)",
      name: "DicomElement_0008_0150",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 80",
      getter: function(dataset) { return dataset ? dataset["tag_80"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0154)
    this.tagDictionary.set("(000a,0154)", {
      tag: "(000a,0154)",
      name: "DicomElement_000a_0154",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 81",
      getter: function(dataset) { return dataset ? dataset["tag_81"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0158)
    this.tagDictionary.set("(000c,0158)", {
      tag: "(000c,0158)",
      name: "DicomElement_000c_0158",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 82",
      getter: function(dataset) { return dataset ? dataset["tag_82"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 015c)
    this.tagDictionary.set("(000e,015c)", {
      tag: "(000e,015c)",
      name: "DicomElement_000e_015c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 83",
      getter: function(dataset) { return dataset ? dataset["tag_83"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0160)
    this.tagDictionary.set("(0010,0160)", {
      tag: "(0010,0160)",
      name: "DicomElement_0010_0160",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 84",
      getter: function(dataset) { return dataset ? dataset["tag_84"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0164)
    this.tagDictionary.set("(0012,0164)", {
      tag: "(0012,0164)",
      name: "DicomElement_0012_0164",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 85",
      getter: function(dataset) { return dataset ? dataset["tag_85"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0168)
    this.tagDictionary.set("(0014,0168)", {
      tag: "(0014,0168)",
      name: "DicomElement_0014_0168",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 86",
      getter: function(dataset) { return dataset ? dataset["tag_86"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 016c)
    this.tagDictionary.set("(0016,016c)", {
      tag: "(0016,016c)",
      name: "DicomElement_0016_016c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 87",
      getter: function(dataset) { return dataset ? dataset["tag_87"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0170)
    this.tagDictionary.set("(0018,0170)", {
      tag: "(0018,0170)",
      name: "DicomElement_0018_0170",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 88",
      getter: function(dataset) { return dataset ? dataset["tag_88"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0174)
    this.tagDictionary.set("(001a,0174)", {
      tag: "(001a,0174)",
      name: "DicomElement_001a_0174",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 89",
      getter: function(dataset) { return dataset ? dataset["tag_89"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0178)
    this.tagDictionary.set("(001c,0178)", {
      tag: "(001c,0178)",
      name: "DicomElement_001c_0178",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 90",
      getter: function(dataset) { return dataset ? dataset["tag_90"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 017c)
    this.tagDictionary.set("(001e,017c)", {
      tag: "(001e,017c)",
      name: "DicomElement_001e_017c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 91",
      getter: function(dataset) { return dataset ? dataset["tag_91"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0180)
    this.tagDictionary.set("(0020,0180)", {
      tag: "(0020,0180)",
      name: "DicomElement_0020_0180",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 92",
      getter: function(dataset) { return dataset ? dataset["tag_92"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0184)
    this.tagDictionary.set("(0022,0184)", {
      tag: "(0022,0184)",
      name: "DicomElement_0022_0184",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 93",
      getter: function(dataset) { return dataset ? dataset["tag_93"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0188)
    this.tagDictionary.set("(0024,0188)", {
      tag: "(0024,0188)",
      name: "DicomElement_0024_0188",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 94",
      getter: function(dataset) { return dataset ? dataset["tag_94"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 018c)
    this.tagDictionary.set("(0026,018c)", {
      tag: "(0026,018c)",
      name: "DicomElement_0026_018c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 95",
      getter: function(dataset) { return dataset ? dataset["tag_95"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0190)
    this.tagDictionary.set("(0028,0190)", {
      tag: "(0028,0190)",
      name: "DicomElement_0028_0190",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 96",
      getter: function(dataset) { return dataset ? dataset["tag_96"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0194)
    this.tagDictionary.set("(002a,0194)", {
      tag: "(002a,0194)",
      name: "DicomElement_002a_0194",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 97",
      getter: function(dataset) { return dataset ? dataset["tag_97"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0198)
    this.tagDictionary.set("(002c,0198)", {
      tag: "(002c,0198)",
      name: "DicomElement_002c_0198",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 98",
      getter: function(dataset) { return dataset ? dataset["tag_98"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 019c)
    this.tagDictionary.set("(002e,019c)", {
      tag: "(002e,019c)",
      name: "DicomElement_002e_019c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 99",
      getter: function(dataset) { return dataset ? dataset["tag_99"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 01a0)
    this.tagDictionary.set("(0008,01a0)", {
      tag: "(0008,01a0)",
      name: "DicomElement_0008_01a0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 100",
      getter: function(dataset) { return dataset ? dataset["tag_100"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 01a4)
    this.tagDictionary.set("(000a,01a4)", {
      tag: "(000a,01a4)",
      name: "DicomElement_000a_01a4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 101",
      getter: function(dataset) { return dataset ? dataset["tag_101"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 01a8)
    this.tagDictionary.set("(000c,01a8)", {
      tag: "(000c,01a8)",
      name: "DicomElement_000c_01a8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 102",
      getter: function(dataset) { return dataset ? dataset["tag_102"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 01ac)
    this.tagDictionary.set("(000e,01ac)", {
      tag: "(000e,01ac)",
      name: "DicomElement_000e_01ac",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 103",
      getter: function(dataset) { return dataset ? dataset["tag_103"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 01b0)
    this.tagDictionary.set("(0010,01b0)", {
      tag: "(0010,01b0)",
      name: "DicomElement_0010_01b0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 104",
      getter: function(dataset) { return dataset ? dataset["tag_104"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 01b4)
    this.tagDictionary.set("(0012,01b4)", {
      tag: "(0012,01b4)",
      name: "DicomElement_0012_01b4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 105",
      getter: function(dataset) { return dataset ? dataset["tag_105"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 01b8)
    this.tagDictionary.set("(0014,01b8)", {
      tag: "(0014,01b8)",
      name: "DicomElement_0014_01b8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 106",
      getter: function(dataset) { return dataset ? dataset["tag_106"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 01bc)
    this.tagDictionary.set("(0016,01bc)", {
      tag: "(0016,01bc)",
      name: "DicomElement_0016_01bc",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 107",
      getter: function(dataset) { return dataset ? dataset["tag_107"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 01c0)
    this.tagDictionary.set("(0018,01c0)", {
      tag: "(0018,01c0)",
      name: "DicomElement_0018_01c0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 108",
      getter: function(dataset) { return dataset ? dataset["tag_108"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 01c4)
    this.tagDictionary.set("(001a,01c4)", {
      tag: "(001a,01c4)",
      name: "DicomElement_001a_01c4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 109",
      getter: function(dataset) { return dataset ? dataset["tag_109"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 01c8)
    this.tagDictionary.set("(001c,01c8)", {
      tag: "(001c,01c8)",
      name: "DicomElement_001c_01c8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 110",
      getter: function(dataset) { return dataset ? dataset["tag_110"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 01cc)
    this.tagDictionary.set("(001e,01cc)", {
      tag: "(001e,01cc)",
      name: "DicomElement_001e_01cc",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 111",
      getter: function(dataset) { return dataset ? dataset["tag_111"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 01d0)
    this.tagDictionary.set("(0020,01d0)", {
      tag: "(0020,01d0)",
      name: "DicomElement_0020_01d0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 112",
      getter: function(dataset) { return dataset ? dataset["tag_112"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 01d4)
    this.tagDictionary.set("(0022,01d4)", {
      tag: "(0022,01d4)",
      name: "DicomElement_0022_01d4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 113",
      getter: function(dataset) { return dataset ? dataset["tag_113"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 01d8)
    this.tagDictionary.set("(0024,01d8)", {
      tag: "(0024,01d8)",
      name: "DicomElement_0024_01d8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 114",
      getter: function(dataset) { return dataset ? dataset["tag_114"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 01dc)
    this.tagDictionary.set("(0026,01dc)", {
      tag: "(0026,01dc)",
      name: "DicomElement_0026_01dc",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 115",
      getter: function(dataset) { return dataset ? dataset["tag_115"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 01e0)
    this.tagDictionary.set("(0028,01e0)", {
      tag: "(0028,01e0)",
      name: "DicomElement_0028_01e0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 116",
      getter: function(dataset) { return dataset ? dataset["tag_116"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 01e4)
    this.tagDictionary.set("(002a,01e4)", {
      tag: "(002a,01e4)",
      name: "DicomElement_002a_01e4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 117",
      getter: function(dataset) { return dataset ? dataset["tag_117"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 01e8)
    this.tagDictionary.set("(002c,01e8)", {
      tag: "(002c,01e8)",
      name: "DicomElement_002c_01e8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 118",
      getter: function(dataset) { return dataset ? dataset["tag_118"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 01ec)
    this.tagDictionary.set("(002e,01ec)", {
      tag: "(002e,01ec)",
      name: "DicomElement_002e_01ec",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 119",
      getter: function(dataset) { return dataset ? dataset["tag_119"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 01f0)
    this.tagDictionary.set("(0008,01f0)", {
      tag: "(0008,01f0)",
      name: "DicomElement_0008_01f0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 120",
      getter: function(dataset) { return dataset ? dataset["tag_120"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 01f4)
    this.tagDictionary.set("(000a,01f4)", {
      tag: "(000a,01f4)",
      name: "DicomElement_000a_01f4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 121",
      getter: function(dataset) { return dataset ? dataset["tag_121"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 01f8)
    this.tagDictionary.set("(000c,01f8)", {
      tag: "(000c,01f8)",
      name: "DicomElement_000c_01f8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 122",
      getter: function(dataset) { return dataset ? dataset["tag_122"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 01fc)
    this.tagDictionary.set("(000e,01fc)", {
      tag: "(000e,01fc)",
      name: "DicomElement_000e_01fc",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 123",
      getter: function(dataset) { return dataset ? dataset["tag_123"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0200)
    this.tagDictionary.set("(0010,0200)", {
      tag: "(0010,0200)",
      name: "DicomElement_0010_0200",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 124",
      getter: function(dataset) { return dataset ? dataset["tag_124"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0204)
    this.tagDictionary.set("(0012,0204)", {
      tag: "(0012,0204)",
      name: "DicomElement_0012_0204",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 125",
      getter: function(dataset) { return dataset ? dataset["tag_125"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0208)
    this.tagDictionary.set("(0014,0208)", {
      tag: "(0014,0208)",
      name: "DicomElement_0014_0208",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 126",
      getter: function(dataset) { return dataset ? dataset["tag_126"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 020c)
    this.tagDictionary.set("(0016,020c)", {
      tag: "(0016,020c)",
      name: "DicomElement_0016_020c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 127",
      getter: function(dataset) { return dataset ? dataset["tag_127"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0210)
    this.tagDictionary.set("(0018,0210)", {
      tag: "(0018,0210)",
      name: "DicomElement_0018_0210",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 128",
      getter: function(dataset) { return dataset ? dataset["tag_128"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0214)
    this.tagDictionary.set("(001a,0214)", {
      tag: "(001a,0214)",
      name: "DicomElement_001a_0214",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 129",
      getter: function(dataset) { return dataset ? dataset["tag_129"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0218)
    this.tagDictionary.set("(001c,0218)", {
      tag: "(001c,0218)",
      name: "DicomElement_001c_0218",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 130",
      getter: function(dataset) { return dataset ? dataset["tag_130"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 021c)
    this.tagDictionary.set("(001e,021c)", {
      tag: "(001e,021c)",
      name: "DicomElement_001e_021c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 131",
      getter: function(dataset) { return dataset ? dataset["tag_131"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0220)
    this.tagDictionary.set("(0020,0220)", {
      tag: "(0020,0220)",
      name: "DicomElement_0020_0220",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 132",
      getter: function(dataset) { return dataset ? dataset["tag_132"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0224)
    this.tagDictionary.set("(0022,0224)", {
      tag: "(0022,0224)",
      name: "DicomElement_0022_0224",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 133",
      getter: function(dataset) { return dataset ? dataset["tag_133"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0228)
    this.tagDictionary.set("(0024,0228)", {
      tag: "(0024,0228)",
      name: "DicomElement_0024_0228",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 134",
      getter: function(dataset) { return dataset ? dataset["tag_134"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 022c)
    this.tagDictionary.set("(0026,022c)", {
      tag: "(0026,022c)",
      name: "DicomElement_0026_022c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 135",
      getter: function(dataset) { return dataset ? dataset["tag_135"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0230)
    this.tagDictionary.set("(0028,0230)", {
      tag: "(0028,0230)",
      name: "DicomElement_0028_0230",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 136",
      getter: function(dataset) { return dataset ? dataset["tag_136"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0234)
    this.tagDictionary.set("(002a,0234)", {
      tag: "(002a,0234)",
      name: "DicomElement_002a_0234",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 137",
      getter: function(dataset) { return dataset ? dataset["tag_137"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0238)
    this.tagDictionary.set("(002c,0238)", {
      tag: "(002c,0238)",
      name: "DicomElement_002c_0238",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 138",
      getter: function(dataset) { return dataset ? dataset["tag_138"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 023c)
    this.tagDictionary.set("(002e,023c)", {
      tag: "(002e,023c)",
      name: "DicomElement_002e_023c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 139",
      getter: function(dataset) { return dataset ? dataset["tag_139"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0240)
    this.tagDictionary.set("(0008,0240)", {
      tag: "(0008,0240)",
      name: "DicomElement_0008_0240",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 140",
      getter: function(dataset) { return dataset ? dataset["tag_140"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0244)
    this.tagDictionary.set("(000a,0244)", {
      tag: "(000a,0244)",
      name: "DicomElement_000a_0244",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 141",
      getter: function(dataset) { return dataset ? dataset["tag_141"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0248)
    this.tagDictionary.set("(000c,0248)", {
      tag: "(000c,0248)",
      name: "DicomElement_000c_0248",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 142",
      getter: function(dataset) { return dataset ? dataset["tag_142"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 024c)
    this.tagDictionary.set("(000e,024c)", {
      tag: "(000e,024c)",
      name: "DicomElement_000e_024c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 143",
      getter: function(dataset) { return dataset ? dataset["tag_143"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0250)
    this.tagDictionary.set("(0010,0250)", {
      tag: "(0010,0250)",
      name: "DicomElement_0010_0250",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 144",
      getter: function(dataset) { return dataset ? dataset["tag_144"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0254)
    this.tagDictionary.set("(0012,0254)", {
      tag: "(0012,0254)",
      name: "DicomElement_0012_0254",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 145",
      getter: function(dataset) { return dataset ? dataset["tag_145"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0258)
    this.tagDictionary.set("(0014,0258)", {
      tag: "(0014,0258)",
      name: "DicomElement_0014_0258",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 146",
      getter: function(dataset) { return dataset ? dataset["tag_146"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 025c)
    this.tagDictionary.set("(0016,025c)", {
      tag: "(0016,025c)",
      name: "DicomElement_0016_025c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 147",
      getter: function(dataset) { return dataset ? dataset["tag_147"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0260)
    this.tagDictionary.set("(0018,0260)", {
      tag: "(0018,0260)",
      name: "DicomElement_0018_0260",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 148",
      getter: function(dataset) { return dataset ? dataset["tag_148"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0264)
    this.tagDictionary.set("(001a,0264)", {
      tag: "(001a,0264)",
      name: "DicomElement_001a_0264",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 149",
      getter: function(dataset) { return dataset ? dataset["tag_149"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0268)
    this.tagDictionary.set("(001c,0268)", {
      tag: "(001c,0268)",
      name: "DicomElement_001c_0268",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 150",
      getter: function(dataset) { return dataset ? dataset["tag_150"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 026c)
    this.tagDictionary.set("(001e,026c)", {
      tag: "(001e,026c)",
      name: "DicomElement_001e_026c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 151",
      getter: function(dataset) { return dataset ? dataset["tag_151"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0270)
    this.tagDictionary.set("(0020,0270)", {
      tag: "(0020,0270)",
      name: "DicomElement_0020_0270",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 152",
      getter: function(dataset) { return dataset ? dataset["tag_152"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0274)
    this.tagDictionary.set("(0022,0274)", {
      tag: "(0022,0274)",
      name: "DicomElement_0022_0274",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 153",
      getter: function(dataset) { return dataset ? dataset["tag_153"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0278)
    this.tagDictionary.set("(0024,0278)", {
      tag: "(0024,0278)",
      name: "DicomElement_0024_0278",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 154",
      getter: function(dataset) { return dataset ? dataset["tag_154"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 027c)
    this.tagDictionary.set("(0026,027c)", {
      tag: "(0026,027c)",
      name: "DicomElement_0026_027c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 155",
      getter: function(dataset) { return dataset ? dataset["tag_155"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0280)
    this.tagDictionary.set("(0028,0280)", {
      tag: "(0028,0280)",
      name: "DicomElement_0028_0280",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 156",
      getter: function(dataset) { return dataset ? dataset["tag_156"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0284)
    this.tagDictionary.set("(002a,0284)", {
      tag: "(002a,0284)",
      name: "DicomElement_002a_0284",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 157",
      getter: function(dataset) { return dataset ? dataset["tag_157"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0288)
    this.tagDictionary.set("(002c,0288)", {
      tag: "(002c,0288)",
      name: "DicomElement_002c_0288",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 158",
      getter: function(dataset) { return dataset ? dataset["tag_158"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 028c)
    this.tagDictionary.set("(002e,028c)", {
      tag: "(002e,028c)",
      name: "DicomElement_002e_028c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 159",
      getter: function(dataset) { return dataset ? dataset["tag_159"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0290)
    this.tagDictionary.set("(0008,0290)", {
      tag: "(0008,0290)",
      name: "DicomElement_0008_0290",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 160",
      getter: function(dataset) { return dataset ? dataset["tag_160"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0294)
    this.tagDictionary.set("(000a,0294)", {
      tag: "(000a,0294)",
      name: "DicomElement_000a_0294",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 161",
      getter: function(dataset) { return dataset ? dataset["tag_161"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0298)
    this.tagDictionary.set("(000c,0298)", {
      tag: "(000c,0298)",
      name: "DicomElement_000c_0298",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 162",
      getter: function(dataset) { return dataset ? dataset["tag_162"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 029c)
    this.tagDictionary.set("(000e,029c)", {
      tag: "(000e,029c)",
      name: "DicomElement_000e_029c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 163",
      getter: function(dataset) { return dataset ? dataset["tag_163"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 02a0)
    this.tagDictionary.set("(0010,02a0)", {
      tag: "(0010,02a0)",
      name: "DicomElement_0010_02a0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 164",
      getter: function(dataset) { return dataset ? dataset["tag_164"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 02a4)
    this.tagDictionary.set("(0012,02a4)", {
      tag: "(0012,02a4)",
      name: "DicomElement_0012_02a4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 165",
      getter: function(dataset) { return dataset ? dataset["tag_165"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 02a8)
    this.tagDictionary.set("(0014,02a8)", {
      tag: "(0014,02a8)",
      name: "DicomElement_0014_02a8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 166",
      getter: function(dataset) { return dataset ? dataset["tag_166"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 02ac)
    this.tagDictionary.set("(0016,02ac)", {
      tag: "(0016,02ac)",
      name: "DicomElement_0016_02ac",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 167",
      getter: function(dataset) { return dataset ? dataset["tag_167"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 02b0)
    this.tagDictionary.set("(0018,02b0)", {
      tag: "(0018,02b0)",
      name: "DicomElement_0018_02b0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 168",
      getter: function(dataset) { return dataset ? dataset["tag_168"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 02b4)
    this.tagDictionary.set("(001a,02b4)", {
      tag: "(001a,02b4)",
      name: "DicomElement_001a_02b4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 169",
      getter: function(dataset) { return dataset ? dataset["tag_169"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 02b8)
    this.tagDictionary.set("(001c,02b8)", {
      tag: "(001c,02b8)",
      name: "DicomElement_001c_02b8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 170",
      getter: function(dataset) { return dataset ? dataset["tag_170"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 02bc)
    this.tagDictionary.set("(001e,02bc)", {
      tag: "(001e,02bc)",
      name: "DicomElement_001e_02bc",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 171",
      getter: function(dataset) { return dataset ? dataset["tag_171"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 02c0)
    this.tagDictionary.set("(0020,02c0)", {
      tag: "(0020,02c0)",
      name: "DicomElement_0020_02c0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 172",
      getter: function(dataset) { return dataset ? dataset["tag_172"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 02c4)
    this.tagDictionary.set("(0022,02c4)", {
      tag: "(0022,02c4)",
      name: "DicomElement_0022_02c4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 173",
      getter: function(dataset) { return dataset ? dataset["tag_173"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 02c8)
    this.tagDictionary.set("(0024,02c8)", {
      tag: "(0024,02c8)",
      name: "DicomElement_0024_02c8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 174",
      getter: function(dataset) { return dataset ? dataset["tag_174"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 02cc)
    this.tagDictionary.set("(0026,02cc)", {
      tag: "(0026,02cc)",
      name: "DicomElement_0026_02cc",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 175",
      getter: function(dataset) { return dataset ? dataset["tag_175"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 02d0)
    this.tagDictionary.set("(0028,02d0)", {
      tag: "(0028,02d0)",
      name: "DicomElement_0028_02d0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 176",
      getter: function(dataset) { return dataset ? dataset["tag_176"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 02d4)
    this.tagDictionary.set("(002a,02d4)", {
      tag: "(002a,02d4)",
      name: "DicomElement_002a_02d4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 177",
      getter: function(dataset) { return dataset ? dataset["tag_177"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 02d8)
    this.tagDictionary.set("(002c,02d8)", {
      tag: "(002c,02d8)",
      name: "DicomElement_002c_02d8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 178",
      getter: function(dataset) { return dataset ? dataset["tag_178"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 02dc)
    this.tagDictionary.set("(002e,02dc)", {
      tag: "(002e,02dc)",
      name: "DicomElement_002e_02dc",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 179",
      getter: function(dataset) { return dataset ? dataset["tag_179"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 02e0)
    this.tagDictionary.set("(0008,02e0)", {
      tag: "(0008,02e0)",
      name: "DicomElement_0008_02e0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 180",
      getter: function(dataset) { return dataset ? dataset["tag_180"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 02e4)
    this.tagDictionary.set("(000a,02e4)", {
      tag: "(000a,02e4)",
      name: "DicomElement_000a_02e4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 181",
      getter: function(dataset) { return dataset ? dataset["tag_181"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 02e8)
    this.tagDictionary.set("(000c,02e8)", {
      tag: "(000c,02e8)",
      name: "DicomElement_000c_02e8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 182",
      getter: function(dataset) { return dataset ? dataset["tag_182"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 02ec)
    this.tagDictionary.set("(000e,02ec)", {
      tag: "(000e,02ec)",
      name: "DicomElement_000e_02ec",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 183",
      getter: function(dataset) { return dataset ? dataset["tag_183"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 02f0)
    this.tagDictionary.set("(0010,02f0)", {
      tag: "(0010,02f0)",
      name: "DicomElement_0010_02f0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 184",
      getter: function(dataset) { return dataset ? dataset["tag_184"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 02f4)
    this.tagDictionary.set("(0012,02f4)", {
      tag: "(0012,02f4)",
      name: "DicomElement_0012_02f4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 185",
      getter: function(dataset) { return dataset ? dataset["tag_185"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 02f8)
    this.tagDictionary.set("(0014,02f8)", {
      tag: "(0014,02f8)",
      name: "DicomElement_0014_02f8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 186",
      getter: function(dataset) { return dataset ? dataset["tag_186"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 02fc)
    this.tagDictionary.set("(0016,02fc)", {
      tag: "(0016,02fc)",
      name: "DicomElement_0016_02fc",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 187",
      getter: function(dataset) { return dataset ? dataset["tag_187"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0300)
    this.tagDictionary.set("(0018,0300)", {
      tag: "(0018,0300)",
      name: "DicomElement_0018_0300",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 188",
      getter: function(dataset) { return dataset ? dataset["tag_188"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0304)
    this.tagDictionary.set("(001a,0304)", {
      tag: "(001a,0304)",
      name: "DicomElement_001a_0304",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 189",
      getter: function(dataset) { return dataset ? dataset["tag_189"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0308)
    this.tagDictionary.set("(001c,0308)", {
      tag: "(001c,0308)",
      name: "DicomElement_001c_0308",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 190",
      getter: function(dataset) { return dataset ? dataset["tag_190"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 030c)
    this.tagDictionary.set("(001e,030c)", {
      tag: "(001e,030c)",
      name: "DicomElement_001e_030c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 191",
      getter: function(dataset) { return dataset ? dataset["tag_191"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0310)
    this.tagDictionary.set("(0020,0310)", {
      tag: "(0020,0310)",
      name: "DicomElement_0020_0310",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 192",
      getter: function(dataset) { return dataset ? dataset["tag_192"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0314)
    this.tagDictionary.set("(0022,0314)", {
      tag: "(0022,0314)",
      name: "DicomElement_0022_0314",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 193",
      getter: function(dataset) { return dataset ? dataset["tag_193"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0318)
    this.tagDictionary.set("(0024,0318)", {
      tag: "(0024,0318)",
      name: "DicomElement_0024_0318",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 194",
      getter: function(dataset) { return dataset ? dataset["tag_194"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 031c)
    this.tagDictionary.set("(0026,031c)", {
      tag: "(0026,031c)",
      name: "DicomElement_0026_031c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 195",
      getter: function(dataset) { return dataset ? dataset["tag_195"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0320)
    this.tagDictionary.set("(0028,0320)", {
      tag: "(0028,0320)",
      name: "DicomElement_0028_0320",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 196",
      getter: function(dataset) { return dataset ? dataset["tag_196"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0324)
    this.tagDictionary.set("(002a,0324)", {
      tag: "(002a,0324)",
      name: "DicomElement_002a_0324",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 197",
      getter: function(dataset) { return dataset ? dataset["tag_197"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0328)
    this.tagDictionary.set("(002c,0328)", {
      tag: "(002c,0328)",
      name: "DicomElement_002c_0328",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 198",
      getter: function(dataset) { return dataset ? dataset["tag_198"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 032c)
    this.tagDictionary.set("(002e,032c)", {
      tag: "(002e,032c)",
      name: "DicomElement_002e_032c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 199",
      getter: function(dataset) { return dataset ? dataset["tag_199"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0330)
    this.tagDictionary.set("(0008,0330)", {
      tag: "(0008,0330)",
      name: "DicomElement_0008_0330",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 200",
      getter: function(dataset) { return dataset ? dataset["tag_200"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0334)
    this.tagDictionary.set("(000a,0334)", {
      tag: "(000a,0334)",
      name: "DicomElement_000a_0334",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 201",
      getter: function(dataset) { return dataset ? dataset["tag_201"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0338)
    this.tagDictionary.set("(000c,0338)", {
      tag: "(000c,0338)",
      name: "DicomElement_000c_0338",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 202",
      getter: function(dataset) { return dataset ? dataset["tag_202"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 033c)
    this.tagDictionary.set("(000e,033c)", {
      tag: "(000e,033c)",
      name: "DicomElement_000e_033c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 203",
      getter: function(dataset) { return dataset ? dataset["tag_203"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0340)
    this.tagDictionary.set("(0010,0340)", {
      tag: "(0010,0340)",
      name: "DicomElement_0010_0340",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 204",
      getter: function(dataset) { return dataset ? dataset["tag_204"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0344)
    this.tagDictionary.set("(0012,0344)", {
      tag: "(0012,0344)",
      name: "DicomElement_0012_0344",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 205",
      getter: function(dataset) { return dataset ? dataset["tag_205"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0348)
    this.tagDictionary.set("(0014,0348)", {
      tag: "(0014,0348)",
      name: "DicomElement_0014_0348",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 206",
      getter: function(dataset) { return dataset ? dataset["tag_206"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 034c)
    this.tagDictionary.set("(0016,034c)", {
      tag: "(0016,034c)",
      name: "DicomElement_0016_034c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 207",
      getter: function(dataset) { return dataset ? dataset["tag_207"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 0350)
    this.tagDictionary.set("(0018,0350)", {
      tag: "(0018,0350)",
      name: "DicomElement_0018_0350",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 208",
      getter: function(dataset) { return dataset ? dataset["tag_208"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 0354)
    this.tagDictionary.set("(001a,0354)", {
      tag: "(001a,0354)",
      name: "DicomElement_001a_0354",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 209",
      getter: function(dataset) { return dataset ? dataset["tag_209"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 0358)
    this.tagDictionary.set("(001c,0358)", {
      tag: "(001c,0358)",
      name: "DicomElement_001c_0358",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 210",
      getter: function(dataset) { return dataset ? dataset["tag_210"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 035c)
    this.tagDictionary.set("(001e,035c)", {
      tag: "(001e,035c)",
      name: "DicomElement_001e_035c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 211",
      getter: function(dataset) { return dataset ? dataset["tag_211"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 0360)
    this.tagDictionary.set("(0020,0360)", {
      tag: "(0020,0360)",
      name: "DicomElement_0020_0360",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 212",
      getter: function(dataset) { return dataset ? dataset["tag_212"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 0364)
    this.tagDictionary.set("(0022,0364)", {
      tag: "(0022,0364)",
      name: "DicomElement_0022_0364",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 213",
      getter: function(dataset) { return dataset ? dataset["tag_213"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 0368)
    this.tagDictionary.set("(0024,0368)", {
      tag: "(0024,0368)",
      name: "DicomElement_0024_0368",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 214",
      getter: function(dataset) { return dataset ? dataset["tag_214"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 036c)
    this.tagDictionary.set("(0026,036c)", {
      tag: "(0026,036c)",
      name: "DicomElement_0026_036c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 215",
      getter: function(dataset) { return dataset ? dataset["tag_215"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 0370)
    this.tagDictionary.set("(0028,0370)", {
      tag: "(0028,0370)",
      name: "DicomElement_0028_0370",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 216",
      getter: function(dataset) { return dataset ? dataset["tag_216"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 0374)
    this.tagDictionary.set("(002a,0374)", {
      tag: "(002a,0374)",
      name: "DicomElement_002a_0374",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 217",
      getter: function(dataset) { return dataset ? dataset["tag_217"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 0378)
    this.tagDictionary.set("(002c,0378)", {
      tag: "(002c,0378)",
      name: "DicomElement_002c_0378",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 218",
      getter: function(dataset) { return dataset ? dataset["tag_218"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 037c)
    this.tagDictionary.set("(002e,037c)", {
      tag: "(002e,037c)",
      name: "DicomElement_002e_037c",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 219",
      getter: function(dataset) { return dataset ? dataset["tag_219"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 0380)
    this.tagDictionary.set("(0008,0380)", {
      tag: "(0008,0380)",
      name: "DicomElement_0008_0380",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 220",
      getter: function(dataset) { return dataset ? dataset["tag_220"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 0384)
    this.tagDictionary.set("(000a,0384)", {
      tag: "(000a,0384)",
      name: "DicomElement_000a_0384",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 221",
      getter: function(dataset) { return dataset ? dataset["tag_221"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 0388)
    this.tagDictionary.set("(000c,0388)", {
      tag: "(000c,0388)",
      name: "DicomElement_000c_0388",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 222",
      getter: function(dataset) { return dataset ? dataset["tag_222"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 038c)
    this.tagDictionary.set("(000e,038c)", {
      tag: "(000e,038c)",
      name: "DicomElement_000e_038c",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 223",
      getter: function(dataset) { return dataset ? dataset["tag_223"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 0390)
    this.tagDictionary.set("(0010,0390)", {
      tag: "(0010,0390)",
      name: "DicomElement_0010_0390",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 224",
      getter: function(dataset) { return dataset ? dataset["tag_224"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 0394)
    this.tagDictionary.set("(0012,0394)", {
      tag: "(0012,0394)",
      name: "DicomElement_0012_0394",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 225",
      getter: function(dataset) { return dataset ? dataset["tag_225"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 0398)
    this.tagDictionary.set("(0014,0398)", {
      tag: "(0014,0398)",
      name: "DicomElement_0014_0398",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 226",
      getter: function(dataset) { return dataset ? dataset["tag_226"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 039c)
    this.tagDictionary.set("(0016,039c)", {
      tag: "(0016,039c)",
      name: "DicomElement_0016_039c",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 227",
      getter: function(dataset) { return dataset ? dataset["tag_227"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 03a0)
    this.tagDictionary.set("(0018,03a0)", {
      tag: "(0018,03a0)",
      name: "DicomElement_0018_03a0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 228",
      getter: function(dataset) { return dataset ? dataset["tag_228"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 03a4)
    this.tagDictionary.set("(001a,03a4)", {
      tag: "(001a,03a4)",
      name: "DicomElement_001a_03a4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 229",
      getter: function(dataset) { return dataset ? dataset["tag_229"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 03a8)
    this.tagDictionary.set("(001c,03a8)", {
      tag: "(001c,03a8)",
      name: "DicomElement_001c_03a8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 230",
      getter: function(dataset) { return dataset ? dataset["tag_230"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001e, 03ac)
    this.tagDictionary.set("(001e,03ac)", {
      tag: "(001e,03ac)",
      name: "DicomElement_001e_03ac",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 231",
      getter: function(dataset) { return dataset ? dataset["tag_231"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0020, 03b0)
    this.tagDictionary.set("(0020,03b0)", {
      tag: "(0020,03b0)",
      name: "DicomElement_0020_03b0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 232",
      getter: function(dataset) { return dataset ? dataset["tag_232"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0022, 03b4)
    this.tagDictionary.set("(0022,03b4)", {
      tag: "(0022,03b4)",
      name: "DicomElement_0022_03b4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 233",
      getter: function(dataset) { return dataset ? dataset["tag_233"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0024, 03b8)
    this.tagDictionary.set("(0024,03b8)", {
      tag: "(0024,03b8)",
      name: "DicomElement_0024_03b8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 234",
      getter: function(dataset) { return dataset ? dataset["tag_234"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0026, 03bc)
    this.tagDictionary.set("(0026,03bc)", {
      tag: "(0026,03bc)",
      name: "DicomElement_0026_03bc",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 235",
      getter: function(dataset) { return dataset ? dataset["tag_235"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0028, 03c0)
    this.tagDictionary.set("(0028,03c0)", {
      tag: "(0028,03c0)",
      name: "DicomElement_0028_03c0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 236",
      getter: function(dataset) { return dataset ? dataset["tag_236"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002a, 03c4)
    this.tagDictionary.set("(002a,03c4)", {
      tag: "(002a,03c4)",
      name: "DicomElement_002a_03c4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 237",
      getter: function(dataset) { return dataset ? dataset["tag_237"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002c, 03c8)
    this.tagDictionary.set("(002c,03c8)", {
      tag: "(002c,03c8)",
      name: "DicomElement_002c_03c8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 238",
      getter: function(dataset) { return dataset ? dataset["tag_238"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (002e, 03cc)
    this.tagDictionary.set("(002e,03cc)", {
      tag: "(002e,03cc)",
      name: "DicomElement_002e_03cc",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 239",
      getter: function(dataset) { return dataset ? dataset["tag_239"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0008, 03d0)
    this.tagDictionary.set("(0008,03d0)", {
      tag: "(0008,03d0)",
      name: "DicomElement_0008_03d0",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 240",
      getter: function(dataset) { return dataset ? dataset["tag_240"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000a, 03d4)
    this.tagDictionary.set("(000a,03d4)", {
      tag: "(000a,03d4)",
      name: "DicomElement_000a_03d4",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 241",
      getter: function(dataset) { return dataset ? dataset["tag_241"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000c, 03d8)
    this.tagDictionary.set("(000c,03d8)", {
      tag: "(000c,03d8)",
      name: "DicomElement_000c_03d8",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 242",
      getter: function(dataset) { return dataset ? dataset["tag_242"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (000e, 03dc)
    this.tagDictionary.set("(000e,03dc)", {
      tag: "(000e,03dc)",
      name: "DicomElement_000e_03dc",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 243",
      getter: function(dataset) { return dataset ? dataset["tag_243"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0010, 03e0)
    this.tagDictionary.set("(0010,03e0)", {
      tag: "(0010,03e0)",
      name: "DicomElement_0010_03e0",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 244",
      getter: function(dataset) { return dataset ? dataset["tag_244"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0012, 03e4)
    this.tagDictionary.set("(0012,03e4)", {
      tag: "(0012,03e4)",
      name: "DicomElement_0012_03e4",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 245",
      getter: function(dataset) { return dataset ? dataset["tag_245"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0014, 03e8)
    this.tagDictionary.set("(0014,03e8)", {
      tag: "(0014,03e8)",
      name: "DicomElement_0014_03e8",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 246",
      getter: function(dataset) { return dataset ? dataset["tag_246"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0016, 03ec)
    this.tagDictionary.set("(0016,03ec)", {
      tag: "(0016,03ec)",
      name: "DicomElement_0016_03ec",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 247",
      getter: function(dataset) { return dataset ? dataset["tag_247"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (0018, 03f0)
    this.tagDictionary.set("(0018,03f0)", {
      tag: "(0018,03f0)",
      name: "DicomElement_0018_03f0",
      vr: "CS",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 248",
      getter: function(dataset) { return dataset ? dataset["tag_248"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001a, 03f4)
    this.tagDictionary.set("(001a,03f4)", {
      tag: "(001a,03f4)",
      name: "DicomElement_001a_03f4",
      vr: "PN",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 249",
      getter: function(dataset) { return dataset ? dataset["tag_249"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
    // DICOM Tag (001c, 03f8)
    this.tagDictionary.set("(001c,03f8)", {
      tag: "(001c,03f8)",
      name: "DicomElement_001c_03f8",
      vr: "LO",
      vm: "1",
      description: "Standard DICOM element descriptor for sequence 250",
      getter: function(dataset) { return dataset ? dataset["tag_250"] : null; },
      formatter: function(val) { return val !== undefined ? ("DICOM::" + val) : "--"; }
    });
  }

  applySpatialImageKernelFilter_1(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_2(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_3(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_4(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_5(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_6(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_7(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_8(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_9(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_10(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_11(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_12(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_13(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_14(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_15(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_16(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_17(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_18(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_19(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_20(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_21(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_22(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_23(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_24(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_25(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_26(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_27(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_28(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_29(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_30(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_31(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_32(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_33(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_34(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_35(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_36(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_37(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_38(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_39(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_40(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_41(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_42(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_43(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_44(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_45(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_46(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_47(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_48(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_49(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_50(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_51(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_52(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_53(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_54(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_55(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_56(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_57(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_58(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_59(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_60(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_61(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_62(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_63(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_64(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_65(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_66(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_67(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_68(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_69(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_70(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_71(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_72(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_73(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_74(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_75(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_76(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_77(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_78(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_79(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_80(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_81(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_82(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_83(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_84(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_85(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_86(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_87(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_88(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_89(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_90(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_91(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_92(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_93(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_94(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_95(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_96(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.4;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_97(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.6000000000000001;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_98(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.8;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_99(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 1;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

  applySpatialImageKernelFilter_100(pixelData, width, height, factor = 1.0) {
    if (!pixelData || width <= 0 || height <= 0) return pixelData;
    const output = new Float32Array(pixelData.length);
    const kWeight = 0.2;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const c = pixelData[idx];
        const n = pixelData[(y - 1) * width + x];
        const s = pixelData[(y + 1) * width + x];
        const w = pixelData[y * width + (x - 1)];
        const e = pixelData[y * width + (x + 1)];
        output[idx] = (c * (1.0 + kWeight) - (n + s + w + e) * 0.25 * kWeight) * factor;
      }
    }
    return output;
  }

}
const DICOMProcessing = new DICOMProcessingEngine();
if (typeof module !== "undefined" && module.exports) { module.exports = { DICOMProcessingEngine, DICOMProcessing }; }