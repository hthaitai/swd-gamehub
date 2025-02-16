const gameData = [
  {
    id: 3,
    title: "The Witcher 3: Wild Hunt",
    description: "A story-driven open-world RPG set in a fantasy universe.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    price: "$39.99",
    genre: "Open World",
    platform: "Xbox",
    playerSupport: "Singleplayer",
    downloads: 3,
    uploadDate: "2015-05-19",
    lastUpdated: "2023-08-20",
  },
  {
    id: 7,
    title: "Stardew Valley",
    description: "An open-ended country-life RPG developed by ConcernedApe.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg",
    price: "$14.99",
    genre: "RPG",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 7,
    uploadDate: "2016-02-26",
    lastUpdated: "2023-04-10",
  },
  {
    id: 12,
    title: "Destiny 2",
    description: "An online multiplayer shooter set in a sci-fi universe.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1085660/library_600x900.jpg",
    price: "Free",
    genre: "Open World",
    platform: "PC",
    playerSupport: "Multiplayer",
    downloads: 12,
    uploadDate: "2017-09-06",
    lastUpdated: "2023-11-15",
  },
  {
    id: 9,
    title: "Hollow Knight",
    description: "An action-adventure game developed by Team Cherry.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg",
    price: "$14.99",
    genre: "Action",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 9,
    uploadDate: "2017-02-24",
    lastUpdated: "2023-02-15",
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    description: "An epic Western action-adventure game from Rockstar Games.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    price: "$59.99",
    genre: "Open World",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 4,
    uploadDate: "2018-10-26",
    lastUpdated: "2023-07-10",
  },
  {
    id: 8,
    title: "Among Us",
    description: "A multiplayer party game developed by InnerSloth.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/945360/library_600x900.jpg",
    price: "Free",
    genre: "Action",
    platform: "PC",
    playerSupport: "Multiplayer",
    downloads: 8,
    uploadDate: "2018-11-16",
    lastUpdated: "2023-03-01",
  },
  {
    id: 13,
    title: "God of War",
    description:
      "A story-driven action-adventure game featuring Kratos and his son.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1593500/library_600x900.jpg",
    price: "$49.99",
    genre: "Action",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 13,
    uploadDate: "2018-04-20",
    lastUpdated: "2023-10-25",
  },
  {
    id: 10,
    title: "Celeste",
    description: "A platformer game developed by Maddy Makes Games.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/504230/library_600x900.jpg",
    price: "$19.99",
    genre: "Action",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 10,
    uploadDate: "2018-01-25",
    lastUpdated: "2023-01-05",
  },
  {
    id: 6,
    title: "DOOM Eternal",
    description: "A first-person shooter game developed by id Software.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/782330/library_600x900.jpg",
    price: "$59.99",
    genre: "Action",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 6,
    uploadDate: "2020-03-20",
    lastUpdated: "2023-05-15",
  },
  {
    id: 1,
    title: "Cyberpunk 2077",
    description: "An open-world RPG set in a futuristic city.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    price: "$59.99",
    genre: "Open World",
    platform: "PC",
    playerSupport: "Singleplayer",
    downloads: 1,
    uploadDate: "2020-12-10",
    lastUpdated: "2023-10-01",
  },
  {
    id: 5,
    title: "Hades",
    description:
      "A rogue-like dungeon crawler game developed by Supergiant Games.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg",
    price: "$24.99",
    genre: "Action",
    platform: "PlayStation",
    playerSupport: "Singleplayer",
    downloads: 5,
    uploadDate: "2020-09-17",
    lastUpdated: "2023-06-05",
  },
  {
    id: 2,
    title: "Elden Ring",
    description:
      "A challenging open-world adventure developed by FromSoftware.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    imagePortrait:
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    price: "$59.99",
    genre: "Open World",
    platform: "PlayStation",
    playerSupport: "Singleplayer",
    downloads: 2,
    uploadDate: "2022-02-25",
    lastUpdated: "2023-09-15",
  },
]

export default gameData
