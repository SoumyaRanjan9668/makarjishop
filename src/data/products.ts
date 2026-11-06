import { Product, ProductCategory } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "prod-001",
    slug: "paniki",
    name: "Paniki (Traditional Kitchen Cutting Blade / Baithi)",
    hindiName: "पारंपरिक पनीकी / बइठी",
    category: "Household & Processing Tools",
    shortDescription: "Traditional seated kitchen cutting blade hand-forged for fine vegetable, greens, and fish slicing.",
    description: "The Paniki (also known as Baithi or Boti in various regions of India) is an iconic kitchen tool designed for slicing and chopping while seated on the floor. Hand-beaten over a village hearth from durable carbon iron, its curved upright blade provides effortless precision for cutting leafy greens, hard vegetables, and daily cooking preparation.",
    material: "Traditional Hand-Forged Carbon Iron",
    forgingTechnique: "Coal-hearth heated, hand-hammered on the anvil, water/oil tempered edge",
    intendedUse: "Traditional seated slicing of vegetables, fruits, greens, and fish",
    image: "/images/products/paniki.jpg",
    gallery: [
      "/images/products/paniki.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Traditional Seated Kitchen Blade (Paniki / Baithi)" },
      { label: "Forging Process", value: "Hand-hammered anvil forging" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Blade Form", value: "Curved upward slicing edge with seated base plate / tang" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "Each piece is hand-hammered individually on the anvil. Minor variations in surface texture and curve reflect authentic manual village craftsmanship.",
    availabilityNote: "Direct from the village forge. Single pieces and retail/wholesale supply available.",
  },
  {
    id: "prod-002",
    slug: "korana",
    name: "Korana (Traditional Coconut & Vegetable Scraper)",
    hindiName: "कोराना (पारंपरिक नारियल व सब्जी खुरचनी)",
    category: "Household & Processing Tools",
    shortDescription: "Sturdy hand-forged scraper with serrated head designed for grating coconuts and firm produce.",
    description: "The Korana is a traditional grating tool crafted by village blacksmiths with sharp, hand-cut teeth along a rounded scraper disc. Sturdily forged from resilient iron, it provides the leverage and grip needed for effortless scraping of fresh coconuts and fibrous vegetables in traditional homes and food preparation units.",
    material: "Hand-Forged Carbon Iron",
    forgingTechnique: "Hand-drawn iron shank with chisel-notched grating teeth",
    intendedUse: "Coconut grating, root vegetable scraping, traditional kitchen processing",
    image: "/images/products/korana.jpg",
    gallery: [
      "/images/products/korana.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-hearth.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Traditional Household Grater / Scraper" },
      { label: "Scraper Head", value: "Hand-chiseled serrated teeth for clean grating" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Mounting / Fitting", value: "Mountable on wooden plank or standalone traditional base" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: false,
    craftNotes: "The grating teeth are hand-notched using cold chisels on red-hot iron, providing a biting edge that lasts for years of daily use.",
    availabilityNote: "Available on order. Direct workshop dispatch.",
  },
  {
    id: "prod-003",
    slug: "hand-korana",
    name: "Hand Korana (Handheld Scraper & Grater Tool)",
    hindiName: "हैंड कोराना (हस्तनिर्मित खुरचनी)",
    category: "Household & Processing Tools",
    shortDescription: "Compact handheld scraper forged with a serrated head for convenient portable grating.",
    description: "A compact, portable handheld variant of the traditional Korana. Designed with an ergonomic forged iron handle or socket, the Hand Korana gives the cook full manual control for grating coconut halves and scraping vegetables without needing a floor-mounted setup.",
    material: "Hand-Forged Carbon Iron",
    forgingTechnique: "Single-piece or welded forged shank with chisel-cut serrations",
    intendedUse: "Handheld coconut grating, vegetable scraping, domestic kitchen utility",
    image: "/images/products/hand-korana.jpg",
    gallery: [
      "/images/products/hand-korana.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Handheld Traditional Scraper" },
      { label: "Head Style", value: "Curved serrated scraping teeth" },
      { label: "Handle Type", value: "Integrated iron handle or wooden grip socket" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: false,
    craftNotes: "Lightweight yet solid in the hand, forged to withstand everyday kitchen scraping pressure without flexing.",
    availabilityNote: "Manufactured in small workshop batches.",
  },
  {
    id: "prod-004",
    slug: "kuradi",
    name: "Kuradi (Hand Hatchet / Small Wood Axe)",
    hindiName: "कुराड़ी (छोटी कुल्हाड़ी / काष्ठ औजार)",
    category: "Woodworking & Axes",
    shortDescription: "Agile, one-handed forged hatchet for branch cutting, kindling splitting, and light rural carpentry.",
    description: "The Kuradi is an essential hand-forged hatchet built for quick, controlled one-handed work. Shaped on the anvil with a balanced cutting bevel, it is ideal for trimming branches, splitting firewood kindling, rough carpentry shaping, and everyday farmstead clearing.",
    material: "High-Strength Carbon Iron",
    forgingTechnique: "Coal-hearth heated, anvil-drawn eye and tempered cutting blade",
    intendedUse: "One-handed wood cutting, kindling splitting, branch lopping, rough carpentry",
    image: "/images/products/kuradi.jpg",
    gallery: [
      "/images/products/kuradi.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-craftsman.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Hand Hatchet / Compact Axe (Kuradi)" },
      { label: "Forging Process", value: "Hand-hammered anvil forging with heat-treated edge" },
      { label: "Handle Fitting", value: "Tapered forged eye socket for wooden handle wedging" },
      { label: "Dimensions & Weight", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "The eye of each Kuradi is drift-forged to ensure tight handle seating, preventing loosening during vigorous chopping.",
    availabilityNote: "Direct supply from workshop. Bulk orders welcomed.",
  },
  {
    id: "prod-005",
    slug: "katuri",
    name: "Katuri (Curved Harvesting & Pruning Knife)",
    hindiName: "कतूरी (पारंपरिक फल व शाखा कटर)",
    category: "Cutting & Slicing Tools",
    shortDescription: "Specialized curved pruning and cutting knife for orchard work, branch lopping, and crop harvesting.",
    description: "The Katuri features a distinctive curved cutting profile hand-forged to hook, pull, and cleanly slice through vines, fruit stems, and green branches. Favored by orchard growers and rural farmers for its agile slicing action and strong spine.",
    material: "Tempered Carbon Iron",
    forgingTechnique: "Curved anvil forging with precision ground cutting edge",
    intendedUse: "Orchard harvesting, fruit harvesting, vine trimming, farm pruning",
    image: "/images/products/katuri.jpg",
    gallery: [
      "/images/products/katuri.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Curved Harvesting Knife (Katuri)" },
      { label: "Blade Profile", value: "Curved hook blade for pulling cuts" },
      { label: "Tang / Handle", value: "Forged tang ready for traditional wooden handle" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: false,
    craftNotes: "Forged with a reinforced inner curvature to deliver maximum leverage during hook-cutting strokes.",
    availabilityNote: "Produced regularly. Wholesale trade inquiries accepted.",
  },
  {
    id: "prod-006",
    slug: "daab",
    name: "Daab (Heavy Village Cleaver / Billhook)",
    hindiName: "दाब (पारंपरिक दरांती / भारी दाव)",
    category: "Cutting & Slicing Tools",
    shortDescription: "Forward-weighted heavy cutting blade forged for bamboo splitting, bush clearing, and farm maintenance.",
    description: "A powerhouse cutting tool across rural India. The Daab is hand-beaten with a forward-weighted profile that concentrates downward striking force. Built tough to tackle fibrous green bamboo, thorny boundary hedges, firewood bundles, and thick crop stalks.",
    material: "Heavy-Duty High-Carbon Iron",
    forgingTechnique: "Heavy flat-anvil hammering, oil-quenched cutting bevel",
    intendedUse: "Bamboo cutting, thick brush clearing, farm boundary maintenance",
    image: "/images/products/daab.jpg",
    gallery: [
      "/images/products/daab.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Heavy Cleaver / Billhook (Daab)" },
      { label: "Blade Style", value: "Forward-weighted curved cutting blade" },
      { label: "Tang Construction", value: "Full forged tang or integral socket" },
      { label: "Dimensions & Weight", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "Forward weighting allows clean, authoritative chops through dense fibers with minimal strain on the user's wrist.",
    availabilityNote: "Regular workshop production. Available for retail and wholesale.",
  },
  {
    id: "prod-007",
    slug: "kodal",
    name: "Kodal (Heavy Field Hoe / Digging Spade)",
    hindiName: "कोदाल (भारी फावड़ा / खुदाई औजार)",
    category: "Agricultural & Field Tools",
    shortDescription: "Heavy-duty soil-breaking hoe forged for trenching, field preparation, and canal digging.",
    description: "Built for the most demanding manual agricultural work. The Kodal is hand-hammered with a broad, thick iron blade and a reinforced eye collar. It bites deep into hard-packed, clayey, and stony soils for preparing crop beds, cutting irrigation furrows, and digging drainage trenches.",
    material: "Dense Carbon Structural Iron",
    forgingTechnique: "Two-person sledgehammer anvil forge work, tempered cutting edge",
    intendedUse: "Field preparation, deep digging, trenching, irrigation canal work",
    image: "/images/products/kodal.jpg",
    gallery: [
      "/images/products/kodal.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-hearth.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Heavy Field Hoe / Kodal (Phawra)" },
      { label: "Socket Eye", value: "Reinforced drift-forged circular eye for heavy wooden handle" },
      { label: "Blade Width & Thickness", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Finish", value: "Natural forge scale protective black finish" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "The thick collar around the handle socket is hot-drifted from solid iron to withstand high leveraged torque without tearing.",
    availabilityNote: "Direct supply to farmers, hardware stockists, and agricultural retailers.",
  },
  {
    id: "prod-008",
    slug: "churi",
    name: "Churi (Traditional Hand-Forged Utility Knife)",
    hindiName: "छुरी (पारंपरिक लोहे का चाकू)",
    category: "Cutting & Slicing Tools",
    shortDescription: "Robust all-purpose knife forged from solid carbon iron for daily rural chores and cutting tasks.",
    description: "Unlike thin commercial stamped kitchen knives, the MAKAR JI Churi is forged from solid carbon iron on the anvil. Designed with a sturdy spine and a keen cutting edge, it handles heavy kitchen prep, rope cutting, field trimming, and general farmstead utility with dependable durability.",
    material: "Solid Carbon Iron",
    forgingTechnique: "Anvil flat-beaten, oil-quenched cutting edge",
    intendedUse: "General purpose cutting, kitchen utility, rural homestead tasks",
    image: "/images/products/churi.jpg",
    gallery: [
      "/images/products/churi.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Hand-Forged Utility Knife (Churi)" },
      { label: "Blade Style", value: "Straight/clip point utility cutting blade" },
      { label: "Tang Type", value: "Forged tang ready for wooden scales or handle insertion" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: false,
    craftNotes: "Maintains a sharp edge that can easily be resharpened on standard whetstones or river stones in rural settings.",
    availabilityNote: "Crafted in small batches. Wholesale discounts for retail stores.",
  },
  {
    id: "prod-009",
    slug: "kulhadi",
    name: "Kulhadi (Heavy Woodcutting & Splitting Axe)",
    hindiName: "कुल्हाड़ी (भारी काष्ठ कुल्हाड़ी)",
    category: "Woodworking & Axes",
    shortDescription: "Heavy two-handed timber-felling and log-splitting axe head forged from dense carbon iron.",
    description: "The flagship woodcutting tool of the Indian village blacksmith. The Kulhadi is shaped on the anvil with substantial mass behind the cutting wedge, allowing maximum kinetic impact when felling trees, trimming logs, and splitting stubborn hardwood timber like babool, neem, and sheesham.",
    material: "Dense High-Carbon Iron",
    forgingTechnique: "Heavy anvil hammer-forged, hot-drifted eye socket, oil-tempered cutting bevel",
    intendedUse: "Tree felling, firewood splitting, timber framing, rural forestry",
    image: "/images/products/kulhadi.jpg",
    gallery: [
      "/images/products/kulhadi.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-craftsman.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Heavy Felling & Splitting Axe (Kulhadi)" },
      { label: "Eye Fitting", value: "Standard tapered oval socket for hardwood handles" },
      { label: "Weight & Dimensions", value: "Batch-crafted; contact workshop for exact weights" },
      { label: "Blade Edge", value: "Keen ground cutting bevel with forge-hardened core" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "The poll (back of the head) is reinforced to absorb shock and permit light hammering tasks without deforming the eye.",
    availabilityNote: "Direct manufacturer supply. Individual units and bulk lots available.",
  },
  {
    id: "prod-010",
    slug: "hasua",
    name: "Hasua (Traditional Harvesting Sickle)",
    hindiName: "हँसुआ / दरांती (फसल कटाई औजार)",
    category: "Cutting & Slicing Tools",
    shortDescription: "Anvil-tempered curved sickle for rapid harvesting of wheat, paddy, grasses, and green fodder.",
    description: "The Hasua (also known as Daranti) is the lifeblood of Indian agricultural harvesting. Forged with an ergonomic sweeping curve, its keen cutting edge allows farmers to reap dense stands of grain, paddy, and fodder grass swiftly and cleanly during peak harvest seasons.",
    material: "Spring-Hardened Carbon Iron",
    forgingTechnique: "Hand-curved anvil beating with water/oil quench for long-lasting sharpness",
    intendedUse: "Crop harvesting (paddy, wheat), grass cutting, animal fodder collection",
    image: "/images/products/hasua.jpg",
    gallery: [
      "/images/products/hasua.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-hearth.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Traditional Harvesting Sickle (Hasua / Daranti)" },
      { label: "Blade Profile", value: "Curved reaping blade with fine slicing bevel" },
      { label: "Handle Tang", value: "Pointed tang for secure wooden handle seating" },
      { label: "Dimensions & Curve", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "Balanced weight and curvature minimize wrist fatigue over long hours in the harvest field.",
    availabilityNote: "High demand seasonal manufacturing. Pre-orders and bulk stockist supply available.",
  },
  {
    id: "prod-011",
    slug: "khurpi",
    name: "Khurpi (Hand-Forged Weeding Trowel)",
    hindiName: "खुरपी (निराई-गुड़ाई खुरपा)",
    category: "Agricultural & Field Tools",
    shortDescription: "The essential Indian farming and gardening trowel forged to withstand daily hard soil scraping.",
    description: "An indispensable tool found on every Indian farm and kitchen garden. The Khurpi is hand-beaten from resilient carbon iron to endure continuous scraping against compacted, sun-baked soil, rocks, and root clusters. Unlike thin stamped sheet-metal tools, a forged Khurpi will not bend or twist under pressure.",
    material: "High-Tensile Carbon Iron",
    forgingTechnique: "Anvil-flattened blade with forged offset neck for hand clearance",
    intendedUse: "Weeding, soil aeration, grass scraping, nursery transplantation",
    image: "/images/products/khurpi.jpg",
    gallery: [
      "/images/products/khurpi.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Hand Weeding Trowel (Khurpi / Khurpa)" },
      { label: "Blade Thickness", value: "Solid hand-flattened iron plate" },
      { label: "Tang Design", value: "Forged tang for traditional turned wooden handle" },
      { label: "Dimensions", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "The angled neck keeps the user's knuckles elevated above rough, stony ground during continuous weeding work.",
    availabilityNote: "Produced year-round. Available in single units and 50+ bulk farming distributor lots.",
  },
  {
    id: "prod-012",
    slug: "shovel-spade",
    name: "Shovel / Spade (Heavy Agricultural Belcha / Phawra)",
    hindiName: "बेलचा / फावड़ा (मिट्टी उठाने का औजार)",
    category: "Agricultural & Field Tools",
    shortDescription: "Broad-blade heavy shovel for moving earth, sand, farm manure, and harvested grains.",
    description: "Engineered for bulk material handling across farms, grain yards, and rural construction sites. The Belcha features a wide, dished iron blade with a strong central ridge and a heavy-gauge handle socket that takes the strain of repeated heavy scooping.",
    material: "Heavy-Gauge Structural Carbon Iron",
    forgingTechnique: "Hot-pressed and anvil-beaten scoop plate with welded/forged handle socket",
    intendedUse: "Bulk soil handling, compost moving, sand shoveling, grain yard work",
    image: "/images/products/image.png",
    gallery: [
      "/images/products/shovel-spade.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-hearth.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Heavy Shovel / Spade (Belcha)" },
      { label: "Blade Profile", value: "Dished scoop with reinforced center spine" },
      { label: "Socket Style", value: "Deep iron socket for long wooden pole/handle" },
      { label: "Dimensions & Capacity", value: "Batch-crafted; contact workshop for exact dimensions" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: false,
    craftNotes: "Reinforced collar prevents blade-to-socket breakage when lifting dense, wet soil or gravel.",
    availabilityNote: "Direct workshop supply for retail hardware merchants and agricultural buyers.",
  },
  {
    id: "prod-013",
    slug: "gaiti",
    name: "Gaiti (Heavy-Duty Double-Ended Pickaxe / Mattock)",
    hindiName: "गैंती (गहरी खुदाई व पत्थर तोड़ने का औजार)",
    category: "Agricultural & Field Tools",
    shortDescription: "Double-ended heavy pickaxe with a pointed rock-pick and chisel hoe blade for breaking hard ground.",
    description: "The ultimate earth-penetrating manual tool. The Gaiti features a two-sided forged head: one side tapers to a sharp diamond point for piercing rock, hardpan clay, and dry soil, while the other side forms a sharp chisel blade for cutting tree roots and digging narrow trenches.",
    material: "Solid Heavy Carbon Iron",
    forgingTechnique: "Heavy two-man anvil forging, dual-ended hardening, hot-drifted eye",
    intendedUse: "Breaking rocky earth, hardpan soil, root cutting, foundation digging",
    image: "/images/products/kuradi.jpg",
    gallery: [
      "/images/products/gaiti.jpg",
      "/images/hero/hero-blacksmith.jpg",
      "/images/workshop/workshop-anvil.jpg",
    ],
    specifications: [
      { label: "Tool Type", value: "Heavy Pickaxe / Mattock (Gaiti)" },
      { label: "Head Configuration", value: "Double-ended: Diamond pick point + Chisel hoe blade" },
      { label: "Center Eye", value: "Reinforced heavy-duty oval socket for pickaxe handle" },
      { label: "Head Weight & Dimensions", value: "Batch-crafted; contact workshop for exact weights" },
      { label: "Origin", value: "Handmade in village blacksmith workshop, India" },
    ],
    featured: true,
    craftNotes: "Each end is differentially heat-treated on the forge: the pick point is hardened against blunt impact while the eye retains shock-absorbing toughness.",
    availabilityNote: "Available in standard heavy forge weights. Dispatch directly from workshop.",
  },
];

export const CATEGORIES: ProductCategory[] = [
  "Cutting & Slicing Tools",
  "Woodworking & Axes",
  "Agricultural & Field Tools",
  "Household & Processing Tools",
];

// Helper functions for data retrieval

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory | "All"): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string, category?: ProductCategory | "All"): Product[] {
  const q = query.trim().toLowerCase();
  let list = PRODUCTS;

  if (category && category !== "All") {
    list = list.filter((p) => p.category === category);
  }

  if (!q) return list;

  return list.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      (p.hindiName && p.hindiName.toLowerCase().includes(q)) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.material && p.material.toLowerCase().includes(q)) ||
      (p.intendedUse && p.intendedUse.toLowerCase().includes(q))
    );
  });
}

export function getAllCategories(): ProductCategory[] {
  return CATEGORIES;
}

export function getRelatedProducts(currentSlug: string, limit: number = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);

  const sameCategory = PRODUCTS.filter(
    (p) => p.category === current.category && p.slug !== currentSlug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = PRODUCTS.filter(
    (p) => p.category !== current.category && p.slug !== currentSlug
  );

  return [...sameCategory, ...others].slice(0, limit);
}
