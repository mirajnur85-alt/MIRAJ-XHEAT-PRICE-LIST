import { Product } from "@/types";

// Helper function to calculate prices: 1 USDT = 110 BDT = 90 INR
function createPrice(duration: string, usdt: number, note?: string) {
  return {
    duration,
    bdt: usdt * 110,
    inr: usdt * 90,
    usdt,
    ...(note && { note }),
  };
}

export const products: Product[] = [
  {
    id: "drip-clint-mobile",
    name: "DRIP CLINT APKMODE",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/drip_mobile.jpg",
    categories: ["mobile"],
    description: "📌 NOTE: It Will Run Directly On Your Phone And Will Be In Easy Use",
    features:
      [
        "🎚️ Aim Kill",
        "🎚️ Silent Aim",
        "🎚️ Silent Kill",
        "🎚️ Fly Hack",
        "🎚️ God Mode (Ghost)",
        "🎚️ Speed Timer",
        "🎚️ Teleport 8m",
        "🎚️ Up Player",
        "🎚️ Auto Swap Weapon"
      ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("15 Days", 8),
      createPrice("30 Days", 11),
    ],
  },
  {
    id: "drip-clint-pc",
    name: "DRIP CLINT PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/drip_pc.jpg",
    categories: ["pc"],
    description: "📌 NOTE: Professional gaming solution with advanced features and easy setup.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 6),
      createPrice("15 Days", 10.9),
      createPrice("30 Days", 15),
    ],
  },
  {
    id: "drip-clint-root",
    name: "DRIP CLINT ROOT",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/drip_root.jpg",
    categories: ["root"],
    description: "📌 NOTE: Root access version for maximum control and advanced features.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "br-mods-root",
    name: "BR MODE INJECTOR",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.jpg",
    categories: ["root"],
    description: "✅ 𝐍𝐎𝐓𝐄 : (VphoneOS Non Root) | ʀᴏᴏᴛ ᴅᴇᴠɪᴄᴇ | ᴇᴍᴜʟᴀᴛᴏʀ | ✓ 100% ʀᴀɴᴋ ᴡᴏʀᴋɪɴɢ",
    features: [
      "👍 Sɪʟᴇɴᴛ Aɪᴍʙᴏᴛ",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("7 Days", 4),
      createPrice("15 Days", 6),
      createPrice("30 Days", 8),
    ],
  },
  {
    id: "br-mods-bypass-pc",
    name: "BR MODS – BYPASS PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.jpg",
    categories: ["pc", "bypass"],
    description: "✅ 𝐍𝐎𝐓𝐄 : Emulator Bypass - Play in Mobile Lobby from PC | Advanced Anti-Detection | 100% Secure",
    features: [
      "🛡️ Eᴍᴜʟᴀᴛᴏʀ Bʏᴘᴀss (Mᴏʙɪʟᴇ Lᴏʙʙʏ)",
      "👍 Sɪʟᴇɴᴛ Aɪᴍʙᴏᴛ",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("1 Day", 3),
      createPrice("10 Days", 7),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "br-mods-silentaim-pc",
    name: "BR MODS – SILENTAIM PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.jpg",
    categories: ["pc", "silentaim"],
    description: "✅ 𝐍𝐎𝐓𝐄 : High-Precision Silent Aim System | Performance Optimized for PC",
    features: [
      "🎯 Sɪʟᴇɴᴛ Aɪᴍ Sʏsᴛᴇᴍ (Mᴀɪɴ)",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 5),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "hg-cheats",
    name: "HG CHEATS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/hg_cheats.jpg",
    categories: ["mobile", "root"],
    description: "Premium HG cheats with advanced features and regular updates.",
    features: [
      "Premium quality",
      "Regular updates",
      "Advanced features",
      "24/7 support"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 3),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "prime-mods",
    name: "PRIME MODS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/prime.png",
    categories: ["mobile"],
    description: "Prime quality mods with exclusive features and premium support.",
    features: [
      "Prime quality",
      "Exclusive features",
      "Premium support",
      "Fast updates"
    ],
    prices: [
      createPrice("5 Days", 4),
      createPrice("10 Days", 6),
    ],
  },
  {
    id: "syscall-controls",
    name: "SYSCALL CONTROLS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/logo.jpg",
    categories: ["mobile"],
    description: "Advanced syscall controls with system-level access and optimization.",
    features: [
      "System-level access",
      "Advanced controls",
      "Optimized performance",
      "Secure & safe"
    ],
    prices: [
      createPrice("5 Days", 3.5),
      createPrice("10 Days", 6),
      createPrice("20 Days", 10),
    ],
  },
  {
    id: "pato-team",
    name: "PATO TEAM",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/pato_team.jpg",
    categories: ["mobile", "root"],
    description: "Professional team solution with enterprise-level features.",
    features: [
      "Team features",
      "Enterprise level",
      "Professional grade",
      "Multi-user support"
    ],
    prices: [
      createPrice("1 Day", 2.5),
      createPrice("3 Days", 4),
      createPrice("7 Days", 8),
    ],
  },
  {
    id: "fluorite-ios",
    name: "FLUORITE iOS PANEL",
    subtitle: "iPhone 6–17",
    image: "/assets/fluorite.jpg",
    categories: ["ios"],
    description: "iOS optimized solution for iPhone users with full device support.",
    features: [
      "👍 𝐀𝐢𝗺𝐛𝗼𝘁 – Neck | Head | Body",
      "👍 𝗕𝗼𝗻𝗲 𝗔𝗶𝗺𝗯𝗼𝘁 – Pinpoint Accuracy",
      "👍 𝗦𝗶𝗹𝗲𝗻𝘁 𝗔𝗶𝗺 – No Movement, Just Kill",
      "👍 𝗖𝘂𝘀𝘁𝗼𝗺 𝗔𝗶𝗺𝗙𝗢𝗩 – Smooth Control",
      "👍 𝗦𝗽𝗲𝗲𝗱 𝗕𝗼𝗼𝘀𝘁 – 𝟏𝟎𝐱 Faster Than Normal",
      "👍 𝗘𝗦𝗣 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 – See Enemies Before They See",
      "👍 𝐒𝐓𝐑𝐄𝐀𝐌𝐄𝐑 𝐌𝐎𝐃𝐄 – 𝐅𝐨𝐫 𝐒𝐞𝐜𝐫𝐞𝐭 𝐏𝐥𝐚𝐲",
      "😀 𝗠𝗔𝗜𝗡 𝗜𝗗 𝗦𝗔𝗙𝗘",
      "😀 𝗡𝗼 𝗶𝗣𝗵𝗼𝗻𝗲 𝗥𝗲𝘀𝘁𝗮𝗿𝘁 – Plug & Play",
      "💀 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗔𝗻𝘁𝗶𝗕𝗮𝗻 – Maximum Protection",
      "✅ No one will be able to see ESP / Aim in screen share",
      "✅ Only you can see everything"
    ],
    prices: [
      createPrice("1 Day", 4),
      createPrice("7 Days", 15),
      createPrice("31 Days", 25),
    ],
  },
  {
    id: "lk-team-root-emu",
    name: "LK TEAM – ROOT + EMU PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/lk_team.jpg",
    categories: ["pc", "root"],
    description: "Root and emulator support for PC with advanced emulation features.",
    features: [
      "Root support",
      "Emulator compatible",
      "PC optimized",
      "Advanced features"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("5 Days", 3),
      createPrice("10 Days", 5),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "mr-robot",
    name: "MR ROBOT",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/mr_robot.jpg",
    categories: ["root"],
    description: "Advanced robotic system with AI-powered features and automation.",
    features: [
      "AI-powered",
      "Automation",
      "Advanced system",
      "Smart features"
    ],
    prices: [
      createPrice("10 Days", 4),
      createPrice("20 Days", 6),
    ],
  },
  {
    id: "g-box-ios",
    name: "IOS CERTIFICATE",
    subtitle: "IPA SIGNER & INSTALLER",
    image: "/assets/ios_certificate.jpg",
    categories: ["ios"],
    description: "📌 NOTE: Professional iOS IPA Signer and Installer. Use any IPA files on your iPhone without computer.",
    features: [
      "📦 Install IPA Files Directly",
      "🔧 No Computer Required",
      "⚡ Fast Signing Process",
      "🛡️ Anti-Revoke Support",
      "🍏 Compatible with Latest iOS",
      "🎨 Easy to Use Interface"
    ],
    prices: [
      createPrice("1 Year", 10),
    ],
  },
  {
    id: "zolo-cheats-pubg",
    name: "ZOLO CHEATS PUBG",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/zolocheats.png",
    categories: ["mobile"],
    description: "📌 NOTE: Premium PUBG mobile cheat with advanced features and high security.",
    features: [
      "🔥 Advance Aimbot",
      "🔥 ESP Wallhack",
      "🔥 No Recoil",
      "🔥 Speed Hack",
      "🔥 iPad View",
      "🔥 100% Safe & Anti-Ban"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 3),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "8ball-pool-ez-team",
    name: "8BALL POOL EZ TEAM",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/ez_team.jpg",
    categories: ["mobile"],
    description: "📌 NOTE: Premium 8 Ball Pool tool with advanced features and long-term stability.",
    features: [
      "🎱 Extended Guideline",
      "🎱 Auto Play Support",
      "🎱 Precise Power Control",
      "🎱 Anti-Ban Protection",
      "🎱 All Cues Unlocked",
      "🎱 Smooth Performance"
    ],
    prices: [
      createPrice("7 Days", 3),
      createPrice("30 Days", 6),
    ],
  },
];
