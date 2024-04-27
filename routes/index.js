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
    id: 7,
    name: 'Rust Disease',
    description: 'A disease causing rust-colored lesions on leaves.',
    causes: ['Fungus'],
    symptoms: ['Rust-colored spots on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide application', 'Removing infected leaves']
  },
  {
    id: 8,
    name: 'Canker Disease',
    description: 'A disease causing sunken lesions on stems and branches.',
    causes: ['Fungi'],
    symptoms: ['Sunken lesions on stems', 'Dieback of branches'],
    cures: ['Pruning affected branches', 'Fungicide treatment']
  },
  {
    id: 9,
    name: 'Anthracnose',
    description: 'A fungal disease causing dark lesions on plant tissues.',
    causes: ['Fungi'],
    symptoms: ['Dark lesions on leaves', 'Twig dieback'],
    cures: ['Fungicide spray', 'Pruning infected parts']
  },
  {
    id: 10,
    name: 'Viral Infection',
    description: 'A disease caused by viruses affecting plant growth.',
    causes: ['Viruses'],
    symptoms: ['Stunted growth', 'Mosaic patterns on leaves'],
    cures: ['No specific cure', 'Improving plant health']
  },
  {
    id: 11,
    name: 'Nematode Infestation',
    description: 'A pest infestation causing damage to plant roots.',
    causes: ['Nematodes'],
    symptoms: ['Root knots', 'Yellowing of leaves'],
    cures: ['Soil fumigation', 'Nematicide application']
  },
  {
    id: 12,
    name: 'Blight Disease',
    description: 'A disease causing rapid discoloration and death of plant tissues.',
    causes: ['Bacteria', 'Fungi'],
    symptoms: ['Rapid wilting', 'Blackened plant parts'],
    cures: ['Antibiotic treatment', 'Fungicide application']
  },
  {
    id: 13,
    name: 'Scab Disease',
    description: 'A disease causing scab-like lesions on plant surfaces.',
    causes: ['Fungi'],
    symptoms: ['Scab-like lesions on leaves', 'Reduced fruit quality'],
    cures: ['Fungicide spray', 'Improved sanitation']
  },
  {
    id: 14,
    name: 'Yellow Mottle Virus',
    description: 'A viral disease causing yellowing and mottling of leaves.',
    causes: ['Virus'],
    symptoms: ['Yellow mottling of leaves', 'Stunted growth'],
    cures: ['No specific cure', 'Improving plant vigor']
  },
  {
    id: 15,
    name: 'Rotten Fruit Disease',
    description: 'A disease causing rotting of fruits on plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of fruits', 'Foul odor'],
    cures: ['Removing infected fruits', 'Fungicide treatment']
  },
  {
    id: 16,
    name: 'Leaf Curl Disease',
    description: 'A disease causing abnormal curling of plant leaves.',
    causes: ['Virus'],
    symptoms: ['Abnormal leaf curling', 'Reduced leaf size'],
    cures: ['No specific cure', 'Improving plant health']
  },
  {
    id: 17,
    name: 'Downy Mildew',
    description: 'A fungal disease characterized by downy growth on leaves.',
    causes: ['Fungus'],
    symptoms: ['Downy growth on leaves', 'Yellowing of infected areas'],
    cures: ['Fungicide application', 'Improved air circulation']
  },
  {
    id: 18,
    name: 'Leaf Blister',
    description: 'A disease causing blister-like lesions on plant leaves.',
    causes: ['Fungi'],
    symptoms: ['Blister-like lesions on leaves', 'Yellowing of infected areas'],
    cures: ['Fungicide spray', 'Improved sanitation']
  },
  {
    id: 19,
    name: 'Root Knot Nematode',
    description: 'A type of nematode causing knot-like swellings on plant roots.',
    causes: ['Nematodes'],
    symptoms: ['Root knot formations', 'Reduced nutrient uptake'],
    cures: ['Nematicide application', 'Crop rotation']
  },
  {
    id: 20,
    name: 'Leaf Rust',
    description: 'A disease causing rust-colored spots on plant leaves.',
    causes: ['Fungus'],
    symptoms: ['Rust-colored spots on leaves', 'Leaf yellowing'],
    cures: ['Fungicide treatment', 'Pruning affected leaves']
  },
  {
    id: 21,
    name: 'Smudge Disease',
    description: 'A disease causing smudge-like spots on plant surfaces.',
    causes: ['Fungi'],
    symptoms: ['Smudge-like spots on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide spray', 'Improved sanitation']
  },
  {
    id: 22,
    name: 'Canker Sores',
    description: 'A disease causing canker-like sores on plant tissues.',
    causes: ['Bacteria', 'Fungi'],
    symptoms: ['Canker-like sores on stems', 'Dieback of branches'],
    cures: ['Pruning affected parts', 'Fungicide application']
  },
  {
    id: 23,
    name: 'Yellow Leaf Syndrome',
    description: 'A syndrome causing yellowing and necrosis of plant leaves.',
    causes: ['Environmental stress', 'Nutrient deficiencies'],
    symptoms: ['Yellowing of leaves', 'Leaf necrosis'],
    cures: ['Addressing nutrient deficiencies', 'Improving growing conditions']
  },
  {
    id: 24,
    name: 'Leaf Necrosis',
    description: 'A condition causing necrosis of plant leaves.',
    causes: ['Environmental stress', 'Disease pathogens'],
    symptoms: ['Necrotic areas on leaves', 'Leaf wilting'],
    cures: ['Addressing underlying causes', 'Fungicide treatment']
  },
  {
    id: 25,
    name: 'Fruit Rot',
    description: 'A disease causing rotting of fruits on plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of fruits', 'Foul odor'],
    cures: ['Removing infected fruits', 'Fungicide treatment']
  },
  {
    id: 26,
    name: 'Cabbage Yellowing',
    description: 'A disease causing yellowing of cabbage leaves.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Yellowing of cabbage leaves', 'Leaf necrosis'],
    cures: ['Fungicide application', 'Crop rotation']
  },
  {
    id: 27,
    name: 'Tomato Blight',
    description: 'A disease causing rapid wilting and death of tomato plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Rapid wilting', 'Blackened stems'],
    cures: ['Fungicide treatment', 'Removing infected plants']
  },
  {
    id: 28,
    name: 'Potato Rot',
    description: 'A disease causing rotting of potato tubers.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of potatoes', 'Foul odor'],
    cures: ['Removing infected tubers', 'Fungicide treatment']
  },
  {
    id: 29,
    name: 'Bean Rust',
    description: 'A disease causing rust-colored spots on bean leaves.',
    causes: ['Fungi'],
    symptoms: ['Rust-colored spots on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide application', 'Pruning affected leaves']
  },
  {
    id: 30,
    name: 'Apple Scab',
    description: 'A fungal disease causing scab-like lesions on apple fruits.',
    causes: ['Fungi'],
    symptoms: ['Scab-like lesions on fruits', 'Reduced fruit quality'],
    cures: ['Fungicide spray', 'Improved sanitation']
  },
  {
    id: 31,
    name: 'Grape Leaf Spot',
    description: 'A disease causing spots on grape leaves.',
    causes: ['Fungi'],
    symptoms: ['Circular spots on leaves', 'Leaf yellowing'],
    cures: ['Pruning affected leaves', 'Fungicide application']
  },
  {
    id: 32,
    name: 'Melon Blight',
    description: 'A disease causing wilting and death of melon plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Wilting of plants', 'Brown discoloration'],
    cures: ['Fungicide treatment', 'Improving drainage']
  },
  {
    id: 33,
    name: 'Carrot Rust',
    description: 'A disease causing rust-colored lesions on carrot leaves.',
    causes: ['Fungi'],
    symptoms: ['Rust-colored lesions on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide application', 'Improved sanitation']
  },
  {
    id: 34,
    name: 'Onion Blight',
    description: 'A disease causing rapid wilting and death of onion plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Rapid wilting', 'Yellowing of leaves'],
    cures: ['Fungicide treatment', 'Removing infected plants']
  },
  {
    id: 35,
    name: 'Pepper Rot',
    description: 'A disease causing rotting of pepper fruits.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Softening of fruits', 'Foul odor'],
    cures: ['Removing infected fruits', 'Fungicide treatment']
  },
  {
    id: 36,
    name: 'Cucumber Mosaic Virus',
    description: 'A viral disease causing mosaic patterns on cucumber leaves.',
    causes: ['Virus'],
    symptoms: ['Mosaic patterns on leaves', 'Stunted growth'],
    cures: ['No specific cure', 'Improving plant health']
  },
  {
    id: 37,
    name: 'Corn Smut',
    description: 'A fungal disease causing smut-like growth on corn kernels.',
    causes: ['Fungi'],
    symptoms: ['Smut-like growth on kernels', 'Reduced yield'],
    cures: ['Removing infected parts', 'Fungicide treatment']
  },
  {
    id: 38,
    name: 'Rice Blast',
    description: 'A fungal disease causing blast-like lesions on rice leaves.',
    causes: ['Fungi'],
    symptoms: ['Blast-like lesions on leaves', 'Reduced yield'],
    cures: ['Fungicide spray', 'Improved drainage']
  },
  {
    id: 39,
    name: 'Wheat Rust',
    description: 'A disease causing rust-colored spots on wheat leaves.',
    causes: ['Fungi'],
    symptoms: ['Rust-colored spots on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide application', 'Pruning affected leaves']
  },
  {
    id: 40,
    name: 'Soybean Pod Blight',
    description: 'A disease causing blight on soybean pods.',
    causes: ['Fungi'],
    symptoms: ['Blight on pods', 'Reduced yield'],
    cures: ['Fungicide application', 'Improved sanitation']
  },
  {
    id: 41,
    name: 'Barley Stripe',
    description: 'A disease causing striped patterns on barley leaves.',
    causes: ['Fungi'],
    symptoms: ['Striped patterns on leaves', 'Reduced yield'],
    cures: ['Fungicide spray', 'Pruning affected leaves']
  },
  {
    id: 42,
    name: 'Oat Rust',
    description: 'A disease causing rust-colored spots on oat leaves.',
    causes: ['Fungi'],
    symptoms: ['Rust-colored spots on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide application', 'Pruning affected leaves']
  },
  {
    id: 43,
    name: 'Sunflower Downy Mildew',
    description: 'A fungal disease causing downy growth on sunflower leaves.',
    causes: ['Fungi'],
    symptoms: ['Downy growth on leaves', 'Reduced plant vigor'],
    cures: ['Fungicide spray', 'Improved air circulation']
  },
  {
    id: 44,
    name: 'Potato Late Blight',
    description: 'A disease causing late blight on potato plants.',
    causes: ['Fungi', 'Bacteria'],
    symptoms: ['Late blight symptoms', 'Wilting of plants'],
    cures: ['Fungicide treatment', 'Removing infected plants']
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
  {
    "id": 88,
    "name": "Pineapple Fusarium Wilt",
    "description": "A fungal disease causing wilt in pineapple plants.",
    "causes": ["Fungi"],
    "symptoms": ["Wilted plants", "Reduced fruit production"],
    "cures": ["Resistant cultivars", "Soil treatments"]
  },
  {
    "id": 89,
    "name": "Spinach Downy Mildew",
    "description": "A fungal disease causing downy mildew in spinach leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Downy growth on leaves", "Reduced leaf quality"],
    "cures": ["Fungicide treatment", "Improve air circulation"]
  },
  {
    "id": 90,
    "name": "Sorghum Head Smut",
    "description": "A fungal disease affecting sorghum heads.",
    "causes": ["Fungi"],
    "symptoms": ["Smut-filled heads", "Reduced grain yield"],
    "cures": ["Seed treatment", "Crop rotation"]
  },
  {
    "id": 91,
    "name": "Tobacco Mosaic Virus",
    "description": "A viral disease affecting tobacco plants.",
    "causes": ["Virus"],
    "symptoms": ["Mosaic patterns on leaves", "Stunted growth"],
    "cures": ["Destroy infected plants", "Preventative measures"]
  },
  {
    "id": 92,
    "name": "Watermelon Fusarium Wilt",
    "description": "A fungal disease causing wilt in watermelon plants.",
    "causes": ["Fungi"],
    "symptoms": ["Wilted plants", "Reduced fruit production"],
    "cures": ["Resistant cultivars", "Soil treatments"]
  },
  {
    "id": 93,
    "name": "Oat Crown Rust",
    "description": "A fungal disease affecting oat leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Crown rust symptoms", "Reduced yield"],
    "cures": ["Fungicide application", "Crop rotation"]
  },
  {
    "id": 94,
    "name": "Pear Fire Blight",
    "description": "A bacterial disease causing blight in pear trees.",
    "causes": ["Bacteria"],
    "symptoms": ["Fire blight symptoms", "Reduced fruit set"],
    "cures": ["Antibiotic spray", "Prune infected branches"]
  },
  {
    "id": 95,
    "name": "Chickpea Ascochyta Blight",
    "description": "A fungal disease affecting chickpea leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Ascochyta blight symptoms", "Reduced yield"],
    "cures": ["Fungicide treatment", "Crop rotation"]
  },
  {
    "id": 96,
    "name": "Lemon Citrus Canker",
    "description": "A bacterial disease causing canker in lemon trees.",
    "causes": ["Bacteria"],
    "symptoms": ["Canker symptoms", "Reduced fruit quality"],
    "cures": ["Antibiotic spray", "Prune infected branches"]
  },
  {
    "id": 97,
    "name": "Cowpea Rust",
    "description": "A fungal disease affecting cowpea leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Rusty spots on leaves", "Reduced yield"],
    "cures": ["Fungicide application", "Crop rotation"]
  },
  {
    "id": 98,
    "name": "Bean Anthracnose",
    "description": "A fungal disease causing anthracnose in bean pods.",
    "causes": ["Fungi"],
    "symptoms": ["Anthracnose lesions", "Reduced pod quality"],
    "cures": ["Fungicide spray", "Remove infected plants"]
  },
  {
    "id": 99,
    "name": "Pecan Scab",
    "description": "A fungal disease affecting pecan leaves and nuts.",
    "causes": ["Fungi"],
    "symptoms": ["Scabby spots on leaves", "Deformed nuts"],
    "cures": ["Fungicide application", "Prune infected branches"]
  },
  {
    "id": 100,
    "name": "Sunflower Downy Mildew",
    "description": "A fungal disease causing downy mildew in sunflower leaves.",
    "causes": ["Fungi"],
    "symptoms": ["Downy growth on leaves", "Reduced seed yield"],
    "cures": ["Fungicide treatment", "Improve air circulation"]
  }
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
    res.status(404).json({ error: 'Disease not found' });
  }
});

module.exports = router;
