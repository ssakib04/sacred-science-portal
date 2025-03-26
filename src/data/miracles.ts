
export interface Miracle {
  id: number;
  title: string;
  description: string;
  numericalDetails: {
    type: string;
    data: { label: string; value: number }[];
  };
  reference: string;
  category: string;
}

export const miracles: Miracle[] = [
  {
    id: 1,
    title: "Angels and Devils Balance",
    description: "The Quran mentions angels (malaika) and their opposites, the devils/satan (shaytan), exactly the same number of times, showing a perfect balance between these opposing forces.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "Angels (Malaika)", value: 88 },
        { label: "Devils (Shaytan)", value: 88 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 2,
    title: "The Iron Verse Miracle",
    description: "The chapter about Iron (Al-Hadid) is the 57th chapter in the Quran. Remarkably, the atomic number of iron is 57. Furthermore, the verse that mentions iron is the 25th verse, which corresponds to the atomic weight of iron's most stable isotope.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Surah Number", value: 57 },
        { label: "Atomic Number of Iron", value: 26 },
        { label: "Verse Mentioning Iron", value: 25 },
        { label: "Atomic Weight (Approx.)", value: 56 }
      ]
    },
    reference: "Surah Al-Hadid (57:25)",
    category: "Scientific"
  },
  {
    id: 3,
    title: "Life and Death Balance",
    description: "The words 'life' (hayat) and 'death' (mawt) are each mentioned exactly 145 times in the Quran, showing the perfect balance between these two states of existence.",
    numericalDetails: {
      type: "comparison",
      data: [
        { label: "Life (Hayat)", value: 145 },
        { label: "Death (Mawt)", value: 145 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Word Count"
  },
  {
    id: 4,
    title: "Earth and Sea Balance",
    description: "The word 'land/earth' (al-barr) is mentioned 13 times in the Quran, while 'sea' (al-bahr) is mentioned 32 times. The sum (45) represents the total, and the ratio of sea to land is 71% to 29%, which corresponds almost exactly to the actual ratio of water to land on Earth's surface.",
    numericalDetails: {
      type: "ratio",
      data: [
        { label: "Land (Al-Barr)", value: 13 },
        { label: "Sea (Al-Bahr)", value: 32 },
        { label: "Sea Percentage", value: 71 },
        { label: "Land Percentage", value: 29 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Scientific"
  },
  {
    id: 5,
    title: "Sun and Moon Cycles",
    description: "The word 'day' (yawm) is mentioned 365 times in the Quran, corresponding to the number of days in a solar year. The word 'month' (shahr) appears 12 times, corresponding to the number of months in a year.",
    numericalDetails: {
      type: "correlation",
      data: [
        { label: "Day (Yawm)", value: 365 },
        { label: "Month (Shahr)", value: 12 },
        { label: "Days in Solar Year", value: 365 },
        { label: "Months in Year", value: 12 }
      ]
    },
    reference: "Throughout the Quran",
    category: "Astronomical"
  }
];
