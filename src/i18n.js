import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      languages: {
        english: "English",
        spanish: "Spanish",
        french: "French",
        german: "German",
        chinese: "Chinese",
      },
      nav: {
        about: "About",
        ecosystem: "Ecosystem",
        howToBuy: "How To Buy",
        battlePlan: "Battle Plan",
        faq: "FAQ",
        login: "Log In",
      },
      hero: {
        marqueeText: "BECOME A MEME LEGEND BEFORE LIFTOFF!",
      },
      about: {
        title: "ABOUT",
        paragraph1:
          "Captain Mek, the First Avenger of meme coins, wields $CMEK as a powerful shield, leading the crypto community to turn chaos into profit. More than just a meme, it combines internet culture and blockchain technology to empower everyday investors.",
        paragraph2:
          "The project is built on three key pillars: Mek's Shield, an AI-driven defense against scams and MEV; Mek's Vault, a staking fortress offering high APY; and Mek's War Room, a precision meme coin signal hub to help investors stay ahead.",
        paragraph3:
          "No villains, no drama — only heroes, loot, and glory. Grab your $CMEK and join the revolution to conquer the memecoin universe!",
      },
      customers: {
        title: "Our Customers"
      },
      ecosystem: {
        title: "ECOSYSTEM ARSENAL",
        warRoom: {
          title: "War Room\nMeme Strike",
          threatRadar: "Threat Radar:",
          threatRadarDesc: "Captain Mek's AI shield scans the blockchain to detect scams, spot pumps, predict dips, and uncover hidden gems — no villain escapes.",
          swapStrike: "Swap Strike:",
          swapStrikeDesc: "Zero-fee trades on Uniswap, swift as Black Widow's kicks.",
          antiMev: "Anti-MEV Armor:",
          antiMevDesc: "Blocks bot attacks, keeps your $CMEK safe from the shadows."
        },
        starksVault: {
          title: "Stark's Vault\nStaking Fortress",
          thePower: "The Power:",
          thePowerDesc: "Lock $CMEK in the Iron Man-grade vault, earn Hulk-sized APY, and grow your stash while the battle rages on.",
          superMoves: "Super Moves:",
          superMovesDesc: "Up to 300% APY at launch (scales down), daily loot drops, Thor-strong stability.",
          whyEpic: "Why It's Epic:",
          whyEpicDesc: "Stake like a Titan, stack like a god - $CMEK holders are the Avengers' backbone."
        },
        meksShield: {
          title: "Mek's Shield\nMarket Defender",
          signalSniper: "Signal Sniper:",
          signalSniperDesc: "AI-curated real-time meme coin signals that hit pumps and dodge whale dumps with pinpoint precision.",
          crewSignal: "Crew Signal:",
          crewSignalDesc: "An exclusive Telegram channel for $CMEK holders, where alpha drops faster than a other and is meticulously filtered by AI.",
          whaleSlayer: "Whale Slayer:",
          whaleSlayerDesc: "Coordinated tactics powered by AI analytics to crush whale manipulation and help the Mek Crew dominate the market."
        },
        mobile: {
          warRoomShort: "AI shield scans blockchain",
          swapStrikeShort: "Zero-fee trades",
          antiMevShort: "Bot protection",
          vaultShort: "Iron Man-grade vault",
          superMovesShort: "Up to 300% APY",
          whyEpicShort: "Stake like a Titan",
          signalSniperShort: "AI-curated signals",
          crewSignalShort: "Exclusive channel",
          whaleSlayerShort: "AI analytics"
        }
      },
      battlePlan: {
        title: "BATTLE PLAN",
        phases: {
          phase1: "Phase 1: Unite the Legends",
          phase2: "Phase 2: Rise of the Mek Crew",
          phase3: "Phase 3: First Offensive",
          phase4: "Phase 4: Mek's War Command",
          phase5: "Phase 5: Cosmic Domination"
        }
      },
      howToBuy: {
        title: "HOW TO BUY",
      },
      faq: {
        title: "FAQ",
        questions: {
          q1: {
            question: "1. What is Captain Mek?",
            answer:
              "Captain Mek is a revolutionary token designed to bring innovation and excitement to the crypto ecosystem. It combines the power of meme culture with real-world utility, making it an essential token in the growing world of decentralized finance (DeFi). Captain Mek is built on a solid foundation of community-driven growth, strategic partnerships, and exciting features that provide real value for its holders.",
          },
          q2: {
            question: "2. What can I do with $CMEK?",
            answer:
              "$CMEK can be used for a variety of purposes within the Captain Mek ecosystem. You can hold it as a long-term investment, trade it on decentralized exchanges (DEX) and centralized exchanges (CEX), or use it to participate in community-driven events and token-driven incentives. Additionally, $CMEK holders will have access to exclusive rewards, contests, and governance opportunities within the Captain Mek platform.",
          },
          q3: {
            question: "3. What are the benefits of holding $CMEK long-term?",
            answer:
              "Holding $CMEK long-term offers multiple benefits. As the token grows in value and utility, long-term holders can enjoy capital appreciation. Additionally, $CMEK holders will gain early access to exclusive features, product releases, and events within the ecosystem. By holding $CMEK, you'll also become an integral part of the community, helping to shape the future of the Captain Mek project through governance and voting opportunities.",
          },
          q4: {
            question: "4. What makes Captain Mek different?",
            answer:
              "What sets Captain Mek apart is its unique blend of meme culture, community-driven growth, and tangible utility within the DeFi space. While other tokens may focus solely on hype, Captain Mek is committed to providing real value to its holders. The project prioritizes strategic partnerships, innovative tokenomics, and an inclusive ecosystem that rewards users for being part of its growth. Captain Mek is more than just a meme token; it's a movement that's built to last.",
          },
        },
      },
      footer: {
        disclaimer:
          "CAPTAINMEK IS A MEME-BASED PROJECT FOR ENTERTAINMENT. $MEK IS A UTILITY MEME COIN. NOTHING HERE IS FINANCIAL ADVICE. ALWAYS DYOR. CRYPTO IS A SPORT — SPEND AND TRADE WISELY.",
      },
    },
  },
  es: {
    translation: {
      languages: {
        english: "Inglés",
        spanish: "Español",
        french: "Francés",
        german: "Alemán",
        chinese: "Chino",
      },
      nav: {
        about: "Acerca de",
        ecosystem: "Ecosistema",
        howToBuy: "Cómo Comprar",
        battlePlan: "Plan de Batalla",
        faq: "Preguntas Frecuentes",
        login: "Iniciar Sesión",
      },
      hero: {
        marqueeText: "¡CONVIÉRTETE EN UNA LEYENDA DE MEMES ANTES DEL DESPEGUE!",
      },
      about: {
        title: "ACERCA DE",
        paragraph1:
          "Capitán Mek, el Primer Vengador de las monedas meme, maneja $CMEK como un escudo poderoso, liderando la comunidad cripto para convertir el caos en ganancias. Más que solo un meme, combina la cultura de internet y la tecnología blockchain para empoderar a los inversores cotidianos.",
        paragraph2:
          "El proyecto está construido sobre tres pilares clave: El Escudo de Mek, una defensa impulsada por IA contra estafas y MEV; La Bóveda de Mek, una fortaleza de staking que ofrece alto APY; y La Sala de Guerra de Mek, un centro de señales de monedas meme de precisión para ayudar a los inversores a mantenerse adelante.",
        paragraph3:
          "Sin villanos, sin drama — solo héroes, botín y gloria. ¡Toma tu $CMEK y únete a la revolución para conquistar el universo de las memecoins!",
      },
      customers: {
        title: "Nuestros Clientes"
      },
      ecosystem: {
        title: "ARSENAL DEL ECOSISTEMA",
        warRoom: {
          title: "Sala de Guerra\nAtaque de Memes",
          threatRadar: "Radar de Amenazas:",
          threatRadarDesc: "El escudo de IA del Capitán Mek escanea la blockchain para detectar estafas, identificar bombas, predecir caídas y descubrir gemas ocultas — ningún villano escapa.",
          swapStrike: "Golpe de Intercambio:",
          swapStrikeDesc: "Intercambios sin comisiones en Uniswap, rápidos como las patadas de Viuda Negra.",
          antiMev: "Armadura Anti-MEV:",
          antiMevDesc: "Bloquea ataques de bots, mantiene tu $CMEK seguro de las sombras."
        },
        starksVault: {
          title: "Bóveda de Stark\nFortaleza de Staking",
          thePower: "El Poder:",
          thePowerDesc: "Bloquea $CMEK en la bóveda grado Iron Man, gana APY tamaño Hulk, y haz crecer tu reserva mientras la batalla continúa.",
          superMoves: "Super Movimientos:",
          superMovesDesc: "Hasta 300% APY en el lanzamiento (se reduce), caídas de botín diarias, estabilidad fuerte como Thor.",
          whyEpic: "Por Qué Es Épico:",
          whyEpicDesc: "Apuesta como un Titán, acumula como un dios - los poseedores de $CMEK son la columna vertebral de los Vengadores."
        },
        meksShield: {
          title: "Escudo de Mek\nDefensor del Mercado",
          signalSniper: "Francotirador de Señales:",
          signalSniperDesc: "Señales de monedas meme en tiempo real curadas por IA que golpean bombas y esquivan descargas de ballenas con precisión milimétrica.",
          crewSignal: "Señal de la Tripulación:",
          crewSignalDesc: "Un canal exclusivo de Telegram para poseedores de $CMEK, donde el alpha cae más rápido que otro y es meticulosamente filtrado por IA.",
          whaleSlayer: "Asesino de Ballenas:",
          whaleSlayerDesc: "Tácticas coordinadas impulsadas por análisis de IA para aplastar la manipulación de ballenas y ayudar a la Tripulación Mek a dominar el mercado."
        },
        mobile: {
          warRoomShort: "Escudo de IA escanea blockchain",
          swapStrikeShort: "Intercambios sin comisiones",
          antiMevShort: "Protección de bots",
          vaultShort: "Bóveda grado Iron Man",
          superMovesShort: "Hasta 300% APY",
          whyEpicShort: "Apuesta como un Titán",
          signalSniperShort: "Señales curadas por IA",
          crewSignalShort: "Canal exclusivo",
          whaleSlayerShort: "Análisis de IA"
        }
      },
      battlePlan: {
        title: "PLAN DE BATALLA",
        phases: {
          phase1: "Fase 1: Unir las Leyendas",
          phase2: "Fase 2: Ascenso de la Tripulación Mek",
          phase3: "Fase 3: Primera Ofensiva",
          phase4: "Fase 4: Comando de Guerra de Mek",
          phase5: "Fase 5: Dominación Cósmica"
        }
      },
      howToBuy: {
        title: "CÓMO COMPRAR",
      },
      faq: {
        title: "PREGUNTAS FRECUENTES",
        questions: {
          q1: {
            question: "1. ¿Qué es Capitán Mek?",
            answer:
              "Capitán Mek es un token revolucionario diseñado para traer innovación y emoción al ecosistema cripto. Combina el poder de la cultura meme con utilidad del mundo real, convirtiéndolo en un token esencial en el creciente mundo de las finanzas descentralizadas (DeFi).",
          },
          q2: {
            question: "2. ¿Qué puedo hacer con $CMEK?",
            answer:
              "$CMEK puede usarse para una variedad de propósitos dentro del ecosistema Capitán Mek. Puedes mantenerlo como inversión a largo plazo, comerciarlo en intercambios descentralizados (DEX) y centralizados (CEX), o usarlo para participar en eventos impulsados por la comunidad.",
          },
          q3: {
            question:
              "3. ¿Cuáles son los beneficios de mantener $CMEK a largo plazo?",
            answer:
              "Mantener $CMEK a largo plazo ofrece múltiples beneficios. A medida que el token crece en valor y utilidad, los tenedores a largo plazo pueden disfrutar de apreciación del capital. Además, los tenedores de $CMEK tendrán acceso temprano a características exclusivas.",
          },
          q4: {
            question: "4. ¿Qué hace diferente a Capitán Mek?",
            answer:
              "Lo que distingue a Capitán Mek es su mezcla única de cultura meme, crecimiento impulsado por la comunidad y utilidad tangible dentro del espacio DeFi. Capitán Mek está comprometido a proporcionar valor real a sus tenedores.",
          },
        },
      },
      footer: {
        disclaimer:
          "CAPTAINMEK ES UN PROYECTO BASADO EN MEMES PARA ENTRETENIMIENTO. $MEK ES UNA MONEDA MEME DE UTILIDAD. NADA AQUÍ ES CONSEJO FINANCIERO. SIEMPRE INVESTIGA POR TU CUENTA. CRYPTO ES UN DEPORTE — GASTA E INTERCAMBIA SABIAMENTE.",
      },
    },
  },
  fr: {
    translation: {
      languages: {
        english: "Anglais",
        spanish: "Espagnol",
        french: "Français",
        german: "Allemand",
        chinese: "Chinois",
      },
      nav: {
        about: "À Propos",
        ecosystem: "Écosystème",
        howToBuy: "Comment Acheter",
        battlePlan: "Plan de Bataille",
        faq: "FAQ",
        login: "Se Connecter",
      },
      hero: {
        marqueeText: "DEVENEZ UNE LÉGENDE DES MÈMES AVANT LE DÉCOLLAGE!",
      },
      about: {
        title: "À PROPOS",
        paragraph1:
          "Capitaine Mek, le Premier Vengeur des pièces mème, manie $CMEK comme un bouclier puissant, menant la communauté crypto pour transformer le chaos en profit. Plus qu'un simple mème, il combine la culture internet et la technologie blockchain pour autonomiser les investisseurs quotidiens.",
        paragraph2:
          "Le projet est construit sur trois piliers clés: Le Bouclier de Mek, une défense pilotée par IA contre les arnaques et MEV; Le Coffre de Mek, une forteresse de staking offrant un APY élevé; et La Salle de Guerre de Mek, un hub de signaux de pièces mème de précision.",
        paragraph3:
          "Pas de méchants, pas de drame — seulement des héros, du butin et de la gloire. Prenez votre $CMEK et rejoignez la révolution pour conquérir l'univers des memecoins!",
      },
      customers: {
        title: "Nos Clients"
      },
      ecosystem: {
        title: "ARSENAL DE L'ÉCOSYSTÈME",
        warRoom: {
          title: "Salle de Guerre\nFrappe de Mème",
          threatRadar: "Radar de Menaces:",
          threatRadarDesc: "Le bouclier IA du Capitaine Mek scanne la blockchain pour détecter les arnaques, repérer les pompes, prédire les chutes et découvrir des gemmes cachées — aucun méchant n'échappe.",
          swapStrike: "Frappe d'Échange:",
          swapStrikeDesc: "Échanges sans frais sur Uniswap, rapides comme les coups de pied de Black Widow.",
          antiMev: "Armure Anti-MEV:",
          antiMevDesc: "Bloque les attaques de bots, garde votre $CMEK en sécurité des ombres."
        },
        starksVault: {
          title: "Coffre de Stark\nForteresse de Staking",
          thePower: "Le Pouvoir:",
          thePowerDesc: "Verrouillez $CMEK dans le coffre grade Iron Man, gagnez un APY taille Hulk, et faites grandir votre réserve pendant que la bataille fait rage.",
          superMoves: "Super Mouvements:",
          superMovesDesc: "Jusqu'à 300% APY au lancement (diminue), chutes de butin quotidiennes, stabilité forte comme Thor.",
          whyEpic: "Pourquoi C'est Épique:",
          whyEpicDesc: "Misez comme un Titan, empilez comme un dieu - les détenteurs de $CMEK sont l'épine dorsale des Vengeurs."
        },
        meksShield: {
          title: "Bouclier de Mek\nDéfenseur du Marché",
          signalSniper: "Tireur d'Élite de Signaux:",
          signalSniperDesc: "Signaux de pièces mème en temps réel curés par IA qui frappent les pompes et esquivent les décharges de baleines avec une précision millimétrique.",
          crewSignal: "Signal d'Équipage:",
          crewSignalDesc: "Un canal Telegram exclusif pour les détenteurs de $CMEK, où l'alpha tombe plus vite qu'un autre et est méticuleusement filtré par IA.",
          whaleSlayer: "Tueur de Baleines:",
          whaleSlayerDesc: "Tactiques coordonnées alimentées par l'analyse IA pour écraser la manipulation des baleines et aider l'Équipe Mek à dominer le marché."
        },
        mobile: {
          warRoomShort: "Bouclier IA scanne blockchain",
          swapStrikeShort: "Échanges sans frais",
          antiMevShort: "Protection de bots",
          vaultShort: "Coffre grade Iron Man",
          superMovesShort: "Jusqu'à 300% APY",
          whyEpicShort: "Misez comme un Titan",
          signalSniperShort: "Signaux curés par IA",
          crewSignalShort: "Canal exclusif",
          whaleSlayerShort: "Analyse IA"
        }
      },
      battlePlan: {
        title: "PLAN DE BATAILLE",
        phases: {
          phase1: "Phase 1: Unir les Légendes",
          phase2: "Phase 2: Ascension de l'Équipe Mek",
          phase3: "Phase 3: Première Offensive",
          phase4: "Phase 4: Commandement de Guerre de Mek",
          phase5: "Phase 5: Domination Cosmique"
        }
      },
      howToBuy: {
        title: "COMMENT ACHETER",
      },
      faq: {
        title: "FAQ",
        questions: {
          q1: {
            question: "1. Qu'est-ce que Capitaine Mek?",
            answer:
              "Capitaine Mek est un token révolutionnaire conçu pour apporter innovation et excitation à l'écosystème crypto. Il combine le pouvoir de la culture mème avec une utilité du monde réel.",
          },
          q2: {
            question: "2. Que puis-je faire avec $CMEK?",
            answer:
              "$CMEK peut être utilisé pour diverses fins dans l'écosystème Capitaine Mek. Vous pouvez le détenir comme investissement à long terme, l'échanger sur des échanges décentralisés.",
          },
          q3: {
            question:
              "3. Quels sont les avantages de détenir $CMEK à long terme?",
            answer:
              "Détenir $CMEK à long terme offre de multiples avantages. À mesure que le token croît en valeur et utilité, les détenteurs à long terme peuvent profiter d'une appréciation du capital.",
          },
          q4: {
            question: "4. Qu'est-ce qui rend Capitaine Mek différent?",
            answer:
              "Ce qui distingue Capitaine Mek est son mélange unique de culture mème, croissance communautaire et utilité tangible dans l'espace DeFi.",
          },
        },
      },
      footer: {
        disclaimer:
          "CAPTAINMEK EST UN PROJET BASÉ SUR LES MÈMES POUR LE DIVERTISSEMENT. $MEK EST UNE PIÈCE MÈME UTILITAIRE. RIEN ICI N'EST UN CONSEIL FINANCIER. TOUJOURS DYOR. CRYPTO EST UN SPORT — DÉPENSEZ ET ÉCHANGEZ SAGEMENT.",
      },
    },
  },
  de: {
    translation: {
      languages: {
        english: "Englisch",
        spanish: "Spanisch",
        french: "Französisch",
        german: "Deutsch",
        chinese: "Chinesisch",
      },
      nav: {
        about: "Über Uns",
        ecosystem: "Ökosystem",
        howToBuy: "Wie Kaufen",
        battlePlan: "Schlachtplan",
        faq: "FAQ",
        login: "Anmelden",
      },
      hero: {
        marqueeText: "WERDEN SIE EINE MEME-LEGENDE VOR DEM START!",
      },
      about: {
        title: "ÜBER UNS",
        paragraph1:
          "Captain Mek, der Erste Rächer der Meme-Coins, führt $CMEK als mächtigen Schild und leitet die Krypto-Community an, Chaos in Profit zu verwandeln. Mehr als nur ein Meme, kombiniert es Internet-Kultur und Blockchain-Technologie.",
        paragraph2:
          "Das Projekt basiert auf drei Schlüsselsäulen: Meks Schild, eine KI-gesteuerte Verteidigung gegen Betrug und MEV; Meks Tresor, eine Staking-Festung mit hohem APY; und Meks Kriegsraum, ein präzises Meme-Coin-Signal-Hub.",
        paragraph3:
          "Keine Schurken, kein Drama — nur Helden, Beute und Ruhm. Schnappen Sie sich Ihr $CMEK und schließen Sie sich der Revolution an, um das Memecoin-Universum zu erobern!",
      },
      customers: {
        title: "Unsere Kunden"
      },
      ecosystem: {
        title: "ÖKOSYSTEM-ARSENAL",
        warRoom: {
          title: "Kriegsraum\nMeme-Schlag",
          threatRadar: "Bedrohungsradar:",
          threatRadarDesc: "Captain Meks KI-Schild scannt die Blockchain, um Betrug zu erkennen, Pumps zu entdecken, Einbrüche vorherzusagen und versteckte Juwelen aufzudecken — kein Bösewicht entkommt.",
          swapStrike: "Tausch-Schlag:",
          swapStrikeDesc: "Gebührenfreie Trades auf Uniswap, schnell wie Black Widows Tritte.",
          antiMev: "Anti-MEV-Rüstung:",
          antiMevDesc: "Blockiert Bot-Angriffe, hält Ihr $CMEK sicher vor den Schatten."
        },
        starksVault: {
          title: "Starks Tresor\nStaking-Festung",
          thePower: "Die Macht:",
          thePowerDesc: "Sperren Sie $CMEK in den Iron Man-Tresor, verdienen Sie Hulk-große APY und lassen Sie Ihren Vorrat wachsen, während die Schlacht tobt.",
          superMoves: "Super-Züge:",
          superMovesDesc: "Bis zu 300% APY beim Start (skaliert runter), tägliche Beute-Drops, Thor-starke Stabilität.",
          whyEpic: "Warum Es Episch Ist:",
          whyEpicDesc: "Setzen Sie wie ein Titan, stapeln Sie wie ein Gott - $CMEK-Inhaber sind das Rückgrat der Rächer."
        },
        meksShield: {
          title: "Meks Schild\nMarkt-Verteidiger",
          signalSniper: "Signal-Scharfschütze:",
          signalSniperDesc: "KI-kuratierte Echtzeit-Meme-Coin-Signale, die Pumps treffen und Wal-Dumps mit millimetergenauer Präzision ausweichen.",
          crewSignal: "Crew-Signal:",
          crewSignalDesc: "Ein exklusiver Telegram-Kanal für $CMEK-Inhaber, wo Alpha schneller fällt als ein anderer und akribisch von KI gefiltert wird.",
          whaleSlayer: "Wal-Töter:",
          whaleSlayerDesc: "Koordinierte Taktiken, angetrieben von KI-Analysen, um Wal-Manipulation zu zerschlagen und der Mek-Crew zu helfen, den Markt zu dominieren."
        },
        mobile: {
          warRoomShort: "KI-Schild scannt Blockchain",
          swapStrikeShort: "Gebührenfreie Trades",
          antiMevShort: "Bot-Schutz",
          vaultShort: "Iron Man-Tresor",
          superMovesShort: "Bis zu 300% APY",
          whyEpicShort: "Setzen wie ein Titan",
          signalSniperShort: "KI-kuratierte Signale",
          crewSignalShort: "Exklusiver Kanal",
          whaleSlayerShort: "KI-Analysen"
        }
      },
      battlePlan: {
        title: "SCHLACHTPLAN",
        phases: {
          phase1: "Phase 1: Vereint die Legenden",
          phase2: "Phase 2: Aufstieg der Mek-Crew",
          phase3: "Phase 3: Erste Offensive",
          phase4: "Phase 4: Meks Kriegskommando",
          phase5: "Phase 5: Kosmische Herrschaft"
        }
      },
      howToBuy: {
        title: "WIE KAUFEN",
      },
      faq: {
        title: "FAQ",
        questions: {
          q1: {
            question: "1. Was ist Captain Mek?",
            answer:
              "Captain Mek ist ein revolutionärer Token, der Innovation und Aufregung in das Krypto-Ökosystem bringen soll. Er kombiniert die Macht der Meme-Kultur mit realer Nützlichkeit.",
          },
          q2: {
            question: "2. Was kann ich mit $CMEK machen?",
            answer:
              "$CMEK kann für verschiedene Zwecke im Captain Mek Ökosystem verwendet werden. Sie können es als langfristige Investition halten oder auf dezentralen Börsen handeln.",
          },
          q3: {
            question:
              "3. Was sind die Vorteile des langfristigen Haltens von $CMEK?",
            answer:
              "Das langfristige Halten von $CMEK bietet mehrere Vorteile. Da der Token an Wert und Nutzen gewinnt, können langfristige Inhaber Kapitalzuwachs genießen.",
          },
          q4: {
            question: "4. Was macht Captain Mek anders?",
            answer:
              "Was Captain Mek auszeichnet, ist seine einzigartige Mischung aus Meme-Kultur, gemeinschaftsgetriebenem Wachstum und greifbarem Nutzen im DeFi-Bereich.",
          },
        },
      },
      footer: {
        disclaimer:
          "CAPTAINMEK IST EIN MEME-BASIERTES PROJEKT ZUR UNTERHALTUNG. $MEK IST EIN UTILITY-MEME-COIN. NICHTS HIER IST FINANZBERATUNG. IMMER DYOR. KRYPTO IST EIN SPORT — GEBEN SIE AUS UND HANDELN SIE WEISE.",
      },
    },
  },
  zh: {
    translation: {
      languages: {
        english: "英语",
        spanish: "西班牙语",
        french: "法语",
        german: "德语",
        chinese: "中文",
      },
      nav: {
        about: "关于",
        ecosystem: "生态系统",
        howToBuy: "如何购买",
        battlePlan: "作战计划",
        faq: "常见问题",
        login: "登录",
      },
      hero: {
        marqueeText: "在起飞前成为模因传奇！",
      },
      about: {
        title: "关于",
        paragraph1:
          "梅克船长，模因币的第一复仇者，挥舞着$CMEK作为强大的盾牌，带领加密社区将混乱转化为利润。不仅仅是一个模因，它结合了互联网文化和区块链技术来赋能日常投资者。",
        paragraph2:
          "该项目建立在三个关键支柱上：梅克之盾，一个AI驱动的防御系统对抗诈骗和MEV；梅克金库，一个提供高APY的质押堡垒；梅克作战室，一个精准的模因币信号中心。",
        paragraph3:
          "没有反派，没有戏剧——只有英雄、战利品和荣耀。拿起你的$CMEK，加入革命征服模因币宇宙！",
      },
      customers: {
        title: "我们的客户"
      },
      ecosystem: {
        title: "生态系统武器库",
        warRoom: {
          title: "作战室\n模因打击",
          threatRadar: "威胁雷达：",
          threatRadarDesc: "梅克船长的AI盾牌扫描区块链以检测诈骗、发现拉盘、预测下跌并发现隐藏宝石——没有反派能逃脱。",
          swapStrike: "交换打击：",
          swapStrikeDesc: "在Uniswap上零手续费交易，快如黑寡妇的踢腿。",
          antiMev: "反MEV护甲：",
          antiMevDesc: "阻止机器人攻击，保护您的$CMEK免受阴影侵害。"
        },
        starksVault: {
          title: "斯塔克金库\n质押堡垒",
          thePower: "力量：",
          thePowerDesc: "将$CMEK锁定在钢铁侠级金库中，赚取绿巨人级APY，在战斗激烈进行时增长您的储备。",
          superMoves: "超级招式：",
          superMovesDesc: "启动时高达300% APY（逐渐降低），每日战利品掉落，雷神般强大的稳定性。",
          whyEpic: "为什么史诗：",
          whyEpicDesc: "像泰坦一样质押，像神一样堆叠——$CMEK持有者是复仇者的支柱。"
        },
        meksShield: {
          title: "梅克之盾\n市场守护者",
          signalSniper: "信号狙击手：",
          signalSniperDesc: "AI策划的实时模因币信号，精准击中拉盘并躲避鲸鱼抛售。",
          crewSignal: "团队信号：",
          crewSignalDesc: "$CMEK持有者专属Telegram频道，alpha信息比其他更快掉落，并由AI精心过滤。",
          whaleSlayer: "鲸鱼杀手：",
          whaleSlayerDesc: "由AI分析驱动的协调战术，粉碎鲸鱼操纵并帮助梅克团队主导市场。"
        },
        mobile: {
          warRoomShort: "AI盾牌扫描区块链",
          swapStrikeShort: "零手续费交易",
          antiMevShort: "机器人保护",
          vaultShort: "钢铁侠级金库",
          superMovesShort: "高达300% APY",
          whyEpicShort: "像泰坦一样质押",
          signalSniperShort: "AI策划信号",
          crewSignalShort: "专属频道",
          whaleSlayerShort: "AI分析"
        }
      },
      battlePlan: {
        title: "作战计划",
        phases: {
          phase1: "第一阶段：团结传奇",
          phase2: "第二阶段：梅克团队崛起",
          phase3: "第三阶段：首次攻势",
          phase4: "第四阶段：梅克战争指挥",
          phase5: "第五阶段：宇宙统治"
        }
      },
      howToBuy: {
        title: "如何购买",
      },
      faq: {
        title: "常见问题",
        questions: {
          q1: {
            question: "1. 什么是梅克船长？",
            answer:
              "梅克船长是一个革命性的代币，旨在为加密生态系统带来创新和兴奋。它将模因文化的力量与现实世界的实用性相结合。",
          },
          q2: {
            question: "2. 我可以用$CMEK做什么？",
            answer:
              "$CMEK可以在梅克船长生态系统中用于各种目的。您可以将其作为长期投资持有，或在去中心化交易所进行交易。",
          },
          q3: {
            question: "3. 长期持有$CMEK有什么好处？",
            answer:
              "长期持有$CMEK提供多重好处。随着代币价值和实用性的增长，长期持有者可以享受资本增值。",
          },
          q4: {
            question: "4. 梅克船长有什么不同？",
            answer:
              "梅克船长的独特之处在于其模因文化、社区驱动增长和DeFi空间中切实实用性的独特融合。",
          },
        },
      },
      footer: {
        disclaimer:
          "CAPTAINMEK是一个基于模因的娱乐项目。$MEK是一个实用模因币。这里没有任何内容是财务建议。始终DYOR。加密是一项运动——明智地消费和交易。",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
