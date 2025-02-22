const assetData = [
    {
      id: 1,
      title: "Fantasy Character Pack",
      description: "A collection of fantasy-themed characters for RPGs.",
      image: "https://syntystore.com/cdn/shop/products/Screenshot_01_0376cc8a-df8d-4764-beb9-2a9ebbb2b92d.jpg?v=1578114266&width=1080",
      price: 29.99,
      downloads: 7,
      type: "3D",
      uploadDate: "2024-01-15",
      lastUpdated: "2024-02-10"
    },
    {
      id: 2,
      title: "Sci-Fi Environment Pack",
      description: "High-quality sci-fi buildings and interiors.",
      image: "https://cdn1.epicgames.com/ue/product/Screenshot/ScreenShot00050-1920x1080-bf0ed7f4e150d1a0ff7b8ec4ee20ad51.jpg?resize=1&w=1920",
      price: 49.99,
      downloads: 5,
      type: "3D",
      uploadDate: "2024-01-20",
      lastUpdated: "2024-02-12"
    },
    {
      id: 3,
      title: "Medieval Weapons Pack",
      description: "A set of medieval swords, axes, and shields.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/key-image/edbd6772-633e-43b0-8f70-1689fdb7c993.jpg",
      price: 19.99,
      downloads: 9,
      type: "2D",
      uploadDate: "2024-01-10",
      lastUpdated: "2024-02-10"
    },
    {
      id: 4,
      title: "Voxel City Pack",
      description: "A complete voxel-style city for sandbox games.",
      image: "https://media.sketchfab.com/models/6015170ce334412d9c72ba6457758e46/thumbnails/f2cf133434a14d1fb54cc0bfab842638/1024x576.jpeg",
      price: "Free",
      downloads: 30,
      type: "3D",
      uploadDate: "2024-01-21",
      lastUpdated: "2024-02-15"
    },
    {
      id: 5,
      title: "Animated UI Elements",
      description: "A collection of animated UI components.",
      image: "https://img.Freepik.com/premium-vector/set-game-assets-menu-buttons-popup-screens-settings-buttons-red-yellow_398201-28.jpg",
      price: 14.99,
      downloads: 11,
      type: "2D",
      uploadDate: "2024-02-02",
      lastUpdated: "2024-02-16"
    },
    {
      id: 6,
      title: "2D Platformer Tileset",
      description: "A complete tileset for 2D platformer games.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/1b626695-d1b3-47f1-bc71-c51af9b46172_scaled.jpg",
      price: "Free",
      downloads: 2,
      type: "2D",
      uploadDate: "2024-01-20",
      lastUpdated: "2024-02-11"
    },
    {
      id: 7,
      title: "Low Poly Car Pack",
      description: "Low poly vehicles for racing games.",
      image: "https://media.sketchfab.com/models/1d942e1a2f564690a5d703fdc08657b3/thumbnails/ab011bbf36654c998cf688e1585dbf3e/48e5832c81544ab99b981a7b83423221.jpeg",
      price: 24.99,
      downloads: 5,
      type: "3D",
      uploadDate: "2024-02-05",
      lastUpdated: "2024-02-13"
    },
    {
      id: 8,
      title: "Realistic Grass and Trees",
      description: "Lush, high-quality foliage for open-world games.",
      image: "https://img.freepik.com/free-vector/hand-drawn-type-trees-collection_23-2149111778.jpg",
      price: "Free",
      downloads: 6,
      type: "2D",
      uploadDate: "2024-01-22",
      lastUpdated: "2024-02-08"
    },
    {
        id: 9,
        title: "Cyberpunk Neon Streets",
        description: "A futuristic cyberpunk environment featuring neon-lit streets, holograms, and high-tech buildings.",
        image: "https://i.ytimg.com/vi/1-bIbnvGZA0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD46r4Ohf0OGMBnxyYBn97uj08Eng",
        price: 25.99,
        downloads: 4,
        type: "3D",
        uploadDate: "2024-01-10",
        lastUpdated: "2024-02-17"
      },
    {
      id: 10,
      title: "Stylized Water Shader",
      description: "A highly optimized water shader for Unity.",
      image: "https://i.pinimg.com/736x/a5/e6/6a/a5e66acfed1422edbff4ebb98a541dcf.jpg",
      price: 22.99,
      downloads: 6,
      type: "3D",
      uploadDate: "2024-01-30",
      lastUpdated: "2024-02-14"
    },
    {
      id: 11,
      title: "Isometric Buildings Pack",
      description: "Beautiful isometric buildings for strategy games.",
      image: "https://i0.wp.com/graphicforFree.com/wp-content/uploads/2023/01/Free-3D-Isometric-Building-Pack-2.webp?fit=1920%2C1080&ssl=1",
      price: 27.99,
      downloads: 10,
      type: "3D",
      uploadDate: "2024-01-26",
      lastUpdated: "2024-02-13"
    },
    {
      id: 12,
      title: "Cartoon Animals Pack",
      description: "A variety of cute, animated animals.",
      image: "https://media.sketchfab.com/models/89c40e871f054fab855a029ff36ee4a9/thumbnails/1f541883baf94eddb9e43380d9cdd061/01b6a8f852b34607b43d015cd78c3ce7.jpeg",
      price: 21.99,
      downloads: 2,
      type: "3D",
      uploadDate: "2024-01-17",
      lastUpdated: "2024-02-11"
    } ,{
      id: 13,
      title: "Hand-Painted Dungeon Tileset",
      description: "A beautifully crafted dungeon tileset for 2D games.",
      image: "https://marketplacecdn.yoyogames.com/images/assets/2881/screenshots/6957_original.jpg?1445828306",
      price: 17.99,
      downloads: 8,
      type: "2D",
      uploadDate: "2024-02-01",
      lastUpdated: "2024-02-18"
    },
    {
      id: 14,
      title: "Space Battle Effects Pack",
      description: "High-energy particle effects for space battles.",
      image: "https://i0.wp.com/2minutetabletop.com/wp-content/uploads/2023/10/Battle-Damage-Assets-Large-preview.jpg?fit=1080%2C782&ssl=1",
      price: 19.99,
      downloads: 7,
      type: "2D",
      uploadDate: "2024-01-28",
      lastUpdated: "2024-02-15"
    },
    {
      id: 15,
      title: "Post-Apocalyptic City Pack",
      description: "A ruined cityscape for survival games.",
      image: "https://i.imgur.com/U3GkWR9.png",
      price: 34.99,
      downloads: 3,
      type: "3D",
      uploadDate: "2024-01-18",
      lastUpdated: "2024-02-12"
    },
    {
      id: 16,
      title: "Pixel Art Character Pack",
      description: "A diverse set of pixel-art characters for RPGs.",
      image: "https://cdn.dribbble.com/userupload/10650323/file/original-304c7a3b7fdec5a910fa83004b9041c1.jpg",
      price: 12.99,
      downloads: 9,
      type: "2D",
      uploadDate: "2024-02-03",
      lastUpdated: "2024-02-14"
    },
    {
      id: 17,
      title: "Stylized Forest Pack",
      description: "A vibrant forest environment for open-world games.",
      image: "https://cdn1.epicgames.com/ue/product/Screenshot/StylizedForestPackExample-13-1920x1080-2a2a74da63b6f3dc7f3aab0860bb5d51.jpg?resize=1&w=1920",
      price: "Free",
      downloads: 15,
      type: "3D",
      uploadDate: "2024-02-07",
      lastUpdated: "2024-02-19"
    },
    {
      id: 18,
      title: "Modular Sci-Fi Interiors",
      description: "A flexible set of sci-fi interior assets for space stations.",
      image: "https://cdn1.epicgames.com/ue/product/Screenshot/001-1920x1080-ed9b6c5b451ae24bcf0d9b056a72564f.jpg?resize=1&w=1920",
      price: 44.99,
      downloads: 4,
      type: "3D",
      uploadDate: "2024-01-29",
      lastUpdated: "2024-02-16"
    },
    {
      id: 19,
      title: "Fantasy Spell Effects",
      description: "A collection of stunning magic effects for RPGs.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/fb59f979-c806-4c10-92cd-abdf6785af30_scaled.jpg",
      price: 22.99,
      downloads: 6,
      type: "2D",
      uploadDate: "2024-01-25",
      lastUpdated: "2024-02-13"
    },
    {
      id: 20,
      title: "Retro Racing Car Pack",
      description: "Classic low-poly cars for retro-style racing games.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAU53a7G6Zg2e12Y8KnhvTy4T2KoyFPHlRA&s",
      price: 29.99,
      downloads: 3,
      type: "3D",
      uploadDate: "2024-02-04",
      lastUpdated: "2024-02-17"
    },
    {
      id: 21,
      title: "Anime Character Portraits",
      description: "A set of high-quality anime-style character portraits.",
      image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/147742735/original/2d734c2f107db1245f63decb6c551dcea5e5091d/create-pixel-art-character-sprite-for-your-game.png",
      price: 14.99,
      downloads: 11,
      type: "2D",
      uploadDate: "2024-02-10",
      lastUpdated: "2024-02-18"
    },
    {
      id: 22,
      title: "Cyberpunk Vehicles Pack",
      description: "A futuristic set of vehicles perfect for cyberpunk settings.",
      image: "https://media.fab.com/image_previews/gallery_images/55c1933a-a50e-485e-8dd4-6afeb007a7ba/d96fe019-65c5-4b45-8bc8-6de137c6cb21.jpg",
      price: 39.99,
      downloads: 2,
      type: "3D",
      uploadDate: "2024-01-30",
      lastUpdated: "2024-02-14"
    },
    {
      id: 23,
      title: "Underground Bunker Kit",
      description: "A modular bunker set for survival and horror games.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/key-image/e41f73ee-b9aa-4c10-83b6-15addc87b42b.jpg",
      price: 26.99,
      downloads: 5,
      type: "3D",
      uploadDate: "2024-02-06",
      lastUpdated: "2024-02-16"
    },
    {
      id: 24,
      title: "Chibi Character Pack",
      description: "Cute and detailed chibi characters for mobile games.",
      image: "https://europe1.discourse-cdn.com/unity/original/4X/3/e/b/3eb799de6544c471b29867594f4605e168948156.jpeg",
      price: 18.99,
      downloads: 8,
      type: "2D",
      uploadDate: "2024-02-09",
      lastUpdated: "2024-02-19"
    }
  ];
  
  export default assetData;
  