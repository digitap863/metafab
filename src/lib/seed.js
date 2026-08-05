import { enhanceCloudinaryImageUrl } from "./cloudinary-image-url.js";

const products = [
  {
    name: "ADMIRAL",
    slug: "admiral",
    modelNumber: "ADMIRAL",
    category: "Vertex Series",
    subCategory: "Executive Table",
    rating: "4.8",
    subtitle: "Premium Executive Office Table",
    description:
      "Premium executive office table made from prelaminated particle board with a modern design and durable steel support.",
    details:
      "Fully made of prelaminated particle board confirming IS 12823. 18+18mm thick legs with 2mm PVC edge band, 40mm thick table top, designer modesty panel, M6 level adjusters, minifix, L clamp, right-angle block, powder-coated rectangular steel tube structure below the table top.",
    features: [
      "40mm Thick Table Top",
      "18+18mm Thick Legs",
      "2mm PVC Edge Band",
      "Designer Modesty Panel",
      "Powder Coated Steel Support",
      "M6 Level Adjusters",
      "Minifix Assembly",
      "Premium Executive Design"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/admiral/800/600",
    gallery: [
      "https://picsum.photos/seed/admiral1/800/600",
      "https://picsum.photos/seed/admiral2/800/600",
      "https://picsum.photos/seed/admiral3/800/600"
    ]
  },

  {
    name: "LEGACY",
    slug: "legacy",
    modelNumber: "LEGACY",
    category: "Vertex Series",
    subCategory: "Executive Table",
    rating: "4.7",
    subtitle: "Modern Executive Workstation",
    description:
      "Elegant executive workstation designed for modern offices with durable construction.",
    details:
      "Fully made of prelaminated particle board confirming IS 12823. 18mm thick legs with PVC edge band, 25mm table top, designer modesty panel, powder-coated steel tube structure and premium fittings.",
    features: [
      "25mm Table Top",
      "18mm Thick Legs",
      "PVC Edge Band",
      "Designer Modesty Panel",
      "Steel Tube Structure",
      "Knock Down Construction",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/legacy/800/600",
    gallery: [
      "https://picsum.photos/seed/legacy1/800/600",
      "https://picsum.photos/seed/legacy2/800/600",
      "https://picsum.photos/seed/legacy3/800/600"
    ]
  },

  {
    name: "PRODIGY",
    slug: "prodigy",
    modelNumber: "PRODIGY",
    category: "Vertex Series",
    subCategory: "Executive Table",
    rating: "4.9",
    subtitle: "Luxury Executive Office Desk",
    description:
      "Premium executive office desk with heavy-duty construction and elegant styling.",
    details:
      "Made from prelaminated particle board confirming IS 12823. Features 18+18mm thick legs, 40mm thick table top, PVC edge band, designer modesty panel and powder-coated steel support structure.",
    features: [
      "40mm Table Top",
      "Premium Executive Finish",
      "Steel Support Frame",
      "PVC Edge Band",
      "Designer Modesty Panel",
      "Heavy Duty Construction",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/prodigy/800/600",
    gallery: [
      "https://picsum.photos/seed/prodigy1/800/600",
      "https://picsum.photos/seed/prodigy2/800/600",
      "https://picsum.photos/seed/prodigy3/800/600"
    ]
  },

  {
    name: "DIY 01",
    slug: "diy-01",
    modelNumber: "DIY 01",
    category: "Vertex Series",
    subCategory: "Office Table",
    rating: "4.5",
    subtitle: "Compact Office Workstation",
    description:
      "Modern office workstation with integrated storage and durable steel frame.",
    details:
      "50x50 square steel tube legs with 50x25 rectangular connectors. 25mm thick prelaminated particle board table top, designer modesty panel, sliding door side storage and open cupboard.",
    features: [
      "Steel Frame",
      "25mm Table Top",
      "Sliding Door Storage",
      "Open Cupboard",
      "Powder Coated Finish",
      "Modern Design"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/diy01/800/600",
    gallery: [
      "https://picsum.photos/seed/diy011/800/600",
      "https://picsum.photos/seed/diy012/800/600",
      "https://picsum.photos/seed/diy013/800/600"
    ]
  },

  {
    name: "DIY 02",
    slug: "diy-02",
    modelNumber: "DIY 02",
    category: "Vertex Series",
    subCategory: "Office Table",
    rating: "4.5",
    subtitle: "Office Table with Storage",
    description:
      "Strong office table featuring steel construction and built-in storage compartments.",
    details:
      "Steel tube frame with powder-coated finish. 25mm thick particle board top, designer modesty panel, sliding doors and open cupboard for storage.",
    features: [
      "Steel Tube Frame",
      "25mm Table Top",
      "Sliding Door Storage",
      "Open Cupboard",
      "Designer Modesty Panel",
      "Powder Coated Finish"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/diy02/800/600",
    gallery: [
      "https://picsum.photos/seed/diy021/800/600",
      "https://picsum.photos/seed/diy022/800/600",
      "https://picsum.photos/seed/diy023/800/600"
    ]
  },  {
    name: "DIY 03",
    slug: "diy-03",
    modelNumber: "DIY 03",
    category: "Vertex Series",
    subCategory: "Office Table",
    rating: "4.4",
    subtitle: "Minimal Office Workstation",
    description:
      "Simple and durable office workstation with premium steel frame construction.",
    details:
      "50x50 square steel tube legs with 50x25 rectangular connectors. 25mm thick prelaminated particle board table top, designer modesty panel and side table.",
    features: [
      "Steel Tube Frame",
      "25mm Table Top",
      "Side Table",
      "Designer Modesty Panel",
      "Powder Coated Finish",
      "Premium Construction"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/diy03/800/600",
    gallery: [
      "https://picsum.photos/seed/diy031/800/600",
      "https://picsum.photos/seed/diy032/800/600",
      "https://picsum.photos/seed/diy033/800/600"
    ]
  },

  {
    name: "DIY 04",
    slug: "diy-04",
    modelNumber: "DIY 04",
    category: "Vertex Series",
    subCategory: "Office Table",
    rating: "4.7",
    subtitle: "Office Table with Lockable Storage",
    description:
      "Premium office workstation featuring multiple drawers and lockable storage.",
    details:
      "Steel tube frame with powder-coated finish. 25mm thick particle board top, designer modesty panel, side storage unit with two pull-out drawers and two hinged lockable doors.",
    features: [
      "Steel Tube Frame",
      "25mm Table Top",
      "2 Pull-Out Drawers",
      "2 Hinged Doors",
      "Lock & Handle",
      "Powder Coated Finish",
      "Premium Storage"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/diy04/800/600",
    gallery: [
      "https://picsum.photos/seed/diy041/800/600",
      "https://picsum.photos/seed/diy042/800/600",
      "https://picsum.photos/seed/diy043/800/600"
    ]
  },

  {
    name: "TYCOON",
    slug: "tycoon",
    modelNumber: "TYCOON",
    category: "Conference Table",
    subCategory: "Conference Table",
    rating: "4.9",
    subtitle: "Premium Conference Table",
    description:
      "Large conference table designed for executive meeting rooms with integrated cable management.",
    details:
      "Steel tube frame with 25mm thick prelaminated particle board table top, raceways for wire management, popup unit, knock-down fittings and level adjusters.",
    features: [
      "25mm Table Top",
      "Steel Frame",
      "Wire Management",
      "Popup Unit",
      "Knock Down Fittings",
      "Level Adjusters",
      "Executive Conference Design"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/tycoon/800/600",
    gallery: [
      "https://picsum.photos/seed/tycoon1/800/600",
      "https://picsum.photos/seed/tycoon2/800/600",
      "https://picsum.photos/seed/tycoon3/800/600"
    ]
  },

  {
    name: "COCKPIT",
    slug: "cockpit",
    modelNumber: "COCKPIT",
    category: "Conference Table",
    subCategory: "Conference Table",
    rating: "4.8",
    subtitle: "Modern Conference Table",
    description:
      "Elegant conference table with integrated popup units and concealed cable management.",
    details:
      "Fully made of prelaminated particle board with 25mm thick top, designer modesty panel, raceways for wire management, popup units and level adjusters.",
    features: [
      "25mm Table Top",
      "Wire Management",
      "2 Popup Units",
      "Designer Modesty Panel",
      "PVC Edge Band",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/cockpit/800/600",
    gallery: [
      "https://picsum.photos/seed/cockpit1/800/600",
      "https://picsum.photos/seed/cockpit2/800/600",
      "https://picsum.photos/seed/cockpit3/800/600"
    ]
  },

  {
    name: "FOCUS LINE SERIES",
    slug: "focus-line-series",
    modelNumber: "FOCUS LINE SERIES",
    category: "Conference Table",
    subCategory: "Conference Table",
    rating: "4.8",
    subtitle: "Executive Conference Table",
    description:
      "Premium conference table offering spacious design with professional cable management.",
    details:
      "Fully made of prelaminated particle board. Box-type legs, raceways below table top, 25mm table top, popup units, knock-down fittings and level adjusters.",
    features: [
      "25mm Table Top",
      "Box Type Legs",
      "Wire Management",
      "2 Popup Units",
      "Knock Down Fittings",
      "PVC Edge Band",
      "Executive Design"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/focusline/800/600",
    gallery: [
      "https://picsum.photos/seed/focusline1/800/600",
      "https://picsum.photos/seed/focusline2/800/600",
      "https://picsum.photos/seed/focusline3/800/600"
    ]
  },  {
    name: "BRAIN STROM SERIES BS CT 1",
    slug: "brain-strom-series-bs-ct-1",
    modelNumber: "BS CT 1",
    category: "Conference Table",
    subCategory: "Conference Table",
    rating: "4.8",
    subtitle: "Executive Conference Table",
    description:
      "Premium conference table designed for modern boardrooms and meeting spaces.",
    details:
      "Fully made of prelaminated particle board with box-type legs, 25mm thick table top, designer modesty panel, raceways for wire management and level adjusters.",
    features: [
      "25mm Thick Table Top",
      "Box Type Legs",
      "Designer Modesty Panel",
      "Wire Management",
      "PVC Edge Band",
      "Knock Down Fittings",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/bsct1/800/600",
    gallery: [
      "https://picsum.photos/seed/bsct11/800/600",
      "https://picsum.photos/seed/bsct12/800/600",
      "https://picsum.photos/seed/bsct13/800/600"
    ]
  },

  {
    name: "BRAIN STROM SERIES BS CT 2",
    slug: "brain-strom-series-bs-ct-2",
    modelNumber: "BS CT 2",
    category: "Conference Table",
    subCategory: "Conference Table",
    rating: "4.7",
    subtitle: "Professional Conference Table",
    description:
      "Stylish conference table with modern construction and integrated cable management.",
    details:
      "Constructed from prelaminated particle board featuring box-type legs, 25mm thick table top, wire management system and premium hardware.",
    features: [
      "25mm Thick Table Top",
      "Box Type Legs",
      "Wire Management",
      "Designer Modesty Panel",
      "PVC Edge Band",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/bsct2/800/600",
    gallery: [
      "https://picsum.photos/seed/bsct21/800/600",
      "https://picsum.photos/seed/bsct22/800/600",
      "https://picsum.photos/seed/bsct23/800/600"
    ]
  },

  {
    name: "TASK FORCE SERIES CTR TF 1",
    slug: "task-force-series-ctr-tf-1",
    modelNumber: "CTR TF 1",
    category: "Center Table",
    subCategory: "Center Table",
    rating: "4.5",
    subtitle: "Square Center Table",
    description:
      "Modern square center table suitable for office reception and waiting areas.",
    details:
      "Manufactured from 18mm thick prelaminated particle board confirming IS 12823 with PVC edge band, knock-down fittings, provision for wire management and level adjusters.",
    features: [
      "18mm Particle Board",
      "PVC Edge Band",
      "Knock Down Construction",
      "Wire Management",
      "Level Adjusters",
      "Reception Area Design"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/ctrtf1/800/600",
    gallery: [
      "https://picsum.photos/seed/ctrtf11/800/600",
      "https://picsum.photos/seed/ctrtf12/800/600",
      "https://picsum.photos/seed/ctrtf13/800/600"
    ]
  },

  {
    name: "TASK FORCE SERIES CTR TF 1A",
    slug: "task-force-series-ctr-tf-1a",
    modelNumber: "CTR TF 1A",
    category: "Center Table",
    subCategory: "Center Table",
    rating: "4.4",
    subtitle: "Compact Center Table",
    description:
      "Compact reception center table with a clean and modern appearance.",
    details:
      "18mm thick prelaminated particle board construction with PVC edge band, knock-down fittings, wire management provision and level adjusters.",
    features: [
      "18mm Particle Board",
      "PVC Edge Band",
      "Compact Design",
      "Knock Down Construction",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/ctrtf1a/800/600",
    gallery: [
      "https://picsum.photos/seed/ctrtf1a1/800/600",
      "https://picsum.photos/seed/ctrtf1a2/800/600",
      "https://picsum.photos/seed/ctrtf1a3/800/600"
    ]
  },

  {
    name: "TASK FORLE SERIES 2 CTC TF 1",
    slug: "task-forle-series-2-ctc-tf-1",
    modelNumber: "2 CTC TF 1",
    category: "Center Table",
    subCategory: "Center Table",
    rating: "4.5",
    subtitle: "Round Center Table",
    description:
      "Elegant round center table designed for reception and lounge areas.",
    details:
      "Made from 18mm thick prelaminated particle board with PVC edge band, knock-down fittings, provision for wire management and level adjusters.",
    features: [
      "Round Table Design",
      "18mm Particle Board",
      "PVC Edge Band",
      "Knock Down Construction",
      "Wire Management",
      "Level Adjusters"
    ],
    finishes: [],
    brochure: "",
    image: "https://picsum.photos/seed/ctctf1/800/600",
    gallery: [
      "https://picsum.photos/seed/ctctf11/800/600",
      "https://picsum.photos/seed/ctctf12/800/600",
      "https://picsum.photos/seed/ctctf13/800/600"
    ]
  }
];

const detailsTableImages = {
  admiral: "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839745/metafab/details-table/admiral.jpg",
  legacy: "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839746/metafab/details-table/legacy.jpg",
  prodigy: "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839748/metafab/details-table/prodigy.jpg",
  "diy-01": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839749/metafab/details-table/diy-01.jpg",
  "diy-02": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839750/metafab/details-table/diy-02.jpg",
  "diy-03": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839751/metafab/details-table/diy-03.jpg",
  "diy-04": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839752/metafab/details-table/diy-04.jpg",
  tycoon: "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839753/metafab/details-table/tycoon.jpg",
  cockpit: "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839754/metafab/details-table/cockpit.jpg",
  "focus-line-series": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839755/metafab/details-table/focus-line-series.jpg",
  "brain-strom-series-bs-ct-1": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839756/metafab/details-table/brain-strom-series-bs-ct-1.jpg",
  "brain-strom-series-bs-ct-2": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839757/metafab/details-table/brain-strom-series-bs-ct-2.jpg",
  "task-force-series-ctr-tf-1": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839758/metafab/details-table/task-force-series-ctr-tf-1.jpg",
  "task-force-series-ctr-tf-1a": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839759/metafab/details-table/task-force-series-ctr-tf-1a.jpg",
  "task-forle-series-2-ctc-tf-1": "https://res.cloudinary.com/djl0pmltm/image/upload/v1785839760/metafab/details-table/task-forle-series-2-ctc-tf-1.jpg",
};

products.slice(0, 15).forEach((product) => {
  const image = detailsTableImages[product.slug];

  if (image) {
    const enhancedImage = enhanceCloudinaryImageUrl(image);

    product.image = enhancedImage;
    product.gallery = [enhancedImage];
  }
});

export default products;
