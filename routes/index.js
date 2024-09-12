// routes/index.js

const express = require('express');
const router = express.Router();

// Sample data (replace with your actual data source)
const cropDiseases = [
  {
    id: 1,
    name: 'Bacterial Blight',
    description: 'A common bacterial disease affecting crops.',
    causes: ['Bacteria X', 'Bacteria Y'],
    symptoms: ['Yellowing leaves', 'Dark spots on stems'],
    cures: ['Antibiotic A', 'Antibiotic B']
  },
  {
    id: 2,
    name: 'Fungal Infection',
    description: 'A fungal disease that affects plant growth.',
    causes: ['Fungus A', 'Fungus B'],
    symptoms: ['White powdery residue on leaves', 'Wilting of stems'],
    cures: ['Fungicide X', 'Fungicide Y']
  },
  {
    id: 3,
    name: 'Root Rot',
    description: 'A disease causing decay of plant roots.',
    causes: ['Fungi', 'Waterlogging'],
    symptoms: ['Yellowing leaves', 'Stunted growth'],
    cures: ['Improving drainage', 'Fungicide treatment']
  },
  {
    id: 4,
    name: 'Leaf Spot',
    description: 'A disease causing spots on plant leaves.',
    causes: ['Bacteria', 'Fungi'],
    symptoms: ['Circular spots on leaves', 'Leaf yellowing'],
    cures: ['Pruning affected leaves', 'Fungicide application']
  },
  {
    id: 5,
    name: 'Powdery Mildew',
    description: 'A fungal disease characterized by white powdery growth.',
    causes: ['Fungus'],
    symptoms: ['White powdery patches on leaves', 'Leaf curling'],
    cures: ['Fungicide spray', 'Improving air circulation']
  },
  {
    id: 6,
    name: 'Wilt Disease',
    description: 'A disease causing wilting of plant parts.',
    causes: ['Bacteria', 'Fungi'],
    symptoms: ['Wilting of leaves', 'Brown discoloration'],
    cures: ['Antibiotic treatment', 'Fungicide spray']
  },
  {
    id: 45,
    name: 'Sweet Potato Weevil',
    description: 'A pest causing damage to sweet potato roots.',
    causes: ['Insect - Sweet Potato Weevil'],
    symptoms: ['Damage to sweet potato roots', 'Reduced yield'],
    cures: ['Insecticide application', 'Crop rotation']
  },
  {
    id: 46,
    name: 'Ginger Rhizome Rot',
    description: 'A disease causing rotting of ginger rhizomes.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of rhizomes', 'Foul odor'],
    cures: ['Removing infected rhizomes', 'Fungicide treatment']
  },
  {
    id: 47,
    name: 'Banana Fusarium Wilt',
    description: 'A fungal disease causing wilt in banana plants.',
    causes: ['Fungi'],
    symptoms: ['Wilting of plants', 'Yellowing of leaves'],
    cures: ['Fungicide application', 'Removing infected plants']
  },
  {
    id: 48,
    name: 'Pineapple Heart Rot',
    description: 'A disease causing rotting of pineapple hearts.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of hearts', 'Foul odor'],
    cures: ['Removing infected hearts', 'Fungicide treatment']
  },
  {
    id: 49,
    name: 'Mango Anthracnose',
    description: 'A fungal disease causing anthracnose in mango fruits.',
    causes: ['Fungi'],
    symptoms: ['Anthracnose symptoms', 'Reduced fruit quality'],
    cures: ['Fungicide spray', 'Improved sanitation']
  },
  {
    id: 50,
    name: 'Avocado Root Rot',
    description: 'A disease causing rotting of avocado roots.',
    causes: ['Fungi', 'Waterlogging'],
    symptoms: ['Yellowing leaves', 'Stunted growth'],
    cures: ['Improving drainage', 'Fungicide treatment']
  },
  {
    "id": 51,
    "name": "Tomato Blight",
    "description": "A fungal disease causing blight in tomato plants.",
    "causes": ["Fungi"],
    "symptoms": ["Blighted leaves", "Dark spots on fruits"],
    "cures": ["Fungicide spray", "Pruning infected parts"]
  },
  {
    "id": 52,
    "name": "Potato Early Blight",
    "description": "A fungal disease affecting potato leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Early blight symptoms", "Reduced tuber yield"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 53,
    "name": "Cabbage Black Rot",
    "description": "A bacterial disease causing rot in cabbage heads.",
    "causes": ["Bacteria"],
    "symptoms": ["Blackening of leaf veins", "Rotten cabbage heads"],
    "cures": ["Antibiotic spray", "Remove infected plants"]
  },
  {
    "id": 54,
    "name": "Corn Smut",
    "description": "A fungal disease affecting corn kernels.",
    "causes": ["Fungi"],
    "symptoms": ["Smut-filled kernels", "Reduced crop quality"],
    "cures": ["Remove affected ears", "Fungicide treatment"]
  },
  {
    "id": 55,
    "name": "Grape Powdery Mildew",
    "description": "A fungal disease causing powdery mildew on grape leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Powdery growth on leaves", "Reduced fruit quality"],
    "cures": ["Sulfur spray", "Improved ventilation"]
  },
  {
    "id": 56,
    "name": "Apple Scab",
    "description": "A fungal disease affecting apple leaves and fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Scabby spots on leaves", "Deformed fruits"],
    "cures": ["Fungicide application", "Pruning infected branches"]
  },
  {
    "id": 57,
    "name": "Pepper Anthracnose",
    "description": "A fungal disease causing anthracnose in pepper fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Anthracnose lesions", "Reduced fruit yield"],
    "cures": ["Fungicide spray", "Sanitation practices"]
  },
  {
    "id": 58,
    "name": "Carrot Rust Fly",
    "description": "A pest causing damage to carrot roots.",
    "causes": ["Insect - Carrot Rust Fly"],
    "symptoms": ["Root damage", "Stunted growth"],
    "cures": ["Insecticide application", "Crop rotation"]
  },
  {
    "id": 59,
    "name": "Lettuce Downy Mildew",
    "description": "A fungal disease causing downy mildew in lettuce leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Downy growth on leaves", "Reduced leaf quality"],
    "cures": ["Fungicide treatment", "Improve air circulation"]
  },
  {
    "id": 60,
    "name": "Bean Rust",
    "description": "A fungal disease affecting bean leaves and pods.",
    "causes": ["Fungi"],
    "symptoms": ["Rusty spots on leaves", "Pod discoloration"],
    "cures": ["Fungicide spray", "Remove infected plants"]
  },
  {
    "id": 61,
    "name": "Onion White Rot",
    "description": "A fungal disease causing white rot in onion bulbs.",
    "causes": ["Fungi"],
    "symptoms": ["White fungal growth", "Rotted bulbs"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 62,
    "name": "Strawberry Crown Rot",
    "description": "A disease causing rot in strawberry crowns.",
    "causes": ["Fungi", "Waterlogging"],
    "symptoms": ["Crown rot", "Wilting plants"],
    "cures": ["Improve drainage", "Fungicide treatment"]
  },
  {
    "id": 63,
    "name": "Blueberry Mummy Berry",
    "description": "A fungal disease affecting blueberry fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Mummified berries", "Reduced fruit yield"],
    "cures": ["Fungicide application", "Prune infected branches"]
  },
  {
    "id": 64,
    "name": "Peach Leaf Curl",
    "description": "A fungal disease causing curling of peach tree leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Leaf curling", "Reduced fruit set"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 65,
    "name": "Rice Blast",
    "description": "A fungal disease affecting rice plants.",
    "causes": ["Fungi"],
    "symptoms": ["Blast lesions on leaves", "Reduced grain yield"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 66,
    "name": "Walnut Anthracnose",
    "description": "A fungal disease causing anthracnose in walnut trees.",
    "causes": ["Fungi"],
    "symptoms": ["Anthracnose symptoms", "Reduced nut production"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 67,
    "name": "Melon Powdery Mildew",
    "description": "A fungal disease causing powdery mildew on melon leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Powdery growth on leaves", "Reduced fruit quality"],
    "cures": ["Sulfur spray", "Improved ventilation"]
  },
  {
    "id": 68,
    "name": "Asparagus Rust",
    "description": "A fungal disease affecting asparagus spears.",
    "causes": ["Fungi"],
    "symptoms": ["Rusty spots on spears", "Reduced spear quality"],
    "cures": ["Fungicide application", "Prune infected spears"]
  },
  {
    "id": 69,
    "name": "Cucumber Downy Mildew",
    "description": "A fungal disease causing downy mildew in cucumber leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Downy growth on leaves", "Reduced fruit yield"],
    "cures": ["Fungicide treatment", "Improve air circulation"]
  },
  {
    "id": 70,
    "name": "Mango Anthracnose",
    "description": "A fungal disease causing anthracnose in mango fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Anthracnose lesions", "Reduced fruit quality"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 71,
    "name": "Soybean Rust",
    "description": "A fungal disease affecting soybean leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Rusty spots on leaves", "Reduced yield"],
    "cures": ["Fungicide application", "Crop rotation"]
  },
  {
    "id": 72,
    "name": "Banana Panama Disease",
    "description": "A fungal disease causing wilt in banana plants.",
    "causes": ["Fungi"],
    "symptoms": ["Wilted leaves", "Reduced fruit production"],
    "cures": ["Resistant cultivars", "Soil treatments"]
  },
  {
    "id": 73,
    "name": "Plum Brown Rot",
    "description": "A fungal disease causing brown rot in plum fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Brown rot symptoms", "Fruit decay"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 74,
    "name": "Sugar Beet Rhizoctonia",
    "description": "A fungal disease affecting sugar beet roots.",
    "causes": ["Fungi"],
    "symptoms": ["Rhizoctonia symptoms", "Reduced yield"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 75,
    "name": "Cherry Leaf Spot",
    "description": "A fungal disease causing spotting on cherry tree leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Leaf spot lesions", "Reduced fruit quality"],
    "cures": ["Fungicide application", "Prune infected branches"]
  },
  {
    "id": 76,
    "name": "Peanut Leaf Spot",
    "description": "A fungal disease affecting peanut leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Leaf spot symptoms", "Reduced yield"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 77,
    "name": "Rose Powdery Mildew",
    "description": "A fungal disease causing powdery mildew on rose leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Powdery growth on leaves", "Reduced flower quality"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 78,
    "name": "Raspberry Cane Blight",
    "description": "A fungal disease affecting raspberry canes.",
    "causes": ["Fungi"],
    "symptoms": ["Cane blight symptoms", "Reduced yield"],
    "cures": ["Prune infected canes", "Fungicide treatment"]
  },
  {
    "id": 79,
    "name": "Cotton Verticillium Wilt",
    "description": "A fungal disease causing wilt in cotton plants.",
    "causes": ["Fungi"],
    "symptoms": ["Wilted plants", "Reduced fiber quality"],
    "cures": ["Resistant cultivars", "Soil treatments"]
  },
  {
    "id": 80,
    "name": "Cauliflower Downy Mildew",
    "description": "A fungal disease causing downy mildew in cauliflower leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Downy growth on leaves", "Reduced head quality"],
    "cures": ["Fungicide treatment", "Improve air circulation"]
  },
  {
    "id": 81,
    "name": "Barley Stripe Rust",
    "description": "A fungal disease affecting barley leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Stripe rust symptoms", "Reduced yield"],
    "cures": ["Fungicide application", "Crop rotation"]
  },
  {
    "id": 82,
    "name": "Hazelnut Eastern Filbert Blight",
    "description": "A fungal disease affecting hazelnut trees.",
    "causes": ["Fungi"],
    "symptoms": ["Eastern filbert blight symptoms", "Reduced nut production"],
    "cures": ["Prune infected branches", "Fungicide treatment"]
  },
  {
    "id": 83,
    "name": "Broccoli Clubroot",
    "description": "A fungal disease causing clubroot in broccoli roots.",
    "causes": ["Fungi"],
    "symptoms": ["Clubroot symptoms", "Stunted growth"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 84,
    "name": "Almond Brown Rot",
    "description": "A fungal disease causing brown rot in almond fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Brown rot symptoms", "Fruit decay"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 85,
    "name": "Celery Late Blight",
    "description": "A fungal disease causing late blight in celery leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Late blight symptoms", "Reduced stalk quality"],
    "cures": ["Fungicide application", "Prune infected leaves"]
  },
  {
    "id": 86,
    "name": "Grapevine Black Measles",
    "description": "A fungal disease affecting grapevine leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Black measles symptoms", "Reduced grape yield"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
  {
    "id": 87,
    "name": "Olive Anthracnose",
    "description": "A fungal disease causing anthracnose in olive fruits.",
    "causes": ["Fungi"],
    "symptoms": ["Anthracnose lesions", "Reduced fruit quality"],
    "cures": ["Fungicide spray", "Prune infected branches"]
  },
];


// GET /crop-diseases
router.get('/crop-diseases', (req, res) => {

  res.json(cropDiseases);
});

// GET /crop-diseases/:diseaseId
router.get('/crop-diseases/:diseaseId', (req, res) => {
  const diseaseId = parseInt(req.params.diseaseId);
  const disease = cropDiseases.find(d => d.id === diseaseId);
  if (disease) {
    res.json(disease);
  } else {
    res.status(405).json({ error: 'Disease not found in the list' });
  }
});

module.exports = router;
