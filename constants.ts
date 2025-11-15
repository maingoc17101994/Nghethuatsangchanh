import type { ConceptCategory, OptionCategory } from './types';

export const CONCEPTS: ConceptCategory[] = [
  {
    key: 'luxury_travel',
    label: 'Du lịch Sang chảnh',
    concepts: [
      { key: 'rooftop_santorini', label: 'Hoàng hôn Santorini', prompt: 'A beautiful woman in a flowing white silk dress, enjoying the sunset from a luxurious rooftop lounge in Santorini. The view captures the iconic white buildings and blue domes, with the golden hour sun casting a warm, romantic glow.' },
      { key: 'gondola_venice', label: 'Dạo thuyền ở Venice', prompt: 'An elegant woman looking alluringly over her shoulder while riding a private gondola through the canals of Venice. The historic, romantic architecture of Venice provides a stunning backdrop. She wears a sophisticated cocktail dress.' },
      { key: 'vineyard_picnic', label: 'Picnic ở vườn nho', prompt: 'A woman with a captivating smile, dressed in a stylish summer outfit, enjoying a luxury picnic in a picturesque vineyard in Napa Valley. A gourmet spread is laid out on a blanket, with rolling hills of grapevines in the background.' },
      { key: 'desert_stargazing', label: 'Ngắm sao trên sa mạc', prompt: 'A stunning woman wrapped in a cashmere shawl, looking up at a starry night sky from a luxurious desert dome in Dubai. The ambiance is magical and serene, with glowing lanterns around her, creating an unforgettable romantic experience.' },
      { key: 'paris_balcony_coffee', label: 'Cà phê tại Paris', prompt: 'A woman in a silk robe, exuding a gentle and seductive charm, enjoys her morning coffee on a classic Parisian balcony with the Eiffel Tower visible in the distance. The scene is intimate and quintessentially romantic.' },
      { key: 'tuscany_cooking_class', label: 'Lớp học nấu ăn Tuscany', prompt: 'A radiant woman, laughing and looking playfully at the camera, participates in a private cooking class in a rustic, high-end Tuscan kitchen. The atmosphere is warm, intimate, and filled with the joy of shared experiences.' },
      { key: 'onsen_ryokan_japan', label: 'Thư giãn ở Ryokan', prompt: 'A woman with a serene and alluring expression, wearing an elegant yukata, relaxes on the veranda of a traditional Japanese ryokan, overlooking a tranquil zen garden. The atmosphere is peaceful, intimate, and deeply romantic.' },
      { key: 'yacht_date_sunset', label: 'Hoàng hôn trên du thuyền', prompt: 'A gorgeous woman in a sexy and elegant bikini, lounging on the deck of a private yacht at sunset. She is enjoying a glass of champagne. The warm colors of the sunset reflect on the water, creating a breathtakingly romantic and luxurious scene.' },
      { key: 'helicopter_date', label: 'Hẹn hò trên trực thăng', prompt: "A stunning woman, exuding confidence and excitement, stands beside a private helicopter on a helipad overlooking a dramatic coastline. She is dressed in a sophisticated and adventurous outfit, ready for a breathtaking journey." }
    ]
  },
  {
    key: 'romantic_dates',
    label: 'Hẹn hò Lãng mạn',
    concepts: [
      { key: 'private_cinema', label: 'Rạp chiếu phim riêng', prompt: 'In a luxurious private home cinema with plush velvet seats, a woman in chic, comfortable loungewear shares an intimate, happy moment. The lighting is dim and cozy, creating a feeling of exclusivity and romance.' },
      { key: 'art_gallery_private', label: 'Triển lãm nghệ thuật', prompt: 'A sophisticated woman in an avant-garde outfit, admiring a masterpiece during a private viewing at a modern art gallery. The setting is sleek and intellectual, with dramatic lighting highlighting both her and the art.' },
      { key: 'grand_ballroom_dance', label: 'Khiêu vũ ở đại sảnh', prompt: 'A breathtaking woman in a glamorous ball gown, captured in a moment of elegant dance in a grand, empty ballroom with crystal chandeliers. The scene is like a fairytale, full of opulence and romance.' },
      { key: 'luxury_car_roses', label: 'Quyến rũ trong siêu xe', prompt: 'A stunning woman in a seductive, form-fitting evening dress, sitting gracefully in the passenger seat of a luxury supercar. The car\'s interior is lavish, with leather seats and ambient lighting, creating an atmosphere of opulence and romance. She gives a captivating look towards the camera.' },
      { key: 'surprise_flower_delivery', label: 'Món quà bất ngờ', prompt: 'A beautiful woman, her face filled with surprised delight, standing in the doorway of her chic, modern apartment. She is receiving an enormous, breathtaking bouquet from an unseen admirer. She is wearing a sexy silk slip dress, and the soft morning light illuminates the scene.' },
      { key: 'intimate_dinner_date', label: 'Bữa tối lãng mạn', prompt: 'An alluring woman in a sexy, low-cut black dress, sitting at a candlelit table for two at an exclusive, high-end restaurant. She\'s smiling seductively across the table at her unseen date. The background is softly blurred, focusing on her captivating expression.' },
      { key: 'penthouse_rendezvous', label: 'Hẹn hò ở Penthouse', prompt: 'A seductive woman in a sexy lingerie set partly covered by a silk robe, standing by a floor-to-ceiling window in a luxurious penthouse hotel room overlooking a sparkling city skyline at night, hinting at a romantic encounter.' },
      { key: 'penthouse_door_surprise', label: 'Bất ngờ ngoài cửa', prompt: "A beautiful woman caught in a moment of pure surprise as she opens the door to her luxurious penthouse apartment. Before her is a massive, stunning floral arrangement, a gift from an unseen admirer. She's dressed in a chic, casual loungewear set, and the morning light floods the elegant entryway." },
      { key: 'superbike_romance', label: 'Lãng mạn trên siêu mô tô', prompt: "An edgy yet glamorous woman straddling a powerful superbike on a city street at night. An unseen person is interacting with her romantically. She's wearing a stylish leather jacket over a sexy dress." },
    ]
  },
  {
    key: 'artistic_portraits',
    label: 'Chân dung Nghệ thuật',
    concepts: [
      { key: 'flower_couture', label: 'Váy dạ hội hoa', prompt: "A high-fashion portrait of an alluring woman wearing a sexy, avant-garde couture dress designed to look like a blooming flower. The dress is made of delicate, petal-like layers of silk. She stands against a minimalist, elegant background that makes the 'flower dress' the absolute centerpiece." },
      { key: 'ethereal_flower_portrait', label: 'Đẹp tựa đóa hoa', prompt: "An ethereal and luxurious beauty shot, a close-up of a woman's flawless face. Soft, delicate elements are gently touching her skin or artfully arranged in her hair. The lighting is soft and dreamy, highlighting her perfect features and creating an angelic, flower-like beauty. Her expression is serene and captivating." }
    ]
  },
  {
    key: 'vietnam_vibes',
    label: 'Concept Việt Nam',
    concepts: [
      { key: 'hoi_an_lanterns', label: 'Phố cổ Hội An', prompt: "A beautiful woman in a traditional Vietnamese 'Áo dài' stands on an ancient bridge in Hội An at dusk, surrounded by glowing lanterns. The scene is romantic and timeless." },
      { key: 'ha_long_bay_cruise', label: 'Du thuyền Hạ Long', prompt: 'An elegant woman in chic resort wear, enjoying a glass of wine on the sundeck of a luxury cruise ship in Ha Long Bay. The iconic limestone karsts rise from the emerald water in the background during sunset.' },
      { key: 'sapa_rice_terraces', label: 'Ruộng bậc thang Sa Pa', prompt: 'A woman wearing a stylish bohemian outfit, looking out over the breathtaking terraced rice fields of Sa Pa from the balcony of a luxury mountain resort. The morning mist creates a mystical and serene atmosphere.' },
      { key: 'phu_quoc_beach', label: 'Bãi biển Phú Quốc', prompt: 'A beautiful woman in a stunning bikini relaxes on a pristine white sand beach in Phú Quốc, under the shade of a palm tree. The turquoise water is crystal clear, and the scene is one of pure tropical paradise and luxury.' },
      { key: 'da_lat_flower_garden', label: 'Vườn hoa Đà Lạt', prompt: 'A charming woman in a vintage-style dress, surrounded by a vibrant field of flowers in a garden in Đà Lạt. The atmosphere is dreamy, romantic, and reminiscent of a European spring.' },
      { key: 'hue_imperial_city', label: 'Cung đình Huế', prompt: "A graceful woman dressed as a royal noble in an intricate 'Nhật Bình' traditional dress, posing thoughtfully inside the ancient and majestic Imperial City of Huế. The architecture is grand and historic, evoking a sense of timeless elegance." },
      { key: 'ha_giang_loop_view', label: 'Cung đường Hà Giang', prompt: 'An adventurous and beautiful woman in a fashionable biker-chic outfit stands on a viewpoint along the Hà Giang Loop, with majestic mountains and winding roads behind her. The landscape is dramatic and awe-inspiring.' },
      { key: 'ninh_binh_boat_trip', label: 'Non nước Ninh Bình', prompt: 'A serene woman in a simple yet elegant white dress, sitting on a traditional sampan boat gliding through the tranquil river in Ninh Bình, surrounded by lush rice paddies and towering limestone cliffs. The scene is peaceful and poetic.' },
      { key: 'hanoi_hoan_kiem_lake', label: 'Hồ Gươm Hà Nội', prompt: "A sophisticated woman in a modern and chic Ao Dai, strolling gracefully along the edge of Hoan Kiem Lake in Hanoi during an early autumn morning. The iconic red Huc Bridge is visible in the background, creating a classic and elegant Hanoian vibe." },
      { key: 'saigon_rooftop_night', label: 'Sài Gòn về đêm', prompt: "A glamorous woman in a sparkling cocktail dress, sipping a drink at a rooftop bar with a stunning panoramic view of Ho Chi Minh City's skyline at night, with the Landmark 81 tower prominently featured. The city lights create a vibrant and luxurious backdrop." }
    ]
  }
];


export const ACCESSORIES: OptionCategory[] = [
    {
        key: 'jewelry',
        label: 'Trang sức (Cổ & Tay)',
        isMultiSelect: true,
        options: [
            { key: 'diamond_necklace', label: 'Dây chuyền kim cương', prompt: 'wearing a sparkling diamond necklace' },
            { key: 'pearl_earrings', label: 'Bông tai ngọc trai', prompt: 'wearing elegant pearl earrings' },
            { key: 'gold_bracelet', label: 'Vòng tay vàng', prompt: 'with a delicate gold bracelet on her wrist' },
            { key: 'diamond_ring', label: 'Nhẫn kim cương', prompt: 'wearing a brilliant diamond ring' },
        ],
    },
    {
        key: 'hair_accessories',
        label: 'Phụ kiện tóc (Đầu)',
        isMultiSelect: true,
        options: [
            { key: 'flower_crown', label: 'Vương miện hoa', prompt: 'wearing a beautiful flower crown' },
            { key: 'jeweled_clip', label: 'Kẹp tóc đính đá', prompt: 'with a jeweled clip in her hair' },
            { key: 'silk_headband', label: 'Băng đô lụa', prompt: 'wearing a chic silk headband' },
        ],
    },
     {
        key: 'other_accessories',
        label: 'Phụ kiện khác (Vai & Tay)',
        isMultiSelect: true,
        options: [
            { key: 'sunglasses', label: 'Kính râm hàng hiệu', prompt: 'wearing designer sunglasses' },
            { key: 'handbag', label: 'Túi xách cao cấp', prompt: 'holding a luxury handbag' },
            { key: 'silk_scarf', label: 'Khăn choàng lụa', prompt: 'with a silk scarf draped over her shoulders' },
            { key: 'gloves', label: 'Găng tay thanh lịch', prompt: 'wearing elegant gloves' },
        ],
    },
];

export const SHOOTING_OPTIONS: OptionCategory[] = [
    {
        key: 'angle',
        label: 'Góc chụp',
        isMultiSelect: false,
        options: [
            { key: 'eye_level', label: 'Ngang tầm mắt', prompt: 'eye-level shot' },
            { key: 'high_angle', label: 'Góc cao', prompt: 'high-angle shot from above' },
            { key: 'low_angle', label: 'Góc thấp', prompt: 'low-angle shot from below' },
            { key: 'close_up', label: 'Cận mặt', prompt: 'intimate close-up portrait shot' },
        ],
    },
     {
        key: 'lighting',
        label: 'Ánh sáng',
        isMultiSelect: false,
        options: [
            { key: 'natural_light', label: 'Ánh sáng tự nhiên', prompt: 'beautiful natural lighting' },
            { key: 'golden_hour', label: 'Giờ vàng', prompt: 'warm golden hour lighting' },
            { key: 'soft_light', label: 'Ánh sáng dịu', prompt: 'soft, diffused lighting' },
            { key: 'dramatic_light', label: 'Ánh sáng ấn tượng', prompt: 'dramatic lighting with strong contrast' },
            { key: 'backlight', label: 'Ánh sáng nền', prompt: 'cinematic backlight, creating a halo effect' },
        ],
    },
];


export const LOADING_QUOTES: string[] = [
    "Vẻ đẹp của nàng là một tuyệt tác.",
    "Ghi lại khoảnh khắc của sự quyến rũ và sang trọng.",
    "Nơi tình yêu và sự xa hoa gặp gỡ.",
    "Mỗi ánh nhìn là một lời mời gọi.",
    "Kiến tạo câu chuyện tình yêu của riêng bạn.",
    "Sự quyến rũ không chỉ là vẻ bề ngoài, đó là một phong thái."
];